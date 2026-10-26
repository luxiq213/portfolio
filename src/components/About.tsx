"use client";

import React from "react";
import { Code2, Database, Globe, Cpu, CheckCircle2, Award, BookOpen, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      title: "Cross-Platform Mobil (Flutter & Dart)",
      description: "Tek kod tabanından iOS (App Store) ve Android (Google Play) için 60 FPS akıcılıkta, reaktif durum yönetimli (Bloc/Riverpod) canlı uygulamalar geliştiriyorum.",
      icon: Code2,
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-400"
    },
    {
      title: "OCR, Görüntü İşleme & LLM Boru Hatları",
      description: "Google ML Kit / Vision OCR ile metin bölgesi (bounding-box) tespiti yapıyor, çok modlu LLM API'leri (Gemini, OpenAI, Claude) ile bağlamsal çeviri ve yapılandırılmış çıktılar üretiyorum.",
      icon: Cpu,
      color: "from-blue-600 to-violet-600",
      accent: "text-blue-400"
    },
    {
      title: "Modern Web & React Ekosistemi",
      description: "React, Next.js (App Router & SSR), TypeScript ve Tailwind CSS ile tip güvenli, SEO uyumlu ve Three.js WebGL destekli web platformları inşa ediyorum.",
      icon: Globe,
      color: "from-violet-600 to-fuchsia-600",
      accent: "text-violet-400"
    },
    {
      title: "Asenkron Ağ & Veri Katmanı",
      description: "Dio/HTTP interceptor yapıları, JSON serileştirme, yerel önbellekleme (Hive/SharedPreferences, CachedNetworkImage) ve ilişkisel SQL/Prisma şemaları kurguluyorum.",
      icon: Database,
      color: "from-emerald-500 to-cyan-600",
      accent: "text-emerald-400"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Hakkımda & Yaklaşımım</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Teoriden Pratiğe:{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Bilgisayar Programcılığı Formasyonu
          </span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
          Yazılımı sadece kod blokları olarak değil, gerçek iş problemlerini çözen yaşayan sistemler olarak görüyorum.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Story & Profile Statement */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Yazılım Disiplini</h3>
                <p className="text-xs font-mono text-cyan-400">Temiz Kod • Güçlü Temel</p>
              </div>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Ondokuz Mayıs Üniversitesi Bilgisayar Programcılığı eğitimim süresince algoritma tasarımını, veri yapılarını ve nesne yönelimli programlamayı özümsedim. 
              Mezuniyetimle birlikte odağımı <strong className="text-white">Flutter & Dart ile cross-platform mobil ürünlere</strong> ve <strong className="text-white">OCR + LLM tabanlı yapay zeka entegrasyonlarına</strong> taşıdım.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Hem Google Play Store hem de Apple App Store&apos;da canlı kullanıcıya ulaşan uygulamalar (<strong className="text-cyan-300">MangaLens: Manga Çeviri, AstraNova: Astroloji & Burç</strong>) yayınlarken, web tarafında <strong className="text-cyan-300">React, Next.js ve TypeScript</strong> ile modern yapay zeka araçları (<strong className="text-cyan-300">propromptgen.com</strong>) geliştiriyorum.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Google Play & App Store uçtan uca yayın ve mağaza yönetimi</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>OCR (ML Kit / Vision) ve çok modlu LLM API boru hatları</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>React, Next.js (App Router) & TypeScript ile modern web mimarisi</span>
            </div>
          </div>
        </div>

        {/* Right Side: 4 Core Pillars Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-end text-xs font-mono text-zinc-600 group-hover:text-cyan-400 transition-colors">
                  <span>0{index + 1} // CORE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
