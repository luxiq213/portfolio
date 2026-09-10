"use client";

import React from "react";
import Link from "next/link";
import { Printer, Download, ArrowLeft, Mail, Phone, MapPin, Globe, Smartphone, ExternalLink, CheckCircle, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default function CvPage() {
  const handlePrint = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-900 print:bg-white print:text-black py-8 px-4 sm:px-6 lg:px-8">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 print:hidden shadow-xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Portföy Sitesine Dön</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <Printer className="w-4 h-4" />
            <span>PDF Olarak Kaydet / Yazdır</span>
          </button>

          <a
            href="/Mehmet_Comert_CV.pdf"
            download="Mehmet_Comert_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>PDF Dosyasını İndir</span>
          </a>
        </div>
      </div>

      {/* Printable CV Document (A4 format ATS layout) */}
      <main className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl print:shadow-none print:p-0 print:m-0 print:max-w-none text-zinc-900 font-sans leading-relaxed">
        {/* Header */}
        <header className="border-b-2 border-zinc-800 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 uppercase">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-cyan-700 mt-1">
                Mobil (Flutter), React & Yapay Zeka (AI) Odaklı Yazılım Geliştirici
              </p>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 text-xs text-zinc-700">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
              <span>{PORTFOLIO_DATA.personal.phoneFormatted}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
              <span>{PORTFOLIO_DATA.personal.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="underline hover:text-cyan-700">
                github.com/luxiq213
              </a>
            </div>
          </div>
        </header>

        {/* Section 1: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Özet & Profil
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify">
            Ondokuz Mayıs Üniversitesi Bilgisayar Programcılığı mezunuyum. Özellikle <strong>Flutter & Dart</strong> kullanarak hem 
            <strong> Google Play Store</strong> hem de <strong>Apple App Store</strong> üzerinde aktif ve canlı yayında olan mobil uygulamalar (MangaLens, Astro Yapıcı) 
            geliştirdim. Web tarafında <strong>React ekosistemine derin bir ilgi duyuyor</strong> ve modern kullanıcı deneyimleri üretiyorum. 
            Aynı zamanda <strong>hızla gelişen Yapay Zeka (AI) ve LLM dünyasını aktif olarak takip eden</strong>, yapay zeka araçlarını ve istem mühendisliğini (Prompt Engineering) 
            projelerine (propromptgen.com) ve geliştirme süreçlerine entegre eden vizyoner bir yazılımcıyım. 
            Temiz kod, performans ve son kullanıcı odaklı çalışma disiplinine sahibim.
          </p>
        </section>

        {/* Section 2: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Teknik Yetenekler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-800">
            <div>
              <p className="font-bold text-zinc-950">Mobil Geliştirme (Flutter):</p>
              <p className="text-zinc-700">Flutter, Dart, Cross-Platform (Android & iOS), State Management (Bloc / Provider / Riverpod), UI/UX Tasarımı, Cihaz API&apos;leri, Google Play Console & App Store Connect.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-950">Web & React Ekosistemi:</p>
              <p className="text-zinc-700">React.js (Yüksek İlgi & Pratik), Next.js 15+, TypeScript, JavaScript, Tailwind CSS, Three.js WebGL, HTML5/CSS3.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-950">Yapay Zeka (AI) & İstem Mühendisliği:</p>
              <p className="text-zinc-700">Aktif AI & LLM Takibi, Prompt Engineering, AI API Entegrasyonları (LLM / Vision), Yapay Zeka Destekli Geliştirme Araçları.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-950">Backend, Veritabanı & Araçlar:</p>
              <p className="text-zinc-700">RESTful API Entegrasyonu, Firebase (Auth, Firestore), SQL (MySQL, MS SQL, PostgreSQL), Prisma ORM, Git & GitHub, Postman, Vercel.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Live Projects & Applications */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-3">
            Canlı Projeler & Yayınlanan Uygulamalar
          </h2>

          <div className="space-y-4">
            {/* Project 1: MangaLens */}
            <div className="border-l-2 border-cyan-600 pl-3">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  MangaLens - Mobil Uygulama (Android & iOS)
                </h3>
                <span className="text-[11px] font-mono text-cyan-800 font-semibold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                  Google Play & App Store Canlı
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-600 mt-0.5">
                Kullanılan Teknolojiler: Flutter, Dart, Cross-Platform, Google Play Store, Apple App Store, REST API
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-0.5">
                <li>Flutter ile hem iOS hem Android ekosistemine tek kod tabanından (single codebase) derlendi ve mağazalarda yayınlandı.</li>
                <li>Görsel işleme, akıcı sayfa gezintisi ve mobil performans optimizasyonu sağlandı.</li>
                <li>Google Play Console ve App Store Connect mağaza test ve onay süreçleri sıfırdan başarıyla yönetildi.</li>
              </ul>
              <div className="mt-1 text-[11px] text-zinc-600 font-mono">
                Google Play: <a href="https://play.google.com/store/apps/details?id=com.mangalens.app" target="_blank" rel="noreferrer" className="text-cyan-700 underline">play.google.com/store/apps/details?id=com.mangalens.app</a>
              </div>
            </div>

            {/* Project 2: ProPromptGen */}
            <div className="border-l-2 border-violet-600 pl-3">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  ProPromptGen - Yapay Zeka & İstem Platformu
                </h3>
                <span className="text-[11px] font-mono text-violet-800 font-semibold bg-violet-50 px-2 py-0.5 rounded border border-violet-200">
                  propromptgen.com Canlı
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-600 mt-0.5">
                Kullanılan Teknolojiler: React, Next.js, TypeScript, Tailwind CSS, AI Prompt Engineering, Vercel
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-0.5">
                <li>Yapay zeka modelleri için optimize edilmiş prompt üretimi sağlayan canlı web platformu.</li>
                <li>React mimarisi, dinamik parametreleme sistemi, yüksek hızlı kopyalama ve kullanıcı dostu arayüz tasarlandı.</li>
              </ul>
              <div className="mt-1 text-[11px] text-zinc-600 font-mono">
                Canlı Bağlantı: <a href="https://propromptgen.com" target="_blank" rel="noreferrer" className="text-violet-700 underline">https://propromptgen.com</a>
              </div>
            </div>

            {/* Project 3: Astro Yapıcı */}
            <div className="border-l-2 border-emerald-600 pl-3">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  Astro Yapıcı - Android Mobil Uygulama
                </h3>
                <span className="text-[11px] font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Google Play Store Canlı
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-600 mt-0.5">
                Kullanılan Teknolojiler: Flutter, Dart, Google Play Store, Local State & Storage
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-0.5">
                <li>Google Play Store üzerinde aktif kullanıcıya sahip astrolojik analiz ve doğum haritası hesaplama aracı.</li>
                <li>Dinamik algoritma mantığı ve yerel veri saklama mekanizmaları entegre edildi.</li>
              </ul>
              <div className="mt-1 text-[11px] text-zinc-600 font-mono">
                Google Play: <a href="https://play.google.com/store/apps/details?id=com.astro.yapici" target="_blank" rel="noreferrer" className="text-emerald-700 underline">play.google.com/store/apps/details?id=com.astro.yapici</a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Eğitim
          </h2>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1">
              <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                Ondokuz Mayıs Üniversitesi (OMÜ)
              </h3>
              <span className="text-xs font-mono text-zinc-600">Mezun</span>
            </div>
            <p className="text-xs font-medium text-cyan-800">
              Bilgisayar Programcılığı (Ön Lisans)
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Temel dersler: Algoritmalar ve Veri Yapıları, Nesne Yönelimli Programlama (OOP), Veritabanı Yönetimi (SQL), Web ve Mobil Programlama Temelleri.
            </p>
          </div>
        </section>

        {/* Section 5: Languages & Soft Skills */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Diller & Yaklaşım
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs text-zinc-700">
            <div>
              <p className="font-bold text-zinc-950">Yabancı Dil:</p>
              <p>Türkçe (Ana Dil) • İngilizce (Mesleki / Teknik Dokümantasyon Okuma)</p>
            </div>
            <div>
              <p className="font-bold text-zinc-950">Çalışma Disiplini:</p>
              <p>Aktif Yapay Zeka Entegrasyonu, Hızlı Adaptasyon, Mağaza Süreçleri Yönetimi, Takım Çalışması & Git İş Akışı</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
