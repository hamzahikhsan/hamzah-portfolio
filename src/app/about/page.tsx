import React from "react";
import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Framework } from "../../components/Framework";
import { Metrics } from "../../components/Metrics";
import { NextChapter } from "../../components/motion/NextChapter";
import { Footer } from "../../components/Footer";
import { Check, Code2, Palette, Server, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About & Story — Hamzah Ikhsan",
  description:
    "The origin story, educational impact, and technical toolkit of Hamzah Ikhsan (Aniki).",
};

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
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#111111]">
      <Navbar />

      <main className="flex-1">
        {/* Chapter Header */}
        <section className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-4">
              <span>[ CHAPTER 02 / STORY &amp; ETHOS ]</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#111111] leading-[0.9]">
                  CHALLENGER OF
                  <br />
                  <span className="stroke-text text-transparent hover:text-[#F10000] transition-colors">
                    CONVENTIONAL
                  </span>
                  <br />
                  <span className="text-[#F10000]">WISDOM.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 p-6 border border-[#111111] bg-[#FBFBFB] space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F10000] font-bold block">
                  IDENTITY &amp; ORIGIN
                </span>
                <p className="font-mono text-xs text-[#666666] leading-relaxed">
                  Hamzah Ikhsan (Aniki). Product Designer &amp; Design-to-Code MVP Engineer based in Jakarta / Bogor, Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Deep Dive */}
        <section className="border-b border-[#111111] bg-[#FBFBFB] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 sm:p-8 border border-[#111111] bg-[#FFFFFF] shadow-[6px_6px_0px_0px_#111111]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold block mb-4">
                    THE PHILOSOPHY
                  </span>
                  <blockquote className="font-display text-2xl font-black uppercase leading-snug text-[#111111]">
                    &ldquo;Code is the ultimate expression of design intent. When designers understand code, compromises disappear.&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex items-center justify-between font-mono text-xs text-[#666666]">
                    <span>HAMZAH IKHSAN</span>
                    <span>ANIKI</span>
                  </div>
                </div>

                <div className="p-6 border border-[#111111] bg-[#FFFFFF] space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#F10000] font-bold">
                    <GraduationCap className="w-4 h-4" />
                    <span>EDUCATOR IMPACT</span>
                  </div>
                  <p className="font-sans-clean text-sm text-[#444444] leading-relaxed">
                    Trained 100+ vocational students and trainees across 5 schools &amp; bootcamps in high-fidelity Figma and modern frontend engineering.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 font-sans-clean text-base sm:text-lg text-[#333333] leading-relaxed">
                <p>
                  Most designers treat their job as creating static pictures in Figma, leaving engineers to interpret and often dilute their vision. I reject that dichotomy entirely.
                </p>
                <p>
                  My foundation was built at <strong>SMK IDN Bogor</strong>, where visual communication design, 3D spatial thinking in Blender, and technical discipline merged. While my peers focused strictly on layout graphics, I dove deep into frontend code—learning TypeScript, component lifecycles, and modern CSS architecture to build working software.
                </p>
                <p>
                  At <strong>MAIA Digital</strong>, I applied this hybrid capability to <strong>MAIOFFICE</strong>, an autonomous AI-driven task and workspace scribe. By designing in tokens and writing the corresponding React/Next.js components, we cut development handoff time by 50% and achieved a <strong>6.1 / 7.0 Single Ease Question (SEQ) score</strong> across enterprise beta testers.
                </p>
                <p>
                  Beyond commercial client work, my mission is raising the standard of Indonesian digital talent. Through workshops at <strong>BBPVP Kemnaker</strong> and vocational academies, I teach young designers how to move beyond generic templates into high-taste, code-fluent engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Toolkit & Arsenal */}
        <section className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111111] mb-12">
              <div>
                <span className="font-mono text-xs uppercase text-[#F10000] font-bold block mb-2">
                  [ VERIFIED CAPABILITIES ]
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#111111]">
                  TECHNICAL ARSENAL
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#666666] max-w-sm uppercase">
                Tools and technologies deployed across daily production environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {TOOLKIT.map((block) => {
                const Icon = block.icon;
                return (
                  <div
                    key={block.category}
                    className="p-6 sm:p-8 border border-[#111111] bg-[#FBFBFB] flex flex-col justify-between shadow-[4px_4px_0px_0px_#111111]"
                  >
                    <div>
                      <div className="flex items-center gap-3 pb-4 border-b border-[#E5E5E5] mb-6">
                        <div className="p-2 border border-[#111111] bg-[#111111] text-[#FFFFFF]">
                          <Icon className="w-5 h-5 text-[#F10000]" />
                        </div>
                        <h3 className="font-display text-lg font-black uppercase text-[#111111]">
                          {block.category}
                        </h3>
                      </div>

                      <ul className="space-y-4">
                        {block.tools.map((item) => (
                          <li key={item.name} className="space-y-1">
                            <div className="flex items-center justify-between font-mono text-xs">
                              <span className="font-bold text-[#111111] flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-[#F10000]" />
                                {item.name}
                              </span>
                            </div>
                            <span className="font-mono text-[11px] text-[#666666] block pl-5">
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
      </main>

      <Footer />
    </div>
  );
}
