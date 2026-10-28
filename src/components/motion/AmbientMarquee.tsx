"use client";

import React from "react";

export interface AmbientMarqueeProps {
  /** Text words to rotate in marquee */
  items?: string[];
  /** Direction of ticker animation */
  direction?: "left" | "right" | "alternate";
  /** Duration of full loop in seconds (default: 32s) */
  speed?: number;
  /** Angle in degrees (e.g. -2 for subtle tilt, default: 0) */
  angle?: number;
  /** Number of stacked rows (default: 1 for banner, 3 for ambient screensaver) */
  rows?: number;
  /** Display mode: "banner" for section divider, "ambient" for background screensaver watermark */
  mode?: "banner" | "ambient";
  /** Optional container CSS class */
  className?: string;
}

const DEFAULT_ITEMS = [
  "REBEL",
  "PRODUCT DESIGNER",
  "DISRUPTOR",
  "MVP ENGINEER",
];

export const AmbientMarquee: React.FC<AmbientMarqueeProps> = ({
  items = DEFAULT_ITEMS,
  direction = "left",
  speed = 32,
  angle = 0,
  rows = 1,
  mode = "banner",
  className = "",
}) => {
  // Create an array for repeating rows
  const rowArray = Array.from({ length: Math.max(1, rows) }, (_, i) => i);

  // Repeat sequence so that translation is seamlessly continuous
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const isAmbient = mode === "ambient";

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none ${
        isAmbient
          ? "absolute inset-0 z-0 flex flex-col justify-around opacity-5 hover:opacity-10 transition-opacity duration-700"
          : "py-6 sm:py-8 border-y border-[#111111] bg-[#FFFFFF]"
      } ${className}`}
      style={{
        transform: angle !== 0 ? `rotate(${angle}deg) scale(1.08)` : undefined,
      }}
      aria-hidden="true"
    >
      {rowArray.map((rowIndex) => {
        // Alternate directions if requested
        const rowDirection =
          direction === "alternate"
            ? rowIndex % 2 === 0
              ? "left"
              : "right"
            : direction;

        const animationClass =
          rowDirection === "right"
            ? "animate-ticker-right"
            : "animate-ticker-left";

        const rowSpeed = speed * (1 + (rowIndex % 3) * 0.15); // Slight speed variation per row for natural drift

        return (
          <div
            key={rowIndex}
            className="flex whitespace-nowrap overflow-hidden"
            style={
              {
                "--ticker-duration": `${rowSpeed}s`,
              } as React.CSSProperties
            }
          >
            {/* First sequence */}
            <div className={`flex items-center shrink-0 ${animationClass}`}>
              {duplicatedItems.map((word, idx) => {
                const isRed = idx % 2 === 0;
                return (
                  <span
                    key={`seq1-${idx}`}
                    className="inline-flex items-center gap-6 sm:gap-10 mr-6 sm:mr-10 font-display font-black tracking-tighter uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none"
                  >
                    {isRed ? (
                      <span className="text-[#F10000]">{word}</span>
                    ) : (
                      <span className="stroke-text">{word}</span>
                    )}
                    <span className="text-[#111111]/30 font-mono text-xl sm:text-2xl">
                      &bull;
                    </span>
                  </span>
                );
              })}
            </div>

            {/* Second sequence for seamless wrap */}
            <div className={`flex items-center shrink-0 ${animationClass}`}>
              {duplicatedItems.map((word, idx) => {
                const isRed = idx % 2 === 0;
                return (
                  <span
                    key={`seq2-${idx}`}
                    className="inline-flex items-center gap-6 sm:gap-10 mr-6 sm:mr-10 font-display font-black tracking-tighter uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none"
                  >
                    {isRed ? (
                      <span className="text-[#F10000]">{word}</span>
                    ) : (
                      <span className="stroke-text">{word}</span>
                    )}
                    <span className="text-[#111111]/30 font-mono text-xl sm:text-2xl">
                      &bull;
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
