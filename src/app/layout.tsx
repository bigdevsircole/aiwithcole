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
  metadataBase: new URL("https://aiwithcole.web.app"),
  title: "AI WITH COLE | Master AI with sir cole",
  description:
    "Master AI with sir cole from idea to final cinematic film. Learn prompting, character consistency, storytelling, image generation, animation, voiceovers, sound design, editing, and distribution using Cole's viral AI workflow.",
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
  icons: {
    icon: "/ai-with-cole_result.avif",
    shortcut: "/ai-with-cole_result.avif",
    apple: "/ai-with-cole_result.avif",
  },
  openGraph: {
    title: "AI WITH COLE | Master AI with sir cole",
    description:
      "Learn how to use AI for scripting, storyboards, images, videos, posters, video call, youtube automation with prompts and best tools.",
    url: "https://aiwithcole.web.app",
    type: "website",
    locale: "en_US",
    siteName: "AI WITH COLE",
    images: [
      {
        url: "/ai-with-cole_result.avif",
        width: 1200,
        height: 630,
        alt: "AI WITH COLE — Master AI sir cole",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI WITH COLE | Master AI sir cole",
    description:
      "Create cinematic AI films using modern AI tools and professional workflows.",
    images: ["/ai-with-cole_result.avif"],
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
