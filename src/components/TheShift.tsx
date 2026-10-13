"use client";

import React from "react";
import { XCircle, CheckCircle2, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function TheShift() {
  const oldWayItems = [
    "Book expensive actors & negotiate location permits",
    "Rent costly camera rigs, lighting kits, and sound gear",
    "Shoot for exhausting days, reshoot errors, edit for weeks",
    "Spend hundreds of thousands or millions per episode",
  ];

  const colesWayItems = [
    "Write the scene in seconds with structured prompt formulas",
    "Generate 4K cinematic shots directly on your laptop",
    "Cut a full high-suspense episode in one single sitting",
    "Produce and distribute films for the cost of your data plan",
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <ScrollReveal variant="fade-up" delay={50}>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#FF3B30] mb-3">
              <span className="h-px w-5 bg-[#FF3B30]" />
              <span>THE PARADIGM SHIFT</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="mask-up" delay={120}>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white">
              SAME SCREEN. DIFFERENT SET.
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-[#8E8E96]">
              Traditional video production is designed to keep creators waiting on budgets. AI filmmaking flips the entire industry on its head.
            </p>
          </ScrollReveal>
        </div>

        {/* Split Grid with United Carriers card animation styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#26262A] overflow-hidden">
          {/* Old Way Column */}
          <ScrollReveal variant="fade-up" delay={250} className="h-full">
            <div className="p-6 sm:p-10 border-b md:border-b-0 md:border-r border-[#26262A] bg-[#0E0E11]/60 h-full transition-colors duration-300 hover:bg-[#151517]/40">
              <div className="flex items-center justify-between pb-6 border-b border-[#26262A]">
                <span className="font-mono text-xs tracking-wider text-[#8E8E96]">THE OLD METHOD</span>
                <span className="rounded bg-red-950/40 px-2 py-0.5 font-mono text-[11px] text-red-400 border border-red-800/40">
                  SLOW & EXPENSIVE
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {oldWayItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-[#8E8E96]">
                    <XCircle className="h-5 w-5 text-red-500/60 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Cole's Way Column */}
          <ScrollReveal variant="fade-up" delay={350} className="h-full">
            <div className="p-6 sm:p-10 bg-[#FF3B30]/[0.03] relative h-full transition-colors duration-300 hover:bg-[#FF3B30]/[0.06]">
              <div className="flex items-center justify-between pb-6 border-b border-[#26262A]">
                <span className="font-mono text-xs tracking-wider text-[#FF3B30] font-bold">COLE&apos;S AI METHOD</span>
                <span className="inline-flex items-center gap-1 rounded bg-[#FF3B30]/20 px-2 py-0.5 font-mono text-[11px] text-[#FF3B30] border border-[#FF3B30]/40">
                  <Zap className="h-3 w-3" />
                  <span>FAST & VIRAL</span>
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {colesWayItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-[#EDEDEC]">
                    <CheckCircle2 className="h-5 w-5 text-[#FF3B30] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-snug font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
