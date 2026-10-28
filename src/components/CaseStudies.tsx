"use client";

import React from "react";
import { CASE_STUDIES_DATA } from "../data/portfolio";
import { ExternalLink, CheckCircle2, Tag } from "lucide-react";

export const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#111111] mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-2">
              <span>[ 02 / SELECTED WORK ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#111111] tracking-tight">
              FEATURED CASE STUDIES
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#666666] max-w-md uppercase">
            Real-world products engineered for verified performance, design consistency, and immediate market impact.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12 sm:space-y-16">
          {CASE_STUDIES_DATA.map((project, idx) => (
            <article
              key={project.id}
              className="border border-[#111111] bg-[#FFFFFF] p-6 sm:p-10 lg:p-12 hover:border-[#F10000] transition-colors shadow-[6px_6px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#F10000]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Metadata & Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category & Year */}
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase">
                    <span className="px-2 py-0.5 border border-[#111111] bg-[#111111] text-[#FFFFFF] font-bold">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className="text-[#666666]">{project.category}</span>
                    <span className="text-[#CCCCCC]">&bull;</span>
                    <span className="text-[#666666]">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-[#111111] tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans-clean text-base sm:text-lg text-[#444444] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-1 border border-[#E5E5E5] bg-[#FBFBFB] text-[#111111]"
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#111111] bg-[#111111] text-[#FFFFFF] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#F10000] hover:border-[#F10000] transition-colors"
                      >
                        <span>{project.linkLabel || "Explore Project"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Verified Hard Metrics & Tech Stack */}
                <div className="lg:col-span-5 flex flex-col gap-6 p-6 border border-[#E5E5E5] bg-[#FBFBFB]">
                  {/* Verified Metrics Block */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-4 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>VERIFIED OUTCOMES</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {project.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="font-mono text-xs sm:text-sm text-[#111111] font-semibold flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-[#F10000] rounded-none inline-block"></span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Block */}
                  <div className="pt-4 border-t border-[#E5E5E5]">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[#888888] font-bold mb-3">
                      TECHNOLOGY & TOOLS
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2 py-0.5 border border-[#CCCCCC] bg-[#FFFFFF] text-[#333333]"
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
