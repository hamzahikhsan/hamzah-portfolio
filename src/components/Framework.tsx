"use client";

import React from "react";
import { FRAMEWORK_DATA } from "../data/portfolio";
import { Clock, ArrowRight } from "lucide-react";

export const Framework: React.FC = () => {
  return (
    <section id="framework" className="border-b border-[#111111] bg-[#FBFBFB] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111111] mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-2">
              <span>[ 03 / OPERATING FRAMEWORK ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#111111] tracking-tight">
              10-DAY DESIGN-TO-CODE SPRINT
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#666666] max-w-md uppercase">
            A battle-tested production pipeline that transforms concept briefs into live, high-performing web apps.
          </p>
        </div>

        {/* 4-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FRAMEWORK_DATA.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-[#FFFFFF] border border-[#111111] flex flex-col justify-between shadow-[4px_4px_0px_0px_#111111] hover:shadow-[4px_4px_0px_0px_#F10000] hover:border-[#F10000] transition-all min-h-[340px]"
            >
              <div>
                {/* Step Top */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-4">
                  <span className="font-display text-3xl font-black text-[#111111]">
                    {step.step}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-[#F10000] font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {step.timeline}
                  </span>
                </div>

                {/* Title & Focus */}
                <h3 className="font-display text-lg font-black uppercase text-[#111111] leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="font-mono text-xs text-[#666666] mb-4">
                  {step.focus}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[#E5E5E5]">
                  <span className="font-mono text-[10px] uppercase text-[#888888] font-bold block mb-2">
                    KEY DELIVERABLES:
                  </span>
                  <ul className="space-y-1.5 font-sans-clean text-xs text-[#444444]">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="text-[#F10000] font-bold">&rsaquo;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-end text-[#111111]">
                <ArrowRight className="w-4 h-4 text-[#888888]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
