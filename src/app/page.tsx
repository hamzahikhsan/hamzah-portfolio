import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Manifesto } from "../components/Manifesto";
import { CaseStudies } from "../components/CaseStudies";
import { Framework } from "../components/Framework";
import { Metrics } from "../components/Metrics";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-[#111111]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <CaseStudies />
        <Framework />
        <Metrics />
      </main>
      <Footer />
    </div>
  );
}
