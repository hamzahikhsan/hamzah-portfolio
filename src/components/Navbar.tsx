"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-display text-xl sm:text-2xl font-black tracking-tight text-[#111111] hover:text-[#F10000] transition-colors"
            >
              HAMZAH IKHSAN
            </Link>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#111111] bg-[#111111] text-[#FFFFFF]">
              DEV / DES
            </span>
          </div>

          {/* Availability Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-[#E5E5E5] bg-[#FBFBFB]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F10000] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F10000]"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-tight text-[#111111] font-medium">
              AVAILABLE FOR SPRINT Q4 2026
            </span>
          </div>

          {/* Navigation Links & Action */}
          <nav className="flex items-center gap-4 sm:gap-8">
            <Link
              href="#manifesto"
              className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#666666] hover:text-[#111111] hover:font-bold transition-all"
            >
              01. MANIFESTO
            </Link>
            <Link
              href="#work"
              className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#666666] hover:text-[#111111] hover:font-bold transition-all"
            >
              02. WORK
            </Link>
            <Link
              href="#framework"
              className="hidden lg:inline-block font-mono text-xs sm:text-sm uppercase tracking-wider text-[#666666] hover:text-[#111111] hover:font-bold transition-all"
            >
              03. PROCESS
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#111111] bg-[#111111] text-[#FFFFFF] hover:bg-[#F10000] hover:border-[#F10000] transition-colors font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold"
            >
              <span>TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
