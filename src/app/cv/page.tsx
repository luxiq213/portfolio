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
            href="/Mehmet_Comert_CV.pdf?v=7"
            download="Mehmet_Comert_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>PDF Dosyasını İndir</span>
          </a>
        </div>
      </div>

      {/* Printable CV Document (2-Page A4 format ATS layout) */}
      <main className="max-w-4xl mx-auto space-y-8 print:space-y-0 text-zinc-900 font-sans leading-relaxed">
        {/* PAGE 1 */}
        <div className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-2xl print:shadow-none print:rounded-none print:p-0 print:m-0">
          <span className="hidden sm:inline-block print:hidden absolute top-4 right-6 text-[11px] font-mono text-zinc-400 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200">
            Sayfa 1 / 2
          </span>
        {/* Header */}
        <header className="border-b-2 border-zinc-800 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 uppercase">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>
              <p className="text-base sm:text-lg font-bold text-cyan-700 mt-1">
                Flutter / Dart Developer | Android &amp; iOS App Publishing
              </p>
              <p className="text-xs sm:text-sm font-medium text-zinc-600">
                React / Next.js • Ürün Geliştirme, AI Entegrasyonu ve Mağaza Dağıtımı Deneyimi
              </p>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-xs text-zinc-700">
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
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
              <span className="font-semibold text-zinc-900">3D Portföy:</span>
              <a
                href="https://portfolio-fyi0li9cq-luxiq213s-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-700 underline hover:text-cyan-900 font-mono text-[11px]"
              >
                portfolio-fyi0li9cq-luxiq213s-projects.vercel.app
              </a>
            </div>
          </div>
        </header>

        {/* Section 1: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Profil
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify">
            <strong>Flutter ve Dart</strong> ile Android ve iOS için uçtan uca mobil ürünler geliştiren, <strong>React, Next.js ve TypeScript</strong> ile modern web uygulamaları inşa eden yazılım geliştirici. Çok modlu yapay zeka entegrasyonu, sunucu tarafı güvenlik ve maliyet optimizasyonu, uygulama içi satın alma mimarisi ve mağaza yayın süreçlerinde üretim deneyimine sahip.
          </p>
        </section>

        {/* Section 2: Selected Products & Live Applications (Unified section with engineering case details) */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-3">
            Seçili Ürünler &amp; Yayınlanan Uygulamalar
          </h2>

          <div className="space-y-4">
            {/* Project 1: MangaLens */}
            <div className="border-l-2 border-cyan-600 pl-3">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  MangaLens: Manga Çeviri — Android &amp; iOS Mobil Uygulama
                </h3>
                <span className="text-[11px] font-mono text-cyan-800 font-semibold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                  Google Play &amp; App Store Yayında
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-600 mt-0.5">
                Flutter, Dart, Riverpod, InAppWebView, Supabase Edge Functions, Gemini API, RevenueCat, AdMob, Codemagic
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-1">
                <li><strong>Arayüz &amp; Görsel Parçalama Mimarisi:</strong> Uygulama içi tarayıcıda dikey manga şeritlerini kaynak görseli bozmadan 104 hedef dile çeviren ve çeviri kutusu stilini canlı özelleştiren bağımsız DOM katmanı geliştirdim; JS köprüsüyle önce ekranda görünen bölgeyi parçalayıp çevirerek ilk çeviri görünme süresini düşürdüm.</li>
                <li><strong>Backend Güvenliği &amp; AI Maliyet Optimizasyonu:</strong> API anahtarlarını istemciden izole etmek için <code>gemini-3.5-flash</code> çağrılarını Supabase Edge Functions arkasına aldım; görsel URL&apos;nin SHA-256 özetiyle 24 saatlik önbellek ve aynı sayfaya gelen eşzamanlı isteklerde mükerrer çağrıyı önleyen veritabanı kilit kontrolü kurdum.</li>
                <li><strong>Gelir Modeli, Kredi Yönetimi &amp; Kalite Güvencesi:</strong> Anonim oturumdan OAuth/e-posta hesabına yükseltme akışını, RevenueCat kredi/abonelik sistemini ve RTL dahil 18 arayüz dilini kurguladım. Başarısız işlemlerde otomatik kredi iadesini ve AdMob ödüllü reklam doğrulamasını PostgreSQL fonksiyonlarıyla (RPC) yönetip 16 birim/widget testi, <code>flutter analyze</code> ve Codemagic CI/CD ile her iki mağazada yayımladım.</li>
              </ul>
              <div className="mt-1 text-[11px] text-zinc-600 font-mono space-y-0.5">
                <div>
                  Google Play: <a href="https://play.google.com/store/apps/details?id=com.mangalens.app" target="_blank" rel="noreferrer" className="text-cyan-700 underline">play.google.com/store/apps/details?id=com.mangalens.app</a>
                </div>
                <div>
                  App Store: <a href="https://apps.apple.com/tr/app/mangalens-manga-%C3%A7eviri/id6793662351?l=tr" target="_blank" rel="noreferrer" className="text-cyan-700 underline">apps.apple.com/tr/app/mangalens-manga-çeviri/id6793662351</a>
                </div>
              </div>
            </div>

            {/* Project 2: ProPromptGen */}
            <div className="border-l-2 border-violet-600 pl-3">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  ProPromptGen — Çok Dilli AI Prompt &amp; Topluluk Web Ürünü
                </h3>
                <span className="text-[11px] font-mono text-violet-800 font-semibold bg-violet-50 px-2 py-0.5 rounded border border-violet-200">
                  propromptgen.com Yayında
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-600 mt-0.5">
                Next.js 16, React 19, TypeScript, Google Gemini API, Prisma ORM, PostgreSQL, NextAuth, Stripe
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-1">
                <li><strong>Kesinti Toleranslı Üretim &amp; Çok Dilli Platform:</strong> Kullanıcı girdisini ChatGPT, Claude, Gemini ve Midjourney dahil 50+ AI modeline uygun yapılandırılmış promptlara dönüştüren, route tabanlı 9 dil destekli web ürününü geliştirdim; harici API gecikmelerinde veya kota aşımında servisin durmaması için <code>@google/generative-ai</code> arkasına kural ve şablon tabanlı fallback motoru ekledim.</li>
                <li><strong>Paylaşımlı Rate Limit, Token Güvenliği &amp; Abonelik:</strong> Serverless ortamda bellek içi sayaçlar sıfırlandığı için Rate Limit kontrolünü PostgreSQL üzerindeki paylaşımlı tabloya taşıdım; şifre sıfırlama akışında ham token yerine yalnızca SHA-256 özeti (<code>token_hash</code>) ve <code>bcryptjs</code> kullandım. Topluluk etkileşimlerini, Stripe webhook abonelik döngüsünü ve Critters / Web Vitals optimizasyonlarını tamamladım.</li>
              </ul>
              <div className="mt-1 text-[11px] text-zinc-600 font-mono">
                Canlı Bağlantı: <a href="https://propromptgen.com" target="_blank" rel="noreferrer" className="text-violet-700 underline">https://propromptgen.com</a>
              </div>
            </div>

            {/* Project 3: AstraNova */}
            <div className="border-l-2 border-emerald-600 pl-3">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  AstraNova: Astroloji &amp; Burç — Mobil Uygulama
                </h3>
                <span className="text-[11px] font-mono text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Google Play Yayında
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-600 mt-0.5">
                Flutter, Dart, Efemeris Motoru, Firebase, Google Gemini API, Hive, SharedPreferences
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-1">
                <li><strong>Çevrimdışı Astronomik Hesaplama &amp; AI Danışman:</strong> Statik burç metinleri yerine doğum tarihi, saat dilimi ve coğrafi koordinatlardan <em>Julian Day</em> ve <em>Local Sidereal Time</em> üzerinden Güneş, Ay, Yükselen, gezegen boylamları ve evleri hesaplayan efemeris motoru yazdım; üretilen doğum haritası verilerini Firebase üzerinden Gemini API&apos;ye bağlam olarak aktararak gerçek zamanlı AI danışman ve sinastri analizini geliştirdim.</li>
                <li><strong>Uç Değer Doğrulaması &amp; Yerel Önbellek:</strong> Farklı zaman dilimleri ve enlem/boylam uç değerleri için açısal hesaplama doğrulaması yaptım; hesaplanan harita ve profil verilerini <code>Hive</code> ve <code>SharedPreferences</code> ile cihazda önbellekleyerek 9 dilde çevrimdışı erişim sağladım.</li>
              </ul>
              <div className="mt-1 text-[11px] text-zinc-600 font-mono">
                Google Play: <a href="https://play.google.com/store/apps/details?id=com.astro.yapici" target="_blank" rel="noreferrer" className="text-emerald-700 underline">play.google.com/store/apps/details?id=com.astro.yapici</a>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* PAGE 2 */}
        <div className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-2xl print:shadow-none print:rounded-none print:p-0 print:m-0 print:break-before-page">
          <span className="hidden sm:inline-block print:hidden absolute top-4 right-6 text-[11px] font-mono text-zinc-400 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200">
            Sayfa 2 / 2
          </span>
        {/* Section 3: Technical Skills */}
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b-2 border-zinc-300 pb-1.5 mb-3.5">
            Teknik Yetkinlikler
          </h2>
          <div className="space-y-3 text-sm text-zinc-800 leading-relaxed">
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-zinc-950 mb-0.5">Mobil Geliştirme</p>
              <p>Flutter, Dart, Riverpod, InAppWebView, JavaScript Bridge, RevenueCat, AdMob, Hive, SharedPreferences, Flutter l10n</p>
            </div>
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-zinc-950 mb-0.5">Web &amp; Frontend Geliştirme</p>
              <p>React 19, Next.js 16, TypeScript, JavaScript, Tailwind CSS, Three.js, SSR, Dinamik SEO, Critters, Web Vitals</p>
            </div>
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-zinc-950 mb-0.5">Backend, Veritabanı &amp; Güvenlik</p>
              <p>Supabase, PostgreSQL, Row Level Security, Supabase Edge Functions, Deno, Prisma ORM, NextAuth, bcryptjs, Stripe Webhooks, REST API, C#, .NET</p>
            </div>
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-zinc-950 mb-0.5">Test, CI/CD &amp; Mağaza Süreçleri</p>
              <p>flutter test, flutter analyze, Codemagic CI/CD, Git, GitHub, Google Play Console, Apple App Store Connect, Xcode, TestFlight</p>
            </div>
          </div>
        </section>

        {/* Section 4: Corporate Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Kurumsal Deneyim
          </h2>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1">
              <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                Körfez Belediyesi — Bilgi İşlem Müdürlüğü
              </h3>
              <span className="text-xs font-mono text-zinc-600">Üniversite / Yaz Stajı</span>
            </div>
            <p className="text-xs font-medium text-cyan-800">
              Bilgi İşlem &amp; Yazılım Stajyeri
            </p>
            <p className="text-xs text-zinc-600 mt-0.5">
              Bilgi İşlem Müdürlüğü bünyesinde kurumsal yazılım süreçlerinin, ilişkisel veritabanı yapılarının ve kurum içi bilgi sistemlerinin incelenmesi, veri akışı ve teknik operasyon süreçlerinin desteklenmesi.
            </p>
          </div>
        </section>

        {/* Section 5: Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Eğitim
          </h2>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1">
              <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                Ondokuz Mayıs Üniversitesi
              </h3>
              <span className="text-xs font-mono text-zinc-600">Mezun</span>
            </div>
            <p className="text-xs font-medium text-cyan-800">
              Bilgisayar Programcılığı (Ön Lisans)
            </p>
            <p className="text-xs text-zinc-600 mt-0.5">
              Temel Dersler: Algoritmalar ve Veri Yapıları, Nesne Yönelimli Programlama, İlişkisel Veritabanı Yönetim Sistemleri, Web ve Mobil Programlama.
            </p>
          </div>
        </section>

        {/* Section 6: Languages, Certificates & Engineering Discipline */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Diller, Sertifika &amp; Çalışma Disiplini
          </h2>
          <div className="space-y-1.5 text-xs text-zinc-700">
            <div>
              <span className="font-bold text-zinc-950">Yabancı Dil &amp; Sertifika: </span>
              <span>
                Türkçe (Ana Dil) • İngilizce — EF SET A1 Sertifikalı (
                <a
                  href="https://cert.efset.org/en/vSZxnD"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-700 underline font-mono"
                >
                  cert.efset.org/en/vSZxnD
                </a>
                ) &amp; Mesleki Teknik Dokümantasyon Okuma
              </span>
            </div>
            <div>
              <span className="font-bold text-zinc-950">Mühendislik Yaklaşımı: </span>
              <span>Uçtan Uca Ürün Sahipliği, Güvenlik Öncelikli API Mimarisi, Otomatik Test, Maliyet/Performans Ölçümü ve Git İş Akışı</span>
            </div>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
