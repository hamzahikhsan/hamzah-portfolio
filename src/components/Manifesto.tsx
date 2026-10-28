"use client";

import React from "react";

interface ValueItem {
  title: string;
  description: string;
  glyph: string;
}

const VALUES: ValueItem[] = [
  {
    title: "Love what you do",
    description:
      "I believe in having passion for one’s work. People can tell when something is made with love, care and attention. If you’re not proud of your work, then why do it.",
    glyph: "/assets/64a206e89af1f6039e6ee166_glyph1b.svg",
  },
  {
    title: "Never stop learning",
    description:
      "When we stop learning, we stop growing. Embrace curiosity as it is the best way to stay engaged and to keep your mind young.",
    glyph: "/assets/64a2046b0a2512f14ce27ea0_glyph2_2x.webp",
  },
  {
    title: "Speak the truth",
    description:
      "I believe it’s far better to be honest than to be indirect and kind. Sometimes the hard truths must be spoken, and I always strive to say what I mean. When you're honest, it breeds trust and creates clarity in communication with others.",
    glyph: "/assets/64a20886a276228b93267260_glyph3.svg",
  },
  {
    title: "Show, don’t tell",
    description:
      "I’ve found that showing is almost always better than telling. Showing stakeholders a prototype is far more powerful than a slide full of promises. I have always had a bias for action, and making and demonstrating are my way of storytelling.",
    glyph: "/assets/64a204c1304c8842bf6b8596_glyph4.webp",
  },
  {
    title: "Lead by example",
    description:
      "I strive to be a leader who models and embodies the qualities and behaviors they wish to see in others. Actions speak louder than words.",
    glyph: "/assets/64a208870a2512f14ce6c426_glyph5.svg",
  },
  {
    title: "Work smarter, not harder",
    description:
      "I am results-oriented, not effort-focused. Effort is important, but if you can get to the same results more efficiently, then at the end of day, that’s better. Finding ways to maximize output through scale and leverage is key to growing and succeeding in business and in life.",
    glyph: "/assets/64a205166280f226d72afcf9_glyph6_2x.webp",
  },
];

export const Manifesto: React.FC = () => {
  return (
    <section id="loves" className="py-24 sm:py-36 px-6 sm:px-12 bg-[var(--bg-canvas)] transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto">
        {/* Section Tag */}
        <div className="text-sm font-medium text-[var(--text-muted)] mb-4">
          My Values
        </div>

        {/* Massive Display Title */}
        <div className="mb-8">
          <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] font-bold uppercase tracking-tight leading-[0.85]">
            <span className="text-[#F10000]">Live </span>
            <span className="text-[var(--text-main)]">by </span>
            <span className="stroke">Principles</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--text-muted)] max-w-2xl mb-16 sm:mb-24">
          These values and principles drive everything that I do.
        </p>

        {/* Minimalist 2-Column Values List with Glyphs */}
        <div className="divide-y divide-[var(--text-main)]/15 border-y border-[var(--text-main)]/15">
          {VALUES.map((item, idx) => (
            <div
              key={idx}
              className="py-10 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start group"
            >
              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] group-hover:text-[#F10000] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Glyph Icon */}
              <div className="md:col-span-2 flex justify-start md:justify-end items-center">
                <img
                  src={item.glyph}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all filter brightness-90 contrast-125"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
