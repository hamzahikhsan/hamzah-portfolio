"use client";

import React from "react";
import { FRAMEWORK_DATA } from "../data/portfolio";
import { Clock, ArrowRight } from "lucide-react";

export const Framework: React.FC = () => {
  return (
    <section id="framework" className="py-20 sm:py-28 px-6 sm:px-12 border-b border-[var(--text-main)]/15 bg-[var(--bg-canvas)]">
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[var(--text-main)]/15 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F10000] font-bold mb-2">
              <span>[ 03 / OPERATING FRAMEWORK ]</span>
            </div>
            <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-4xl sm:text-6xl font-bold uppercase text-[var(--text-main)] tracking-tight">
              10-DAY DESIGN-TO-CODE SPRINT
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md uppercase">
            A battle-tested production pipeline that transforms concept briefs into live, high-performing web apps.
          </p>
        </div>

        {/* 4-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FRAMEWORK_DATA.map((step) => (
            <div
              key={step.step}
              className="p-8 border border-[var(--text-main)]/15 flex flex-col justify-between hover:border-[#F10000] transition-colors min-h-[360px] group"
            >
              <div>
                {/* Step Top */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--text-main)]/15 mb-6">
                  <span className="font-['Right_Grotesk',Impact,sans-serif] text-3xl font-bold text-[var(--text-main)] group-hover:text-[#F10000] transition-colors">
                    {step.step}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#F10000] font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {step.timeline}
                  </span>
                </div>

                {/* Title & Focus */}
                <h3 className="text-xl font-bold uppercase text-[var(--text-main)] leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-6">
                  {step.focus}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[var(--text-main)]/15">
                  <span className="text-[10px] uppercase text-[var(--text-muted)] font-bold block mb-2">
                    KEY DELIVERABLES:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--text-main)]">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="text-[#F10000] font-bold">&rsaquo;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--text-main)]/15 flex items-center justify-end">
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#F10000] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
