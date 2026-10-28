"use client";

import React, { useEffect, useState, useMemo, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SplashScreenProps {
  /** Force splash screen to display even if already shown in current session */
  forceShow?: boolean;
  /** Callback fired when curtain-wipe reveal finishes */
  onComplete?: () => void;
  /** Optional custom duration in ms (default: 2200ms) */
  duration?: number;
}

interface PreviewCard {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  metric: string;
  tag: string;
}

const PREVIEW_CARDS: PreviewCard[] = [
  {
    id: "01",
    code: "MAIOFFICE_AI",
    title: "MAIOFFICE: Autonomous AI Task Scribe",
    subtitle: "B2B SaaS / Product Architecture",
    metric: "SEQ: 6.1 / 7.0 • 14-DAY MVP",
    tag: "PRODUCTION_VALIDATED",
  },
  {
    id: "02",
    code: "LAJU_POS",
    title: "LAJU POS: Multi-Store Retail Ecosystem",
    subtitle: "Enterprise POS / Design Tokens",
    metric: "140+ SCREENS • 35% FASTER ENTRY",
    tag: "FIGMA_DEV_MODE",
  },
  {
    id: "03",
    code: "VENDORA_3D",
    title: "VENDORA: E-Commerce 3D Visual System",
    subtitle: "Commercial Design Asset Suite",
    metric: "5.0 GUMROAD • 4+ ASSET PACKS",
    tag: "TOKEN_ENGINE",
  },
  {
    id: "04",
    code: "DESIGN_TO_CODE",
    title: "Rapid 10-Day Production Sprints",
    subtitle: "Zero Parity Gap / Next.js 16 + Tailwind v4",
    metric: "LIGHTHOUSE 98 • 0MB NODE RUNTIME",
    tag: "SWISS_BRUTALISM",
  },
  {
    id: "05",
    code: "HAMZAH_IKHSAN",
    title: "HAMZAH IKHSAN // MVP ENGINEER",
    subtitle: "Rebel • Product Designer • Disruptor",
    metric: "100+ TRAINED • JAKARTA / REMOTE",
    tag: "SYSTEM_READY",
  },
];

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
  duration = 2200,
}) => {
  const isMounted = useSyncExternalStore(emptySubscribe, getClientMounted, getServerMounted);
  const alreadySeen = useSyncExternalStore(emptySubscribe, getSessionSeen, () => false);

  const shouldSkip = !forceShow && alreadySeen;

  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(shouldSkip);
  const [cardIndex, setCardIndex] = useState(0);

  // Notify onComplete immediately if skipped
  useEffect(() => {
    if (shouldSkip) {
      onComplete?.();
    }
  }, [shouldSkip, onComplete]);

  // Fast-flashing card rotation synced to countup
  useEffect(() => {
    if (!isMounted || isFinished || shouldSkip) return;

    const cardInterval = setInterval(() => {
      setCardIndex((prev) => (prev + 1) % PREVIEW_CARDS.length);
    }, 240);

    return () => clearInterval(cardInterval);
  }, [isMounted, isFinished, shouldSkip]);

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
        // Short mechanical pause at 100% before curtain reveal
        setTimeout(() => {
          setIsExiting(true);
          try {
            sessionStorage.setItem("hamzah_splash_seen", "true");
          } catch {
            // Ignore storage quota / private window errors
          }
        }, 280);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [isMounted, isFinished, shouldSkip, duration]);

  // Handle curtain wipe exit complete
  const handleExitComplete = () => {
    setIsFinished(true);
    onComplete?.();
  };

  // Digits for mechanical odometer columns
  const hundreds = Math.floor(progress / 100);
  const tens = Math.floor((progress % 100) / 10);
  const units = progress % 10;

  const activeCard = useMemo(() => PREVIEW_CARDS[cardIndex], [cardIndex]);

  if (!isMounted || isFinished || shouldSkip) {
    return null;
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isExiting ? (
        <motion.div
          key="wonjyou-splash"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.85,
            ease: [0.85, 0, 0.15, 1], // Signature wonjyou.com curtain-wipe cubic bezier
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#FFFFFF] text-[#111111] p-6 sm:p-10 select-none overflow-hidden"
          role="dialog"
          aria-label="Loading portfolio"
          aria-modal="true"
        >
          {/* TOP BRUTALIST HUD BAR */}
          <div className="flex items-center justify-between border-b border-[#111111] pb-4 font-mono text-[11px] sm:text-xs tracking-wider uppercase">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#F10000] inline-block animate-pulse" />
              <span className="font-bold text-[#111111]">
                HAMZAH IKHSAN // ARCHITECTURE SPRINT
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-[#666666]">
              <span>SYS_KERNEL: NEXT.JS 16.4.3</span>
              <span>TOKEN_MAP: FIGMA_V5</span>
              <span className="text-[#F10000] font-bold">MODE: BRUTALIST</span>
            </div>
            <div className="font-mono text-xs font-semibold text-[#111111]">
              [ 2026 EDITION ]
            </div>
          </div>

          {/* CENTER HERO AREA: FAST-FLASHING THUMBNAIL PREVIEW CARD */}
          <div className="flex-1 flex flex-col items-center justify-center my-6">
            <div className="w-full max-w-xl mx-auto">
              <div className="border-2 border-[#111111] bg-[#FBFBFB] p-5 sm:p-7 shadow-[6px_6px_0px_0px_#111111] relative overflow-hidden transition-all duration-100">
                {/* Hairline Grid Watermark */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 mb-4 font-mono text-[10px] sm:text-xs">
                  <span className="px-2 py-0.5 bg-[#111111] text-[#FFFFFF] font-bold tracking-widest">
                    CARD #{activeCard.id} / 05
                  </span>
                  <span className="text-[#F10000] font-bold tracking-wider">
                    {activeCard.tag}
                  </span>
                </div>

                {/* Fast-Flashing Card Visual Blueprint */}
                <div className="h-28 sm:h-36 bg-[#111111] text-[#FFFFFF] p-4 flex flex-col justify-between mb-4 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#888888]">
                    <span>BUFFER_ID: {activeCard.code}</span>
                    <span className="text-[#F10000] font-bold flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F10000] animate-ping" />
                      SYNCING
                    </span>
                  </div>
                  <div className="font-display font-black text-xl sm:text-2xl text-[#FFFFFF] tracking-tight uppercase leading-none">
                    {activeCard.title}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#AAAAAA] border-t border-[#333333] pt-2">
                    <span>{activeCard.subtitle}</span>
                    <span className="text-[#F10000] font-semibold">{activeCard.metric}</span>
                  </div>
                </div>

                {/* Live Progress Bar Indicator */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#666666]">
                    <span>INITIALIZING HIGH-IMPACT MVP ASSETS</span>
                    <span className="font-bold text-[#111111]">{progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#E5E5E5] overflow-hidden">
                    <div
                      className="h-full bg-[#F10000] transition-all duration-75 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: DUAL-STROKE "LOADING" TITLE + ROLLING ODOMETER */}
          <div className="border-t border-[#111111] pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Won J You Dual-Stroke "LOADING" Title */}
            <div className="relative leading-none select-none">
              <span className="block font-mono text-xs uppercase tracking-widest text-[#666666] mb-2 font-semibold">
                SYSTEM // INITIALIZING
              </span>

              <div className="relative inline-block font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
                {/* Base Layer: Stroke Outline Text */}
                <div
                  className="stroke-text select-none"
                  aria-hidden="true"
                >
                  LOADING
                </div>

                {/* Top Layer: Filled Red #F10000 revealed horizontally as progress counts up */}
                <div
                  className="absolute inset-0 text-[#F10000] stroke-text-red select-none pointer-events-none transition-all duration-75"
                  style={{
                    clipPath: `inset(0 ${Math.max(0, 100 - progress)}% 0 0)`,
                  }}
                  aria-hidden="true"
                >
                  LOADING
                </div>
              </div>
            </div>

            {/* MECHANICAL ROLLING ODOMETER COUNTER */}
            <div className="flex items-baseline justify-end gap-1 font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-[#F10000] leading-none select-none">
              {/* Optional Hundreds Roller (appears as 1 at 100%) */}
              {hundreds > 0 ? (
                <div className="h-[1em] overflow-hidden inline-flex flex-col">
                  <div
                    className="transition-transform duration-200 ease-out"
                    style={{ transform: `translateY(-${hundreds * 10}%)` }}
                  >
                    {[0, 1].map((d) => (
                      <div key={d} className="h-[1em] flex items-center justify-center">
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Tens Digit Roller (0 to 9) */}
              <div className="h-[1em] overflow-hidden inline-flex flex-col">
                <div
                  className="transition-transform duration-150 ease-out"
                  style={{ transform: `translateY(-${tens * 10}%)` }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                    <div key={d} className="h-[1em] flex items-center justify-center">
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Units Digit Roller (0 to 9) */}
              <div className="h-[1em] overflow-hidden inline-flex flex-col">
                <div
                  className="transition-transform duration-100 ease-out"
                  style={{ transform: `translateY(-${units * 10}%)` }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                    <div key={d} className="h-[1em] flex items-center justify-center">
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Percent Glyph */}
              <span className="text-4xl sm:text-6xl md:text-7xl font-mono text-[#F10000] ml-1">
                %
              </span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
