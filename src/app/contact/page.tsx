"use client";

import React from "react";
import { Footer } from "@/components/Footer";
import {
  Mail,
  MessageSquare,
  ArrowUpRight,
  Calendar,
  HelpCircle,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "How does the 10-Day Design-to-Code MVP Sprint work?",
    a: "We start with a 2-day discovery and information architecture tear-down. Days 3-5 focus on interactive Figma high-fidelity prototypes with verified design tokens. Days 6-10 are spent in pure Next.js 16 + Tailwind CSS v4 code execution, delivering a production-ready repository ready for immediate deployment.",
  },
  {
    q: "Can you work with our existing engineering team?",
    a: "Yes. I routinely provide design systems handoff specifications via Figma Dev Mode, write the initial Tailwind component foundations, or embed as a hybrid design-to-code slicing specialist to unblock your engineering sprint.",
  },
  {
    q: "What types of products do you specialize in?",
    a: "High-density B2B SaaS applications, autonomous AI productivity platforms (like MAIOFFICE), multi-store retail POS interfaces (like LAJU POS), and high-conversion editorial e-commerce stores.",
  },
  {
    q: "Are you available for corporate training or institutional workshops?",
    a: "Yes. Having trained over 100+ vocational students and government trainees at BBPVP Kemnaker, I offer customized curriculums in UI/UX systems design, Figma variables, and modern frontend slicing.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] pt-28 sm:pt-36 transition-colors duration-300">
      {/* Chapter Header */}
      <section className="px-6 sm:px-12 pb-16 sm:pb-24 border-b border-[var(--text-main)]/15">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#F10000] font-bold mb-6">
            <span>[ CHAPTER 04 / INITIATE CONTACT ]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-['Right_Grotesk',Impact,sans-serif] text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9]">
                <span className="text-[var(--text-main)]">LET&apos;S BUILD </span>
                <br />
                <span className="stroke">SOMETHING </span>
                <br />
                <span className="text-[#F10000]">MEANINGFUL.</span>
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-[var(--text-muted)] font-light leading-relaxed max-w-2xl">
                Whether you require an end-to-end 10-day MVP sprint, an enterprise design token system, or a high-converting editorial presence, my inbox is open.
              </p>
            </div>

            {/* Availability Radar Widget */}
            <div className="lg:col-span-4 p-8 border border-[var(--text-main)]/15 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--text-main)]/15">
                <span className="text-xs uppercase tracking-wider text-[#F10000] font-bold flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F10000] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F10000]"></span>
                  </span>
                  LIVE RADAR
                </span>
                <span className="text-[10px] uppercase text-[var(--text-muted)]">UTC+7 JAKARTA</span>
              </div>

              <div className="space-y-1">
                <span className="font-['Right_Grotesk',Impact,sans-serif] text-lg font-bold uppercase text-[var(--text-main)] block">
                  SPRINT SLOTS AVAILABLE
                </span>
                <p className="text-xs text-[var(--text-muted)]">
                  Accepting selected client engagements for Q4 2026. Fast turnaround guaranteed.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[var(--text-main)] font-semibold">
                <Calendar className="w-4 h-4 text-[#F10000]" />
                <span>Next intake: November 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Channels Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 border-b border-[var(--text-main)]/15">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/6281223324713"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 sm:p-12 border border-[var(--text-main)]/15 hover:border-[#F10000] transition-colors flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[var(--text-main)]/15 mb-4">
                  <div className="flex items-center gap-2 text-xs uppercase text-[#F10000] font-bold">
                    <MessageSquare className="w-4 h-4" />
                    <span>INSTANT MESSAGING</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">&lt; 15 min reply</span>
                </div>
                <h3 className="font-['Right_Grotesk',Impact,sans-serif] text-3xl sm:text-4xl font-bold uppercase text-[var(--text-main)] group-hover:text-[#F10000] transition-colors mb-2">
                  WHATSAPP CHAT
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  +62 812-2332-4713 (Hamzah Ikhsan)
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs text-[var(--text-main)] font-bold">
                <span>START CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 text-[#F10000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:hamzah.student0106@gmail.com"
              className="group p-8 sm:p-12 border border-[var(--text-main)]/15 hover:border-[#F10000] transition-colors flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[var(--text-main)]/15 mb-4">
                  <div className="flex items-center gap-2 text-xs uppercase text-[#F10000] font-bold">
                    <Mail className="w-4 h-4" />
                    <span>FORMAL INQUIRY</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">Direct Inbox</span>
                </div>
                <h3 className="font-['Right_Grotesk',Impact,sans-serif] text-3xl sm:text-4xl font-bold uppercase text-[var(--text-main)] group-hover:text-[#F10000] transition-colors mb-2">
                  ELECTRONIC MAIL
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  hamzah.student0106@gmail.com
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs text-[var(--text-main)] font-bold">
                <span>COMPOSE MESSAGE</span>
                <ArrowUpRight className="w-4 h-4 text-[#F10000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Engagement FAQ */}
          <div className="pt-16 border-t border-[var(--text-main)]/15">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F10000] font-bold mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-['Right_Grotesk',Impact,sans-serif] text-4xl sm:text-5xl font-bold uppercase text-[var(--text-main)] mb-12">
              ENGAGEMENT ARCHITECTURE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.q}
                  className="p-8 border border-[var(--text-main)]/15 space-y-3"
                >
                  <h3 className="text-xl font-bold uppercase text-[var(--text-main)] flex items-start gap-2">
                    <span className="text-[#F10000] font-mono text-sm">&bull;</span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed pl-4">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Footer */}
      <Footer />
    </main>
  );
}
