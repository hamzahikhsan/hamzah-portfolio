"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "00. HOME" },
    { href: "/work", label: "01. WORKS" },
    { href: "/about", label: "02. ABOUT" },
    { href: "/thoughts", label: "03. THOUGHTS" },
    { href: "/contact", label: "04. CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              data-cursor-hover="true"
              data-cursor-text="HAMZAH"
              className="font-display text-xl sm:text-2xl font-black tracking-tight text-[#111111] hover:text-[#F10000] transition-colors"
            >
              HAMZAH IKHSAN
            </Link>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#111111] bg-[#111111] text-[#FFFFFF]">
              DEV / DES
            </span>
          </div>

          {/* Availability Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 border border-[#E5E5E5] bg-[#FBFBFB]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F10000] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F10000]"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-tight text-[#111111] font-medium">
              AVAILABLE FOR SPRINT Q4 2026
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor-hover="true"
                  className={`font-mono text-xs lg:text-sm uppercase tracking-wider transition-all relative py-1 ${
                    isActive
                      ? "text-[#F10000] font-bold"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F10000]" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              data-cursor-hover="true"
              data-cursor-text="TALK"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#111111] bg-[#111111] text-[#FFFFFF] hover:bg-[#F10000] hover:border-[#F10000] transition-colors font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-[2px_2px_0px_0px_#111111]"
            >
              <span>TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-2.5 py-1 border border-[#111111] bg-[#111111] text-[#FFFFFF] font-mono text-xs uppercase tracking-wider font-semibold"
            >
              TALK
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#111111] text-[#111111] hover:bg-[#FBFBFB] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#111111] bg-[#FFFFFF] px-4 py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-mono text-sm uppercase tracking-wider py-2 border-b border-[#E5E5E5] ${
                  isActive ? "text-[#F10000] font-bold" : "text-[#111111]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[#666666]">
              <span className="w-2 h-2 rounded-full bg-[#F10000]"></span>
              <span>AVAILABLE FOR SPRINT Q4 2026</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
