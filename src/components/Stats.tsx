"use client";

import React from "react";
import { Users, Eye, BookOpen, Clock } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";

const STATS = [
  {
    number: "2,000+",
    label: "Students Enrolled",
    icon: Users,
    detail: "Creators, editors, directors worldwide",
  },
  {
    number: "2.6M+",
    label: "Audience Reach",
    icon: Eye,
    detail: "Across viral social media channels",
  },
  {
    number: "9+",
    label: "Detailed Video Lessons",
    icon: BookOpen,
    detail: "Step-by-step practical masterclass",
  },
  {
    number: "3h+",
    label: "Runtime Content",
    icon: Clock,
    detail: "Zero fluff, 100% actionable craft",
  },
];

export function Stats() {
  return (
    <section className="border-y border-[#26262A] bg-[#0E0E11] relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#26262A]">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                delay={idx * 90}
                className="h-full"
              >
                <div
                  className="group relative h-full p-6 sm:p-8 transition-colors duration-300 hover:bg-[#151517]/80"
                  data-cursor-text="STATS"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bebas text-4xl sm:text-5xl tracking-wide text-white group-hover:text-[#FF3B30] transition-colors duration-300">
                      <AnimatedCounter value={stat.number} />
                    </span>
                    <Icon className="h-5 w-5 text-[#8E8E96]/50 group-hover:text-[#FF3B30] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#EDEDEC] font-semibold">
                    {stat.label}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-[#8E8E96]">
                    {stat.detail}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
