import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SplashScreen } from "@/components/motion/SplashScreen";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hamzah Ikhsan — Rebel • Disruptor • Product Designer",
  description:
    "My passion is creating meaningful products for the world that solves real problems, delights users and exceeds expectations.",
  keywords: [
    "Hamzah Ikhsan",
    "Product Designer",
    "Design-to-Code",
    "MVP Engineer",
    "Won J You",
    "Swiss Brutalism",
    "Next.js 16",
  ],
  authors: [{ name: "Hamzah Ikhsan" }],
  openGraph: {
    title: "Hamzah Ikhsan — Rebel • Disruptor • Product Designer",
    description:
      "My passion is creating meaningful products for the world that solves real problems, delights users and exceeds expectations.",
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
    <html lang="en" className="dark scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] font-sans-clean transition-colors duration-300">
        <ThemeProvider>
          <SplashScreen />
          <CustomCursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
