"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Send,
  MessageCircle,
  Copy,
  CheckCheck,
  AlertCircle,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileText,
  Lightbulb,
  ExternalLink
} from "lucide-react";

// PERSONALIZED COMMUNITY & SUPPORT CONFIGURATION
// You can replace this Telegram link with your private VIP invite link whenever needed:
export const TELEGRAM_INVITE_URL = "https://t.me/+fa2es2blgphlZjhk";
export const WHATSAPP_NUMBER_INTL = "+234 818 040 2086";
export const WHATSAPP_NUMBER_LOCAL = "0818 040 2086";
export const WHATSAPP_CHAT_URL = "https://wa.me/2348180402086?text=Hi%20Cole,%20I%20just%20enrolled%20in%20AI%20With%20Cole!";

export default function SuccessClient() {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+2348180402086");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="min-h-screen bg-[#0B0B0D] text-[#EDEDEC] relative py-12 sm:py-20 px-4 sm:px-6 selection:bg-[#FF3B30] selection:text-white">
      {/* Film grain subtle overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 film-grain" />

      {/* Ambient background glow */}
      <div className="pointer-events-none fixed top-10 left-1/2 -translate-x-1/2 h-[380px] w-[600px] max-w-full rounded-full bg-[#FF3B30]/10 blur-[120px] z-0" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Brand Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#26262A]">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="font-bebas text-2xl tracking-[0.05em] sm:text-3xl font-normal text-white">
              AI WITH <span className="text-[#FF3B30]">COLE</span>
            </span>
            <span className="font-mono text-[11px] text-[#8E8E96] border-l border-[#26262A] pl-3 ml-1 hidden sm:inline-block">
              CONFIDENTIAL STUDENT ONBOARDING
            </span>
          </Link>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PAYMENT VERIFIED</span>
          </div>
        </div>

        {/* Main Confirmation Card */}
        <div className="relative border border-[#26262A] bg-[#151517] p-6 sm:p-10 shadow-2xl">
          {/* Viewfinder corner brackets */}
          <div className="pointer-events-none absolute top-2 left-2 h-4 w-4 bracket-tl z-20" />
          <div className="pointer-events-none absolute top-2 right-2 h-4 w-4 bracket-tr z-20" />
          <div className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 bracket-bl z-20" />
          <div className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 bracket-br z-20" />

          {/* Top Status & Badge */}
          <div className="text-center flex flex-col items-center">
            {/* Animated Success Check Icon */}
            <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-500/40 text-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.25)]">
              <Check className="h-8 w-8 stroke-[2.5]" />
              <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-ping opacity-25" />
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-[#FF3B30] mb-3">
              <span className="h-px w-4 bg-[#FF3B30]" />
              <span>ENROLLMENT CONFIRMED</span>
              <span className="h-px w-4 bg-[#FF3B30]" />
            </div>

            <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white leading-tight">
              WELCOME TO AI WITH COLE
            </h1>

            <p className="mt-3 max-w-xl text-sm sm:text-base text-[#8E8E96] leading-relaxed">
              Your payment has been received successfully. You are now officially registered for the AI Filmmaking Masterclass with lifetime access to all course modules and future updates.
            </p>
          </div>

          {/* Next Step Box (Primary Hero CTA) */}
          <div className="mt-8 sm:mt-10 border border-[#FF3B30]/40 bg-[#0B0B0D] p-6 sm:p-8 relative overflow-hidden group">
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF3B30] via-rose-500 to-[#FF3B30]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#FF3B30]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>MANDATORY FIRST STEP</span>
              </div>
              <span className="font-mono text-xs text-[#8E8E96]">
                ADMIT ONE VIP • LIFETIME ACCESS
              </span>
            </div>

            <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
              JOIN THE PRIVATE VIP TELEGRAM CHANNEL
            </h2>

            <p className="mt-2 text-sm text-[#8E8E96] leading-relaxed">
              Everything you need to begin your AI journey is hosted inside our private Telegram community — full HD video lessons, prompt templates, tool guides, and direct mentorship from Cole.
            </p>

            <div className="mt-6">
              <a
                href={TELEGRAM_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex w-full items-center justify-center gap-3 bg-[#FF3B30] hover:bg-[#e03126] text-white py-4 px-6 font-mono text-sm sm:text-base font-bold tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(255,59,48,0.35)] hover:shadow-[0_0_40px_rgba(255,59,48,0.55)] active:scale-[0.99]"
              >
                <Send className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                <span>JOIN THE PRIVATE TELEGRAM CHANNEL NOW</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-2 text-center font-mono text-[11px] text-[#8E8E96]">
                Instant automated admission • Click the button above to enter immediately
              </p>
            </div>
          </div>

          {/* Section: Read This Before You Start */}
          <div className="mt-12 sm:mt-14">
            <div className="flex items-center gap-3 mb-6 border-b border-[#26262A] pb-3">
              <span className="h-2 w-2 rounded-full bg-[#FF3B30]" />
              <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
                READ THIS BEFORE YOU START
              </h2>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4 p-4 sm:p-5 border border-[#26262A] bg-[#0B0B0D]">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center font-mono font-bold text-sm bg-[#151517] border border-[#FF3B30]/50 text-[#FF3B30]">
                  01
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span>Locate the Pinned Messages</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8E96] leading-relaxed">
                    As soon as you enter the VIP Telegram channel, inspect the <strong className="text-white">PINNED MESSAGES</strong> at the very top of the chat:
                  </p>
                  <ul className="space-y-2 pt-1 font-mono text-xs text-[#EDEDEC]">
                    <li className="flex items-start gap-2 bg-[#151517] p-2.5 border border-[#26262A]">
                      <FileText className="h-4 w-4 text-[#FF3B30] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Pinned Message:</strong> The complete <strong>Course Outline & Direct Video Links</strong> covering all lessons from script to final video render.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 p-4 sm:p-5 border border-[#26262A] bg-[#0B0B0D]">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center font-mono font-bold text-sm bg-[#151517] border border-[#FF3B30]/50 text-[#FF3B30]">
                  02
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-white">
                    Follow the Lessons in Exact Sequence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8E96] leading-relaxed">
                    Work through the lessons exactly as structured. Each module builds upon the previous one with direct practical demonstrations.
                  </p>
                  <div className="border border-amber-500/30 bg-amber-950/20 p-3 sm:p-4 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                    <strong className="text-amber-300 font-semibold uppercase font-mono tracking-wider block mb-1">
                      ⚠️ Crucial Advice:
                    </strong>
                    Do not rush to start generating after Lesson 1. Watch all the foundational lessons first. You will gain a deep understanding of both free and paid AI tools, making your practical production much faster and cost-effective.
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 p-4 sm:p-5 border border-[#26262A] bg-[#0B0B0D]">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center font-mono font-bold text-sm bg-[#151517] border border-[#FF3B30]/50 text-[#FF3B30]">
                  03
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-white">
                    Tool Updates & Free Workflow Alternatives
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8E96] leading-relaxed">
                    The AI ecosystem updates rapidly. Inside the channel, Cole constantly drops updated tool releases, free alternatives, and prompt patches:
                  </p>
                  <div className="border border-blue-500/30 bg-blue-950/20 p-3 sm:p-4 text-xs sm:text-sm text-blue-200/90 leading-relaxed">
                    <div className="flex items-center gap-2 font-mono font-semibold text-blue-300 mb-1">
                      <Lightbulb className="h-4 w-4" />
                      <span>Stay Updated in the Channel</span>
                    </div>
                    If any third-party tool changes its pricing tier or interface, check the pinned announcements for alternative free generators and updated workarounds.
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4 p-4 sm:p-5 border border-[#26262A] bg-[#0B0B0D]">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center font-mono font-bold text-sm bg-[#151517] border border-[#FF3B30]/50 text-[#FF3B30]">
                  04
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-white">
                    Don&apos;t Purchase Expensive Tools Yet
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8E96] leading-relaxed">
                    Finish the lessons before subscribing to expensive software or buying extra credits. Once you complete the curriculum, you will know exactly which tools fit your storytelling style without burning money unnecessarily.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4 p-4 sm:p-5 border border-[#26262A] bg-[#0B0B0D]">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center font-mono font-bold text-sm bg-[#151517] border border-[#FF3B30]/50 text-[#FF3B30]">
                  05
                </div>
                <div className="w-full space-y-3">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-white">
                    Need Help or Direct Guidance?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8E96] leading-relaxed">
                    If you have questions, run into payment confirmation delays, or need help accessing the community, contact Cole directly on WhatsApp.
                  </p>

                  {/* WhatsApp Contact Box */}
                  <div className="border border-emerald-500/30 bg-emerald-950/20 p-4 sm:p-5 mt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-400">
                          <MessageCircle className="h-4 w-4" />
                          <span>OFFICIAL WHATSAPP DIRECT LINE</span>
                        </div>
                        <div className="mt-1 font-mono text-lg sm:text-xl font-bold text-white">
                          {WHATSAPP_NUMBER_INTL}
                        </div>
                        <div className="font-mono text-xs text-[#8E8E96]">
                          Local: {WHATSAPP_NUMBER_LOCAL} · Direct Chat with Cole
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5">
                        <button
                          onClick={handleCopyNumber}
                          className="inline-flex items-center gap-1.5 border border-[#26262A] bg-[#0B0B0D] hover:border-white px-3.5 py-2 font-mono text-xs text-[#EDEDEC] transition-colors"
                        >
                          {copied ? (
                            <>
                              <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                              <span>COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 text-[#8E8E96]" />
                              <span>COPY NUMBER</span>
                            </>
                          )}
                        </button>

                        <a
                          href={WHATSAPP_CHAT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                        >
                          <span>CHAT ON WHATSAPP</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-12 pt-8 border-t border-[#26262A] flex flex-col items-center text-center">
            <a
              href={TELEGRAM_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-md items-center justify-center gap-2 bg-[#FF3B30] hover:bg-[#e03126] text-white py-4 px-8 font-mono text-sm sm:text-base font-bold tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(255,59,48,0.35)] hover:shadow-[0_0_45px_rgba(255,59,48,0.55)]"
            >
              <Send className="h-5 w-5" />
              <span>JOIN THE TELEGRAM CHANNEL NOW</span>
            </a>
            <p className="mt-3 font-mono text-xs text-[#8E8E96]">
              Keep this link bookmarked if you ever need to re-access the community.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center font-mono text-xs text-[#8E8E96] space-y-1">
          <div>AI WITH COLE · AI FILMMAKING MASTERCLASS</div>
          <div>All rights reserved © 2026</div>
        </div>
      </div>
    </main>
  );
}
