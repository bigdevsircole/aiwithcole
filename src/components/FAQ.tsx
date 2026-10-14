"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Do I need any filmmaking or editing experience?",
    answer:
      "No. The whole point of Cole's method is that you don't need a physical camera, actors, or a traditional film school background. If you can type a sentence and follow simple steps, you can create your first scene on day one.",
  },
  {
    question: "What tools do I need to buy?",
    answer:
      "You don't need expensive paid software subscriptions to begin. The course includes a comprehensive guide to both free and paid AI tools, so you can start learning with the tools and resources available to you, then explore more advanced options as your skills develop.",
  },
  {
    question: "Is this only useful for Nigerian-style drama content?",
    answer:
      "No. While viral episodic dramas serve as an intensive real-world case study, the character consistency, prompt architecture, cinematic lighting, voice locking, and distribution playbooks apply to any genre: sci-fi, thrillers, social reels, or commercial storytelling.",
  },
  {
    question: "How do I get access after I pay?",
    answer:
      "Payment is processed securely via Paystack or Selar. After making payment for this course, you will be redirected directly to the Telegram group where all video tutorials and resources are uploaded.",
  },
  {
    question: "Is there support if I get stuck?",
    answer:
      "Yes. Your enrollment includes personal support directly through the Telegram group, where Cole guides you, answers questions, and shares new AI tool updates.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <ScrollReveal variant="fade-up" delay={50}>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#FF3B30] mb-3">
              <span className="h-px w-5 bg-[#FF3B30]" />
              <span>COMMON QUESTIONS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="mask-up" delay={120}>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white">
              BEFORE YOU ROLL.
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <p className="mt-2 text-sm sm:text-base text-[#8E8E96]">
              Clear answers to help you decide before jumping into the masterclass.
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion */}
        <div className="border-t border-[#26262A] divide-y divide-[#26262A]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 60}>
                <div className="transition-colors">
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group"
                    data-cursor-text={isOpen ? "CLOSE" : "OPEN"}
                  >
                    <span className="font-sans text-base sm:text-lg font-semibold text-[#EDEDEC] group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center border border-[#26262A] bg-[#151517] text-[#FF3B30] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm sm:text-base text-[#8E8E96] leading-relaxed transition-opacity duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
