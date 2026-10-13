"use client";

import React, { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isVisible = useRef(false);

  useEffect(() => {
    // Only run on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      if (dotRef.current) dotRef.current.style.display = "none";
      if (ringRef.current) ringRef.current.style.display = "none";
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const textEl = textRef.current;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible.current) {
        isVisible.current = true;
        if (dot) dot.style.opacity = "1";
        if (ring) ring.style.opacity = "1";
      }

      // Check hover target
      const target = e.target as HTMLElement | null;
      if (target && ring) {
        const interactive = target.closest("a, button, [data-cursor], [data-cursor-text], input, select");
        if (interactive) {
          const customText = interactive.getAttribute("data-cursor-text") || "";
          if (customText) {
            ring.style.width = "4rem";
            ring.style.height = "4rem";
            ring.style.backgroundColor = "rgba(255, 59, 48, 0.9)";
            ring.style.borderColor = "transparent";
            ring.style.boxShadow = "0 0 25px rgba(255, 59, 48, 0.6)";
            if (textEl) {
              textEl.innerText = customText;
              textEl.style.opacity = "1";
            }
          } else {
            ring.style.width = "3rem";
            ring.style.height = "3rem";
            ring.style.backgroundColor = "rgba(255, 59, 48, 0.1)";
            ring.style.borderColor = "#FF3B30";
            ring.style.boxShadow = "none";
            if (textEl) {
              textEl.innerText = "";
              textEl.style.opacity = "0";
            }
          }
        } else {
          ring.style.width = "2.25rem";
          ring.style.height = "2.25rem";
          ring.style.backgroundColor = "transparent";
          ring.style.borderColor = "rgba(255, 255, 255, 0.3)";
          ring.style.boxShadow = "none";
          if (textEl) {
            textEl.innerText = "";
            textEl.style.opacity = "0";
          }
        }
      }
    };

    const onMouseDown = () => {
      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(0.85)`;
      }
    };

    const onMouseUp = () => {
      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(1)`;
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (dot) dot.style.opacity = "0";
      if (ring) ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (dot) dot.style.opacity = "1";
      if (ring) ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let rafId: number;
    const loop = () => {
      // Direct positioning for center dot
      if (dot) {
        dot.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth momentum lerp trailing for follower ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Precision Core Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF3B30] opacity-0 transition-opacity duration-300"
      />

      {/* Smooth Inertia Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-transparent opacity-0 backdrop-blur-[1px] transition-[width,height,background-color,border-color,box-shadow,opacity] duration-200 ease-out"
      >
        <span
          ref={textRef}
          className="font-mono text-[10px] font-bold tracking-widest text-white uppercase opacity-0 transition-opacity duration-150"
        />
      </div>
    </>
  );
}
