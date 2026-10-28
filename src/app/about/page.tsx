"use client";

import React from "react";
import { Framework } from "@/components/Framework";
import { Metrics } from "@/components/Metrics";
import { NextChapter } from "@/components/motion/NextChapter";
import { Footer } from "@/components/Footer";
import { Check, Code2, Palette, Server, GraduationCap } from "lucide-react";

const TOOLKIT = [
  {
    category: "Product & UI/UX Design",
    icon: Palette,
    tools: [
      { name: "Figma (Variables & Dev Mode)", level: "Production Master" },
      { name: "Design System Architecture", level: "Enterprise Grade" },
      { name: "Blender 3D Modeling", level: "Commercial Assets" },
      { name: "Usability Testing (SEQ / SUS)", level: "Quantitative Benchmark" },
    ],
  },
  {
    category: "Frontend & Code Execution",
    icon: Code2,
    tools: [
      { name: "Next.js 16 & App Router", level: "Production Ready" },
      { name: "TypeScript Strict Mode", level: "Type-Safe Systems" },
      { name: "Tailwind CSS v4 & PostCSS", level: "Pixel-Perfect Layouts" },
      { name: "Framer Motion & Micro-interactions", level: "Tactile Motion" },
    ],
  },
  {
    category: "Infrastructure & Systems",
    icon: Server,
    tools: [
      { name: "Nginx 1.24 Hardened Reverse Proxy", level: "Static SSG Serving" },
      { name: "Linux / Ubuntu Server CLI", level: "Headless Sysadmin" },
      { name: "Git Workflow & Branching", level: "Clean Version Control" },
      { name: "Zero-Overhead Edge Deployment", level: "Sub-Second TTI" },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] pt-28 sm:pt-36 transition-colors duration-300">
      {/* Chapter Header */}
      <section className="px-6 sm:px-12 pb-16 sm:pb-24 border-b border-[var(--text-main)]/15">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#F10000] font-bold mb-6">
            <span>[ CHAPTER 02 / STORY &amp; ETHOS ]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-['Right_Grotesk',Impact,sans-serif] text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9]">
                <span className="stroke">CHALLENGER OF </span>
                <br />
                <span className="text-[var(--text-main)]">CONVENTIONAL </span>
                <br />
                <span className="text-[#F10000]">WISDOM.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 p-8 border border-[var(--text-main)]/15 space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#F10000] font-bold block">
                IDENTITY &amp; ORIGIN
              </span>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Hamzah Ikhsan (Aniki). Product Designer &amp; Design-to-Code MVP Engineer based in Jakarta / Bogor, Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Deep Dive */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 border-b border-[var(--text-main)]/15">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 border border-[var(--text-main)]/15">
                <span className="text-xs uppercase tracking-widest text-[#F10000] font-bold block mb-4">
                  THE PHILOSOPHY
                </span>
                <blockquote className="font-['Right_Grotesk',Impact,sans-serif] text-2xl sm:text-3xl font-bold uppercase leading-snug text-[var(--text-main)]">
                  &ldquo;Code is the ultimate expression of design intent. When designers understand code, compromises disappear.&rdquo;
                </blockquote>
                <div className="mt-6 pt-6 border-t border-[var(--text-main)]/15 flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>HAMZAH IKHSAN</span>
                  <span>ANIKI</span>
                </div>
              </div>

              <div className="p-8 border border-[var(--text-main)]/15 space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase text-[#F10000] font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATOR IMPACT</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Trained 100+ vocational students and trainees across 5 schools &amp; bootcamps in high-fidelity Figma and modern frontend engineering.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                Most designers treat their job as creating static pictures in Figma, leaving engineers to interpret and often dilute their vision. I reject that dichotomy entirely.
              </p>
              <p>
                My foundation was built at <strong className="text-[var(--text-main)]">SMK IDN Bogor</strong>, where visual communication design, 3D spatial thinking in Blender, and technical discipline merged. While my peers focused strictly on layout graphics, I dove deep into frontend code—learning TypeScript, component lifecycles, and modern CSS architecture to build working software.
              </p>
              <p>
                At <strong className="text-[var(--text-main)]">MAIA Digital</strong>, I applied this hybrid capability to <strong className="text-[var(--text-main)]">MAIOFFICE</strong>, an autonomous AI-driven task and workspace scribe. By designing in tokens and writing the corresponding React/Next.js components, we cut development handoff time by 50% and achieved a <strong className="text-[var(--text-main)]">6.1 / 7.0 Single Ease Question (SEQ) score</strong> across enterprise beta testers.
              </p>
              <p>
                Beyond commercial client work, my mission is raising the standard of Indonesian digital talent. Through workshops at <strong className="text-[var(--text-main)]">BBPVP Kemnaker</strong> and vocational academies, I teach young designers how to move beyond generic templates into high-taste, code-fluent engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 border-b border-[var(--text-main)]/15">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[var(--text-main)]/15 mb-12">
            <div>
              <span className="text-xs uppercase text-[#F10000] font-bold block mb-2">
                [ VERIFIED CAPABILITIES ]
              </span>
              <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-4xl sm:text-6xl font-bold uppercase text-[var(--text-main)]">
                TECHNICAL ARSENAL
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm uppercase">
              Tools and technologies deployed across daily production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOOLKIT.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.category}
                  className="p-8 border border-[var(--text-main)]/15 flex flex-col justify-between hover:border-[#F10000] transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-[var(--text-main)]/15 mb-6">
                      <div className="p-2 border border-[var(--text-main)]/20 text-[#F10000]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-['Right_Grotesk',Impact,sans-serif] text-xl font-bold uppercase text-[var(--text-main)]">
                        {block.category}
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {block.tools.map((item) => (
                        <li key={item.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[var(--text-main)] flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#F10000]" />
                              {item.name}
                            </span>
                          </div>
                          <span className="text-[11px] text-[var(--text-muted)] block pl-5">
                            {item.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operating Framework */}
      <Framework />

      {/* Hard Metrics */}
      <Metrics />

      {/* Next Chapter CTA: THOUGHTS */}
      <NextChapter
        href="/thoughts"
        chapterNumber="03"
        chapterTitle="THOUGHTS &amp; ESSAYS"
        summary="Editorial essays on why speed is an architectural feature, code literacy for designers, and scalable usability metrics."
      />

      {/* Signature Footer */}
      <Footer />
    </main>
  );
}
