"use client";

import React from "react";
import { METRICS_DATA } from "../data/portfolio";
import { Award } from "lucide-react";

export const Metrics: React.FC = () => {
  return (
    <section className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111111] mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-2">
              <span>[ 04 / PROVEN IMPACT ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#111111] tracking-tight">
              HARD METRICS & TRUST
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#666666] max-w-md uppercase">
            Quantifiable benchmarks from live deployments, training programs, and commercial digital assets.
          </p>
        </div>

        {/* 4 Large Metric Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {METRICS_DATA.map((item) => (
            <div
              key={item.label}
              className="p-6 sm:p-8 bg-[#FBFBFB] border border-[#111111] shadow-[4px_4px_0px_0px_#111111] flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#F10000] block mb-2 tracking-tight">
                  {item.value}
                </span>
                <h3 className="font-display text-lg font-black uppercase text-[#111111] mb-2">
                  {item.label}
                </h3>
                <p className="font-sans-clean text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#888888]">
                <Award className="w-3.5 h-3.5 text-[#F10000]" />
                <span>GROUND-TRUTH VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
