"use client";

import React, { useState } from "react";
import { 
  FileText, 
  BookOpen, 
  UserCheck, 
  Layers, 
  Video, 
  Film, 
  Image as ImageIcon, 
  Palette,
  Volume2, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Plus, 
  Minus,
  HelpCircle,
  GraduationCap,
  ShieldCheck,
  Send,
  Globe
} from "lucide-react";
import { PricingRibbon } from "./PricingRibbon";
import { ScrollReveal } from "./ScrollReveal";
import { RollingText } from "./RollingText";

function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

interface CourseTopic {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
}

const WHAT_YOULL_LEARN: CourseTopic[] = [
  {
    id: "script-dev",
    number: "01",
    title: "AI Script Development",
    description: "Learn how to develop ideas into engaging scripts for short films, cinematic videos, and online content.",
    category: "Story & Concept",
    icon: FileText,
  },
  {
    id: "story-writing",
    number: "02",
    title: "AI Story Writing",
    description: "Discover how to structure compelling stories, develop characters, and create narratives that capture attention.",
    category: "Story & Concept",
    icon: BookOpen,
  },
  {
    id: "char-creation",
    number: "03",
    title: "Character Creation",
    description: "Learn how to create visually appealing AI characters that fit your story and creative vision.",
    category: "Visual Identity",
    icon: UserCheck,
  },
  {
    id: "scene-consistency",
    number: "04",
    title: "Scene Consistency",
    description: "Understand techniques for maintaining consistent characters, appearances, and visual details across multiple scenes.",
    category: "Visual Identity",
    icon: Layers,
  },
  {
    id: "video-call",
    number: "05",
    title: "Video Call Realism",
    description: "Make a video call from your laptop showing another person's face seamlessly.",
    category: "VFX & Stunts",
    icon: Video,
  },
  {
    id: "realistic-video",
    number: "06",
    title: "Realistic AI Video Generation",
    description: "Explore free and paid AI video tools for turning prompts and images into engaging video sequences.",
    category: "Video Synthesis",
    icon: Film,
  },
  {
    id: "realistic-image",
    number: "07",
    title: "Realistic AI Image Generation",
    description: "Learn how to generate cinematic images and visual assets for your projects.",
    category: "Visual Assets",
    icon: ImageIcon,
  },
  {
    id: "poster-design",
    number: "08",
    title: "AI Realistic Poster Design",
    description: "Discover how to design posters for your brand and personal use.",
    category: "Visual Assets",
    icon: Palette,
  },
  {
    id: "sound-voice",
    number: "09",
    title: "AI Voiceovers, Sound & Music",
    description: "Discover how to enhance your productions with narration, sound effects, and music using AI tools.",
    category: "Audio Design",
    icon: Volume2,
  },
  {
    id: "cinematic-vfx",
    number: "10",
    title: "Cinematic Editing & Visual Effects",
    description: "Learn how to combine scenes, improve pacing, and make your final videos more engaging.",
    category: "Post-Production",
    icon: Sparkles,
  },
  {
    id: "youtube-automation",
    number: "11",
    title: "YouTube Automation",
    description: "Learn how to automate content creation, streamline your video production pipeline, and scale your YouTube channel using AI.",
    category: "Automation & Tools",
    icon: YoutubeIcon,
  },
  {
    id: "useful-websites",
    number: "12",
    title: "Access to 500+ Useful Websites",
    description: "Get access to websites that can be used to complete utility tasks.",
    category: "Automation & Tools",
    icon: Globe,
  },
  {
    id: "continuous-growth",
    number: "13",
    title: "Continuous Learning & AI Updates",
    description: "Develop the habit of exploring new AI tools, features, and techniques as the technology evolves.",
    category: "Mastery & Future",
    icon: TrendingUp,
  },
];

const ENROLLMENT_INCLUDES = [
  "More than 9+ detailed video lessons",
  "A comprehensive guide to free and paid AI tools",
  "Step-by-step practical learning & prompt workflows",
  "Personal support through Telegram group",
  "Access on your phone, tablet, or computer",
  "Lifetime access with a one-time payment",
];

const TARGET_AUDIENCE = [
  "Beginners who want to explore AI filmmaking without prior experience",
  "YouTubers and social media content creators seeking viral retention",
  "Aspiring filmmakers and storytellers looking to produce without big budgets",
  "Digital marketers and creative entrepreneurs building visual campaigns",
  "Video editors who want to expand their skills with modern generative AI",
  "Anyone interested in creating AI-generated films, realistic videos & cinematic content",
];

export function Curriculum() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const categories = ["ALL", "Story & Concept", "Visual Identity", "Video Synthesis", "Visual Assets", "Audio Design", "Post-Production", "Automation & Tools"];

  const filteredTopics = activeCategory === "ALL" 
    ? WHAT_YOULL_LEARN 
    : WHAT_YOULL_LEARN.filter(t => t.category === activeCategory);

  return (
    <section id="curriculum" className="relative bg-[#151517] py-20 sm:py-28 overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/4 -right-40 h-96 w-96 rounded-full bg-[#FF3B30]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        
        {/* Section Tag */}
        <ScrollReveal variant="fade-up" delay={50}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#FF3B30]">
              <span className="h-px w-5 bg-[#FF3B30]" />
              <span>THE CURRICULUM</span>
            </div>

            <div className="font-mono text-xs text-[#8E8E96]">
              13 CORE PILLARS · 10+ VIDEO LESSONS
            </div>
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <ScrollReveal variant="mask-up" delay={120}>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white">
            WHAT YOU'LL LEARN
          </h2>
        </ScrollReveal>

        {/* Section Intro */}
        <ScrollReveal variant="fade-up" delay={200}>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-[#8E8E96] leading-relaxed">
            By the end of this training, you'll understand the essential techniques involved in creating AI-powered films and visual content.
          </p>
        </ScrollReveal>

        {/* Currency Ribbon in Curriculum */}
        <ScrollReveal variant="fade-up" delay={250} className="my-8">
          <PricingRibbon />
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal variant="fade-up" delay={280}>
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 font-mono text-xs transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                  activeCategory === cat
                    ? "border-[#FF3B30] bg-[#FF3B30]/10 text-white font-semibold"
                    : "border-[#26262A] bg-[#0B0B0D] text-[#8E8E96] hover:text-[#EDEDEC] hover:border-[#38383E]"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 13 Core Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTopics.map((topic, index) => {
            const Icon = topic.icon;
            const isExpanded = expandedTopic === topic.id;

            return (
              <ScrollReveal
                key={topic.id}
                variant="fade-up"
                delay={index * 50}
                className="h-full"
              >
                <div 
                  onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                  className="group relative h-full border border-[#26262A] bg-[#0B0B0D] p-5 sm:p-6 transition-all duration-300 hover:border-[#FF3B30]/50 hover:bg-[#0E0E11] cursor-pointer flex flex-col justify-between"
                  data-cursor-text="MODULE"
                >
                  <div>
                    {/* Header: Number, Category & Icon */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-[#FF3B30] bg-[#FF3B30]/10 px-2 py-0.5 border border-[#FF3B30]/20">
                          {topic.number}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#8E8E96]">
                          {topic.category}
                        </span>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center border border-[#26262A] bg-[#151517] text-[#8E8E96] group-hover:text-[#FF3B30] group-hover:border-[#FF3B30]/30 transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-base sm:text-lg font-bold text-[#EDEDEC] group-hover:text-white transition-colors">
                      {topic.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[#8E8E96] leading-relaxed group-hover:text-[#A0A0AA] transition-colors">
                      {topic.description}
                    </p>
                  </div>

                  {/* Micro indicator */}
                  <div className="mt-4 pt-3 border-t border-[#1C1C20] flex items-center justify-between text-[11px] font-mono text-[#8E8E96]/70 group-hover:text-[#FF3B30] transition-colors">
                    <span>STEP-BY-STEP WORKFLOW</span>
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* What Makes This Course Valuable Box */}
        <ScrollReveal variant="fade-up" delay={200} className="mt-12">
          <div className="border border-[#26262A] bg-[#0B0B0D] p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#FF3B30] via-emerald-500 to-[#FF3B30]" />
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#FF3B30] mb-2">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>WHAT MAKES THIS COURSE VALUABLE?</span>
              </div>
              <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide mt-1">
                NO TRADITIONAL FILM SCHOOL PREREQUISITES
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#8E8E96] leading-relaxed">
                You don't need to master every aspect of traditional filmmaking before you begin exploring AI filmmaking. This course helps you understand the creative workflow and the tools that can make the process more accessible. Instead of struggling to figure everything out on your own, you'll have a structured learning path to guide your progress.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column: Who Is This For & Enrollment Inclusions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Who Is This Course For? */}
          <ScrollReveal variant="fade-up" delay={250} className="h-full">
            <div className="border border-[#26262A] bg-[#0B0B0D] p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#FF3B30] mb-2">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>TARGET CREATORS</span>
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
                  WHO IS THIS COURSE FOR?
                </h3>
                <p className="mt-2 text-xs font-mono text-[#8E8E96]">
                  This training is suitable for:
                </p>

                <div className="mt-5 space-y-3.5">
                  {TARGET_AUDIENCE.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#FF3B30] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#EDEDEC] leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1C1C20] font-mono text-xs text-[#8E8E96]">
                You can start learning with the tools and resources available to you, then explore more advanced options as your skills develop.
              </div>
            </div>
          </ScrollReveal>

          {/* What Your Enrollment Includes */}
          <ScrollReveal variant="fade-up" delay={300} className="h-full">
            <div className="border border-[#26262A] bg-[#0B0B0D] p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-emerald-400 mb-2">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>INSTANT PASS</span>
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
                  HERE'S WHAT YOUR ENROLLMENT INCLUDES:
                </h3>
                <p className="mt-2 text-xs font-mono text-[#8E8E96]">
                  Direct lifetime delivery upon checkout:
                </p>

                <div className="mt-5 space-y-3.5">
                  {ENROLLMENT_INCLUDES.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#EDEDEC] leading-snug">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telegram Redirection Notice */}
              <div className="mt-6 pt-4 border-t border-[#1C1C20] flex items-center gap-3 font-mono text-xs text-emerald-300/90 bg-emerald-950/20 p-3 border border-emerald-900/30">
                <Send className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>
                  After making payment for this course, you will be redirected to the Telegram group where all video tutorials are uploaded.
                </span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Your Investment Card & Dual CTAs */}
        <ScrollReveal variant="fade-up" delay={350} className="mt-10">
          <div className="border border-[#FF3B30]/40 bg-[#0E0E11] p-6 sm:p-10 relative shadow-[0_0_50px_rgba(255,59,48,0.12)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#FF3B30] mb-2">
                  <span>ONE-TIME ENROLLMENT</span>
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">
                  YOUR INVESTMENT: ₦5,000 LIFETIME ACCESS
                </h3>
                <p className="mt-3 text-sm text-[#8E8E96] leading-relaxed">
                  Pay once and revisit the training whenever you need it. No recurring subscription is required for the course access described here. For the price of a single payment, you can begin building your understanding of AI filmmaking, explore creative workflows, and develop skills you can continue improving over time.
                </p>
              </div>

              <div className="md:col-span-5 flex flex-col gap-3">
                <a
                  href="https://paystack.shop/pay/aiwithcole"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="PAYSTACK"
                  className="group flex w-full items-center justify-center bg-[#FF3B30] py-4 text-center transition-all duration-300 hover:bg-[#e03126] hover:shadow-[0_0_25px_rgba(255,59,48,0.45)]"
                >
                  <span className="font-bebas text-2xl tracking-wide text-white">
                    <RollingText text="BUY NOW (NIGERIAN) → ₦5,000" />
                  </span>
                </a>

                <a
                  href="https://selar.com/919r4914y1"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="SELAR"
                  className="group flex w-full items-center justify-center border border-emerald-500/60 bg-emerald-950/40 py-3.5 text-center transition-all duration-300 hover:bg-emerald-900/60 hover:border-emerald-400"
                >
                  <span className="font-bebas text-xl tracking-wide text-emerald-200">
                    <RollingText text="BUY ON SELAR (INTERNATIONAL / USD / GBP)" />
                  </span>
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
