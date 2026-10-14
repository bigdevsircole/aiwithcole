"use client";

import React from "react";
import { ShieldCheck, Globe } from "lucide-react";
import { PricingRibbon } from "./PricingRibbon";
import { ScrollReveal } from "./ScrollReveal";
import { RollingText } from "./RollingText";

export function PricingTicket() {
  const perks = [
    "More than 9+ detailed video lessons & future updates",
    "A comprehensive guide to free and paid AI tools",
    "Step-by-step practical learning & prompt workflows",
    "Personal support via exclusive Telegram group",
    "Full access on your phone, tablet, or computer",
    "Lifetime access with a one-time payment of ₦5,000",
  ];

  return (
    <section id="pricing" className="relative bg-[#151517] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <ScrollReveal variant="fade-up" delay={50}>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#FF3B30] mb-3">
              <span className="h-px w-5 bg-[#FF3B30]" />
              <span>JOIN THE MASTERCLASS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="mask-up" delay={120}>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white">
              ENROLL IN AI WITH COLE
            </h2>
          </ScrollReveal>
        </div>

        {/* Currency Ribbon */}
        <ScrollReveal variant="fade-up" delay={200} className="mb-12">
          <PricingRibbon />
        </ScrollReveal>

        {/* Pricing Card (Ticket Style) with Viewfinder brackets & Hover Lift */}
        <ScrollReveal variant="scale-up" delay={250}>
          <div
            className="group mx-auto max-w-xl border border-[#26262A] bg-[#0B0B0D] relative shadow-2xl transition-all duration-500 hover:border-[#FF3B30]/50 hover:shadow-[0_0_50px_rgba(255,59,48,0.15)]"
            data-cursor-text="ADMIT 1"
          >
            {/* Ticket Viewfinder corners */}
            <div className="pointer-events-none absolute top-2 left-2 h-4 w-4 bracket-tl z-20" />
            <div className="pointer-events-none absolute top-2 right-2 h-4 w-4 bracket-tr z-20" />
            <div className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 bracket-bl z-20" />
            <div className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 bracket-br z-20" />

            {/* Ticket Top Notch */}
            <div className="flex items-center justify-between border-b border-[#26262A] px-6 py-4 font-mono text-xs text-[#8E8E96]">
              <span className="inline-flex items-center gap-2 text-white font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#FF3B30] rec-pulse" />
                ADMIT ONE VIP
              </span>
              <span>AI FILMMAKING METHOD</span>
            </div>

            {/* Ticket Header & Price */}
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <div className="font-bebas text-6xl sm:text-7xl leading-none text-white group-hover:text-[#FF3B30] transition-colors duration-300">
                    ₦5,000
                  </div>
                  <div className="mt-1 font-mono text-xs text-[#8E8E96]">
                    One-time payment • Lifetime access
                  </div>
                </div>

                <div className="border border-[#FF3B30]/30 bg-[#FF3B30]/10 px-3 py-1.5 font-mono text-xs text-[#FF3B30]">
                  LIMITED TIME ACCESS
                </div>
              </div>

              {/* Perforated divider */}
              <div className="my-8 border-t border-dashed border-[#26262A]" />

              {/* Perks list */}
              <div className="space-y-3.5">
                {perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#FF3B30] font-mono text-sm font-bold shrink-0">—</span>
                    <span className="text-sm sm:text-base text-[#EDEDEC] leading-snug">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions with RollingText */}
              <div className="mt-10 space-y-3">
                <a
                  href="https://paystack.shop/pay/aiwithcole"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="PAYSTACK"
                  className="group flex w-full items-center justify-center gap-2 bg-[#FF3B30] py-4 text-center font-mono text-sm font-bold tracking-wider text-white transition-all duration-300 hover:bg-[#e03126] hover:shadow-[0_0_25px_rgba(255,59,48,0.4)] active:scale-[0.99]"
                >
                  <RollingText text="BUY NOW (NIGERIAN CARDS / BANK) → ₦5,000" />
                </a>

                <a
                  href="https://selar.com/919r4914y1"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="SELAR"
                  className="group flex w-full items-center justify-center gap-2 border border-emerald-500/50 bg-emerald-950/30 py-3.5 text-center font-mono text-xs font-semibold tracking-wider text-emerald-300 transition-all duration-300 hover:bg-emerald-900/40 hover:border-emerald-400"
                >
                  <Globe className="h-4 w-4 group-hover:rotate-12 transition-transform duration-500" />
                  <RollingText text="INTERNATIONAL STUDENTS (SELAR / USD / GBP / ALL CARDS)" />
                </a>
              </div>

              {/* Trust footer */}
              <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[11px] text-[#8E8E96]">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>SECURE 256-BIT ENCRYPTION · INSTANT ACCESS DELIVERY</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
