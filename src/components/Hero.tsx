"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 px-6 sm:px-12 pb-4 overflow-hidden select-none bg-[var(--bg-canvas)] transition-colors duration-300">
      {/* Top Left: Descriptor Stack & Top Right: Mission Statement */}
      <div className="relative z-30 max-w-[1920px] mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-8 pointer-events-none">
        {/* Left Column: Stacked Descriptors */}
        <div className="pointer-events-auto">
          <div className="space-y-1 sm:space-y-1.5 font-bold text-xl sm:text-2xl md:text-3xl text-[var(--text-main)] tracking-tight">
            <div>Rebel</div>
            <div>Entrepreneur</div>
            <div>Disruptor</div>
            <div>Designer</div>
          </div>
        </div>

        {/* Right Column: Mission Statement */}
        <div className="pointer-events-auto max-w-md md:text-right">
          <p className="text-base sm:text-lg md:text-xl font-medium text-[var(--text-main)] leading-snug">
            My passion is creating meaningful products for the world that solves real problems, delights users and exceeds expectations.
          </p>
        </div>
      </div>

      {/* Layer Z-10: Massive Red Nameplate Across the Bottom */}
      <div className="relative z-10 w-full flex justify-center pointer-events-none mt-auto overflow-hidden">
        <h1 className="font-['Right_Grotesk',Impact,sans-serif] text-[15vw] sm:text-[14.5vw] font-bold text-[#F10000] uppercase tracking-tighter leading-[0.8] whitespace-nowrap text-center">
          HAMZAH IKHSAN
        </h1>
      </div>

      {/* Layer Z-20: Cutout Portrait Standing in Front of the Name */}
      <div className="absolute inset-x-0 bottom-0 top-16 sm:top-20 z-20 flex justify-center items-end pointer-events-none">
        <div className="relative w-full max-w-4xl h-[75vh] sm:h-[85vh] lg:h-[92vh] flex items-end justify-center">
          <img
            src="/assets/64ab076614894808e85ea405_hero-alpha.webp"
            alt="Portrait of Hamzah Ikhsan"
            className="h-full w-auto max-w-full object-contain object-bottom filter contrast-105"
          />
        </div>
      </div>

      {/* Layer Z-25: Gradient Fade at Bottom to seamlessly blend torso into canvas */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 z-25 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, var(--bg-canvas) 100%)",
        }}
      />
    </section>
  );
};
