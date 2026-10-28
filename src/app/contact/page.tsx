import React from "react";
import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import {
  Mail,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  Calendar,
  CheckCircle2,
  Code2,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Inquiries — Hamzah Ikhsan",
  description:
    "Initiate your high-impact product sprint, book training workshops, or discuss digital agency collaborations with Hamzah Ikhsan.",
};

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
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#111111]">
      <Navbar />

      <main className="flex-1">
        {/* Chapter Header */}
        <section className="border-b border-[#111111] bg-[#FFFFFF] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-4">
              <span>[ CHAPTER 04 / INITIATE CONTACT ]</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#111111] leading-[0.9]">
                  LET&apos;S BUILD
                  <br />
                  <span className="stroke-text text-transparent hover:text-[#F10000] transition-colors">
                    SOMETHING
                  </span>
                  <br />
                  <span className="text-[#F10000]">MEANINGFUL.</span>
                </h1>
                <p className="mt-6 font-sans-clean text-lg sm:text-2xl text-[#333333] leading-relaxed max-w-2xl">
                  Whether you require an end-to-end 10-day MVP sprint, an enterprise design token system, or a high-converting editorial presence, my inbox is open.
                </p>
              </div>

              {/* Availability Radar Widget */}
              <div className="lg:col-span-4 p-6 border border-[#111111] bg-[#FBFBFB] shadow-[4px_4px_0px_0px_#111111] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#F10000] font-bold flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F10000] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F10000]"></span>
                    </span>
                    LIVE RADAR
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#888888]">UTC+7 JAKARTA</span>
                </div>

                <div className="space-y-1">
                  <span className="font-display text-lg font-black uppercase text-[#111111] block">
                    SPRINT SLOTS AVAILABLE
                  </span>
                  <p className="font-mono text-xs text-[#666666]">
                    Accepting selected client engagements for Q4 2026. Fast turnaround guaranteed.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 font-mono text-xs text-[#111111] font-semibold">
                  <Calendar className="w-4 h-4 text-[#F10000]" />
                  <span>Next available sprint intake: November 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Channels Grid */}
        <section className="border-b border-[#111111] bg-[#FBFBFB] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/6281223324713"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border border-[#111111] bg-[#FFFFFF] shadow-[6px_6px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#F10000] hover:border-[#F10000] transition-all flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#F10000] font-bold">
                      <MessageSquare className="w-4 h-4" />
                      <span>INSTANT MESSAGING</span>
                    </div>
                    <span className="font-mono text-xs text-[#888888]">&lt; 15 min reply</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111111] group-hover:text-[#F10000] transition-colors mb-2">
                    WHATSAPP CHAT
                  </h3>
                  <p className="font-mono text-sm text-[#555555]">
                    +62 812-2332-4713 (Hamzah Ikhsan)
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between font-mono text-xs text-[#111111] font-bold">
                  <span>START CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F10000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:hamzah.student0106@gmail.com"
                className="group p-8 border border-[#111111] bg-[#FFFFFF] shadow-[6px_6px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#F10000] hover:border-[#F10000] transition-all flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#F10000] font-bold">
                      <Mail className="w-4 h-4" />
                      <span>FORMAL INQUIRY</span>
                    </div>
                    <span className="font-mono text-xs text-[#888888]">Direct Inbox</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#111111] group-hover:text-[#F10000] transition-colors mb-2">
                    ELECTRONIC MAIL
                  </h3>
                  <p className="font-mono text-sm text-[#555555]">
                    hamzah.student0106@gmail.com
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between font-mono text-xs text-[#111111] font-bold">
                  <span>COMPOSE MESSAGE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F10000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </div>

            {/* Engagement FAQ */}
            <div className="pt-12 border-t border-[#111111]">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#111111] mb-8">
                ENGAGEMENT ARCHITECTURE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FAQ_ITEMS.map((item) => (
                  <div
                    key={item.q}
                    className="p-6 border border-[#111111] bg-[#FFFFFF] space-y-3"
                  >
                    <h3 className="font-display text-lg font-black uppercase text-[#111111] flex items-start gap-2">
                      <span className="text-[#F10000] font-mono text-sm">&bull;</span>
                      <span>{item.q}</span>
                    </h3>
                    <p className="font-sans-clean text-sm text-[#555555] leading-relaxed pl-4">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
