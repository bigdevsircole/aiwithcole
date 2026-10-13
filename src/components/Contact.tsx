"use client";

import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { RollingText } from "./RollingText";

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Contact() {
  const channels = [
    {
      name: "WhatsApp",
      subtitle: "Message Cole's team directly (Fastest response)",
      href: "https://wa.me/message/Y3XN5SLQXC3SM1",
      icon: MessageCircle,
      accent: "hover:border-emerald-500/50 hover:bg-emerald-950/20",
    },
    {
      name: "Instagram",
      subtitle: "@aiwithcole · DM for course inquiries",
      href: "https://www.instagram.com/bigmrgrey?igsh=MXQ5MmpoNWNsN2x2cg%3D%3D&utm_source=qr",
      icon: InstagramIcon,
      accent: "hover:border-pink-500/50 hover:bg-pink-950/20",
    },
    {
      name: "Facebook",
      subtitle: "Follow the official AI series page & community",
      href: "https://www.facebook.com/share/18qu1r39rD/?mibextid=wwXIfr",
      icon: FacebookIcon,
      accent: "hover:border-blue-500/50 hover:bg-blue-950/20",
    },
  ];

  return (
    <section id="contact" className="relative bg-[#151517] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <ScrollReveal variant="fade-up" delay={50}>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] text-[#FF3B30] mb-3">
              <span className="h-px w-5 bg-[#FF3B30]" />
              <span>GET IN TOUCH</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="mask-up" delay={120}>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white">
              QUESTIONS BEFORE YOU ENROLL?
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <p className="mt-2 max-w-lg text-sm sm:text-base text-[#8E8E96]">
              Reach the team directly on any channel — WhatsApp is best for fast inquiries.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Cards with Staggered ScrollReveal and Diagonal Arrow roll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {channels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 100} className="h-full">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="CHAT"
                  className={`group flex items-center justify-between border border-[#26262A] bg-[#0B0B0D] p-5 sm:p-6 transition-all duration-300 h-full ${channel.accent}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#26262A] bg-[#151517] text-white group-hover:text-[#FF3B30] group-hover:border-[#FF3B30]/40 transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-sans text-base font-bold text-white group-hover:text-[#FF3B30] transition-colors duration-300">
                        <RollingText text={channel.name} />
                      </div>
                      <div className="mt-0.5 text-xs text-[#8E8E96]">
                        {channel.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden shrink-0 ml-2">
                    <ArrowUpRight className="uc-arrow-top h-4 w-4 text-[#FF3B30] transition-transform duration-500 ease-[cubic-bezier(0.66,0,0.15,1)]" />
                    <ArrowUpRight
                      className="uc-arrow-bot absolute h-4 w-4 text-[#FF3B30] transition-transform duration-500 ease-[cubic-bezier(0.66,0,0.15,1)]"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
