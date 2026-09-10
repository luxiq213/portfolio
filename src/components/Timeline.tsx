"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, Calendar, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Timeline() {
  const iconMap = {
    education: GraduationCap,
    experience: Briefcase,
    certificate: Award
  };

  const badgeColorMap = {
    education: "bg-cyan-950/60 text-cyan-300 border-cyan-500/30",
    experience: "bg-emerald-950/60 text-emerald-300 border-emerald-500/30",
    certificate: "bg-violet-950/60 text-violet-300 border-violet-500/30"
  };

  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Calendar className="w-3.5 h-3.5" />
          <span>Eğitim & Kariyer Çizgisi</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Zaman Tüneli &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Kilometre Taşları
          </span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm">
          Bilgisayar Programcılığı temelinden gerçek hayat kurumsal yazılım deneyimine uzanan yolculuğum.
        </p>
      </div>

      <div className="relative border-l-2 border-cyan-500/20 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
        {PORTFOLIO_DATA.timeline.map((item, index) => {
          const Icon = iconMap[item.type] || GraduationCap;
          return (
            <div key={index} className="relative group">
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/40 group-hover:scale-110 group-hover:bg-cyan-950 transition-all">
                <Icon className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    {item.year}
                  </span>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${badgeColorMap[item.type]}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-zinc-400">
                  {item.institution}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
