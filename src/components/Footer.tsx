"use client";

import React from "react";
import { Terminal, ArrowUp, Heart, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyan-500/20 bg-[#04060e] py-12 px-4 sm:px-6 lg:px-8 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Stack */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white font-bold">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>{PORTFOLIO_DATA.personal.name}</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="text-zinc-500">
            Next.js • Three.js WebGL • Tailwind CSS • Vercel Ready
          </span>
        </div>

        {/* Right: Scroll to top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">
            © {new Date().getFullYear()} Tüm Hakları Saklıdır.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900/80 hover:bg-cyan-950 hover:text-cyan-300 border border-zinc-800 text-zinc-400 transition-colors"
            title="Yukarı Çık"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
