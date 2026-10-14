"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface RollingTextProps {
  text: string;
  className?: string;
  innerClassName?: string;
}

export function RollingText({
  text,
  className = "",
  innerClassName = "",
}: RollingTextProps) {
  return (
    <span className={`uc-roll ${className}`}>
      <span className={`uc-roll-inner ${innerClassName}`}>
        <span className="uc-roll-top">{text}</span>
        <span className="uc-roll-bottom" aria-hidden="true">
          {text}
        </span>
      </span>
    </span>
  );
}

interface RollingButtonProps {
  href: string;
  children: string;
  variant?: "primary" | "secondary" | "emerald" | "outline";
  className?: string;
  showArrow?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
  cursorText?: string;
}

export function RollingButton({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = false,
  target,
  rel,
  onClick,
  cursorText,
}: RollingButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#FF3B30] text-white hover:bg-[#e03126] shadow-[0_0_20px_rgba(255,59,48,0.3)] hover:shadow-[0_0_30px_rgba(255,59,48,0.55)] border border-transparent",
    secondary:
      "bg-[#151517] text-[#EDEDEC] hover:bg-[#1E1E22] border border-[#26262A] hover:border-[#FF3B30]/40",
    emerald:
      "bg-emerald-950/40 text-emerald-200 border border-emerald-500/50 hover:bg-emerald-900/60 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    outline:
      "bg-transparent text-white border border-[#26262A] hover:border-[#FF3B30] hover:text-[#FF3B30]",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? (rel ? `${rel} noopener noreferrer` : "noopener noreferrer") : rel}
      onClick={onClick}
      data-cursor-text={cursorText}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden px-5 py-3 font-mono text-xs font-semibold tracking-wider transition-all duration-300 active:scale-[0.98] ${variantStyles[variant]} ${className}`}
    >
      <RollingText text={children} />

      {showArrow && (
        <span className="relative flex h-3.5 w-3.5 items-center justify-center overflow-hidden">
          <ArrowUpRight className="uc-arrow-top h-3.5 w-3.5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.66,0,0.15,1)]" />
          <ArrowUpRight
            className="uc-arrow-bot absolute h-3.5 w-3.5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.66,0,0.15,1)]"
            aria-hidden="true"
          />
        </span>
      )}
    </a>
  );
}
