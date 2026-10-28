"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface NextChapterProps {
  href?: string;
  chapterNumber?: string;
  chapterTitle?: string;
  summary?: string;
  className?: string;
}

export const NextChapter: React.FC<NextChapterProps> = ({
  href = "/work",
  chapterNumber = "01",
  chapterTitle = "SELECTED WORKS",
  summary = "Explore live case studies, systems architecture, and 10-day MVP production sprints.",
  className = "",
}) => {
  return (
    <section className={`relative w-full overflow-hidden bg-[var(--bg-canvas)] transition-colors duration-300 ${className}`}>
      <Link
        href={href}
        data-cursor-hover="true"
        data-cursor-text="EXPLORE"
        data-cursor-magnetic="true"
        className="group relative block w-full border-t border-[var(--text-main)]/15 py-20 sm:py-32 px-6 sm:px-12 select-none overflow-hidden transition-colors duration-500"
      >
        {/* Signature Red Hover Curtain */}
        <div
          className="absolute inset-0 z-0 bg-[#F10000] transform origin-top scale-y-0 group-hover:origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1920px] mx-auto flex flex-col justify-between">
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-[var(--text-main)]/15 group-hover:border-white/30 pb-4 transition-colors duration-300">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#F10000] group-hover:bg-white transition-colors duration-300 animate-pulse" />
              <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[var(--text-main)] group-hover:text-white transition-colors duration-300">
                [ CHAPTER {chapterNumber} &bull; {chapterTitle} ]
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--text-muted)] group-hover:text-white/80 transition-colors duration-300">
              <span>CONTINUE READING</span>
              <span>&rarr;</span>
            </div>
          </div>

          {/* Giant Editorial Title: NEXT (solid red) & CHAPTER (stroke outline) */}
          <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6 sm:gap-10">
            <div className="font-['Right_Grotesk',Impact,sans-serif] font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[11vw] tracking-tighter uppercase leading-[0.82] flex flex-wrap items-baseline gap-x-4 sm:gap-x-8">
              <span className="text-[#F10000] group-hover:text-white transition-colors duration-300">
                NEXT
              </span>
              <span className="stroke group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_#ffffff] transition-all duration-300">
                CHAPTER
              </span>
            </div>

            {/* Interactive Arrow Button */}
            <div className="shrink-0 flex items-center gap-4 mt-4 lg:mt-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-[var(--text-main)]/30 group-hover:border-white bg-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--text-main)] group-hover:text-[#F10000] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Bottom Subtitle / Teaser */}
          <div className="mt-8 sm:mt-12 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm">
            <p className="text-[var(--text-muted)] group-hover:text-white/90 max-w-xl transition-colors duration-300 uppercase tracking-wide">
              {summary}
            </p>
            <span className="text-xs text-[#F10000] group-hover:text-white font-bold tracking-widest uppercase transition-colors duration-300">
              CLICK TO NAVIGATE &bull; 0{chapterNumber}
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};
