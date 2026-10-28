import React from "react";
import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { NextChapter } from "../../components/motion/NextChapter";
import { Footer } from "../../components/Footer";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Thoughts & Essays — Hamzah Ikhsan",
  description:
    "Editorial essays on design-to-code velocity, design education in the AI era, and usability architecture by Hamzah Ikhsan.",
};

const ESSAYS = [
  {
    id: "velocity-as-architecture",
    title: "The 10-Day MVP: Why Velocity is an Architectural Feature",
    date: "October 2026",
    readTime: "5 min read",
    category: "Architecture & Velocity",
    excerpt:
      "Most software projects do not fail because of bad code; they fail because of delayed feedback loops. When product teams spend 6 months in committee meetings before shipping a single button, market reality moves on. Discover how unifying Figma tokens with Next.js 16 allows teams to launch production-grade MVPs in 10 days.",
    tags: ["MVP Sprint", "Velocity", "Next.js 16"],
  },
  {
    id: "designers-who-code",
    title: "Why Designers Who Code Will Dominate the AI Era",
    date: "September 2026",
    readTime: "7 min read",
    category: "Craft & Technology",
    excerpt:
      "AI models can generate 100 Figma mockups in seconds, making generic layout creation a zero-value skill. The real moat belongs to hybrid craftsmen who understand typography, spatial layout, and can immediately inspect the rendered DOM, audit state machines, and write clean TypeScript. Code literacy is no longer an optional perk—it is survival.",
    tags: ["Hybrid Designer", "Figma to Code", "AI Future"],
  },
  {
    id: "scaling-usability-maioffice",
    title: "Building MAIOFFICE: Scaling Usability to SEQ 6.1 & NPS 9.7",
    date: "August 2026",
    readTime: "6 min read",
    category: "Case Study & UX Research",
    excerpt:
      "An in-depth breakdown of how we architected the user interface for MAIOFFICE, an autonomous AI project scribe. We replaced clunky multi-step modal dialogues with contextual canvas drawers, leading to an unprecedented 6.1 out of 7.0 Single Ease Question score across enterprise beta users.",
    tags: ["MAIOFFICE", "UX Research", "Usability Benchmarks"],
  },
  {
    id: "vocational-design-education",
    title: "Teaching Design to 100+ Students: What Bootcamps Get Wrong",
    date: "July 2026",
    readTime: "8 min read",
    category: "Education & Mentorship",
    excerpt:
      "Having mentored over 100 vocational students and trainees across 5 schools and BBPVP Kemnaker, I noticed a systemic flaw: traditional curriculums teach aesthetic decorations instead of systems thinking. Here is the exact pedagogical framework I use to turn vocational students into production-ready product designers.",
    tags: ["Vocational Training", "Pedagogy", "Mentorship"],
  },
];

export default function ThoughtsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#111111]">
      <Navbar />

      <main className="flex-1">
        {/* Chapter Header */}
        <section className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-4">
              <span>[ CHAPTER 03 / EDITORIAL ESSAYS ]</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#111111] leading-[0.9]">
                  WRITING TO
                  <br />
                  <span className="stroke-text text-transparent hover:text-[#F10000] transition-colors">
                    TASTE LIFE
                  </span>
                  <br />
                  <span className="text-[#F10000]">TWICE.</span>
                </h1>
                <p className="mt-6 font-display text-xl sm:text-2xl text-[#333333] italic font-medium leading-relaxed max-w-2xl">
                  &ldquo;We write to taste life twice, in the moment and in retrospect. These essays document the frictions, breakthroughs, and principles of modern digital craft.&rdquo;
                </p>
              </div>

              <div className="lg:col-span-4 p-6 border border-[#111111] bg-[#FBFBFB] space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F10000] font-bold block">
                  THE DISPATCH
                </span>
                <p className="font-mono text-xs text-[#666666] leading-relaxed">
                  Provocative perspectives on design systems, code literacy, AI transformation, and vocational education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essays List */}
        <section className="border-b border-[#111111] bg-[#FBFBFB] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 sm:space-y-12">
              {ESSAYS.map((essay, index) => (
                <article
                  key={essay.id}
                  className="p-6 sm:p-10 border border-[#111111] bg-[#FFFFFF] shadow-[6px_6px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#F10000] hover:border-[#F10000] transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E5E5] mb-6 font-mono text-xs uppercase">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 border border-[#111111] bg-[#111111] text-[#FFFFFF] font-bold">
                        ESSAY 0{index + 1}
                      </span>
                      <span className="text-[#F10000] font-bold">{essay.category}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#888888]">
                      <span>{essay.date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {essay.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111] leading-tight mb-4 hover:text-[#F10000] transition-colors">
                    {essay.title}
                  </h2>

                  <p className="font-sans-clean text-base sm:text-lg text-[#444444] leading-relaxed mb-6">
                    {essay.excerpt}
                  </p>

                  <div className="pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {essay.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 border border-[#E5E5E5] bg-[#FBFBFB] text-[#111111]"
                        >
                          <Tag className="w-3 h-3 text-[#F10000]" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[#111111] font-bold hover:text-[#F10000] transition-colors"
                    >
                      <span>READ ESSAY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Next Chapter CTA: CONTACT */}
        <NextChapter
          href="/contact"
          chapterNumber="04"
          chapterTitle="INITIATE CONTACT"
          summary="Ready to build? Lock in your Q4 2026 sprint slot or schedule an architectural consultation."
        />
      </main>

      <Footer />
    </div>
  );
}
