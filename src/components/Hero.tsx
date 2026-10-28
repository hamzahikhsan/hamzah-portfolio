"use client";

import React, { useEffect, useState } from "react";
import { InteractivePortrait } from "@/components/motion/InteractivePortrait";

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-[var(--bg-canvas)] transition-colors duration-300"
      style={{ minHeight: "100svh" }}
    >
      {/* Z-30: Top row — role descriptors (left) + mission (right)
          1:1 Won J You .hero__title left, .hero__descr right
          body font-size:1vw → 1em = 1vw at WJY */}
      <div className="relative z-30 max-w-[1720px] mx-auto w-full px-6 sm:px-12 pt-24 sm:pt-28 flex flex-col md:flex-row justify-between items-start gap-6 pointer-events-none">
        <div className="pointer-events-auto">
          <div
            className="font-bold uppercase text-[var(--text-main)] leading-[1.05]"
            style={{ fontSize: "clamp(18px, 2.4vw, 42px)", letterSpacing: "-0.01em" }}
          >
            <div>Rebel</div>
            <div>Entrepreneur</div>
            <div>Disruptor</div>
            <div>Designer</div>
          </div>
        </div>
        <div
          className="pointer-events-auto md:text-right"
          style={{ maxWidth: "clamp(200px, 22vw, 400px)" }}
        >
          <p
            className="font-normal text-[var(--text-main)] leading-snug opacity-90"
            style={{ fontSize: "clamp(13px, 1.35vw, 22px)" }}
          >
            My passion is creating meaningful products for the world that solves
            real problems, delights users and exceeds expectations.
          </p>
        </div>
      </div>

      {/* Z-20: Interactive portrait — ABOVE the red nameplate
          Won J You: .hero__img z-index:2; position:absolute; top:0; height:110vh
          Portrait is bottom-aligned inside full-height container */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 flex justify-center items-end pointer-events-none"
        style={{ top: 0 }}
      >
        <div
          className="relative pointer-events-auto h-full flex items-end justify-center"
          style={{ width: "clamp(280px, 36vw, 660px)" }}
        >
          <InteractivePortrait
            baseImageUrl="/assets/hamzah-formal-crop.webp"
            revealImageUrl="/assets/hamzah-casual-crop.webp"
            blobRadius={0.35}
            blobFadeSpeed={2.2}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Z-10: Giant red name SVG — BEHIND portrait
          Won J You: .hero__name { bottom:-3.89em; width:100vw; z-index:1 }
          .f-750 { font-size:51.6em (=51.6vw); line-height:0.8; letter-spacing:-0.018em }
          SVG textLength="1000" on viewBox 1000-wide with preserveAspectRatio="none"
          makes text fill 100% viewport width at every zoom level exactly like WJY */}
      <div
        className="absolute inset-x-0 z-10 pointer-events-none"
        style={{ bottom: "-0.06em" }}
      >
        <svg
          width="100%"
          viewBox="0 0 1000 165"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="HAMZAH IKHSAN"
          role="heading"
          aria-level={1}
          style={{ display: "block", overflow: "visible" }}
        >
          <text
            x="2"
            y="148"
            textLength="996"
            lengthAdjust="spacingAndGlyphs"
            fill="#F10000"
            fontFamily="'Right Grotesk', 'PPRightGrotesk-TallBold', Impact, 'Arial Black', sans-serif"
            fontWeight="800"
            fontSize="160"
            letterSpacing="-3"
          >
            HAMZAH IKHSAN
          </text>
        </svg>
      </div>

      {/* Z-25: Bottom gradient fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-25 pointer-events-none"
        style={{
          height: "18vh",
          backgroundImage: "linear-gradient(to bottom, transparent 0%, var(--bg-canvas) 100%)",
        }}
      />
    </section>
  );
};
