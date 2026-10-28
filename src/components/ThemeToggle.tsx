"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#F10000] cursor-pointer ${
        isDark ? "bg-[#1A1A1A] border border-[#333333]" : "bg-[#EAEAEA] border border-[#CCCCCC]"
      }`}
    >
      {/* Moon icon for dark mode */}
      <span
        className={`absolute left-1.5 transition-opacity duration-200 ${
          isDark ? "opacity-90" : "opacity-30"
        }`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDark ? "#FFFFFF" : "#666666"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>

      {/* Sun / Iris icon for light mode */}
      <span
        className={`absolute right-1.5 transition-opacity duration-200 ${
          !isDark ? "opacity-90" : "opacity-30"
        }`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={!isDark ? "#000000" : "#888888"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </span>

      {/* Moving Knob */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className={`inline-block h-4 w-4 rounded-full shadow-md z-10 ${
          isDark
            ? "translate-x-7 bg-[#FFFFFF]"
            : "translate-x-1 bg-[#111111]"
        }`}
      />
    </button>
  );
};
