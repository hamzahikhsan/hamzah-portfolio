import React from "react";
import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { CaseStudies } from "../../components/CaseStudies";
import { NextChapter } from "../../components/motion/NextChapter";
import { Footer } from "../../components/Footer";
import { Terminal, Layers, Sparkles, ArrowDownRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Works & Services — Hamzah Ikhsan",
  description:
    "Selected works, commercial design systems, and frontend engineering projects by Hamzah Ikhsan.",
};

const SERVICES = [
  {
    number: "01",
    title: "User Experience",
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
    title: "Design Systems & Visuals",
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
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#111111]">
      <Navbar />

      <main className="flex-1">
        {/* Chapter Header Ingress */}
        <section className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-4">
              <span>[ CHAPTER 01 / WORKS &amp; CAPABILITIES ]</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#111111] leading-[0.9]">
                  THE GOLDEN
                  <br />
                  <span className="text-[#F10000]">RULE OF UX.</span>
                </h1>
                <p className="mt-6 font-display text-xl sm:text-2xl text-[#333333] italic font-medium leading-relaxed max-w-2xl">
                  &ldquo;Treat your user the way you would want to be treated: respect their attention, eliminate unnecessary friction, and ship products that solve real problems.&rdquo;
                </p>
              </div>

              <div className="lg:col-span-4 p-6 border border-[#111111] bg-[#FBFBFB] space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F10000] font-bold block">
                  CAPABILITY MATRIX
                </span>
                <p className="font-mono text-xs text-[#666666] leading-relaxed">
                  3 core disciplines spanning product strategy, token architecture, and high-velocity frontend engineering.
                </p>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[#111111] font-bold hover:text-[#F10000] transition-colors"
                >
                  <span>JUMP TO DISCIPLINES</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Career Journey Narrative */}
        <section className="border-b border-[#111111] bg-[#FBFBFB] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs uppercase text-[#F10000] font-bold block mb-2">
                  BACKGROUND &amp; TRAJECTORY
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#111111]">
                  CAREER JOURNEY
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 font-sans-clean text-base sm:text-lg text-[#333333] leading-relaxed">
                <p>
                  My trajectory into product design began at <strong>SMK IDN Bogor</strong>, specializing in 3D &amp; Visual Communication Design. Unlike conventional designers who stay within the safety of canvas mockups, I embraced production code early on—teaching myself modern TypeScript and Next.js to understand how digital products actually compile and run.
                </p>
                <p>
                  During my tenure at <strong>MAIA Digital</strong>, I served as lead product designer and frontend slicing engineer on <strong>MAIOFFICE</strong>, driving usability scores to an SEQ of <strong>6.1 / 7.0</strong> and an NPS of <strong>9.7 / 10</strong>. Concurrently, I have trained over <strong>100+ students and trainees</strong> across 5 vocational bootcamps and BBPVP Kemnaker, mentoring the next generation of Indonesian digital craftsmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Services Disciplines */}
        <section id="services" className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111111] mb-12">
              <div>
                <span className="font-mono text-xs uppercase text-[#F10000] font-bold block mb-2">
                  [ THREE CORE DISCIPLINES ]
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#111111]">
                  SERVICES &amp; EXPERTISE
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#666666] max-w-sm uppercase">
                Integrated design and engineering services engineered to scale startups and modernize enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {SERVICES.map((srv) => (
                <div
                  key={srv.number}
                  className="border border-[#111111] bg-[#FBFBFB] p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_#111111] hover:shadow-[4px_4px_0px_0px_#F10000] hover:border-[#F10000] transition-all min-h-[420px]"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-6">
                      <span className="font-display text-3xl font-black text-[#111111]">
                        {srv.number}
                      </span>
                      {srv.number === "01" && <Layers className="w-5 h-5 text-[#F10000]" />}
                      {srv.number === "02" && <Sparkles className="w-5 h-5 text-[#F10000]" />}
                      {srv.number === "03" && <Terminal className="w-5 h-5 text-[#F10000]" />}
                    </div>

                    <h3 className="font-display text-2xl font-black uppercase text-[#111111] mb-4">
                      {srv.title}
                    </h3>
                    <p className="font-sans-clean text-sm text-[#555555] leading-relaxed mb-6">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#E5E5E5]">
                    <span className="font-mono text-[10px] uppercase text-[#888888] font-bold block mb-3">
                      CAPABILITIES INCLUDE:
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs text-[#333333]">
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

        {/* Next Chapter CTA: ABOUT */}
        <NextChapter
          href="/about"
          chapterNumber="02"
          chapterTitle="ABOUT &amp; STORY"
          summary="The origin story of Hamzah Ikhsan (Aniki), educational impact across 100+ trainees, and the technical tooling stack."
        />
      </main>

      <Footer />
    </div>
  );
}
