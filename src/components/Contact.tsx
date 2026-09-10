"use client";

import React, { useState } from "react";
import { Mail, Send, Copy, Check, MessageSquare, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#8b5cf6", "#10b981", "#ffffff"]
    });

    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>İletişim & İş Birliği</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Birlikte Harika Projeler{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Üretelim
          </span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm">
          İster tam zamanlı bir iş fırsatı, ister bir freelance proje veya sadece yazılım üzerine sohbet... Bana dilediğiniz zaman ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Info & Direct Links */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>Doğrudan İletişim</span>
            </h3>

            {/* Email quick copy */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-400">E-Posta Adresi</label>
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/50 border border-zinc-800">
                <span className="text-xs sm:text-sm font-mono text-cyan-300 select-all truncate pr-2">
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-cyan-950 hover:text-cyan-300 text-zinc-300 transition-colors shrink-0"
                  title="E-postayı Kopyala"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] font-mono text-emerald-400">E-posta panoya kopyalandı!</p>
              )}
            </div>

            {/* Social Links Buttons */}
            <div className="pt-2 space-y-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700/50 text-xs sm:text-sm text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub Profilim</span>
                </div>
                <span className="text-xs font-mono text-cyan-400">@profil →</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700/50 text-xs sm:text-sm text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-violet-400" />
                  <span>LinkedIn Profilim</span>
                </div>
                <span className="text-xs font-mono text-violet-400">@profil →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Interactive Message Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Mesajınız Alındı!</h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
                En kısa sürede e-posta adresiniz üzerinden geri dönüş sağlayacağım. İlginiz için teşekkürler!
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-zinc-800 text-zinc-300 hover:text-white"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Adınız & Soyadınız
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Örn: Ahmet Yılmaz"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700/70 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                  E-Posta Adresiniz
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ornek@sirket.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700/70 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Mesajınız
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Proje detayı, iş teklifi veya bir selam..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700/70 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>Mesajı Gönder</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
