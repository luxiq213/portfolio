export interface CaseStudy {
  problem: string;
  architecture: string;
  testing: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Mobil / Flutter" | "Web / AI" | "Full-Stack";
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  featured: boolean;
  codeSnippet?: string;
  caseStudy?: CaseStudy;
  badge?: string;
}

export interface Skill {
  name: string;
  category: "Mobil (Flutter)" | "Web & React" | "Yapay Zeka & Araçlar" | "Backend & Veritabanı";
  level: number; // 0 - 100
  iconName: string;
  highlight?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  badge: string;
  type: "education" | "experience" | "certificate";
  certificateUrl?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mehmet Cömert",
    fullName: "Mehmet Cömert",
    title: "Mobil (Flutter), React & Yapay Zeka Odaklı Geliştirici",
    status: "Yeni İş Fırsatlarına Açık",
    location: "Körfez, Kocaeli, Türkiye",
    phone: "0537 797 89 22",
    phoneFormatted: "+90 (537) 797 89 22",
    email: "mehmetc4122@gmail.com",
    github: "https://github.com/luxiq213",
    linkedin: "https://linkedin.com",
    portfolioUrl: "https://portfolio-fyi0li9cq-luxiq213s-projects.vercel.app/",
    cvDownloadUrl: "/Mehmet_Comert_CV.pdf?v=7",
    cvViewUrl: "/cv",
    bio: "Ondokuz Mayıs Üniversitesi Bilgisayar Programcılığı mezunuyum. Flutter (Riverpod, InAppWebView) ve Supabase Edge Functions kullanarak Android ve iOS mağazalarında canlı yayında olan ürünler (MangaLens: Manga Çeviri, AstraNova: Astroloji & Burç) geliştirdim. Projelerimde Google Gemini multimodal vision API, görsel önbellekleme, RevenueCat IAP/abonelik, AdMob ödüllü reklam doğrulaması ve PostgreSQL tabanlı kredi/bakiye yönetimi kurguladım. Web tarafında ise Next.js (App Router), React 19, TypeScript, Prisma + PostgreSQL, NextAuth ve Stripe ile çok dilli (9 dil) canlı SaaS platformları (propromptgen.com) üretiyorum.",
    typewriterRoles: [
      "Flutter & Supabase Full-Stack Mobil Geliştirici",
      "Next.js, React 19 & TypeScript Geliştiricisi",
      "Gemini Multimodal AI & Edge Functions Mimarisi",
      "Google Play & App Store Yayıncısı (iOS & Android)",
      "RevenueCat IAP, Stripe & SaaS Ürün Geliştirici"
    ]
  },

  skills: [
    // Mobil (Flutter)
    { name: "Flutter & Dart (iOS & Android Single Codebase)", category: "Mobil (Flutter)", level: 92, iconName: "Smartphone", highlight: true },
    { name: "Riverpod State Management & Modüler Mimari", category: "Mobil (Flutter)", level: 90, iconName: "Cpu", highlight: true },
    { name: "InAppWebView, JS Bridge & DOM Overlay Katmanı", category: "Mobil (Flutter)", level: 90, iconName: "Layers", highlight: true },
    { name: "RevenueCat (IAP / Abonelik) & AdMob SSV", category: "Mobil (Flutter)", level: 88, iconName: "Store", highlight: true },
    { name: "Google Play Console & App Store Connect (Codemagic)", category: "Mobil (Flutter)", level: 90, iconName: "Boxes", highlight: true },
    { name: "Birim & Widget Testleri (flutter test / analyze)", category: "Mobil (Flutter)", level: 85, iconName: "Code" },

    // Web & React
    { name: "React 19 & Next.js 16 (App Router, SSR)", category: "Web & React", level: 90, iconName: "Globe", highlight: true },
    { name: "TypeScript & JavaScript (ES6+)", category: "Web & React", level: 88, iconName: "FileJson", highlight: true },
    { name: "Çok Dilli (i18n) Route Mimarisi & Dinamik SEO", category: "Web & React", level: 88, iconName: "Globe", highlight: true },
    { name: "Tailwind CSS & Responsive UI/UX", category: "Web & React", level: 92, iconName: "Palette" },
    { name: "Three.js & 3D WebGL Sahneleri", category: "Web & React", level: 75, iconName: "Box" },
    { name: "Web Vitals & Kritik CSS Performans Optimizasyonu", category: "Web & React", level: 86, iconName: "Layout" },

    // Yapay Zeka & Araçlar
    { name: "Google Gemini Multimodal Vision & Structured JSON", category: "Yapay Zeka & Araçlar", level: 92, iconName: "Sparkles", highlight: true },
    { name: "AI Maliyet Optimizasyonu & Görsel Önbellekleme (Cache)", category: "Yapay Zeka & Araçlar", level: 90, iconName: "Cpu", highlight: true },
    { name: "Prompt Mühendisliği & Kural/Şablon Fallback Motoru", category: "Yapay Zeka & Araçlar", level: 90, iconName: "Bot", highlight: true },
    { name: "Git, GitHub & Codemagic CI/CD", category: "Yapay Zeka & Araçlar", level: 88, iconName: "GitBranch", highlight: true },
    { name: "Deno, VS Code, Xcode & Android Studio", category: "Yapay Zeka & Araçlar", level: 92, iconName: "Monitor" },
    { name: "Vercel & Netlify Cloud Deployment", category: "Yapay Zeka & Araçlar", level: 88, iconName: "Cloud" },

    // Backend & Veritabanı
    { name: "Supabase (PostgreSQL, RLS, Auth & Edge Functions)", category: "Backend & Veritabanı", level: 90, iconName: "Server", highlight: true },
    { name: "Prisma ORM & İlişkisel PostgreSQL Şema Tasarımı", category: "Backend & Veritabanı", level: 88, iconName: "Database", highlight: true },
    { name: "NextAuth (bcrypt, SHA-256 Token) & Stripe Webhooks", category: "Backend & Veritabanı", level: 86, iconName: "Cloud", highlight: true },
    { name: "PostgreSQL RPC Fonksiyonları & Rate Limiting", category: "Backend & Veritabanı", level: 86, iconName: "HardDrive", highlight: true },
    { name: "C# (.NET) & Katmanlı OOP Prensipleri", category: "Backend & Veritabanı", level: 80, iconName: "Code" }
  ] as Skill[],

  projects: [
    {
      id: "mangalens",
      title: "MangaLens: Manga Çeviri (Android & iOS)",
      category: "Mobil / Flutter",
      description: "Flutter/Dart, Riverpod ve Supabase Edge Functions ile geliştirilip Google Play ve App Store'da yayımlanan gerçek zamanlı manga çeviri tarayıcısı. WebView içindeki görselleri kaynak dosyayı bozmadan ayrık DOM katmanıyla (overlay) 104 hedef dile çevirir.",
      technologies: ["Flutter & Riverpod", "InAppWebView & JS Bridge", "Supabase Edge Functions", "Gemini 3.5 Flash Vision", "RevenueCat IAP", "AdMob SSV", "SHA-256 Cache"],
      features: [
        "InAppWebView ve JS köprüsüyle görünür bölge öncelikli görsel parçalama (tiling), normalize koordinatlarla kaydırma/zoom senkronlu DOM çeviri katmanı ve canlı kutu özelleştirmesi (font, renk, opaklık, kenarlık)",
        "Supabase Edge Functions (translate-page) üzerinde Gemini 3.5 Flash multimodal vision ile yapılandırılmış JSON çevirisi; görsel URL önbelleği (24 saat) ile mükerrer AI çağrısı ve maliyet koruması",
        "RevenueCat webhook'ları ile LENS kredi cüzdanı ve Plus/Pro abonelik, hata anında otomatik kredi iadesi yapan PostgreSQL fonksiyonları (RPC) ve AdMob ödüllü reklam akışı",
        "Anonim oturumdan OAuth/e-posta hesabına yükseltme, 18 arayüz dili (RTL dahil), p50/p95 gecikme telemetrisi ve 16 otomatik birim/widget testi (flutter test & analyze sıfır hata)"
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mangalens.app",
      appStoreUrl: "https://apps.apple.com/tr/app/mangalens-manga-%C3%A7eviri/id6793662351?l=tr",
      liveUrl: "https://play.google.com/store/apps/details?id=com.mangalens.app",
      featured: true,
      badge: "Google Play & App Store Canlı",
      codeSnippet: `// Supabase Edge Function + Flutter: Görsel Önbellek & DOM Overlay Akışı
// 1. Görsel URL'nin SHA-256 özetiyle 24 saatlik önbellek kontrolü
// 2. Önbellekte yoksa Gemini 3.5 Flash Vision -> Yapılandırılmış JSON koordinatlar
// 3. WebView JS Bridge ile çeviri kutularını (bounding-box) DOM katmanına çizme
final result = await supabase.functions.invoke('translate-page', body: {
  'imageUrl': pageUrl,
  'imageHash': sha256.convert(utf8.encode(cleanUrl)).toString(),
  'targetLang': selectedLangCode,
});`,
      caseStudy: {
        problem: "Uzun dikey manga şeritlerindeki konuşma balonlarını orijinal görseli bozmadan hızlıca çevirmek ve aynı sayfa için tekrarlayan Gemini API maliyetini önlemek.",
        architecture: "InAppWebView üzerinde JS köprüsüyle çalışan ayrık DOM overlay mimarisi kuruldu. Uzun görseller ekranda görünen bölgeye öncelik verecek şekilde parçalara bölündü; tüm AI çağrıları Supabase Edge Functions arkasına alınarak 24 saatlik URL önbelleği ve eşzamanlı istek kontrolü uygulandı.",
        testing: "16 otomatik birim/widget testi (credit_account_test, translation_block_test, translation_overlay_preferences_test vb.) ve flutter analyze sıfır hata kontrolü.",
        outcome: "API anahtarları istemciden izole edildi, önbellekleme ile mükerrer LLM maliyeti engellendi; hata anında PostgreSQL fonksiyonlarıyla (RPC) otomatik kredi iadesi sağlandı."
      }
    },
    {
      id: "propromptgen",
      title: "ProPromptGen — Çok Dilli AI Prompt & Topluluk Platformu",
      category: "Web / AI",
      description: "Next.js (App Router), TypeScript, Prisma + PostgreSQL, NextAuth ve Stripe ile geliştirilen; 9 dilde ve 50+ AI platformu (ChatGPT, Claude, Gemini, Midjourney vb.) için yapılandırılmış prompt üretimi ve topluluk paylaşımı sunan tam kapsamlı SaaS web ürünü.",
      technologies: ["Next.js (App Router)", "React 19 & TypeScript", "Google Gemini API", "Prisma & PostgreSQL", "NextAuth & Stripe", "9 Dilli i18n (SSR)"],
      features: [
        "Google Gemini API (@google/generative-ai) ile kullanıcı girdisini seçilen AI platformuna göre yapılandırılmış promptlara dönüştüren Prompt Studio ve kesinti anında devreye giren kural/şablon tabanlı fallback mekanizması",
        "Prisma ORM ve PostgreSQL üzerinde çok dilli prompt çevirileri (JSON), topluluk etkileşimleri (beğeni, iç içe yorum, yer imi, takip, bildirim) ve serverless örnekler arası paylaşılan kalıcı Rate Limit tablosu",
        "NextAuth (bcryptjs + SHA-256 hash'li şifre sıfırlama token'ları) ile güvenli kimlik doğrulama ve Stripe abonelikleriyle aylık/yıllık Premium üyelik yönetimi",
        "Route tabanlı 9 dil desteği (/{lang}/...: tr, en, de, fr, es, it, pt, ru, ja), SSR SEO mimarisi, Critters kritik CSS ve Web Vitals performans izlemesi"
      ],
      liveUrl: "https://propromptgen.com",
      featured: true,
      badge: "propromptgen.com Canlı",
      codeSnippet: `// ProPromptGen: Gemini API İyileştirme + Akıllı Şablon Fallback & Rate Limit
export async function generateOptimizedPrompt(input: PromptRequest) {
  await enforceDatabaseRateLimit(input.clientKey);
  try {
    return await generateWithGeminiModel(input.rawPrompt, input.platform, input.lang);
  } catch {
    return compileRuleBasedTemplate(input.rawPrompt, input.platform, input.category);
  }
}`,
      caseStudy: {
        problem: "50+ farklı AI modelinin parametre kurallarını 9 dilde desteklemek ve harici LLM API kesintilerinde veya aşırı isteklerde servisin durmasını engellemek.",
        architecture: "Next.js App Router üzerinde @google/generative-ai (Gemini API) ile kural/şablon tabanlı derleyiciyi birleştiren hibrit motor kuruldu. Serverless örnekler arasında paylaşılan PostgreSQL tabanlı RateLimit tablosu ve JSON çok dilli çeviri şeması tasarlandı.",
        testing: "NextAuth üzerinde bcryptjs şifreleme ve ham token yerine SHA-256 özeti saklayan şifre sıfırlama akışı, Stripe webhook imza doğrulaması, Critters kritik CSS ve Web Vitals performans takibi.",
        outcome: "API kesintilerinde dahi kural tabanlı fallback ile kesintisiz prompt üretimi sağlandı; 9 dilde dinamik SSR rotalarıyla arama motoru indekslemesi ve güvenli SaaS abonelik döngüsü tamamlandı."
      }
    },
    {
      id: "astranova",
      title: "AstraNova: Astroloji & Burç (Android Mobil Uygulama)",
      category: "Mobil / Flutter",
      description: "Google Play Store'da canlı yayında olan; hassas gök hesaplamaları (efemeris) ile doğum haritası (natal harita) çıkaran, sinastri (aşk uyumu), ay takvimi ve yapay zeka destekli astroloji danışmanı ('Kahin') sunan Flutter uygulaması.",
      technologies: ["Flutter", "Dart", "Efemeris & Natal Harita", "AI Danışman (Kahin / LLM)", "Sinastri Analizi", "Hive / SharedPreferences", "Google Play Store"],
      features: [
        "Hassas gök hesaplamaları (efemeris) ile doğum tarihi, saati ve konumuna göre detaylı doğum haritası (natal harita) çıkarma",
        "Yapay zeka (LLM) destekli astroloji danışmanı ('Kahin'), günlük burç yorumları, aşk uyumu (sinastri) ve ay takvimi modülleri",
        "Reaktif durum yönetimi (State Management) ve yerel veri kalıcılığı (Hive / SharedPreferences) ile hızlı profil ve harita saklama",
        "Google Play Store üzerinde doğrulanmış üretim sürümü ve modern kozmik UI/UX tasarımı"
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.astro.yapici",
      liveUrl: "https://play.google.com/store/apps/details?id=com.astro.yapici",
      featured: true,
      badge: "Google Play Canlı",
      codeSnippet: `// Flutter: AstraNova Efemeris Doğum Haritası (Natal) & Sinastri Hesaplayıcı
class AstraNovaEngine {
  static NatalChart computeNatalChart({
    required DateTime birthDateUtc,
    required double latitude,
    required double longitude,
  }) {
    final julianDay = EphemerisMath.toJulianDay(birthDateUtc);
    final siderealTime = EphemerisMath.localSiderealTime(julianDay, longitude);
    final ascendantDeg = EphemerisMath.calculateAscendant(siderealTime, latitude);
    return NatalChart(
      sunSign: ZodiacMapper.fromLongitude(EphemerisMath.sunLongitude(julianDay)),
      ascendant: ZodiacMapper.fromLongitude(ascendantDeg),
    );
  }
}`,
      caseStudy: {
        problem: "Statik burç metinleri yerine kullanıcının gerçek doğum tarihi, saati ve coğrafi koordinatlarına dayalı astronomik harita hesaplamak ve kişiselleştirilmiş AI yorumları üretmek.",
        architecture: "Julian Day ve yerel yıldız zamanı (Sidereal Time) üzerinden Güneş/Ay/Yükselen ve ev yerleşimlerini hesaplayan efemeris motoru yazıldı; Firebase üzerinden Google Gemini API'ye kullanıcının natal harita parametreleri bağlam olarak aktarılarak 'Kahin' AI danışmanı ve çift harita sinastri analizi kurgulandı.",
        testing: "Farklı zaman dilimleri ve enlem/boylam uç değerleri için doğum haritası hesaplama doğrulaması, çevrimdışı profil saklama (Hive/SharedPreferences) ve 9 dilde yerel arayüz kontrolü.",
        outcome: "Temel doğum haritası ve profil verileri internet bağlantısı gerektirmeden cihazda anlık hesaplanıp saklanırken, AI danışman ve sinastri modülleriyle kişiye özel dinamik içerik üretimi sağlandı."
      }
    },
    {
      id: "esnaf-lokanta",
      title: "Esnaf Lokantası — Online Tabldot & Sipariş Sistemi",
      category: "Full-Stack",
      description: "Restoran ve kurumsal yemek/tabldot işletmeleri için Next.js, Prisma ORM ve PostgreSQL ile geliştirilmiş; müşteri onay mekanizması, dinamik tabldot menü oluşturma ve sipariş yönetim uygulaması.",
      technologies: ["Next.js (App Router)", "React", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "bcryptjs"],
      features: [
        "Admin onaylı müşteri kayıt sistemi (isApproved), rol bazlı yetkilendirme (Admin / Customer) ve servis açma/kapatma kontrolü",
        "Günlük menü (isDailyMenu), dinamik Tabldot paket yapılandırması (JSON) ve stok/kategori bazlı ürün yönetimi",
        "Çoklu teslimat adresi tanımlama, sipariş durumu takibi ve POS/Nakit ödeme tercihi akışı"
      ],
      githubUrl: "https://github.com/luxiq213",
      featured: false,
      caseStudy: {
        problem: "Günlük değişen yemek menülerini, kurumsal tabldot paketlerini ve onaylı müşteri siparişlerini tek bir ilişkisel veritabanı şemasında yönetmek.",
        architecture: "Next.js App Router ve Prisma ORM üzerinde User (admin/customer + isApproved), Product (isDailyMenu + stok), Order (JSON tabldots + POS/Nakit) ve çoklu Address tablolarıyla ilişkisel PostgreSQL mimarisi kuruldu.",
        testing: "Rol bazlı rota koruması, stok düşümü, servis açık/kapalı (Setting.isServiceOpen) durum kontrolleri ve bcryptjs parola doğrulaması.",
        outcome: "İşletmenin günlük menü ve tabldot siparişlerini kağıt/telefon trafiği olmadan onaylı müşteriler üzerinden dijital olarak yönetebildiği tam kapsamlı sipariş akışı tamamlandı."
      }
    }
  ] as Project[],

  timeline: [
    {
      year: "2024 - Günümüz",
      title: "Mobil Uygulama Geliştiricisi (Flutter & Dart)",
      institution: "Google Play Store & Apple App Store (Bağımsız Geliştirici)",
      description: "MangaLens: Manga Çeviri (iOS & Android) ve AstraNova: Astroloji & Burç (Android) uygulamalarının uçtan uca geliştirilmesi, Supabase Edge Functions + Gemini AI entegrasyonları, RevenueCat IAP ve mağaza yayın/onay süreçlerinin yönetimi.",
      badge: "Canlı Ürünler",
      type: "experience"
    },
    {
      year: "2024 - Günümüz",
      title: "Full-Stack Web & AI Ürün Geliştirme",
      institution: "ProPromptGen.com",
      description: "Next.js (App Router), React 19, TypeScript, Prisma + PostgreSQL, NextAuth, Stripe ve Google Gemini API ile 9 dilli propromptgen.com SaaS platformunun sıfırdan geliştirilmesi ve işletilmesi.",
      badge: "SaaS Platformu",
      type: "experience"
    },
    {
      year: "Staj Dönemi",
      title: "Bilgi İşlem Stajyeri (Kurumsal Yazılım & Veritabanı)",
      institution: "Körfez Belediyesi — Bilgi İşlem Müdürlüğü",
      description: "Bilgisayar Programcılığı eğitimi kapsamında Bilgi İşlem Müdürlüğü bünyesinde kurumsal yazılım mimarilerinin, ilişkisel veritabanı (SQL) süreçlerinin ve belediye içi bilgi sistemlerinin incelenmesi, veri bütünlüğü kontrolleri ve teknik süreçlerin desteklenmesi.",
      badge: "Kurumsal Staj",
      type: "experience"
    },
    {
      year: "Mezuniyet",
      title: "Bilgisayar Programcılığı Mezuniyeti",
      institution: "Ondokuz Mayıs Üniversitesi (OMÜ)",
      description: "Algoritma tasarımı, Nesne Yönelimli Programlama (OOP), Veritabanı Yönetim Sistemleri (SQL), Veri Yapıları ve Mobil/Web yazılım geliştirme alanlarında ön lisans eğitimi başarıyla tamamlandı.",
      badge: "Ön Lisans",
      type: "education"
    },
    {
      year: "Sertifika",
      title: "EF SET İngilizce Dil Sertifikası (A1)",
      institution: "EF Standard English Test (EF SET)",
      description: "Uluslararası EF SET standartlarında doğrulanabilir İngilizce seviye tespit sertifikası (A1) ve yazılım geliştirme süreçlerinde teknik dokümantasyon/API okuma pratiği.",
      badge: "EF SET A1 • Doğrulanabilir",
      type: "certificate",
      certificateUrl: "https://cert.efset.org/en/vSZxnD"
    }
  ] as TimelineItem[]
};
