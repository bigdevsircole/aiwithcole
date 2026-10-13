"use client";

import React, { useState } from "react";
import { Plus, Minus, Clock } from "lucide-react";
import { PricingRibbon } from "./PricingRibbon";
import { ScrollReveal } from "./ScrollReveal";
import { RollingText } from "./RollingText";

interface Lesson {
  number: string;
  title: string;
  desc?: string;
  duration: string;
}

interface Act {
  roman: string;
  title: string;
  subtitle: string;
  lessons: Lesson[];
}

const ACTS: Act[] = [
  {
    roman: "I",
    title: "The Foundations",
    subtitle: "Get from zero to your first finished scene.",
    lessons: [
      {
        number: "01",
        title: "Step-By-Step Guide to Create AI Films",
        desc: "How easy and streamlined the modern pipeline actually is",
        duration: "18 min",
      },
      {
        number: "02",
        title: "AI Filmmaking — All You Need to Know",
        desc: "Getting started directly from a blank page to full storyboard",
        duration: "44 min",
      },
      {
        number: "07",
        title: "AI Filmmaking 101",
        desc: "What sets professional cinema apart from generic AI reels — a must listen",
        duration: "3 min",
      },
    ],
  },
  {
    roman: "II",
    title: "Consistent Characters",
    subtitle: "Keep the same face, voice and wardrobe across a whole episode.",
    lessons: [
      {
        number: "03",
        title: "Consistent Characters in Every Scene (Part 1)",
        desc: "Face seed generation and character anchoring across environments",
        duration: "7 min",
      },
      {
        number: "04",
        title: "Consistent Characters in Every Scene (Part 2)",
        desc: "Costume retention, multi-angle reference consistency",
        duration: "3 min",
      },
      {
        number: "05",
        title: "Keeping Voice & Accent Consistent in Grok & ElevenLabs",
        desc: "Stop character voice timbre and accent drifting mid-series",
        duration: "3 min",
      },
      {
        number: "10",
        title: "Stop the Wrong Mouth Moving",
        desc: "Locking lines specifically to the character speaking them with zero visual hallucination",
        duration: "1 min",
      },
    ],
  },
  {
    roman: "III",
    title: "Mastering the Prompt",
    subtitle: "The exact prompting formulas and weights behind Cole's viral episodes.",
    lessons: [
      {
        number: "08",
        title: "Solving Two Common AI Generation Traps",
        desc: "The critical prompt fixes and parameter tuning most creators never uncover",
        duration: "8 min",
      },
      {
        number: "12",
        title: "How I Prompt Like a Master",
        desc: "Cinematic shot syntax: Parts A – E with real prompt breakdowns and outputs",
        duration: "5 parts",
      },
      {
        number: "19",
        title: "The Ultimate Prompt Engineering Blueprint",
        desc: "Mastery of camera angles, cinematic depth of field, and photorealism",
        duration: "2 parts",
      },
    ],
  },
  {
    roman: "IV",
    title: "Production Craft",
    subtitle: "Scripts, dramatic close-ups, sound staging and the nuance that sells the story.",
    lessons: [
      {
        number: "06",
        title: "The Simplest Way to a Cinematic Film",
        desc: "Fewer complications, higher visual fidelity, and faster exports",
        duration: "4 min",
      },
      {
        number: "09",
        title: "Free Music & Cinematic Scoring in CapCut",
        desc: "Score an entire emotional episode for ₦0 using sound effects libraries",
        duration: "4 min",
      },
      {
        number: "11",
        title: "Write a Full Movie Script with AI",
        desc: "Structuring three-act tension, cliffhangers, and natural dialogue",
        duration: "2 min",
      },
      {
        number: "13",
        title: "Smooth Cinematic Close-Ups (Part 1)",
        desc: "Micro-expressions, eye darts, and focus racking",
        duration: "1 min",
      },
      {
        number: "14",
        title: "Smooth Cinematic Close-Ups (Part 2)",
        desc: "Motion smoothing techniques and frame interpolation",
        duration: "7 min",
      },
      {
        number: "17",
        title: "Create a Realistic Phone Call Scene",
        desc: "Splitscreen dialogue, phone UI graphics, and realistic spatial audio",
        duration: "1 min",
      },
    ],
  },
  {
    roman: "V",
    title: "Growth & Distribution",
    subtitle: "Turn finished episodes into a dedicated audience, then a profitable channel.",
    lessons: [
      {
        number: "15",
        title: "Free AI Videos & Growing a YouTube Channel",
        desc: "Zero-budget growth strategy with serialized AI short-form & long-form films",
        duration: "33 min",
      },
      {
        number: "16",
        title: "The Truth About Viral Facebook & TikTok AI Series",
        desc: "Algorithmic hooks, watch-time retention, and monetization mechanics",
        duration: "5 min",
      },
      {
        number: "18",
        title: "Create a Complete AI Podcast",
        desc: "Building automated dual-host synthetic video podcasts using free AI tools",
        duration: "31 min",
      },
    ],
  },
];

export function Curriculum() {
  const [openActs, setOpenActs] = useState<number[]>([0]); // First act open by default

  const toggleAct = (index: number) => {
    if (openActs.includes(index)) {
      setOpenActs(openActs.filter((i) => i !== index));
    } else {
      setOpenActs([...openActs, index]);
    }
  };

  const expandAll = () => setOpenActs([0, 1, 2, 3, 4]);
  const collapseAll = () => setOpenActs([]);

  return (
    <section id="curriculum" className="relative bg-[#151517] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Tag */}
        <ScrollReveal variant="fade-up" delay={50}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#FF3B30]">
              <span className="h-px w-5 bg-[#FF3B30]" />
              <span>THE CURRICULUM</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="hover-line font-mono text-xs text-[#8E8E96] hover:text-white transition-colors"
                data-cursor-text="EXPAND"
              >
                [Expand All]
              </button>
              <span className="text-[#26262A]">•</span>
              <button
                onClick={collapseAll}
                className="hover-line font-mono text-xs text-[#8E8E96] hover:text-white transition-colors"
                data-cursor-text="COLLAPSE"
              >
                [Collapse All]
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="mask-up" delay={120}>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white">
            19 LESSONS. 5 ACTS.
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#8E8E96] leading-relaxed">
            Every lesson Cole actually teaches, structured exactly how you will execute them: foundations, character consistency, prompting formulas, production craft, and distribution. Tap an act to inspect the breakdown.
          </p>
        </ScrollReveal>

        {/* Currency Ribbon in Curriculum */}
        <ScrollReveal variant="fade-up" delay={250} className="my-8">
          <PricingRibbon />
        </ScrollReveal>

        {/* Quick CTA strip with RollingText */}
        <ScrollReveal variant="fade-up" delay={300}>
          <a
            href="https://paystack.shop/pay/aiwithcole"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="ENROLL"
            className="group block bg-[#FF3B30] p-4 text-center my-6 transition-all duration-300 hover:bg-[#e03126] hover:shadow-[0_0_25px_rgba(255,59,48,0.45)]"
          >
            <div className="font-bebas text-2xl sm:text-3xl tracking-wide text-white">
              <RollingText text="GET INSTANT ACCESS TO ALL 19 LESSONS → ₦5,000" />
            </div>
          </a>
        </ScrollReveal>

        {/* Acts Accordion */}
        <div className="mt-8 border border-[#26262A] divide-y divide-[#26262A] bg-[#0B0B0D]">
          {ACTS.map((act, index) => {
            const isOpen = openActs.includes(index);
            return (
              <div key={index} className="overflow-hidden transition-colors">
                {/* Act Header Button */}
                <button
                  onClick={() => toggleAct(index)}
                  className={`flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer ${
                    isOpen ? "bg-[#FF3B30]/[0.05]" : "hover:bg-[#151517]/80"
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span
                      className={`font-bebas text-3xl sm:text-4xl tracking-wider w-10 shrink-0 transition-colors ${
                        isOpen ? "text-[#FF3B30]" : "text-[#8E8E96]"
                      }`}
                    >
                      {act.roman}
                    </span>
                    <div className="min-w-0">
                      <div className="font-sans text-base sm:text-lg font-bold text-[#EDEDEC]">
                        {act.title}
                      </div>
                      <div className="mt-1 font-sans text-xs sm:text-sm text-[#8E8E96] truncate sm:whitespace-normal">
                        {act.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-xs text-[#8E8E96]">
                      {act.lessons.length} LESSONS
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center border border-[#26262A] bg-[#151517] text-[#FF3B30]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Lessons List Body */}
                {isOpen && (
                  <div className="divide-y divide-[#26262A] bg-[#0E0E11]/80">
                    {act.lessons.map((lesson, lIdx) => (
                      <div
                        key={lIdx}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 transition-colors hover:bg-[#151517]/50"
                      >
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-xs font-bold text-[#FF3B30] mt-0.5 shrink-0">
                            {lesson.number}
                          </span>
                          <div>
                            <div className="font-sans text-sm sm:text-base font-semibold text-[#EDEDEC] group-hover:text-white">
                              {lesson.title}
                            </div>
                            {lesson.desc && (
                              <div className="mt-1 font-sans text-xs text-[#8E8E96]">
                                {lesson.desc}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto ml-8 sm:ml-0">
                          <span className="inline-flex items-center gap-1.5 border border-[#26262A] bg-[#151517] px-2.5 py-1 font-mono text-[11px] text-[#8E8E96]">
                            <Clock className="h-3 w-3 text-[#FF3B30]" />
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
