"use client";

import React, { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export interface CustomCursorProps {
  accentColor?: string;
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

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const targetElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      setIsVisible(true);

      if (!disableMagnetic && targetElementRef.current) {
        const rect = targetElementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
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
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
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
      {/* Dynamic Cursor with mix-blend-difference */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-sans font-bold text-[10px] uppercase tracking-wider text-black select-none pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: isHovered ? "normal" : "difference",
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 56) : 12,
          height: isHovered ? (cursorText ? 80 : 56) : 12,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? accentColor : "#FFFFFF",
        }}
        transition={{
          width: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
          height: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
          backgroundColor: { duration: 0.15 },
        }}
      >
        {isHovered && cursorText ? (
          <span className="text-white text-[11px] tracking-widest text-center px-1">
            {cursorText}
          </span>
        ) : null}
      </motion.div>
    </div>
  );
};
