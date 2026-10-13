import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
};

export const metadata: Metadata = {
  title: "AI WITH COLE | Master AI Filmmaking & Viral Content Creation",
  description:
    "Master AI filmmaking from idea to final cinematic film. Learn prompting, character consistency, storytelling, image generation, animation, voiceovers, sound design, editing, and distribution using Cole's viral AI workflow.",
  keywords: [
    "AI with Cole",
    "Cole AI Filmmaking",
    "AI movie course",
    "AI storytelling",
    "AI films",
    "AI video generation",
    "AI animation",
    "Character consistency",
    "Midjourney",
    "Flux",
    "Runway",
    "Kling AI",
    "ElevenLabs",
    "Grok",
    "AI content creation",
  ],
  authors: [{ name: "Cole" }],
  openGraph: {
    title: "AI WITH COLE | Master AI Filmmaking",
    description:
      "Learn the complete AI filmmaking workflow used to create cinematic stories without actors, expensive cameras or film crews.",
    type: "website",
    locale: "en_US",
    siteName: "AI WITH COLE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI WITH COLE | Master AI Filmmaking",
    description:
      "Create cinematic AI films using modern AI tools and professional workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#0B0B0D] text-[#EDEDEC] font-sans antialiased selection:bg-[#FF3B30] selection:text-white">
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
