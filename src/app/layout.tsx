import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/3d/ThreeBackground";

export const metadata: Metadata = {
  title: "Bilgisayar Programcısı & Yazılım Geliştirici | Three.js 3D Portföy",
  description: "Bilgisayar Programcılığı mezunu, C#, SQL Server, .NET, Next.js, React ve Three.js WebGL teknolojileriyle geliştirilmiş interaktif 3D portföy.",
  keywords: [
    "Bilgisayar Programcılığı",
    "Yazılım Geliştirici",
    "C# Developer",
    "MS SQL Server",
    "Next.js",
    "Three.js",
    "React",
    "Vercel Portfolio"
  ],
  authors: [{ name: "Mehmet" }],
  openGraph: {
    title: "Bilgisayar Programcısı & Yazılım Geliştirici | 3D Portföy",
    description: "Three.js destekli, C# ve SQL projelerini sergileyen 3D interaktif portföy sitesi.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#050814] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Three.js 3D WebGL Canvas Layer */}
        <ThreeBackground />

        {/* Global Glassmorphic Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10 flex flex-col">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
