import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/3d/ThreeBackground";

export const metadata: Metadata = {
  title: "Mehmet Cömert | Mobil (Flutter), React & Yapay Zeka (AI) Geliştirici",
  description: "Ondokuz Mayıs Üniversitesi Bilgisayar Programcılığı mezunu. Flutter & Dart (iOS & Android), OCR & LLM API entegrasyonları, React, Next.js ve Three.js WebGL portföyü.",
  keywords: [
    "Mehmet Cömert",
    "Flutter Developer",
    "Mobil Uygulama Geliştirici",
    "React",
    "Next.js",
    "LLM & OCR Entegrasyonu",
    "Three.js",
    "MangaLens",
    "ProPromptGen"
  ],
  authors: [{ name: "Mehmet Cömert" }],
  openGraph: {
    title: "Mehmet Cömert | Mobil (Flutter), React & AI Geliştirici | 3D Portföy",
    description: "Google Play ve App Store'da canlı uygulamaları bulunan Flutter, React & Yapay Zeka odaklı yazılım geliştirici portföyü.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#050814] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Three.js 3D WebGL Canvas Layer */}
        <ThreeBackground />

        {/* Global Glassmorphic Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10 flex flex-col">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
