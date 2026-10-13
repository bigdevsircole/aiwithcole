"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  variant?: "mask-up" | "fade-up" | "scale-up" | "line-draw";
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  if (variant === "mask-up") {
    return (
      <div ref={elementRef} className={`line-mask ${className}`}>
        <div
          className={`line-inner ${isVisible ? "line-revealed" : ""}`}
          style={{
            transitionDelay: `${delay}ms`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  if (variant === "scale-up") {
    return (
      <div
        ref={elementRef}
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${className}`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }

  if (variant === "line-draw") {
    return (
      <div
        ref={elementRef}
        className={`transition-all duration-1000 ease-[cubic-bezier(0.66,0,0.15,1)] ${
          isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-20"
        } origin-left ${className}`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }

  // Default: fade-up
  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
