"use client";

import React from "react";
import { ArrowDownRight, Terminal, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative border-b border-[#111111] bg-[#FFFFFF] overflow-hidden">
      {/* Editorial Grid Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Top Tagline / Meta */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 font-mono text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
          <span className="px-2.5 py-1 border border-[#111111] bg-[#111111] text-[#FFFFFF] font-bold">
            JAKARTA, ID / UTC+7
          </span>
          <span className="flex items-center gap-1.5 text-[#111111]">
            <Terminal className="w-4 h-4 text-[#F10000]" />
            PRODUCT DESIGN &times; FRONTEND ENGINEERING
          </span>
          <span className="hidden sm:inline-block text-[#E5E5E5]">/</span>
          <span className="hidden sm:inline-block text-[#666666]">
            SPECIALIZING IN RAPID MVP SPRINTS
          </span>
        </div>

        {/* Massive Won J You Style Main Headline */}
        <div className="space-y-2 sm:space-y-4">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#111111] uppercase leading-[0.92]">
            SHIPPING <span className="text-[#F10000]">HIGH-IMPACT</span>
            <br />
            SAAS & DIGITAL
            <br />
            PRODUCTS AT SPEED.
          </h1>
        </div>

        {/* Lead Narrative / Bio Statement */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <p className="font-sans-clean text-lg sm:text-xl md:text-2xl text-[#333333] leading-relaxed font-normal">
              I am <strong className="font-bold text-[#111111]">Hamzah Ikhsan</strong> (Aniki).
              A Product Designer and Design-to-Code MVP Engineer. I bridge the chasm between
              visionary Figma prototypes and bulletproof Next.js production systems. 
              Zero fluff. Zero generic templates. Built with Swiss editorial precision and measurable user outcomes.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-4 border border-[#111111] bg-[#FBFBFB] space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#F10000] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CORE POSITIONING</span>
              </div>
              <p className="font-mono text-xs text-[#666666] leading-normal">
                High-converting B2B SaaS interfaces, enterprise design systems, and rapid 10-day MVP builds.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#work"
                className="flex-1 inline-flex items-center justify-between px-5 py-3 border border-[#111111] bg-[#111111] text-[#FFFFFF] font-mono text-sm uppercase tracking-wider font-semibold hover:bg-[#F10000] hover:border-[#F10000] transition-colors"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#manifesto"
                className="inline-flex items-center px-5 py-3 border border-[#111111] bg-[#FFFFFF] text-[#111111] font-mono text-sm uppercase tracking-wider font-semibold hover:bg-[#FBFBFB] transition-colors"
              >
                <span>PHILOSOPHY</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Ticker / Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E5E5E5] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 font-mono text-xs uppercase">
          <div>
            <span className="text-[#888888] block">PRIMARY STACK</span>
            <span className="text-[#111111] font-bold mt-1 block">Next.js 16 / TypeScript</span>
          </div>
          <div>
            <span className="text-[#888888] block">DESIGN SYSTEM</span>
            <span className="text-[#111111] font-bold mt-1 block">Tailwind v4 / Figma Dev Mode</span>
          </div>
          <div>
            <span className="text-[#888888] block">PROVEN USABILITY</span>
            <span className="text-[#F10000] font-bold mt-1 block">SEQ 6.1 / NPS 9.7</span>
          </div>
          <div>
            <span className="text-[#888888] block">WORKSHOP REACH</span>
            <span className="text-[#111111] font-bold mt-1 block">100+ Trainees Mentored</span>
          </div>
        </div>
      </div>
    </section>
  );
};
