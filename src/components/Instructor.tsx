"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Instructor() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Column with Viewfinder Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal variant="scale-up" delay={100} className="w-full max-w-[360px]">
              <div
                className="relative aspect-[3/4] w-full border border-[#26262A] bg-[#151517] overflow-hidden group transition-all duration-300 hover:border-[#FF3B30]/50"
                data-cursor-text="DIRECTOR"
              >
                {/* Corner brackets */}
                <div className="pointer-events-none absolute top-3 left-3 h-5 w-5 bracket-tl z-20" />
                <div className="pointer-events-none absolute top-3 right-3 h-5 w-5 bracket-tr z-20" />
                <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 bracket-bl z-20" />
                <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 bracket-br z-20" />

                <Image
                  src="/images/cole_portrait.png"
                  alt="Cole - AI Director and Filmmaker"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Bottom Badge */}
                <div className="absolute bottom-4 inset-x-4 text-center z-10 border border-[#26262A] bg-[#0B0B0D]/80 backdrop-blur-md py-2.5">
                  <span className="font-bebas text-2xl tracking-[0.1em] text-white">
                    COLE
                  </span>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF3B30]">
                    AI FILM DIRECTOR & CREATOR
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#FF3B30] mb-3">
                <span className="h-px w-5 bg-[#FF3B30]" />
                <span>YOUR INSTRUCTOR</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="mask-up" delay={150}>
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white">
                THE VISIONARY BEHIND AI WITH COLE
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={250}>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#8E8E96] leading-relaxed">
                <p>
                  Cole pioneered high-retention AI storytelling, directing viral serialized dramas and captivating an audience of over 2.6 million viewers with breathtaking visual consistency and dramatic suspense.
                </p>
                <p>
                  Instead of getting bogged down by production roadblocks, expensive rentals, or unpredictable sets, Cole built an agile, automated pipeline that generates studio-level cinematic shorts from anywhere in the world.
                </p>
                <p>
                  In this masterclass, you get the exact step-by-step playbook: from writing gripping scene prompts, to locking character faces across camera angles, to audio design in CapCut, to viral algorithm distribution.
                </p>
              </div>
            </ScrollReveal>

            {/* Credibility highlights */}
            <ScrollReveal variant="fade-up" delay={350}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-[#26262A] pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#FF3B30] shrink-0" />
                  <span className="font-mono text-xs text-[#EDEDEC]">
                    Real-world tested prompt library
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#FF3B30] shrink-0" />
                  <span className="font-mono text-xs text-[#EDEDEC]">
                    Proven viral distribution framework
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#FF3B30] shrink-0" />
                  <span className="font-mono text-xs text-[#EDEDEC]">
                    Consistent character techniques
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#FF3B30] shrink-0" />
                  <span className="font-mono text-xs text-[#EDEDEC]">
                    Free AI tools to minimize budget
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
