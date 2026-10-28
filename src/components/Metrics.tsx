"use client";

import React from "react";
import { METRICS_DATA } from "../data/portfolio";
import { Award } from "lucide-react";

export const Metrics: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 border-b border-[var(--text-main)]/15 bg-[var(--bg-canvas)]">
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[var(--text-main)]/15 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F10000] font-bold mb-2">
              <span>[ 04 / PROVEN IMPACT ]</span>
            </div>
            <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-4xl sm:text-6xl font-bold uppercase text-[var(--text-main)] tracking-tight">
              HARD METRICS &amp; TRUST
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md uppercase">
            Quantifiable benchmarks from live deployments, training programs, and commercial digital assets.
          </p>
        </div>

        {/* 4 Large Metric Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS_DATA.map((item) => (
            <div
              key={item.label}
              className="p-8 border border-[var(--text-main)]/15 flex flex-col justify-between hover:border-[#F10000] transition-colors group"
            >
              <div>
                <span className="font-['Right_Grotesk',Impact,sans-serif] text-5xl sm:text-6xl font-bold text-[#F10000] block mb-2 tracking-tight">
                  {item.value}
                </span>
                <h3 className="text-xl font-bold uppercase text-[var(--text-main)] mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--text-main)]/15 flex items-center gap-1.5 text-[10px] uppercase text-[var(--text-muted)]">
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
