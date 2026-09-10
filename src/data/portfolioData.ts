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
    cvDownloadUrl: "/Mehmet_Comert_CV.pdf",
    cvViewUrl: "/cv",
    bio: "Ondokuz Mayıs Üniversitesi Bilgisayar Programcılığı mezunuyum. Özellikle Flutter ve Dart ile hem Android (Google Play) hem de iOS (App Store) için uçtan uca canlı mobil uygulamalar (MangaLens, Astro Yapıcı) üretiyorum. Web tarafında React ekosistemine derin bir ilgi duyuyor ve modern arayüzler geliştiriyorum. Aynı zamanda hızla evrilen Yapay Zeka (AI) dünyasını, LLM modellerini ve AI araçlarını yakından takip ederek projelerime (propromptgen.com gibi) ve geliştirme süreçlerime aktif olarak entegre ediyorum.",
    typewriterRoles: [
      "Mobil (Flutter & Dart) Geliştirici",
      "React & Next.js Ekosistemi Meraklısı",
      "Aktif Yapay Zeka (AI) & LLM Takipçisi",
      "Google Play & App Store Yayıncısı",
      "Ondokuz Mayıs Ünv. Bilgisayar Programcılığı Mezunu",
      "Sürekli Öğrenen & Çözüm Üreten Yazılımcı"
    ]
  },

  skills: [
    // Mobil (Flutter)
    { name: "Flutter & Dart", category: "Mobil (Flutter)", level: 92, iconName: "Smartphone", highlight: true },
    { name: "Cross-Platform (iOS & Android)", category: "Mobil (Flutter)", level: 90, iconName: "Layers", highlight: true },
    { name: "State Management (Bloc / Provider / Riverpod)", category: "Mobil (Flutter)", level: 86, iconName: "Cpu", highlight: true },
    { name: "Google Play Console & Store Yayınlama", category: "Mobil (Flutter)", level: 90, iconName: "Store", highlight: true },
    { name: "Apple App Store & TestFlight Yönetimi", category: "Mobil (Flutter)", level: 85, iconName: "Boxes", highlight: true },
    { name: "Camera, OCR & Cihaz API'leri", category: "Mobil (Flutter)", level: 84, iconName: "Camera" },

    // Web & React
    { name: "React.js (Yüksek İlgi & Pratik)", category: "Web & React", level: 90, iconName: "Globe", highlight: true },
    { name: "Next.js 15+ & App Router", category: "Web & React", level: 88, iconName: "Globe", highlight: true },
    { name: "TypeScript & Modern JavaScript", category: "Web & React", level: 88, iconName: "FileJson", highlight: true },
    { name: "Tailwind CSS & Modern Arayüzler", category: "Web & React", level: 92, iconName: "Palette" },
    { name: "Three.js & 3D WebGL Deneyimi", category: "Web & React", level: 75, iconName: "Box" },
    { name: "HTML5 & Modern CSS3", category: "Web & React", level: 92, iconName: "Layout" },

    // Yapay Zeka & Araçlar
    { name: "Aktif Yapay Zeka (AI) & LLM Takibi", category: "Yapay Zeka & Araçlar", level: 92, iconName: "Sparkles", highlight: true },
    { name: "Prompt Engineering & Optimizasyon", category: "Yapay Zeka & Araçlar", level: 90, iconName: "Bot", highlight: true },
    { name: "AI API Entegrasyonları (LLM / Vision)", category: "Yapay Zeka & Araçlar", level: 86, iconName: "Cpu", highlight: true },
    { name: "Git & GitHub Versiyon Kontrolü", category: "Yapay Zeka & Araçlar", level: 88, iconName: "GitBranch", highlight: true },
    { name: "Postman (API Test & Dokümantasyon)", category: "Yapay Zeka & Araçlar", level: 88, iconName: "Send" },
    { name: "VS Code & Android Studio", category: "Yapay Zeka & Araçlar", level: 92, iconName: "Monitor" },
    { name: "Vercel Cloud Deployment", category: "Yapay Zeka & Araçlar", level: 88, iconName: "Cloud" },

    // Backend & Veritabanı
    { name: "RESTful API & JSON Entegrasyonu", category: "Backend & Veritabanı", level: 88, iconName: "Server", highlight: true },
    { name: "Firebase (Auth, Firestore, Cloud)", category: "Backend & Veritabanı", level: 85, iconName: "Cloud", highlight: true },
    { name: "SQL (MySQL, MS SQL, PostgreSQL)", category: "Backend & Veritabanı", level: 84, iconName: "Database", highlight: true },
    { name: "Prisma ORM & Supabase", category: "Backend & Veritabanı", level: 82, iconName: "HardDrive" },
    { name: "C# (.NET) & OOP Prensipleri", category: "Backend & Veritabanı", level: 80, iconName: "Code" }
  ] as Skill[],

  projects: [
    {
      id: "mangalens",
      title: "MangaLens (Android & iOS Mobil Uygulama)",
      category: "Mobil / Flutter",
      description: "Flutter ile geliştirilen, hem Google Play Store hem de Apple App Store üzerinde canlı yayında olan yüksek performanslı mobil uygulama. Görsel işleme ve modern mobil kullanıcı deneyimi sunar.",
      technologies: ["Flutter", "Dart", "Cross-Platform", "App Store (iOS)", "Google Play Store (Android)", "REST API"],
      features: [
        "Hem iOS hem Android mağazalarında canlı yayında olan ürün kalitesi",
        "Kamera, görsel tarama ve modern kullanıcı arayüzü mimarisi",
        "Akıcı 60 FPS sayfa geçişleri ve optimize bellek yönetimi",
        "Google Play Console ve App Store Connect mağaza dağıtım deneyimi"
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mangalens.app",
      appStoreUrl: "https://apps.apple.com",
      liveUrl: "https://play.google.com/store/apps/details?id=com.mangalens.app",
      featured: true,
      badge: "Google Play & App Store Canlı",
      codeSnippet: `// Flutter: Optimize Edilmiş Image Stream ve UI Entegrasyonu
class MangaLensViewer extends StatefulWidget {
  final String contentId;
  const MangaLensViewer({super.key, required this.contentId});

  @override
  State<MangaLensViewer> createState() => _MangaLensViewerState();
}

class _MangaLensViewerState extends State<MangaLensViewer> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: InteractiveViewer(
        maxScale: 4.0,
        child: CachedNetworkImage(
          imageUrl: widget.contentId,
          placeholder: (context, url) => const Center(child: CircularProgressIndicator()),
        ),
      ),
    );
  }
}`
    },
    {
      id: "propromptgen",
      title: "ProPromptGen (Web / AI Platformu)",
      category: "Web / AI",
      description: "Yapay zeka modelleri (LLM'ler ve görsel üretim araçları) için yüksek kaliteli ve optimize istemler (prompts) üreten profesyonel web platformu. Aktif yapay zeka takibinin ve React/Next.js yetkinliğinin somut ürünü.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Prompt Engineering", "Vercel"],
      features: [
        "Canlı yayında çalışan üretim aracı (propromptgen.com)",
        "Gelişmiş prompt parametreleme ve anında kopyalama araçları",
        "Kullanıcı dostu, hızlı ve responsive React web mimarisi",
        "SEO ve performans odaklı SSR (Server-Side Rendering)"
      ],
      liveUrl: "https://propromptgen.com",
      featured: true,
      badge: "propromptgen.com Canlı",
      codeSnippet: `// ProPromptGen: AI Prompt Yapılandırma ve Format Motoru
export function generateEnginePrompt(config: PromptConfig): string {
  const { subject, style, lighting, cameraAngle, qualityBoost } = config;
  const modifiers = [style, lighting, cameraAngle, qualityBoost ? "8k resolution, photorealistic" : ""]
    .filter(Boolean)
    .join(", ");
  
  return \`\${subject} in the style of \${modifiers}\`.trim();
}`
    },
    {
      id: "astro-yapici",
      title: "Astro Yapıcı (Android Mobil Uygulama)",
      category: "Mobil / Flutter",
      description: "Google Play Store üzerinde aktif olarak yayınlanan; astroloji, doğum haritası ve dinamik veri analizi sunan Flutter mobil uygulaması.",
      technologies: ["Flutter", "Dart", "Google Play Store", "Local Storage", "State Management"],
      features: [
        "Google Play Store üzerinde canlı ve doğrulanmış yayın",
        "Dinamik tarih ve konum bazlı astrolojik hesaplama algoritmaları",
        "Karanlık mod ve modern mobil kart tasarımları",
        "Kullanıcı tercihlerini yerel hafızada (SharedPrefs/Hive) saklama"
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.astro.yapici",
      liveUrl: "https://play.google.com/store/apps/details?id=com.astro.yapici",
      featured: true,
      badge: "Google Play Canlı",
      codeSnippet: `// Flutter: Doğum Haritası ve Burç Hesaplama Algoritması
class AstroCalculator {
  static AstroSign calculateSign(DateTime birthDate) {
    final day = birthDate.day;
    final month = birthDate.month;
    // Matematiksel zodyak derece döngüsü
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return AstroSign.aries;
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return AstroSign.taurus;
    // ... diğer burç hesaplamaları
    return AstroSign.aries;
  }
}`
    },
    {
      id: "esnaf-lokanta",
      title: "Esnaf Lokantası & Sipariş Yönetim Sistemi",
      category: "Full-Stack",
      description: "Restoran ve esnaf lokantaları için geliştirilmiş; masa sipariş döngüsü, rol bazlı yetkilendirme (JWT), Prisma ORM ve PostgreSQL destekli modern full-stack web uygulaması.",
      technologies: ["Next.js", "React", "Prisma ORM", "Tailwind CSS", "TypeScript", "Bcrypt / JWT"],
      features: [
        "Rol tabanlı yetkilendirme (Admin / Kasiyer / Garson)",
        "Masa sipariş döngüsü ve anlık hesap fişi oluşturma",
        "Prisma ile optimize ilişkisel veritabanı sorguları"
      ],
      githubUrl: "https://github.com/luxiq213",
      featured: false
    }
  ] as Project[],

  timeline: [
    {
      year: "Mezuniyet",
      title: "Bilgisayar Programcılığı Mezuniyeti",
      institution: "Ondokuz Mayıs Üniversitesi (OMÜ)",
      description: "Algoritma tasarımı, Nesne Yönelimli Programlama (OOP), Veritabanı Sistemleri (SQL), Veri Yapıları ve Mobil/Web yazılım geliştirme alanlarında eğitim başarıyla tamamlandı.",
      badge: "Ön Lisans",
      type: "education"
    },
    {
      year: "2024 - Günümüz",
      title: "Mobil Uygulama Geliştiricisi (Flutter)",
      institution: "Google Play Store & Apple App Store",
      description: "MangaLens (iOS & Android) ve Astro Yapıcı (Android) gibi canlı uygulamaların sıfırdan geliştirilmesi, mağaza onay süreçleri (Store Review) ve bakım yönetimi.",
      badge: "Canlı Ürünler",
      type: "experience"
    },
    {
      year: "2024 - Günümüz",
      title: "Yapay Zeka & Web Platform Geliştirme",
      institution: "ProPromptGen.com",
      description: "Modern web teknolojileri (React, Next.js, Tailwind CSS) ve yapay zeka istem mühendisliği (Prompt Engineering) ile propromptgen.com platformunun sıfırdan hayata geçirilmesi.",
      badge: "Web Platformu",
      type: "experience"
    }
  ] as TimelineItem[]
};
