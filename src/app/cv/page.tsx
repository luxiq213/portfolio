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
                Kullanılan Teknolojiler: Flutter, Dart, Riverpod, InAppWebView (JS Bridge), Supabase Edge Functions, Gemini 3.5 Flash Vision, RevenueCat IAP, AdMob SSV
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-0.5">
                <li><strong>Ayrık Çeviri Katmanı &amp; Özelleştirme:</strong> Flutter/Dart ile geliştirilen MangaLens&apos;i Android ve iOS mağazalarında yayımladım. <code>InAppWebView</code> ve JS köprüsüyle kaynak görseli bozmadan görünür bölge öncelikli parçalama (tiling), kaydırma/zoom senkronlu DOM overlay katmanı ve cihazda/bulutta saklanan çeviri kutusu özelleştirmesi (font, boyut, opaklık, renk, kenarlık) işlevlerini hayata geçirdim.</li>
                <li><strong>AI Çeviri, Maliyet &amp; Güvenlik:</strong> Supabase Edge Functions (<code>translate-page</code>) üzerinde <code>gemini-3.5-flash</code> multimodal vision ile 104 hedef dile yapılandırılmış JSON çevirisi kurguladım; API anahtarlarını sunucuda izole edip görsel URL&apos;nin SHA-256 özetiyle 24 saatlik önbellek ve çalışma kilitleri (<code>translation_work_leases</code>) uygulayarak mükerrer AI çağrı maliyetini önledim.</li>
                <li><strong>IAP, Kredi &amp; Test Doğrulaması:</strong> RevenueCat webhook&apos;larıyla idempotent <code>LENS</code> kredi paketleri ve Plus/Pro abonelikleri, hata anında otomatik iade yapan değişmez ledger RPC&apos;leri ve AdMob SSV imzalı ödüllü reklam akışını geliştirdim; 16 otomatik birim/widget testi (<code>flutter test</code>, <code>flutter analyze</code> sıfır hata) ve p50/p95 gecikme telemetrisi uyguladım.</li>
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
                <li><strong>Hibrit Prompt Motoru &amp; Çok Dilli Yapı:</strong> Next.js ve TypeScript ile kullanıcı girdisini <code>@google/generative-ai</code> (Gemini API) veya kesinti anında devreye giren kural/şablon fallback mekanizmasıyla 50+ AI platformuna uygun yapılandırılmış promptlara dönüştüren, route tabanlı 9 dil (<code>tr, en, de, fr, es, it, pt, ru, ja</code>) destekli web ürünü geliştirdim.</li>
                <li><strong>Veritabanı, Güvenlik &amp; Abonelik:</strong> Prisma ve PostgreSQL üzerinde çok dilli prompt çevirileri (JSON), topluluk etkileşimleri (beğeni, iç içe yorum, yer imi, takip, bildirim) ve serverless örnekler arası kalıcı <code>RateLimit</code> tablosunu tasarladım; NextAuth (<code>bcryptjs</code> + SHA-256 şifre sıfırlama) ve Stripe aylık/yıllık Premium abonelik akışlarını entegre ettim.</li>
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
                Kullanılan Teknolojiler: Flutter, Dart, Efemeris &amp; Natal Harita Algoritması, Firebase + Google Gemini API, Yerel Depolama (Hive / SharedPreferences), 9 Dil Yerelleştirme
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-700 mt-1.5 space-y-0.5">
                <li><strong>Efemeris Hesaplama &amp; Çevrimdışı Saklama:</strong> Doğum tarihi, saati ve konum girdilerinden Güneş/Ay/Yükselen (&quot;Büyük Üçlü&quot;), gezegen boylamları ve ev yerleşimlerini hesaplayan efemeris/natal harita motorunu ve hesaplanan profilleri çevrimdışı saklayan yerel veri katmanını (<code>Hive</code> / <code>SharedPreferences</code>) geliştirdim.</li>
                <li><strong>Bağlamsal AI Danışman &amp; Sinastri:</strong> Firebase üzerinden Google Gemini API ile kullanıcının kişisel doğum haritası verilerini bağlam olarak kullanan gerçek zamanlı AI danışman (&quot;Kahin&quot;), iki doğum haritasını karşılaştıran sinastri (ilişki uyumu) modülü ve 9 dilde yerel arayüz desteğini uyguladım.</li>
              </ul>
              <div className="mt-1 text-[11px] text-zinc-600 font-mono">
                Google Play: <a href="https://play.google.com/store/apps/details?id=com.astro.yapici" target="_blank" rel="noreferrer" className="text-emerald-700 underline">play.google.com/store/apps/details?id=com.astro.yapici</a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Skills (Single-column ATS layout, project-grounded) */}
        <section className="mb-8 print:break-before-page">
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
              <p className="font-bold text-zinc-950">1. MangaLens — Ayrık DOM Overlay, AI Maliyet Koruması ve İdempotent Kredi Muhasebesi</p>
              <p><strong>Problem &amp; Mimari Karar:</strong> Uzun manga şeritlerini görseli bozmadan çevirmek ve aynı sayfa için tekrarlayan Gemini API maliyetini önlemek amacıyla <code>InAppWebView + JS Bridge</code> tabanlı ayrık DOM overlay ve görünür bölge öncelikli parçalama (<em>tiling</em>) kuruldu. Tüm AI çağrıları Supabase Edge Functions arkasına alınarak URL SHA-256 önbelleği (24s) ve paralel çalışma kilitleri (<code>translation_work_leases</code>) uygulandı.</p>
              <p><strong>Test &amp; Sonuç:</strong> 16 otomatik birim/widget testi (<code>credit_account_test</code>, <code>translation_block_test</code>, <code>translation_overlay_preferences_test</code> vb.) ve <code>flutter analyze</code> sıfır hata ile doğrulandı; API anahtarları istemciden %100 izole edildi ve başarısız isteklerde atomik PostgreSQL RPC&apos;leriyle otomatik kredi iadesi sağlandı.</p>
            </div>
            <div className="border-l-4 border-violet-600 pl-3.5 space-y-1">
              <p className="font-bold text-zinc-950">2. ProPromptGen — Kesintiye Dayanıklı (Fault-Tolerant) Hibrit Prompt Motoru ve Dağıtık Rate Limit</p>
              <p><strong>Problem &amp; Mimari Karar:</strong> 50+ AI modelinin parametre kurallarını 9 dilde desteklemek ve harici LLM API kesintilerinde servisin durmasını engellemek için <code>@google/generative-ai</code> (Gemini API) çağrısının arkasına kural/şablon tabanlı derleyici (<em>fallback engine</em>) ve PostgreSQL üzerinde serverless örnekler arası paylaşılan kalıcı <code>RateLimit</code> tablosu eklendi.</p>
              <p><strong>Test &amp; Sonuç:</strong> NextAuth üzerinde <code>bcryptjs</code> ve ham token yerine SHA-256 özeti saklayan şifre sıfırlama akışı, Stripe webhook imza doğrulaması ve <em>Web Vitals</em> kontrolleri uygulandı; API kesintilerinde dahi 9 dilde kesintisiz prompt üretimi ve SSR indekslemesi sağlandı.</p>
            </div>
            <div className="border-l-4 border-emerald-600 pl-3.5 space-y-1">
              <p className="font-bold text-zinc-950">3. AstraNova — Çevrimdışı Efemeris Hesaplama ve Doğum Haritası Bağlamlı AI Danışman</p>
              <p><strong>Problem &amp; Mimari Karar:</strong> Statik burç metinleri yerine kullanıcının doğum tarihi, saati ve koordinatlarına göre gerçek astronomik harita çıkarmak için Julian Day ve yerel yıldız zamanı (<em>Sidereal Time</em>) tabanlı efemeris motoru geliştirildi; Firebase üzerinden Google Gemini API&apos;ye kullanıcının natal harita verileri bağlam olarak aktarılarak &quot;Kahin&quot; AI danışmanı ve çift harita sinastri analizi kurgulandı.</p>
              <p><strong>Test &amp; Sonuç:</strong> Farklı zaman dilimleri ve enlem/boylam uç değerleri için hesaplama doğrulaması yapıldı; temel harita ve profil verileri internet gerektirmeden yerel depolamada (<code>Hive / SharedPreferences</code>) çevrimdışı saklanırken 9 dilde yerel kullanıcı deneyimi sunuldu.</p>
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
