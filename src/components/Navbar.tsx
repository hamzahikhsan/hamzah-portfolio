"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Life" },
    { href: "/loves", label: "Loves" },
    { href: "/work", label: "Works" },
    { href: "/thoughts", label: "Thoughts" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-colors duration-300">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 py-5 sm:py-6 flex items-center justify-between">
        {/* Brand Monogram Mark (Left) */}
        <div className="pointer-events-auto">
          <Link
            href="/"
            data-cursor-hover="true"
            data-cursor-text="HOME"
            className="group block"
            aria-label="Hamzah Ikhsan Home"
          >
            {/* Double-line / architectural geometric monogram */}
            <svg
              width="34"
              height="34"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--text-main)] group-hover:text-[#F10000] transition-colors"
            >
              <rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 10V30M28 10V30M12 20H28" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation Links with Sliding Pill Chip (Center) */}
        <nav
          className="pointer-events-auto hidden md:flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            const isHighlighted = hoveredPath ? hoveredPath === link.href : isActive;

            return (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                data-cursor-hover="true"
                className={`relative px-4 sm:px-5 py-1.5 text-sm sm:text-base font-medium tracking-normal transition-colors duration-200 z-10 select-none ${
                  isHighlighted
                    ? "text-[var(--bg-canvas)] font-semibold"
                    : "text-[var(--text-main)] opacity-75 hover:opacity-100"
                }`}
              >
                {/* Active / Hover Sliding Pill Capsule */}
                {isHighlighted && (
                  <motion.div
                    layoutId="navbar-chip-indicator"
                    className="absolute inset-0 rounded-full bg-[var(--text-main)] -z-10 shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle Switch (Right) */}
        <div className="pointer-events-auto flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-main)] hover:text-[#F10000] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-0 top-[75px] bg-[var(--bg-canvas)] px-8 py-10 flex flex-col justify-between z-40 border-t border-[var(--text-main)]/10">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-3xl font-bold tracking-tight text-[var(--text-main)] hover:text-[#F10000] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-[var(--text-main)]/10">
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Hamzah Ikhsan // Portfolio 2026
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
