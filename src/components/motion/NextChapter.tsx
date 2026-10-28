"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface NextChapterProps {
  /** Target link destination */
  href?: string;
  /** Chapter sequence index (e.g. "02", "03") */
  chapterNumber?: string;
  /** Main chapter title (e.g. "SELECTED WORKS", "CONTACT & TALK") */
  chapterTitle?: string;
  /** Short teaser description */
  summary?: string;
  /** Custom CSS class */
  className?: string;
}

export const NextChapter: React.FC<NextChapterProps> = ({
  href = "#work",
  chapterNumber = "02",
  chapterTitle = "SELECTED WORKS",
  summary = "Deep dive into autonomous AI workflows, enterprise retail POS, and 10-day MVP production sprints.",
  className = "",
}) => {
  return (
    <section className={`relative w-full overflow-hidden bg-[#FFFFFF] ${className}`}>
      <Link
        href={href}
        data-cursor-hover="true"
        data-cursor-text="EXPLORE"
        data-cursor-magnetic="true"
        className="group relative block w-full border-t border-b border-[#111111] py-16 sm:py-24 md:py-32 px-4 sm:px-8 lg:px-12 select-none overflow-hidden transition-colors duration-500"
      >
        {/* Won J You Signature Red Hover Curtain (Floods from bottom up on hover) */}
        <div
          className="absolute inset-0 z-0 bg-[#F10000] transform origin-top scale-y-0 group-hover:origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          aria-hidden="true"
        />

        {/* Ambient Hairline Grid Lines inside the banner */}
        <div
          className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
          style={{
            backgroundImage:
              "linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between">
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-[#111111] group-hover:border-[#FFFFFF]/30 pb-4 transition-colors duration-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#F10000] group-hover:bg-[#FFFFFF] transition-colors duration-400 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-[#111111] group-hover:text-[#FFFFFF] transition-colors duration-400">
                [ CHAPTER {chapterNumber} &bull; {chapterTitle} ]
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#666666] group-hover:text-[#FFFFFF]/80 transition-colors duration-400">
              <span>CONTINUE READING</span>
              <span>&rarr;</span>
            </div>
          </div>

          {/* Giant Editorial Title: NEXT (col-red -> white) & CHAPTER (stroke -> white stroke) */}
          <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6 sm:gap-10">
            <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] tracking-tighter uppercase leading-[0.82] flex flex-wrap items-baseline gap-x-4 sm:gap-x-8">
              {/* "NEXT" */}
              <span className="text-[#F10000] group-hover:text-[#FFFFFF] transition-colors duration-400">
                NEXT
              </span>

              {/* "CHAPTER" */}
              <span className="stroke-text group-hover:stroke-text-white transition-all duration-400">
                CHAPTER
              </span>
            </div>

            {/* Interactive Arrow Button Capsule */}
            <div className="shrink-0 flex items-center gap-4 mt-4 lg:mt-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#111111] group-hover:border-[#FFFFFF] bg-transparent flex items-center justify-center transition-all duration-400 group-hover:bg-[#FFFFFF] group-hover:shadow-[4px_4px_0px_0px_#111111]">
                <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-[#111111] group-hover:text-[#F10000] transform transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Bottom Subtitle / Teaser */}
          <div className="mt-8 sm:mt-12 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs sm:text-sm">
            <p className="text-[#666666] group-hover:text-[#FFFFFF]/90 max-w-xl transition-colors duration-400 uppercase tracking-wide">
              {summary}
            </p>
            <span className="font-mono text-xs text-[#F10000] group-hover:text-[#FFFFFF] font-bold tracking-widest uppercase transition-colors duration-400">
              CLICK TO NAVIGATE &bull; 0{chapterNumber}
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};
