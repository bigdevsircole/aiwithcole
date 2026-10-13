import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { TheShift } from "@/components/TheShift";
import { Curriculum } from "@/components/Curriculum";
import { Instructor } from "@/components/Instructor";
import { PricingTicket } from "@/components/PricingTicket";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] text-[#EDEDEC] relative selection:bg-[#FF3B30] selection:text-white">
      {/* Subtle film grain background layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 film-grain" />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <Stats />
        <TheShift />
        <Curriculum />
        <Instructor />
        <PricingTicket />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
