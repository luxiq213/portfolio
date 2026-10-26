"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft, Maximize2, Minimize2 } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [outputs, setOutputs] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-cyan-400 font-bold">
            ⚡ Bilgisayar Programcısı İnteraktif WebGL Terminaline Hoş Geldiniz!
          </p>
          <p className="text-xs text-zinc-400">
            Kullanabileceğiniz komutları listelemek için <span className="text-yellow-400 font-bold font-mono">help</span> yazın veya aşağıdaki hızlı butonlara tıklayın.
          </p>
        </div>
      )
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Only scroll the internal terminal container when user issues commands, never scroll the main window
    if (outputs.length > 1 && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [outputs]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((prev) => [...prev, cmdText]);
    setHistoryIndex(-1);

    let result: React.ReactNode;

    switch (trimmed) {
      case "help":
        result = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-cyan-400 font-semibold">Mevcut Komutlar:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-zinc-300">
              <div><span className="text-yellow-400 font-bold">help</span> - Komut listesi</div>
              <div><span className="text-yellow-400 font-bold">whoami</span> - Profil & Eğitim</div>
              <div><span className="text-yellow-400 font-bold">skills</span> - Yetenek listesi</div>
              <div><span className="text-yellow-400 font-bold">projects</span> - Projeler</div>
              <div><span className="text-yellow-400 font-bold">contact</span> - İletişim bilgileri</div>
              <div><span className="text-yellow-400 font-bold">sudo hire</span> - İşe alım teklifi 🚀</div>
              <div><span className="text-yellow-400 font-bold">date</span> - Sistem zamanı</div>
              <div><span className="text-yellow-400 font-bold">clear</span> - Ekranı temizle</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        result = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-300">
            <p className="text-cyan-300 font-bold">{PORTFOLIO_DATA.personal.fullName}</p>
            <p><strong className="text-white">Unvan:</strong> {PORTFOLIO_DATA.personal.title}</p>
            <p><strong className="text-white">Eğitim:</strong> Bilgisayar Programcılığı (Ön Lisans)</p>
            <p><strong className="text-white">Odak:</strong> {PORTFOLIO_DATA.personal.bio}</p>
          </div>
        );
        break;

      case "skills":
        result = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-violet-400 font-bold">=== GELİŞTİRİCİ YETENEKLERİ ===</p>
            <div className="space-y-1 text-zinc-300">
              <p><span className="text-cyan-400">[Mobil & Flutter]:</span> Flutter, Dart, iOS & Android, Bloc/Riverpod, ML Kit OCR, CachedNetworkImage, Hive</p>
              <p><span className="text-cyan-400">[Yapay Zeka & LLM]:</span> Gemini / OpenAI / Claude API, OCR + LLM Bağlamsal Çeviri Hattı, Structured JSON Prompts</p>
              <p><span className="text-cyan-400">[Web & React]:</span> React.js, Next.js (App Router, SSR), TypeScript, Three.js (WebGL), Tailwind CSS</p>
              <p><span className="text-cyan-400">[Ağ & Backend]:</span> Asenkron RESTful API (Dio Interceptors, JWT), Firebase, PostgreSQL/MSSQL, Prisma ORM</p>
            </div>
          </div>
        );
        break;

      case "projects":
        result = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-emerald-400 font-bold">=== BAŞLICA PROJELER ===</p>
            {PORTFOLIO_DATA.projects.map((p, i) => (
              <div key={p.id} className="text-zinc-300">
                <span className="text-yellow-400">{i + 1}. {p.title}</span> ({p.category})
                <br />
                <span className="text-zinc-500">Tech: {p.technologies.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        result = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-300">
            <p className="text-cyan-400 font-bold">İletişim Kanalları:</p>
            <p>E-posta: <span className="text-white">{PORTFOLIO_DATA.personal.email}</span></p>
            <p>GitHub: <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PORTFOLIO_DATA.personal.github}</a></p>
            <p>CV &amp; Mimari Vakalar: <a href={PORTFOLIO_DATA.personal.cvViewUrl} className="text-violet-400 underline">{PORTFOLIO_DATA.personal.cvViewUrl}</a></p>
          </div>
        );
        break;

      case "sudo hire":
      case "hire":
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#10b981", "#06b6d4", "#f59e0b", "#8b5cf6"]
        });
        result = (
          <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs space-y-1">
            <p className="font-bold text-sm">🎉 TEBRİKLER! root yetkisiyle işe alım süreci başlatıldı.</p>
            <p>Benimle çalışmak istediğiniz için teşekkürler. Lütfen aşağıdaki formu kullanarak veya doğrudan e-posta göndererek iletişime geçin!</p>
            <p className="text-white underline">{PORTFOLIO_DATA.personal.email}</p>
          </div>
        );
        break;

      case "date":
        result = (
          <p className="text-xs font-mono text-zinc-300">
            {new Date().toLocaleString("tr-TR", { dateStyle: "full", timeStyle: "medium" })}
          </p>
        );
        break;

      case "clear":
        setOutputs([]);
        setInput("");
        return;

      default:
        result = (
          <p className="text-xs font-mono text-red-400">
            Komut bulunamadı: &apos;{trimmed}&apos;. Kullanılabilir komutları görmek için <span className="text-yellow-400 font-bold">help</span> yazın.
          </p>
        );
    }

    setOutputs((prev) => [...prev, { command: cmdText, output: result }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      if (history.length > 0) {
        const nextIndex = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const quickCommands = ["help", "whoami", "skills", "projects", "sudo hire", "clear"];

  return (
    <section id="terminal" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>İnteraktif Geliştirici Konsolu</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terminalden{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Keşfet
          </span>
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Aşağıdaki terminale komut yazarak ya da butonlara tıklayarak profil detaylarına hızlıca ulaşabilirsiniz.
        </p>
      </div>

      {/* Terminal Window Box */}
      <div className="rounded-2xl bg-[#070b19] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0c1228] border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
            <span className="ml-2 text-xs text-zinc-400 font-mono hidden sm:inline">
              guest@mehmet-portfolio: ~ (bash / webgl)
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-cyan-400/80 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Quick Clickable Command Pills */}
        <div className="px-4 py-2 bg-[#090e21] border-b border-zinc-800/60 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-zinc-500 text-[11px] mr-1">Hızlı Komutlar:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-0.5 rounded-md bg-zinc-800/80 hover:bg-cyan-950 hover:text-cyan-300 border border-zinc-700/60 hover:border-cyan-500/40 text-zinc-300 text-[11px] transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalBodyRef}
          onClick={() => inputRef.current?.focus()}
          className="p-4 sm:p-6 min-h-[300px] max-h-[420px] overflow-y-auto space-y-4 cursor-text scrollbar-thin scrollbar-thumb-zinc-800"
        >
          {outputs.map((item, index) => (
            <div key={index} className="space-y-1.5">
              {item.command !== "welcome" && (
                <div className="flex items-center gap-2 text-xs text-cyan-400">
                  <span className="text-emerald-400">visitor@portfolio:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
              )}
              <div className="pl-0">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm">
            <span className="text-emerald-400 shrink-0 font-bold">visitor@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-zinc-600 focus:ring-0"
              placeholder="komut yazın (örn: help)..."
            />
            <button
              onClick={() => executeCommand(input)}
              className="p-1 rounded bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-400 sm:hidden"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
