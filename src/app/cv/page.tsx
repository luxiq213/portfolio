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
            Ondokuz Mayıs Üniversitesi Bilgisayar Programcılığı mezunu, <strong>Flutter ve Dart</strong> ile Android ve iOS uygulamaları geliştiren yazılım geliştirici. 
            <strong> MangaLens: Manga Çeviri</strong> uygulamasını her iki mobil mağazada (Google Play ve App Store) uçtan uca yayımlama sürecini tamamladı; 
            <strong> AstraNova: Astroloji &amp; Burç</strong> mobil uygulaması ve <strong>Next.js / TypeScript</strong> ile geliştirilen <strong>ProPromptGen</strong> web ürünü üzerinde çalıştı. 
            Mobil arayüz mimarisi, güvenli API/LLM entegrasyonu, uygulama içi satın alma (IAP) ve kullanıcı odaklı ürün geliştirmeye odaklanıyor.
          </p>
        </section>

        {/* Section 2: Selected Products & Live Applications (Moved to top 1/3 per audit) */}
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
                Kullanılan Teknolojiler: Flutter, Dart, Riverpod, InAppWebView (JS Bridge), Supabase, Gemini Multimodal AI, RevenueCat IAP, AdMob, Codemagic CI/CD
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-0.5">
                <li><strong>Ürün &amp; Okuma Deneyimi:</strong> Flutter ve Riverpod ile geliştirip Google Play ve App Store&apos;da yayımladım. Uygulama içi özel tarayıcıda manga sayfalarını kaynak görseli değiştirmeden 104 hedef dile çeviren ve çeviri kutusunun görünümünü (font, boyut, renk, opaklık, kenarlık) canlı özelleştiren ayrık katman arayüzünü hayata geçirdim.</li>
                <li><strong>Kullanıcı Akışı, Gelir Modeli &amp; Yerelleştirme:</strong> Kayıt zorunluluğu olmayan anonim oturumdan OAuth/e-posta hesabına yükseltme akışını, RevenueCat ile <code>LENS</code> kredi paketleri ve Plus/Pro abonelik sistemini, ödüllü reklam/promosyon modüllerini ve 18 arayüz dilini (RTL dahil) geliştirdim.</li>
                <li><strong>Mağaza Dağıtımı &amp; Kalite Güvencesi:</strong> Codemagic CI/CD, Xcode imzalama, TestFlight ve Google Play Console yayın süreçlerini sıfırdan yönettim; 16 otomatik birim/widget testi (<code>flutter test</code>) ve statik kod analizi (<code>flutter analyze</code> sıfır hata) ile sürüm kararlılığını doğruladım.</li>
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
                Kullanılan Teknolojiler: Next.js 16 (App Router, SSR), React 19, TypeScript, Google Gemini API, Prisma ORM, PostgreSQL, NextAuth, Stripe
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-0.5">
                <li><strong>Ürün &amp; Çok Dilli Platform:</strong> Next.js ve TypeScript ile kullanıcı girdisini ChatGPT, Claude, Gemini ve Midjourney dahil 50+ AI platformuna uygun yapılandırılmış promptlara dönüştüren, route tabanlı 9 dil (<code>tr, en, de, fr, es, it, pt, ru, ja</code>) destekli ve mobil uyumlu web ürününü geliştirdim.</li>
                <li><strong>Topluluk, Kimlik Doğrulama &amp; Abonelik:</strong> Prisma ve PostgreSQL üzerinde çok dilli prompt paylaşımı, beğeni, iç içe yorum, yer imi (bookmark), takip/bildirim sistemi, yönetim paneli ve Stripe webhook&apos;larıyla aylık/yıllık Premium üyelik döngüsünü kurguladım.</li>
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
                Kullanılan Teknolojiler: Flutter, Dart, Efemeris &amp; Natal Harita Motoru, Firebase + Google Gemini API, Yerel Depolama (Hive / SharedPreferences), 9 Dil Yerelleştirme
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-0.5">
                <li><strong>Ürün &amp; Kişiselleştirilmiş Deneyim:</strong> Doğum tarihi, saati ve konum verilerine göre Güneş/Ay/Yükselen (&quot;Büyük Üçlü&quot;), gezegen yerleşimleri ve evleri hesaplayan doğum haritası (natal harita), ilişki uyumu (sinastri), ay/retro takvimi ve gerçek zamanlı AI danışman (&quot;Kahin&quot;) modüllerini 9 dil desteğiyle geliştirdim.</li>
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
        {/* Section 3: Technical Skills (Single-column ATS layout, project-grounded) */}
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b-2 border-zinc-300 pb-1.5 mb-3.5">
            Teknik Yetkinlikler (Proje Kullanımına Göre)
          </h2>
          <div className="space-y-3 text-sm text-zinc-800 leading-relaxed">
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-zinc-950 mb-0.5">Flutter &amp; Mobil Uygulama Geliştirme</p>
              <p>Flutter, Dart, Riverpod (State Management), InAppWebView &amp; JavaScript Köprüsü (DOM Overlay Mimarisi), RevenueCat (IAP &amp; Abonelik Yönetimi), Google Mobile Ads (AdMob SSV), SharedPreferences &amp; Hive Yerel Depolama, Çoklu Dil / l10n (18 Dil &amp; RTL Desteği).</p>
            </div>
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-zinc-950 mb-0.5">Mobil Ürün Kalitesi, Test &amp; Mağaza Dağıtımı</p>
              <p>Google Play Console &amp; Apple App Store Connect (Xcode İmzalama, TestFlight, Store Review Süreçleri), Codemagic CI/CD, Otomatik Birim &amp; Widget Testleri (<code>flutter test</code>, <code>flutter analyze</code> sıfır hata), İstemci Performans ve Gecikme Telemetrisi (p50/p95 ölçümü).</p>
            </div>
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-zinc-950 mb-0.5">API, Backend, Veritabanı &amp; Güvenlik Mimarisi</p>
              <p>Supabase (PostgreSQL, Row Level Security / RLS, Edge Functions / Deno, Anonim Oturumdan OAuth/E-Posta Hesabına Yükseltme), Sunucu Tarafı Sır/Anahtar İzolasyonu, SHA-256 Görsel Önbellekleme (24s Cache), Paralel Çalışma Kilitleri (Work Leases), Değişmez Muhasebe Defteri (Immutable Ledger) RPC&apos;leri, Dağıtık Rate Limiting, HTTPS/SSRF Kontrolleri.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-zinc-950 mb-0.5">React, Next.js &amp; Modern Web Geliştirme</p>
              <p>Next.js 16 (App Router, Server-Side Rendering, Dinamik SEO), React 19, TypeScript (Tip Güvenli Geliştirme), Prisma ORM, PostgreSQL, NextAuth (<code>bcryptjs</code>, SHA-256 Token Özetleme), Stripe Abonelik &amp; Webhook Entegrasyonu, Tailwind CSS, Three.js (3D WebGL), Critters Kritik CSS &amp; Web Vitals.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Engineering Decisions & Architecture Cases */}
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b-2 border-zinc-300 pb-1.5 mb-3.5">
            Teknik Vaka İncelemeleri (Problem → Mimari Karar → Test &amp; Sonuç)
          </h2>
          <div className="space-y-3.5 text-sm text-zinc-700 leading-relaxed">
            <div className="border-l-4 border-cyan-600 pl-3.5 space-y-1">
              <p className="font-bold text-zinc-950">1. MangaLens — Görsel Tiling, Eşzamanlı AI Maliyet Kilidi ve Atomik Kredi Muhasebesi</p>
              <p><strong>Problem &amp; Mimari Karar:</strong> Uzun dikey manga şeritlerinde ilk çeviri görünme süresini (<code>time_to_first_translation_overlay_ms</code>) düşürmek için JS köprüsüyle görünür bölge öncelikli parçalama (<em>viewport-first tiling</em>) uygulandı. İstemcide API anahtarı tutmak yerine tüm <code>gemini-3.5-flash</code> çağrıları Supabase Edge Functions arkasına alındı; görsel URL&apos;nin SHA-256 özetiyle 24 saatlik önbellek ve aynı sayfaya gelen eşzamanlı isteklerde mükerrer LLM çağrısını önleyen çalışma kilitleri (<code>translation_work_leases</code>) kuruldu.</p>
              <p><strong>Test &amp; Sonuç:</strong> Başarısız AI çağrılarında kredi iadesi ve Google açık anahtar imzalı AdMob SSV ödül yüklemeleri değişmez muhasebe defteri (<em>immutable ledger</em>) RPC&apos;leriyle atomik hale getirildi; <code>credit_account_test</code> ve <code>translation_block_test</code> dahil 16 birim/widget testi ve <em>p50/p95</em> telemetri ile doğrulandı.</p>
            </div>
            <div className="border-l-4 border-violet-600 pl-3.5 space-y-1">
              <p className="font-bold text-zinc-950">2. ProPromptGen — Kesinti Toleranslı (Fallback) Üretim, Paylaşımlı Rate Limit ve Token Güvenliği</p>
              <p><strong>Problem &amp; Mimari Karar:</strong> Harici LLM API gecikmelerinde veya kota aşımında servisin durmaması için <code>@google/generative-ai</code> çağrısının arkasına kural/şablon tabanlı derleyici (<em>fallback engine</em>) eklendi. Çoklu serverless örneklerde bellek içi sayaçlar sıfırlandığı için hız sınırlaması PostgreSQL üzerindeki paylaşımlı <code>RateLimit</code> tablosuna taşındı.</p>
              <p><strong>Test &amp; Sonuç:</strong> Veritabanı sızıntısı riskine karşı şifre sıfırlama akışında ham token yerine yalnızca SHA-256 özeti (<code>token_hash</code>) ve <code>bcryptjs</code> kullanıldı; <em>Critters</em> kritik CSS ve <em>Web Vitals</em> kontrolleriyle 9 dilde kesintisiz üretim ve hızlı SSR açılışı sağlandı.</p>
            </div>
            <div className="border-l-4 border-emerald-600 pl-3.5 space-y-1">
              <p className="font-bold text-zinc-950">3. AstraNova — Çevrimdışı Astronomik Hesaplama (Julian Day / Sidereal Time) ve Bağlam Enjeksiyonu</p>
              <p><strong>Problem &amp; Mimari Karar:</strong> Statik burç metinleri yerine gerçek gök mekaniği sunmak için doğum tarihi (UTC), saat dilimi ve coğrafi koordinatlardan <em>Julian Day</em> ve yerel yıldız zamanı (<em>Local Sidereal Time</em>) üzerinden gezegen boylamlarını hesaplayan efemeris motoru yazıldı; üretilen natal harita vektörü Firebase üzerinden Gemini API&apos;ye sistem bağlamı (<em>context</em>) olarak enjekte edildi.</p>
              <p><strong>Test &amp; Sonuç:</strong> Farklı zaman dilimleri ve enlem/boylam uç değerleri için açısal hesaplama doğrulaması yapıldı; hesaplanan haritalar <code>Hive / SharedPreferences</code> ile cihazda önbelleklenerek internet bağlantısı olmadan da anlık erişim sağlandı.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Experience & Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-300 pb-1 mb-2.5">
            Kurumsal Deneyim &amp; Eğitim
          </h2>
          <div className="space-y-3">
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
                Bilgi İşlem Müdürlüğü bünyesinde kurumsal yazılım süreçlerinin, ilişkisel veritabanı (SQL) yapılarının ve kurum içi bilgi sistemlerinin incelenmesi, veri akışı ve teknik operasyon süreçlerinin desteklenmesi.
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-200">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  Ondokuz Mayıs Üniversitesi (OMÜ)
                </h3>
                <span className="text-xs font-mono text-zinc-600">Mezun</span>
              </div>
              <p className="text-xs font-medium text-cyan-800">
                Bilgisayar Programcılığı (Ön Lisans)
              </p>
              <p className="text-xs text-zinc-600 mt-0.5">
                Temel dersler: Algoritmalar ve Veri Yapıları, Nesne Yönelimli Programlama (OOP), Veritabanı Yönetimi (SQL), Web ve Mobil Programlama.
              </p>
            </div>
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
        </div>
      </main>
    </div>
  );
}
