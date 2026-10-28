"use client";

import React from "react";
import type { Metadata } from "next";
import { Manifesto } from "@/components/Manifesto";
import { NextChapter } from "@/components/motion/NextChapter";
import { Footer } from "@/components/Footer";
import { Heart, Sparkles, Compass, Flame } from "lucide-react";

const PASSIONS = [
  {
    category: "01 // THE CRAFT",
    title: "Relentless Typography & Spatial Geometry",
    description:
      "A deep reverence for Swiss international style, grotesque letterforms, and unapologetic negative space. The web is typography before anything else.",
    tag: "Graphic Design",
  },
  {
    category: "02 // 3D & MOTION",
    title: "Spatial Prototyping & Dynamic Mechanics",
    description:
      "Creating 3D martial arts movement packs in Blender and crafting 60fps micro-interactions with Framer Motion. Motion is not decoration; it communicates intent.",
    tag: "3D / Animation",
  },
  {
    category: "03 // MENTORSHIP",
    title: "Cultivating the Next Generation of Builders",
    description:
      "Mentoring 100+ students across 5 vocational high schools and training institutes. True mastery is the ability to deconstruct complex craft and teach it with infectious passion.",
    tag: "Education",
  },
  {
    category: "04 // DISCIPLINE",
    title: "Physical Conditioning & High Agency",
    description:
      "Drawing strength and focus from martial arts and rigorous physical training. Mental clarity in product design is an extension of bodily discipline.",
    tag: "Lifestyle",
  },
];

export default function LovesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] pt-28 sm:pt-36 transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        {/* Header Ingress */}
        <div className="mb-16 sm:mb-24">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#F10000] font-semibold block mb-4">
            [ WHAT MOVES ME ]
          </span>
          <h1 className="font-['Right_Grotesk',Impact,sans-serif] text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] font-bold uppercase tracking-tight leading-[0.85]">
            <span className="text-[var(--text-main)]">LOVES &amp; </span>
            <span className="stroke">PASSIONS</span>
          </h1>
          <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-light text-[var(--text-muted)] max-w-3xl leading-snug">
            The disciplines, philosophies, and obsessions that fuel my creative engine every single day.
          </p>
        </div>

        {/* 4 Passion Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 py-16 border-t border-[var(--text-main)]/15">
          {PASSIONS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 border border-[var(--text-main)]/15 hover:border-[#F10000] transition-colors group flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
                  <span>{item.category}</span>
                  <span className="px-2 py-0.5 rounded-full border border-[var(--text-main)]/20 text-[#F10000]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] group-hover:text-[#F10000] transition-colors mb-4">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-[#F10000] font-bold">
                <span>OBSESSION LEVEL: PERMANENT</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Principles Section */}
      <Manifesto />

      {/* Next Chapter CTA */}
      <NextChapter
        href="/work"
        chapterNumber="02"
        chapterTitle="SELECTED WORKS"
        summary="Witness how these passions translate into enterprise design systems and high-throughput production software."
      />

      {/* Signature Footer */}
      <Footer />
    </main>
  );
}
