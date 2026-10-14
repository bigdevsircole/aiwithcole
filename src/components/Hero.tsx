"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe, Sparkles, Volume2, VolumeX, RotateCcw } from "lucide-react";
import { PricingRibbon } from "./PricingRibbon";
import { ScrollReveal } from "./ScrollReveal";
import { RollingText, RollingButton } from "./RollingText";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTriggeredRef = useRef<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasEnded, setHasEnded] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly disable looping so it plays only once
    video.loop = false;

    const handleEnded = () => {
      setIsPlaying(false);
      setHasEnded(true);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setHasEnded(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    // Play only once when user scrolls to the hero video section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;

            // Attempt unmuted playback first
            video.muted = false;
            setIsMuted(false);
            const playPromise = video.play();

            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // If browser blocks unmuted autoplay before interaction, play muted
                video.muted = true;
                setIsMuted(true);
                video.play().catch(() => {});
              });
            }

            // Disconnect immediately so it never re-triggers on scroll
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.25, // Triggers when 25% of the video box is scrolled into view
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (hasEnded) {
      video.currentTime = 0;
      video.play().catch(() => {});
      setHasEnded(false);
      setIsPlaying(true);
      return;
    }

    // Toggle mute
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
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
              OVER · 1k AUDIENCE REACH
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
            <div className="inline-flex items-center gap-2.5 border border-[#26262A] bg-[#151517] px-3 py-1.5 text-xs font-mono text-[#8E8E96] mb-5">
              <div className="relative h-5 w-5 rounded-full overflow-hidden border border-[#FF3B30]/40 shrink-0">
                <Image
                  src="/images/cole_portrait_result.avif"
                  alt="Cole - Creator"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[#EDEDEC] font-semibold">COLE</span>
              <span className="text-[#38383E]">•</span>
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
              Cole is the director and creator behind viral AI drama series and high-impact cinematic storytelling for businesses and individuals.
              He is opening up the exact system he uses to write, shoot, cut, and post episodes without a camera, a cast, or a production crew.
            </p>
          </ScrollReveal>
        </div>

        {/* Video Box with HUD viewfinder brackets */}
        <ScrollReveal variant="scale-up" delay={500} className="mt-10">
          <div
            onClick={handleVideoClick}
            className="group relative cursor-pointer overflow-hidden border border-[#26262A] bg-black transition-all duration-300 hover:border-[#FF3B30]/50"
            data-cursor-text={hasEnded ? "REPLAY" : isMuted ? "UNMUTE" : "MUTE"}
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
                playsInline
                preload="metadata"
                className="h-full w-full object-contain pointer-events-none"
              >
                Your browser does not support the video tag.
              </video>

              {/* Bottom HUD Overlay for Sound & Play Status */}
              <div className="pointer-events-none absolute bottom-3 right-3 z-20 flex items-center gap-2">
                {hasEnded ? (
                  <div className="flex items-center gap-1.5 border border-[#FF3B30]/60 bg-[#0B0B0D]/90 px-3 py-1 font-mono text-[11px] text-white shadow-lg backdrop-blur-md">
                    <RotateCcw className="h-3 w-3 text-[#FF3B30]" />
                    <span>WATCH AGAIN</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 border border-[#26262A] bg-[#0B0B0D]/80 px-2.5 py-1 font-mono text-[11px] text-[#8E8E96] backdrop-blur-md">
                    {isMuted ? (
                      <>
                        <VolumeX className="h-3.5 w-3.5 text-[#FF3B30]" />
                        <span>MUTED · CLICK TO UNMUTE</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-3.5 w-3.5 text-emerald-400" />
                        <span>AUDIO ON</span>
                      </>
                    )}
                  </div>
                )}
              </div>
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
