"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { RollingText } from "./RollingText";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#26262A] bg-[#0B0B0D] py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-bebas text-2xl tracking-wider text-white">
            AI WITH <span className="text-[#FF3B30]">COLE</span>
          </span>
          <span className="font-mono text-xs text-[#8E8E96] ml-2 border-l border-[#26262A] pl-3">
            AI FILMMAKING METHOD
          </span>
        </div>

        {/* Social Links with Hover Underline Sweep */}
        <div className="flex items-center gap-6 font-mono text-xs text-[#8E8E96]">
          <a
            href="https://wa.me/2348180402086"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-line hover:text-white transition-colors"
            data-cursor-text="WHATSAPP"
          >
            <RollingText text="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com/calebyinusa/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-line hover:text-white transition-colors"
            data-cursor-text="INSTAGRAM"
          >
            <RollingText text="Instagram" />
          </a>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#8E8E96]">
            © 2026 AI WITH COLE · ALL RIGHTS RESERVED
          </span>
          <button
            onClick={scrollToTop}
            className="group flex h-8 w-8 items-center justify-center border border-[#26262A] bg-[#151517] text-[#8E8E96] hover:text-white hover:border-[#FF3B30] transition-colors cursor-pointer"
            title="Scroll to top"
            data-cursor-text="TOP"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
