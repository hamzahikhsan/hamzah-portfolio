"use client";

import React from "react";
import { ArrowUpRight, Mail, MessageSquare, ShoppingBag, Globe, Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#111111] text-[#FFFFFF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="pb-16 border-b border-[#333333]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F10000] font-bold mb-4">
            <span>[ 05 / INITIATE CONTACT ]</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#FFFFFF] leading-[0.95]">
            READY TO BUILD YOUR NEXT <span className="text-[#F10000]">HIGH-CONVERTING</span> PRODUCT?
          </h2>
          <p className="mt-6 font-sans-clean text-base sm:text-xl text-[#AAAAAA] max-w-2xl leading-relaxed">
            Whether you need a full 10-day Design-to-Code MVP sprint, an enterprise design system, or a high-impact brutalist web presence, let&apos;s turn your product vision into production code.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hamzah.student0106@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F10000] text-[#FFFFFF] font-mono text-sm uppercase tracking-wider font-bold hover:bg-[#D90000] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>SEND DIRECT INQUIRY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6281223324713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#444444] bg-[#222222] text-[#FFFFFF] font-mono text-sm uppercase tracking-wider font-bold hover:bg-[#333333] hover:border-[#666666] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#F10000]" />
              <span>WHATSAPP CHAT</span>
            </a>
          </div>
        </div>

        {/* Directory & Social Links */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-3">
            <span className="font-display text-2xl font-black tracking-tight text-[#FFFFFF]">
              HAMZAH IKHSAN
            </span>
            <p className="font-mono text-xs text-[#888888] leading-normal uppercase">
              Product Designer &bull; Design-to-Code MVP Engineer
              <br />
              Jakarta, Indonesia &bull; Global Remote Availability
            </p>
          </div>

          <div className="md:col-span-7 flex flex-wrap gap-6 sm:gap-10 font-mono text-xs uppercase">
            <div>
              <span className="text-[#666666] block mb-3 font-bold">ECOSYSTEM</span>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/hamzahikhsan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#CCCCCC] hover:text-[#F10000] transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://anikiisaan.gumroad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#CCCCCC] hover:text-[#F10000] transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>GUMROAD</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/hamzah_student"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#CCCCCC] hover:text-[#F10000] transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>DRIBBBLE</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[#666666] block mb-3 font-bold">DIRECTORY</span>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-[#CCCCCC] hover:text-[#F10000] transition-colors">
                    00. HOME
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-[#CCCCCC] hover:text-[#F10000] transition-colors">
                    01. WORKS &amp; SERVICES
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-[#CCCCCC] hover:text-[#F10000] transition-colors">
                    02. ABOUT &amp; STORY
                  </a>
                </li>
                <li>
                  <a href="/thoughts" className="text-[#CCCCCC] hover:text-[#F10000] transition-colors">
                    03. THOUGHTS &amp; ESSAYS
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-[#CCCCCC] hover:text-[#F10000] transition-colors">
                    04. CONTACT
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[#666666] block mb-3 font-bold">PRODUCTION</span>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://maia-task-scribe.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CCCCCC] hover:text-[#F10000] transition-colors flex items-center gap-1"
                  >
                    <span>MAIOFFICE APP</span>
                    <ArrowUpRight className="w-3 h-3 text-[#F10000]" />
                  </a>
                </li>
                <li>
                  <a
                    href="/work"
                    className="text-[#CCCCCC] hover:text-[#F10000] transition-colors"
                  >
                    LAJU POS SPEC
                  </a>
                </li>
                <li>
                  <a
                    href="/work"
                    className="text-[#CCCCCC] hover:text-[#F10000] transition-colors"
                  >
                    VENDORA UI KIT
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[#666666] block mb-3 font-bold">INFRASTRUCTURE</span>
              <ul className="space-y-1 font-mono text-[11px] text-[#888888]">
                <li>BIZNET GIO VPS HOST</li>
                <li>STATIC SSG EXPORT</li>
                <li>NGINX 1.24 HARDENED</li>
                <li>0MB NODE RUNTIME</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-12 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#666666] uppercase">
          <span>&copy; {new Date().getFullYear()} HAMZAH IKHSAN. ALL RIGHTS RESERVED.</span>
          <span>CRAFTED IN JAKARTA WITH SWISS BRUTALIST PRECISION.</span>
        </div>
      </div>
    </footer>
  );
};
