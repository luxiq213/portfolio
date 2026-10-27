"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Code, User, Briefcase, Mail, Menu, X, FileDown, FileText } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#8b5cf6", "#10b981", "#ffffff"]
    });
  };

  const navLinks = [
    { name: "Hakkımda", href: "#about", icon: User },
    { name: "Yetenekler", href: "#skills", icon: Code },
    { name: "Projeler", href: "#projects", icon: Briefcase },
    { name: "CV Görüntüle", href: "/cv", icon: FileText },
    { name: "Terminal", href: "#terminal", icon: Terminal },
    { name: "İletişim", href: "#contact", icon: Mail }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050814]/85 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-zinc-100 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-violet-400 bg-clip-text text-transparent group-hover:opacity-90">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="text-cyan-400 animate-pulse font-normal">_</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / Status */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>İşe Açık</span>
          </div>

          {/* Download Real PDF */}
          <a
            href="/Mehmet_Comert_CV.pdf?v=8"
            download="Mehmet_Comert_CV.pdf"
            onClick={triggerConfetti}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            title="Mehmet Cömert CV (PDF İndir)"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV İndir (PDF)</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050814]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-200 hover:bg-cyan-950/40 hover:text-cyan-400 border border-transparent hover:border-cyan-500/20 transition-colors"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {link.name}
              </a>
            );
          })}

          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>İşe Açık</span>
            </div>
            <a
              href="/Mehmet_Comert_CV.pdf?v=8"
              download="Mehmet_Comert_CV.pdf"
              onClick={() => {
                triggerConfetti();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-cyan-600 hover:bg-cyan-500"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV İndir (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
