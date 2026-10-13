"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "2,000+", "2.6M+", "19", "3h+"
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1800,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let hasStarted = false;

    const startAnimation = () => {
      const match = value.match(/([\d,.]+)/);
      if (!match) {
        setDisplayValue(value);
        return;
      }

      const rawNumStr = match[1].replace(/,/g, "");
      const targetNum = parseFloat(rawNumStr);
      const isDecimal = rawNumStr.includes(".");
      const suffix = value.slice(match.index! + match[1].length);
      const prefix = value.slice(0, match.index!);

      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = targetNum * ease;

        let formattedCurrent: string;
        if (isDecimal) {
          formattedCurrent = current.toFixed(1);
        } else {
          formattedCurrent = Math.round(current).toLocaleString();
        }

        setDisplayValue(`${prefix}${formattedCurrent}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          hasStarted = true;
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={containerRef} className={className}>
      {displayValue}
    </span>
  );
}
