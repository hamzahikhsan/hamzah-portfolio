"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 sm:py-28 px-6 sm:px-12 bg-[var(--bg-canvas)] text-[var(--text-main)] transition-colors duration-300">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center justify-center text-center space-y-10">
        {/* Artistic Handwritten Brush Script Signature */}
        <div className="select-none">
          <span
            className="text-4xl sm:text-6xl md:text-7xl italic font-serif tracking-wide text-[var(--text-main)] hover:text-[#F10000] transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', Georgia, cursive, serif" }}
          >
            Hamzah Ikhsan.
          </span>
        </div>

        {/* Minimalist Outlined Social Icons */}
        <div className="flex items-center gap-6 text-[var(--text-main)]">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/hamzahikhsan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full border border-[var(--text-main)]/20 hover:border-[#F10000] hover:text-[#F10000] transition-colors"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/hamzahikhsan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-full border border-[var(--text-main)]/20 hover:border-[#F10000] hover:text-[#F10000] transition-colors"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Dribbble */}
          <a
            href="https://dribbble.com/hamzah_student"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble Portfolio"
            className="p-2.5 rounded-full border border-[var(--text-main)]/20 hover:border-[#F10000] hover:text-[#F10000] transition-colors"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.5 2.5a16.8 16.8 0 0 1 7.8 18.5" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/hamzahikhsan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repositories"
            className="p-2.5 rounded-full border border-[var(--text-main)]/20 hover:border-[#F10000] hover:text-[#F10000] transition-colors"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
        </div>

        {/* Minimalist Copyright */}
        <div className="pt-4 text-xs font-light text-[var(--text-muted)] tracking-wider">
          &copy; {new Date().getFullYear()} Hamzah Ikhsan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
