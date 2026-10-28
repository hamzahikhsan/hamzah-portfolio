import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AmbientMarquee } from "../components/motion/AmbientMarquee";
import { Manifesto } from "../components/Manifesto";
import { NextChapter } from "../components/motion/NextChapter";
import { Footer } from "../components/Footer";
import { ArrowUpRight, Sparkles, Award, Quote } from "lucide-react";
import Link from "next/link";

const ECOSYSTEM_PARTNERS = [
  { name: "MAIA DIGITAL", desc: "AI Product Suite" },
  { name: "BBPVP KEMNAKER", desc: "Vocational Training" },
  { name: "SMK IDN BOGOR", desc: "Design & Tech Academy" },
  { name: "LOVABLE ENGINE", desc: "AI Frontend Builder" },
  { name: "GUMROAD CREATOR", desc: "Commercial Storefront" },
  { name: "FIGMA DEV MODE", desc: "Tokens & Auto-Layout" },
  { name: "NEXT.JS 16", desc: "SSG & App Router" },
  { name: "TAILWIND CSS V4", desc: "Design System AST" },
];

const TESTIMONIALS = [
  {
    quote:
      "Hamzah has a rare blend of relentless aesthetic taste and real-world frontend execution. His work on MAIOFFICE eliminated design-developer back-and-forth completely.",
    author: "Product Lead",
    title: "MAIA Digital Internal Suite",
  },
  {
    quote:
      "One of the most generative design instructors we’ve hosted. His students leave with actual production-ready Figma systems and working code, not just theoretical slides.",
    author: "Program Coordinator",
    title: "Vocational Design & Tech Bootcamp",
  },
  {
    quote:
      "The Vendora UI Kit is one of the cleanest, best-tokenized commercial design assets on Gumroad. Saved our engineering team 3 weeks of layout work.",
    author: "Verified Purchaser",
    title: "Commercial Gumroad Customer",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#111111]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Screensaver Ambient Marquee Ticker */}
        <AmbientMarquee
          mode="banner"
          speed={30}
          items={["REBEL", "PRODUCT DESIGNER", "DISRUPTOR", "MVP ENGINEER"]}
        />

        {/* Section 2: "Creating My Own Path" Editorial Statement */}
        <section className="border-b border-[#111111] bg-[#FFFFFF] py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F10000] leading-none mb-4">
                CREATING MY
                <br />
                <span className="stroke-text text-transparent hover:text-[#111111] transition-colors">
                  OWN PATH
                </span>
              </h2>
              <div className="mt-8 pt-8 border-t border-[#E5E5E5] max-w-xl mx-auto">
                <blockquote className="font-sans-clean text-lg sm:text-xl text-[#444444] italic">
                  &ldquo;Do not follow where the path may lead. Go instead where there is no path and leave a trail.&rdquo;
                </blockquote>
                <span className="font-mono text-xs uppercase text-[#888888] font-bold mt-2 block tracking-wider">
                  &mdash; Ralph Waldo Emerson
                </span>
              </div>
            </div>

            {/* Narrative Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-8 border-t border-[#111111] font-sans-clean text-base sm:text-lg text-[#333333] leading-relaxed">
              <div>
                <p>
                  I am an independent Product Designer and Design-to-Code MVP Engineer who fell in love with digital craftsmanship early. My career began with 3D modeling and visual communication at SMK IDN Bogor, but quickly expanded into full-stack frontend architecture.
                </p>
              </div>
              <div>
                <p>
                  I bridge the chasm between visionary Figma prototypes and bulletproof Next.js production systems. I believe that showing working software is always superior to presenting static decks. When stakeholders can interact with real code, clarity replaces assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Operating Manifesto (6 Principles) */}
        <Manifesto />

        {/* Section 4: Experience You Can Trust (Ecosystem Logos) */}
        <section className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111111] mb-12">
              <div>
                <span className="font-mono text-xs uppercase text-[#F10000] font-bold block mb-2">
                  [ ECOSYSTEM &amp; PLATFORMS ]
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#111111]">
                  EXPERIENCE &amp; TRUST
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#666666] max-w-sm uppercase">
                Proven impact across commercial software suites, government vocational centers, and design communities.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {ECOSYSTEM_PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="p-6 border border-[#111111] bg-[#FBFBFB] hover:border-[#F10000] transition-colors flex flex-col justify-between min-h-[140px] shadow-[2px_2px_0px_0px_#111111]"
                >
                  <span className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-[#111111]">
                    {partner.name}
                  </span>
                  <span className="font-mono text-xs text-[#666666] uppercase">
                    {partner.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Stakeholder & Client Testimonials */}
        <section className="border-b border-[#111111] bg-[#FBFBFB] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-4">
              <Quote className="w-4 h-4" />
              <span>[ SOCIAL PROOF &amp; VALIDATION ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#111111] mb-12">
              TESTIMONIALS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 border border-[#111111] bg-[#FFFFFF] shadow-[4px_4px_0px_0px_#111111] flex flex-col justify-between min-h-[300px]"
                >
                  <p className="font-sans-clean text-base text-[#333333] leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="pt-6 border-t border-[#E5E5E5]">
                    <span className="font-display text-sm font-black uppercase text-[#111111] block">
                      {item.author}
                    </span>
                    <span className="font-mono text-xs text-[#666666] uppercase mt-0.5 block">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Chapter CTA: 01 WORKS */}
        <NextChapter
          href="/work"
          chapterNumber="01"
          chapterTitle="SELECTED WORKS &amp; SERVICES"
          summary="Explore live case studies including MAIOFFICE AI, LAJU POS, Vendora UI Kit, and our 3 core design disciplines."
        />
      </main>

      <Footer />
    </div>
  );
}
