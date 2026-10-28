"use client";

import React from "react";
import { InteractivePortrait } from "@/components/motion/InteractivePortrait";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[680px] max-h-[1100px] flex flex-col justify-between pt-24 sm:pt-28 pb-4 overflow-hidden select-none bg-[var(--bg-canvas)] transition-colors duration-300">
      {/* Container Terkunci (Fixed Max-Width Responsive Architecture) */}
      <div className="relative z-30 max-w-[1720px] mx-auto w-full px-6 sm:px-12 flex flex-col md:flex-row justify-between items-start gap-8 pointer-events-none">
        {/* Left Column: Stacked Descriptors */}
        <div className="pointer-events-auto">
          <div className="space-y-0.5 sm:space-y-1 font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] tracking-tight">
            <div>Rebel</div>
            <div>Entrepreneur</div>
            <div>Disruptor</div>
            <div>Designer</div>
          </div>
          {/* Subtle cursor/bullet indicator below role */}
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-main)] mt-4 opacity-80" />
        </div>

        {/* Right Column: Mission Statement */}
        <div className="pointer-events-auto max-w-sm lg:max-w-md md:text-right">
          <p className="text-base sm:text-lg md:text-xl font-normal text-[var(--text-main)] leading-relaxed opacity-90">
            My passion is creating meaningful products for the world that solves real problems, delights users and exceeds expectations.
          </p>
        </div>
      </div>

      {/* Layer Z-10: Massive Red Nameplate Behind Subject */}
      <div className="absolute inset-x-0 bottom-0 z-10 w-full flex justify-center pointer-events-none overflow-hidden select-none">
        <h1
          className="font-['Right_Grotesk',Impact,sans-serif] font-bold text-[#F10000] uppercase tracking-tighter leading-[0.78] whitespace-nowrap text-center"
          style={{
            fontSize: "clamp(72px, 13.8vw, 240px)",
          }}
        >
          HAMZAH IKHSAN
        </h1>
      </div>

      {/* Layer Z-20: Framer Lorenzo Three.js Interactive Portrait (Hover Mask Reveal) */}
      <div className="absolute inset-x-0 bottom-0 top-16 sm:top-20 z-20 flex justify-center items-end pointer-events-none">
        <div className="relative pointer-events-auto w-[360px] sm:w-[480px] md:w-[560px] lg:w-[640px] xl:w-[700px] h-[72vh] sm:h-[80vh] lg:h-[86vh] flex items-end justify-center">
          <InteractivePortrait
            baseImageUrl="/assets/hamzah-formal-crop.webp"
            revealImageUrl="/assets/hamzah-casual-crop.webp"
            blobRadius={0.35}
            blobFadeSpeed={2.2}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Layer Z-25: Gradient Fade at Bottom to seamlessly blend torso into canvas */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 sm:h-36 z-25 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, var(--bg-canvas) 100%)",
        }}
      />
    </section>
  );
};
