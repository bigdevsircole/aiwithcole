"use client";

import React, { useEffect, useRef } from "react";
import { Globe, Sparkles } from "lucide-react";
import { PricingRibbon } from "./PricingRibbon";
import { ScrollReveal } from "./ScrollReveal";
import { RollingText, RollingButton } from "./RollingText";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set unmuted by default as requested
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If the browser autoplay policy restricts audio before user interaction,
        // start playback muted first to ensure immediate playback, then unmute on the first user interaction
        video.muted = true;
        video.play().catch(() => {});

        const enableSound = () => {
          if (videoRef.current) {
            videoRef.current.muted = false;
          }
          window.removeEventListener("pointerdown", enableSound);
          window.removeEventListener("keydown", enableSound);
          window.removeEventListener("touchstart", enableSound);
        };

        window.addEventListener("pointerdown", enableSound, { once: true });
        window.addEventListener("keydown", enableSound, { once: true });
        window.addEventListener("touchstart", enableSound, { once: true });
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-20 sm:pt-10 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[#FF3B30]/10 blur-[130px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Camera HUD Header Bar with reveal */}
        <ScrollReveal variant="fade-up" delay={50}>
          <div className="flex flex-wrap items-center justify-between gap-3 border border-[#26262A] bg-[#151517]/80 px-4 py-2.5 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF3B30] rec-pulse" />
              <span className="font-mono text-xs tracking-widest text-[#8E8E96]">REC</span>
            </div>
            <div className="font-mono text-xs tracking-wider text-[#8E8E96]">
              OVER · 2.6 MILLION AUDIENCE REACH
            </div>
            <div className="hidden sm:block font-mono text-xs text-[#8E8E96]">
              AI CINEMA · 4K 24FPS
            </div>
          </div>
        </ScrollReveal>

        {/* Currency Pricing Ribbon */}
        <ScrollReveal variant="fade-up" delay={100} className="my-6">
          <PricingRibbon />
        </ScrollReveal>

        {/* Dual Quick Buy Banners with United Carriers Rolling Hover */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
            <a
              href="https://paystack.shop/pay/aiwithcole"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="ENROLL"
              className="group flex items-center justify-center gap-2.5 bg-[#FF3B30] py-4 px-6 text-center transition-all duration-300 hover:bg-[#e03126] hover:shadow-[0_0_30px_rgba(255,59,48,0.45)]"
            >
              <span className="font-bebas text-2xl tracking-wide text-white">
                <RollingText text="BUY NOW → ₦5,000" />
              </span>
            </a>

            <a
              href="https://selar.com/919r4914y1"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="GLOBAL"
              className="group flex items-center justify-center gap-2.5 border border-emerald-500/60 bg-emerald-950/40 py-4 px-6 text-center transition-all duration-300 hover:bg-emerald-900/60 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
            >
              <Globe className="h-5 w-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-500" />
              <span className="font-bebas text-2xl tracking-wide text-emerald-200">
                <RollingText text="NOT NIGERIAN? · BUY ON SELAR (USD/GBP)" />
              </span>
            </a>
          </div>
        </ScrollReveal>

        {/* Hero Title & Copy with Mask-Up Animation */}
        <div className="max-w-4xl">
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="inline-flex items-center gap-2 border border-[#26262A] bg-[#151517] px-3 py-1 text-xs font-mono text-[#8E8E96] mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#FF3B30]" />
              <span>THE DEFINITIVE AI FILMMAKING BLUEPRINT</span>
            </div>
          </ScrollReveal>

          {/* Mask Reveal Headline */}
          <ScrollReveal variant="mask-up" delay={250}>
            <h1 className="font-bebas text-5xl leading-[0.95] tracking-[0.02em] sm:text-7xl md:text-8xl text-white">
              YOU DON&apos;T NEED A CAMERA.
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="mask-up" delay={350}>
            <h1 className="font-bebas text-5xl leading-[0.95] tracking-[0.02em] sm:text-7xl md:text-8xl text-white">
              YOU NEED A <span className="text-[#FF3B30] drop-shadow-[0_0_25px_rgba(255,59,48,0.4)]">PROMPT.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={450}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#8E8E96] sm:text-lg">
              Cole is the director and creator behind viral AI drama series and high-impact cinematic storytelling.
              He is opening up the exact system he uses to write, shoot, cut, and post episodes without a camera, a cast, or a production crew.
            </p>
          </ScrollReveal>
        </div>

        {/* Video Box with HUD viewfinder brackets */}
        <ScrollReveal variant="scale-up" delay={500} className="mt-10">
          <div
            onClick={toggleSound}
            className="group relative cursor-pointer overflow-hidden border border-[#26262A] bg-black transition-all duration-300 hover:border-[#FF3B30]/50"
          >
            {/* Viewfinder brackets with interactive corner expand on hover */}
            <div className="pointer-events-none absolute top-3 left-3 h-5 w-5 bracket-tl z-20" />
            <div className="pointer-events-none absolute top-3 right-3 h-5 w-5 bracket-tr z-20" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 bracket-bl z-20" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 bracket-br z-20" />

            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src="/videos/you-dont-need-a-camera-you-need-prompt.mp4"
                autoPlay
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-contain pointer-events-none"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero Bottom Actions */}
        <ScrollReveal variant="fade-up" delay={550} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
          <RollingButton
            href="https://paystack.shop/pay/aiwithcole"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            showArrow
            cursorText="ENROLL"
            className="px-7 py-3.5 text-xs font-bold"
          >
            BUY NOW — ₦5,000
          </RollingButton>

          <a
            href="#curriculum"
            className="hover-line font-mono text-xs text-[#EDEDEC] hover:text-[#FF3B30] transition-colors"
            data-cursor-text="VIEW"
          >
            See the curriculum ↓
          </a>

          <div className="ml-auto hidden md:flex items-center gap-2 font-mono text-xs text-[#8E8E96]">
            <span>INSTANT ACCESS UPON PURCHASE</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
