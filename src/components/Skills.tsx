"use client";

import React, { useState } from "react";
import { 
  Code, Server, Layers, Terminal, Cpu, Database, HardDrive, 
  GitMerge, FileCode, FileJson, Globe, Boxes, Palette, Layout, 
  GitBranch, Monitor, Send, Cloud, Box, Sparkles, Smartphone,
  Store, Camera, Bot
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

// Icon mapping helper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Server,
  Layers,
  Terminal,
  Cpu,
  Database,
  HardDrive,
  GitMerge,
  FileCode,
  FileJson,
  Globe,
  Boxes,
  Palette,
  Layout,
  GitBranch,
  Monitor,
  Send,
  Cloud,
  Box,
  Sparkles,
  Smartphone,
  Store,
  Camera,
  Bot
};

export default function Skills() {
  const categories = [
    "Tümü", 
    "Mobil (Flutter)", 
    "Web & React", 
    "Yapay Zeka & Araçlar", 
    "Backend & Veritabanı"
  ] as const;
  
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");

  const filteredSkills = activeCategory === "Tümü"
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Yetenek Matrisi & Teknoloji Yığını</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Uzmanlık &{" "}
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Teknik Yetkinlikler
          </span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
          Flutter ile canlı mobil uygulamalar, React/Next.js ekosistemi ve hızla gelişen Yapay Zeka (AI) dünyasını birleştiren dinamik yetenek yığınım.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/40"
                : "bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid with 3D Card Hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => {
          const IconComponent = iconMap[skill.iconName] || Code;
          return (
            <div
              key={index}
              className="group relative p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {skill.highlight && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                      Önemli
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-mono text-zinc-500">
                  {skill.category}
                </span>
              </div>

              {/* Progress Level Bar */}
              <div className="mt-4 pt-3 border-t border-zinc-800/60">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <span className="text-zinc-400">Yetkinlik</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full transition-all duration-1000 group-hover:brightness-125"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
