import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SplashScreen } from "@/components/motion/SplashScreen";
import { CustomCursor } from "@/components/motion/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamzah Ikhsan — Product Designer & Design-to-Code MVP Engineer",
  description:
    "Specializing in high-impact SaaS design, brutalist Swiss aesthetics, and rapid design-to-production sprints.",
  keywords: [
    "Hamzah Ikhsan",
    "Product Designer",
    "Design-to-Code",
    "MVP Engineer",
    "Brutalist Portfolio",
    "Next.js 16",
    "Swiss Editorial Design",
  ],
  authors: [{ name: "Hamzah Ikhsan" }],
  openGraph: {
    title: "Hamzah Ikhsan — Product Designer & Design-to-Code MVP Engineer",
    description:
      "Specializing in high-impact SaaS design, brutalist Swiss aesthetics, and rapid design-to-production sprints.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${mono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#F10000] selection:text-white">
        <SplashScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
