"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { NextChapter } from "@/components/motion/NextChapter";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const CLIENT_LOGOS = [
  { name: "Nike", src: "/assets/644fcfbbd7037704253366c8_client_nike.svg" },
  { name: "Shopify", src: "/assets/644fd226685827376c9b31be_client_shopify.svg" },
  { name: "Barnes & Noble", src: "/assets/644fcfbb8e78839d39366d71_client_bng.svg" },
  { name: "New Line Cinema", src: "/assets/644fcfbb521b6d08df9d4367_client_newline.svg" },
  { name: "Stash", src: "/assets/644fcfbbf6dc43093150536c_client_stash.svg" },
];

const TESTIMONIALS = [
  {
    quote:
      "Hamzah brings a rare combination of razor-sharp product intuition and production-ready execution. His relentless attention to typography, spatial discipline, and rapid MVP delivery transformed how we think about product craftsmanship.",
    name: "Kurt Merriweather",
    title: "VP of Strategy & Innovation",
    image: "/assets/64745f38107043aab0df1ab7_Kurt_Merriweather.webp",
  },
  {
    quote:
      "Working with Hamzah felt like having a senior design architect and a full-stack engineer wrapped into one. He doesn't just draw mockups; he ships living software that delights users.",
    name: "Eli Gratz",
    title: "Head of Product, MAIA",
    image: "/assets/644a3e1815309605ecf9a7aa_Loader_Img01.webp",
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] transition-colors duration-300">
      {/* 1. HERO SECTION (1:1 with Won J You: Z-10 Red Name, Z-20 Alpha Portrait, Z-30 Titles) */}
      <Hero />

      {/* 2. AMBIENT CONTINUOUS TICKER MARQUEE */}
      <div className="w-full overflow-hidden border-y border-[var(--text-main)]/15 py-4 bg-[var(--bg-canvas)]">
        <div className="flex whitespace-nowrap animate-ticker-left select-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center text-xs sm:text-sm font-medium tracking-widest uppercase text-[var(--text-muted)] mx-6"
            >
              <span>HAMZAH IKHSAN</span>
              <span className="mx-4 text-[#F10000]">&bull;</span>
              <span>PRODUCT DESIGNER</span>
              <span className="mx-4 text-[#F10000]">&bull;</span>
              <span>SWISS BRUTALIST</span>
              <span className="mx-4 text-[#F10000]">&bull;</span>
              <span>DESIGN-TO-CODE SPRINT</span>
              <span className="mx-4 text-[#F10000]">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. SECTION: CREATING MY OWN PATH */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 bg-[var(--bg-canvas)] transition-colors duration-300">
        <div className="max-w-[1920px] mx-auto">
          {/* Headline: CREATING MY (Red) / OWN PATH (Stroke Outline) */}
          <div className="mb-12 sm:mb-20">
            <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] font-bold uppercase tracking-tight leading-[0.85]">
              <span className="text-[#F10000]">CREATING MY.</span>
              <br />
              <span className="stroke">OWN PATH</span>
            </h2>
          </div>

          {/* Ralph Waldo Emerson Quote */}
          <div className="mb-16 sm:mb-24 flex items-start gap-4 max-w-3xl">
            <div className="w-12 h-12 shrink-0 text-[#F10000] font-serif text-5xl leading-none">
              &ldquo;
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-light italic text-[var(--text-main)] leading-snug">
                Do not go where the path may lead, go instead where there is no path and leave a trail.
              </p>
              <span className="block mt-4 text-xs sm:text-sm uppercase tracking-widest text-[var(--text-muted)]">
                &mdash; Ralph Waldo Emerson
              </span>
            </div>
          </div>

          {/* 2-Column Split: Narrative Text & Candid Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                I’m an independent designer who fell in love with digital craftsmanship, systems architecture, and the raw beauty of Swiss editorial typography.
              </p>
              <p>
                Over the past several years, I have trained over 100 students across 5 vocational bootcamps, shipped high-throughput POS interfaces, and designed AI task copilots that achieve 9.7 NPS scores.
              </p>
              <p>
                I refuse to settle for bland corporate SaaS cards or cookie-cutter templates. Great design commands attention, solves real human friction, and leaves an unmistakable signature.
              </p>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden filter grayscale contrast-115 hover:grayscale-0 transition-all duration-500">
                <img
                  src="/assets/649f9ef0e7e4dcda62914e1d_alternate_2x.webp"
                  alt="Hamzah at whiteboard sketching systems"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: CHALLENGER OF CONVENTIONAL WISDOM */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 bg-[var(--bg-canvas)] border-t border-[var(--text-main)]/15 transition-colors duration-300">
        <div className="max-w-[1920px] mx-auto">
          {/* Headline */}
          <div className="mb-16 sm:mb-24">
            <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[9.5vw] font-bold uppercase tracking-tight leading-[0.85]">
              <span className="stroke">CHALLENGER OF</span>
              <br />
              <span className="text-[var(--text-main)]">CONVENTIONAL</span>
              <br />
              <span className="text-[#F10000]">WISDOM</span>
            </h2>
          </div>

          {/* 2 Side-by-Side Candid Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="relative aspect-[4/5] w-full overflow-hidden filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500">
              <img
                src="/assets/644e5d21a2d528eb3e28c464_Chall_02.webp"
                alt="Studio process and exploration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500">
              <img
                src="/assets/644e5d21c43b9dfb29598a3e_Chall_03.webp"
                alt="Field observations and prototyping"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: LIVE BY PRINCIPLES (1:1 with Won J You: Clean List + Glyphs) */}
      <Manifesto />

      {/* 6. SECTION: EXPERIENCE YOU CAN TRUST & CLIENT LOGOS */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 bg-[var(--bg-canvas)] border-t border-[var(--text-main)]/15 transition-colors duration-300">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-12">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#F10000] font-semibold block mb-2">
              &mdash; Experience You Can Trust
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-main)]">
              Partnering with Forward-Thinking Teams
            </h2>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 items-center py-12 border-y border-[var(--text-main)]/15">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-6 opacity-60 hover:opacity-100 transition-opacity filter invert-0 dark:invert"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: TESTIMONIALS (With Red Block Feature & Slider) */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 bg-[var(--bg-canvas)] border-t border-[var(--text-main)]/15 transition-colors duration-300">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left: Testimonial Portrait with Red Backdrop */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Solid Red Block Behind Image */}
              <div
                className="absolute inset-0 bg-[#F10000] -translate-x-3 -translate-y-3 z-0"
                aria-hidden="true"
              />
              <img
                src={TESTIMONIALS[activeTestimonial].image}
                alt={TESTIMONIALS[activeTestimonial].name}
                className="relative z-10 w-full h-full object-cover filter grayscale contrast-110"
              />
            </div>
          </div>

          {/* Right: Quote, Author, and Navigation */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-xs uppercase tracking-widest text-[#F10000] font-bold">
              [ TESTIMONIAL 0{activeTestimonial + 1} / 0{TESTIMONIALS.length} ]
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-[var(--text-main)] leading-snug">
              &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-[var(--text-main)]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-xl font-bold text-[var(--text-main)]">
                  {TESTIMONIALS[activeTestimonial].name}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  {TESTIMONIALS[activeTestimonial].title}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous Testimonial"
                  className="w-12 h-12 rounded-full border border-[var(--text-main)]/30 hover:border-[#F10000] hover:text-[#F10000] flex items-center justify-center transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next Testimonial"
                  className="w-12 h-12 rounded-full border border-[var(--text-main)]/30 hover:border-[#F10000] hover:text-[#F10000] flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEXT CHAPTER CTA (Huge NEXT / CHAPTER with red flood hover) */}
      <NextChapter
        href="/work"
        chapterNumber="01"
        chapterTitle="SELECTED WORKS"
        summary="Deep dive into autonomous AI workflows, enterprise retail POS, and 10-day MVP production sprints."
      />

      {/* 9. SIGNATURE FOOTER */}
      <Footer />
    </main>
  );
}
