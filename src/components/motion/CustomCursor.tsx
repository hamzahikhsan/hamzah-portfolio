"use client";

import React, { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export interface CustomCursorProps {
  /** Optional custom accent color (default: #F10000) */
  accentColor?: string;
  /** Disable magnetic snapping effect */
  disableMagnetic?: boolean;
}

function subscribeToMediaChange(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(pointer: fine)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getPointerSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches && !("ontouchstart" in window);
}

function getServerPointerSnapshot(): boolean {
  return false;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  accentColor = "#F10000",
  disableMagnetic = false,
}) => {
  const isFinePointer = useSyncExternalStore(
    subscribeToMediaChange,
    getPointerSnapshot,
    getServerPointerSnapshot
  );

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lerp / spring physics for outer ring
  const springConfig = { damping: 25, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Magnetic attraction ref
  const targetElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      setIsVisible((prev) => (prev ? prev : true));

      // Check magnetic snap target
      if (!disableMagnetic && targetElementRef.current) {
        const rect = targetElementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // 35% magnetic pull towards element center
        targetX = targetX + (centerX - targetX) * 0.35;
        targetY = targetY + (centerY - targetY) * 0.35;
      }

      mouseX.set(targetX);
      mouseY.set(targetY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest<HTMLElement>(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover], [data-cursor-text], [data-cursor-magnetic]"
      );

      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor-text");
        setCursorText(text || null);

        if (interactive.hasAttribute("data-cursor-magnetic")) {
          targetElementRef.current = interactive;
        } else {
          targetElementRef.current = null;
        }
      } else {
        setIsHovered(false);
        setCursorText(null);
        targetElementRef.current = null;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
      setCursorText(null);
      targetElementRef.current = null;
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [disableMagnetic, isFinePointer, mouseX, mouseY]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer Spring Follower Ring / Expanded Accent Red Bubble */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-mono font-bold text-[10px] uppercase tracking-wider text-white select-none pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 76 : 56) : 32,
          height: isHovered ? (cursorText ? 76 : 56) : 32,
          opacity: isVisible ? (isHovered ? 0.95 : 0.6) : 0,
          backgroundColor: isHovered ? accentColor : "transparent",
          border: isHovered
            ? `2px solid ${accentColor}`
            : "1px solid #111111",
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          width: { duration: 0.22, ease: [0.25, 1, 0.5, 1] },
          height: { duration: 0.22, ease: [0.25, 1, 0.5, 1] },
          backgroundColor: { duration: 0.18 },
          border: { duration: 0.18 },
          scale: { duration: 0.1 },
        }}
      >
        {isHovered && cursorText ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-white text-[10px] tracking-widest text-center px-1"
          >
            {cursorText}
          </motion.span>
        ) : null}
      </motion.div>

      {/* Center Precise Dot (Instant Tracking) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 6 : 8,
          height: isHovered ? 6 : 8,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? "#FFFFFF" : accentColor,
          scale: isClicking ? 1.4 : 1,
        }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
        }}
      />
    </div>
  );
};
