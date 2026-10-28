"use client";

import React from "react";
import { CASE_STUDIES_DATA } from "../data/portfolio";
import { ExternalLink, CheckCircle2, Tag } from "lucide-react";

export const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 px-6 sm:px-12 border-b border-[var(--text-main)]/15 bg-[var(--bg-canvas)]">
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[var(--text-main)]/15 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F10000] font-bold mb-2">
              <span>[ 02 / SELECTED WORK ]</span>
            </div>
            <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-4xl sm:text-6xl font-bold uppercase text-[var(--text-main)] tracking-tight">
              FEATURED CASE STUDIES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md uppercase">
            Real-world products engineered for verified performance, design consistency, and immediate market impact.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12 sm:space-y-16">
          {CASE_STUDIES_DATA.map((project, idx) => (
            <article
              key={project.id}
              className="border border-[var(--text-main)]/15 p-8 sm:p-12 hover:border-[#F10000] transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Metadata & Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category & Year */}
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase">
                    <span className="px-2 py-0.5 border border-[var(--text-main)]/30 font-bold text-[var(--text-main)]">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className="text-[var(--text-muted)]">{project.category}</span>
                    <span>&bull;</span>
                    <span className="text-[var(--text-muted)]">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Right_Grotesk',Impact,sans-serif] text-3xl sm:text-4xl font-bold uppercase text-[var(--text-main)] group-hover:text-[#F10000] transition-colors tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 border border-[var(--text-main)]/15 text-[var(--text-main)]"
                      >
                        <Tag className="w-3 h-3 text-[#F10000]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  {project.link && (
                    <div className="pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--text-main)]/30 text-[var(--text-main)] text-xs uppercase tracking-wider font-semibold hover:bg-[#F10000] hover:border-[#F10000] hover:text-white transition-colors"
                      >
                        <span>{project.linkLabel || "Explore Project"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Verified Hard Metrics & Tech Stack */}
                <div className="lg:col-span-5 flex flex-col gap-6 p-8 border border-[var(--text-main)]/15">
                  {/* Verified Metrics Block */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#F10000] font-bold mb-4 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>VERIFIED OUTCOMES</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {project.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="text-xs sm:text-sm text-[var(--text-main)] font-semibold flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-[#F10000] inline-block" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Block */}
                  <div className="pt-4 border-t border-[var(--text-main)]/15">
                    <h4 className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3">
                      TECHNOLOGY &amp; TOOLS
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 border border-[var(--text-main)]/15 text-[var(--text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
