"use client";

import React from "react";
import { MANIFESTO_DATA } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="border-b border-[#111111] bg-[#FBFBFB] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111111] mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-2">
              <span>[ 01 / PRINCIPLES ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#111111] tracking-tight">
              OPERATING MANIFESTO
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#666666] max-w-md uppercase">
            Six non-negotiable standards that dictate how I design, architect, and deliver digital products.
          </p>
        </div>

        {/* 6 Grid Cards Won J You Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MANIFESTO_DATA.map((item) => (
            <div
              key={item.number}
              className="group relative p-6 sm:p-8 bg-[#FFFFFF] border border-[#111111] hover:border-[#F10000] transition-all duration-300 flex flex-col justify-between min-h-[300px] shadow-[4px_4px_0px_0px_#111111] hover:shadow-[4px_4px_0px_0px_#F10000] hover:-translate-y-1"
            >
              <div>
                {/* Card Number & Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-6">
                  <span className="font-display text-2xl font-black text-[#111111] group-hover:text-[#F10000] transition-colors">
                    {item.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#111111] bg-[#FBFBFB] text-[#111111] font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-[#111111] leading-tight mb-4 group-hover:text-[#F10000] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans-clean text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Corner Accent */}
              <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between font-mono text-[11px] text-[#888888]">
                <span>HAMZAH IKHSAN &times; STUDIO</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#111111] group-hover:text-[#F10000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
