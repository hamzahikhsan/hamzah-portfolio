"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SplashScreenProps {
  forceShow?: boolean;
  onComplete?: () => void;
  duration?: number;
}

function emptySubscribe() {
  return () => {};
}

function getClientMounted() {
  return true;
}

function getServerMounted() {
  return false;
}

function getSessionSeen() {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem("hamzah_splash_seen") === "true";
  } catch {
    return false;
  }
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  forceShow = false,
  onComplete,
  duration = 2000,
}) => {
  const isMounted = useSyncExternalStore(emptySubscribe, getClientMounted, getServerMounted);
  const alreadySeen = useSyncExternalStore(emptySubscribe, getSessionSeen, () => false);

  const shouldSkip = !forceShow && alreadySeen;

  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(shouldSkip);

  // Notify onComplete immediately if skipped
  useEffect(() => {
    if (shouldSkip) {
      onComplete?.();
    }
  }, [shouldSkip, onComplete]);

  // Non-linear mechanical odometer countup
  useEffect(() => {
    if (!isMounted || isFinished || shouldSkip) return;

    const startTime = performance.now();

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Nonlinear ease (starts deliberate, accelerates in middle, lands precisely on 100)
      const eased =
        rawProgress < 0.5
          ? 2 * rawProgress * rawProgress
          : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;

      const currentCount = Math.floor(eased * 100);
      setProgress(currentCount);

      if (rawProgress < 1) {
        requestAnimationFrame(frame);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          try {
            sessionStorage.setItem("hamzah_splash_seen", "true");
          } catch {}
        }, 300);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [isMounted, isFinished, shouldSkip, duration]);

  const handleExitComplete = () => {
    setIsFinished(true);
    onComplete?.();
  };

  if (!isMounted || isFinished || shouldSkip) {
    return null;
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          key="wonjyou-splash"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.85,
            ease: [0.85, 0, 0.15, 1],
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#000000] text-[#FFFFFF] select-none overflow-hidden"
          role="dialog"
          aria-label="Loading portfolio"
          aria-modal="true"
        >
          {/* Top-left: Minimalist LOADING text */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 z-30">
            <span className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase text-[#FFFFFF] font-medium">
              LOADING
            </span>
          </div>

          {/* Centerpiece: Massive Tilted Diagonal Display Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
            <div className="transform -rotate-[18deg] scale-110 sm:scale-125 md:scale-140 lg:scale-150 whitespace-nowrap select-none">
              <h1 className="font-['Right_Grotesk',Impact,sans-serif] text-[18vw] sm:text-[16vw] font-bold tracking-tight uppercase leading-none">
                <span className="text-[#F10000]">HAMZAH </span>
                <span
                  style={{
                    WebkitTextStroke: "2px #F10000",
                    color: "transparent",
                  }}
                >
                  IKHSAN
                </span>
              </h1>
            </div>
          </div>

          {/* Overlapping Polaroid Photo Cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            {/* Card 1: Polaroid tilted right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 8 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute w-44 sm:w-56 md:w-64 bg-[#FFFFFF] p-2.5 pb-8 shadow-2xl transform translate-x-12 sm:translate-x-20 -translate-y-8 sm:-translate-y-12"
            >
              <img
                src="/assets/644a3e18d6b38e61798530cb_Loader_Img01.webp"
                alt="Workspace candid"
                className="w-full h-auto object-cover grayscale contrast-125"
              />
            </motion.div>

            {/* Card 2: Polaroid tilted left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -10 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute w-44 sm:w-56 md:w-64 bg-[#FFFFFF] p-2.5 pb-8 shadow-2xl transform -translate-x-16 sm:-translate-x-24 translate-y-6 sm:translate-y-8"
            >
              <img
                src="/assets/644a3e18b49983f68d6ed775_Loader_Img02.webp"
                alt="Design session"
                className="w-full h-auto object-cover grayscale contrast-125"
              />
            </motion.div>
          </div>

          {/* Bottom Area: Mechanical Odometer Percentage */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-30 flex items-baseline gap-2">
            <span className="font-['Right_Grotesk',Impact,sans-serif] text-5xl sm:text-7xl font-bold text-[#F10000] tracking-tighter tabular-nums">
              {progress < 10 ? `0${progress}` : progress}
            </span>
            <span className="font-['Right_Grotesk',Impact,sans-serif] text-2xl sm:text-4xl font-bold text-[#F10000]">
              %
            </span>
          </div>

          {/* Subtle bottom left indicator */}
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-30 hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F10000] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase">
              HAMZAH IKHSAN // PORTFOLIO 2026
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
