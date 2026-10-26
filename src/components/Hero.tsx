"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, Mail, Sparkles, Download, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Interactive3DCube from "./3d/Interactive3DCube";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function Hero() {
  const roles = PORTFOLIO_DATA.personal.typewriterRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const handleCvDownload = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#8b5cf6", "#10b981", "#fbbf24"]
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono backdrop-blur-md shadow-lg shadow-cyan-950/40 animate-pulse">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Bilgisayar Programcılığı Mezunu • Three.js WebGL Portföyü</span>
          </div>

          {/* Main Title & Typewriter */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Merhaba, Ben <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>

            {/* Typewriter text */}
            <div className="h-10 sm:h-12 flex items-center">
              <span className="text-xl sm:text-3xl font-mono font-medium text-zinc-300">
                {displayText}
                <span className="inline-block w-2.5 h-6 sm:h-8 ml-1 bg-cyan-400 animate-pulse align-middle" />
              </span>
            </div>
          </div>

          {/* Short Bio */}
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            Tek kod tabanından <span className="text-cyan-300 font-medium">Flutter & Dart</span> ile Google Play ve App Store&apos;da canlı yayında olan mobil uygulamalar,{" "}
            <span className="text-cyan-300 font-medium">OCR & çok modlu LLM API</span> boru hatları ve{" "}
            <span className="text-cyan-300 font-medium">React / Next.js</span> tabanlı modern web platformları geliştiriyorum.
          </p>

          {/* Quick Metrics / Badges */}
          <div className="grid grid-cols-3 gap-3 py-2 max-w-lg">
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">iOS & Android</div>
              <div className="text-xs text-zinc-400">Canlı Mağaza Ürünleri</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-violet-400 font-mono">AI & OCR</div>
              <div className="text-xs text-zinc-400">LLM & Vision Boru Hattı</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">React / Next</div>
              <div className="text-xs text-zinc-400">SSR & WebGL Mimarisi</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Projeleri Keşfet</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Mehmet_Comert_CV.pdf"
              download="Mehmet_Comert_CV.pdf"
              onClick={handleCvDownload}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              title="Mehmet Cömert CV'sini İndir (PDF)"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>CV İndir (PDF)</span>
            </a>

            <a
              href="#terminal"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-xs text-zinc-400 hover:text-cyan-300 bg-black/40 hover:bg-black/60 border border-zinc-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>terminal:~$</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-3 text-zinc-400">
            <span className="text-xs font-mono text-zinc-500">Bağlantılar:</span>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900/60 hover:text-cyan-400 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900/60 hover:text-cyan-400 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="p-2 rounded-lg bg-zinc-900/60 hover:text-cyan-400 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              aria-label="E-posta İletişim"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Interactive WebGL Display */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Cyber glass frame container */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-zinc-900/70 via-zinc-950/80 to-[#050814]/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/50 flex flex-col items-center">
            {/* Hologram Corner accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

            <div className="text-center mb-2">
              <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                WebGL 3D Core Matrix
              </div>
              <div className="text-[11px] text-zinc-400">Gerçek Zamanlı Three.js Sahnesi</div>
            </div>

            {/* The interactive 3D Cube */}
            <Interactive3DCube />

            {/* Quick spec pills under 3D model */}
            <div className="mt-4 grid grid-cols-2 gap-2 w-full text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>60+ FPS WebGL</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Fiziksel 3D Inertia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
