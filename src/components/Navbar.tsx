"use client";

import React from "react";
import Link from "next/link";
import { RollingText, RollingButton } from "./RollingText";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#26262A] bg-[#0B0B0D]/85 px-4 py-3.5 backdrop-blur-md sm:px-8">
      {/* Brand */}
      <Link href="/" className="group flex items-center gap-2 tracking-wide" data-cursor-text="HOME">
        <span className="font-bebas text-2xl tracking-[0.05em] sm:text-3xl font-normal text-white">
          AI WITH <span className="text-[#FF3B30] group-hover:drop-shadow-[0_0_12px_rgba(255,59,48,0.9)] transition-all">COLE</span>
        </span>
      </Link>

      {/* Nav Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-6 font-mono text-xs tracking-wider text-[#8E8E96]">
        <a
          href="#curriculum"
          className="group hover:text-white transition-colors"
          data-cursor-text="EXPLORE"
        >
          <RollingText text="CURRICULUM" />
        </a>
        <a
          href="#pricing"
          className="group hover:text-white transition-colors"
          data-cursor-text="PRICING"
        >
          <RollingText text="TUITION" />
        </a>
        <a
          href="#faq"
          className="group hover:text-white transition-colors"
          data-cursor-text="FAQ"
        >
          <RollingText text="QUESTIONS" />
        </a>
      </nav>

      {/* Nav Controls */}
      <div className="flex items-center gap-3 sm:gap-6">

        {/* CTA Button */}
        <RollingButton
          href="https://paystack.shop/pay/aiwithcole"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          showArrow
          cursorText="ENROLL"
          className="px-4 py-2 sm:px-5 sm:py-2.5"
        >
          BUY NOW — ₦5,000
        </RollingButton>
      </div>
    </header>
  );
}
