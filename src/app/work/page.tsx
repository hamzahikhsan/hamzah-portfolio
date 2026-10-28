"use client";

import React from "react";
import { CaseStudies } from "@/components/CaseStudies";
import { NextChapter } from "@/components/motion/NextChapter";
import { Footer } from "@/components/Footer";
import { Terminal, Layers, Sparkles, ArrowDownRight } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    title: "User Experience Architecture",
    tags: [
      "User Research & Journey Mapping",
      "Information Architecture",
      "Wireframing & Flow Design",
      "Single Ease Question (SEQ) Testing",
      "Interactive High-Fidelity Prototyping",
    ],
    description:
      "Transforming complex workflows into effortless interfaces. Every decision is measured against task completion speed and verified user satisfaction.",
  },
  {
    number: "02",
    title: "Design Systems & Tokenomics",
    tags: [
      "Figma Variables & Design Tokens",
      "Component Architecture (Atomic)",
      "Dark / Light Adaptive Systems",
      "3D Asset Design & Blender Renders",
      "Figma Dev Mode Handoff Specs",
    ],
    description:
      "Building scalable digital foundations that eliminate designer-to-developer friction. 200+ battle-tested components designed for rapid reuse.",
  },
  {
    number: "03",
    title: "Frontend & MVP Engineering",
    tags: [
      "Next.js 16 App Router & SSG",
      "TypeScript Strict Type Safety",
      "Tailwind CSS v4 Precision Layouts",
      "Zero-Overhead Static Deployments",
      "10-Day Production Sprints",
    ],
    description:
      "Bridging the chasm between design files and live code. Production-ready web applications deployed with sub-second performance and hardened Nginx infra.",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] pt-28 sm:pt-36 transition-colors duration-300">
      {/* Chapter Header Ingress */}
      <section className="px-6 sm:px-12 pb-16 sm:pb-24 border-b border-[var(--text-main)]/15">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#F10000] font-bold mb-6">
            <span>[ CHAPTER 01 / WORKS &amp; CAPABILITIES ]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-['Right_Grotesk',Impact,sans-serif] text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9]">
                <span className="text-[var(--text-main)]">THE GOLDEN </span>
                <br />
                <span className="text-[#F10000]">RULE OF UX.</span>
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-[var(--text-muted)] italic font-normal leading-relaxed max-w-2xl">
                &ldquo;Treat your user the way you would want to be treated: respect their attention, eliminate unnecessary friction, and ship products that solve real problems.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 p-8 border border-[var(--text-main)]/15 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#F10000] font-bold block">
                CAPABILITY MATRIX
              </span>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                3 core disciplines spanning product strategy, token architecture, and high-velocity frontend engineering.
              </p>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs uppercase text-[var(--text-main)] font-bold hover:text-[#F10000] transition-colors pt-2"
              >
                <span>JUMP TO DISCIPLINES</span>
                <ArrowDownRight className="w-3.5 h-3.5 text-[#F10000]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Services Disciplines */}
      <section id="services" className="py-20 sm:py-28 px-6 sm:px-12 border-b border-[var(--text-main)]/15">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[var(--text-main)]/15 mb-12">
            <div>
              <span className="text-xs uppercase text-[#F10000] font-bold block mb-2">
                [ THREE CORE DISCIPLINES ]
              </span>
              <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-4xl sm:text-6xl font-bold uppercase text-[var(--text-main)]">
                SERVICES &amp; EXPERTISE
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm uppercase">
              Integrated design and engineering services engineered to scale startups and modernize enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.number}
                className="border border-[var(--text-main)]/15 p-8 flex flex-col justify-between hover:border-[#F10000] transition-colors min-h-[420px] group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--text-main)]/15 mb-6">
                    <span className="font-['Right_Grotesk',Impact,sans-serif] text-3xl font-bold text-[var(--text-main)] group-hover:text-[#F10000] transition-colors">
                      {srv.number}
                    </span>
                    {srv.number === "01" && <Layers className="w-5 h-5 text-[#F10000]" />}
                    {srv.number === "02" && <Sparkles className="w-5 h-5 text-[#F10000]" />}
                    {srv.number === "03" && <Terminal className="w-5 h-5 text-[#F10000]" />}
                  </div>

                  <h3 className="text-2xl font-bold uppercase text-[var(--text-main)] mb-4">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--text-main)]/15">
                  <span className="text-[10px] uppercase text-[var(--text-muted)] font-bold block mb-3">
                    CAPABILITIES INCLUDE:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--text-main)]">
                    {srv.tags.map((tag) => (
                      <li key={tag} className="flex items-start gap-1.5">
                        <span className="text-[#F10000] font-bold">&rsaquo;</span>
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works Component */}
      <CaseStudies />

      {/* Next Chapter CTA: THOUGHTS */}
      <NextChapter
        href="/thoughts"
        chapterNumber="03"
        chapterTitle="THOUGHTS &amp; ESSAYS"
        summary="Essays on UX ethics, single ease questions, design token systems, and rapid prototyping workflows."
      />

      {/* Signature Footer */}
      <Footer />
    </main>
  );
}
