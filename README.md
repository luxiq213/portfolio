# Three.js Destekli 3D Animasyonlu Geliştirici Portföyü

Bilgisayar Programcılığı mezuniyetine ve yazılım yeteneklerine özel; [threejs.org](https://threejs.org/) tarzında zengin 3D WebGL animasyonları, 3D tilt kartları ve interaktif hacker konsolu içeren modern portföy sitesi.

---

## 🚀 Öne Çıkan Özellikler

1. **Three.js WebGL 3D Uzay Alanı:** 2000+ neon parçacık, süzülen tel kafes (wireframe) 3D geometriler ve fare/parmak hareketine duyarlı kamera derinliği.
2. **İnteraktif 3D Dönen Küp:** Hero bölümünde kullanıcının fareyle tutup 3D uzayda döndürebileceği neon halkalı Three.js kristal küpü.
3. **3D Tilt Cam Kartlar:** Projelerin üzerine gelindiğinde farenin açısına göre 3D derinlik ve parlama (glare) efekti alan cam (glassmorphism) kartlar.
4. **İnteraktif Terminal Konsolu:** `help`, `whoami`, `skills`, `projects`, `sudo hire` ve `clear` gibi komutlarla çalışan retro-fütüristik hacker konsolu.
5. **Kişiselleştirilebilir Veri Mimarisi:** Tüm isim, iletişim, yetenek, proje ve eğitim bilgileri tek bir dosyadan (`src/data/portfolioData.ts`) kolayca yönetilebilir.
6. **Vercel Uyumlu:** Next.js 16 (App Router) + Turbopack ile sıfır ek ayar gerektirmeden Vercel'de tek tıkla canlıya alınabilir.

---

## 🛠️ Yerel Geliştirme (Localhost)

Projeyi bilgisayarında çalıştırmak için:

```bash
# Proje dizinine git
cd c:\Users\mehme\Desktop\portfolio

# Geliştirici sunucusunu başlat
npm run dev
```

Tarayıcında `http://localhost:3000` adresini açarak siteyi canlı görüntüleyebilirsin.

---

## ✏️ Kendi Bilgilerini Nasıl Düzenlersin?

Tek yapman gereken [`src/data/portfolioData.ts`](./src/data/portfolioData.ts) dosyasını açıp bilgileri değiştirmek:

- **Ad & Unvan:** `personal.name`, `personal.fullName`, `personal.typewriterRoles`
- **E-posta & Sosyal Medya:** `personal.email`, `personal.github`, `personal.linkedin`
- **Yetenekler:** `skills` dizisinden dilediğin dilleri/araçları ekleyip çıkarabilirsin.
- **Projeler:** `projects` dizisinden projelerinin başlık, açıklama ve GitHub bağlantılarını güncelleyebilirsin.
- **Eğitim & Zaman Tüneli:** `timeline` dizisinden mezuniyet ve staj bilgilerini özelleştirebilirsin.

---

## 🌐 Vercel'e Nasıl Deploy Edilir?

1. **GitHub'a Gönder:**
   ```bash
   git add .
   git commit -m "feat: 3D animated portfolio ready"
   # Eğer GitHub reponu bağladıysan:
   git push origin main
   ```

2. **Vercel'e Bağla:**
   - [vercel.com](https://vercel.com) adresine git ve giriş yap.
   - **"Add New Project"** butonuna bas.
   - GitHub'daki `portfolio` reponu seç ve **"Deploy"** butonuna tıkla!
   - 1 dakika içinde projen `https://senin-adın.vercel.app` şeklinde ücretsiz olarak tüm dünyada yayında!
