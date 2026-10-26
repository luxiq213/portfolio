"use client";

import React, { useState, useRef } from "react";
import { 
  FolderGit2, ExternalLink, Code2, 
  Terminal, Sparkles, CheckCircle, Copy, Check, Smartphone 
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { GithubIcon } from "./icons/SocialIcons";

// Interactive 3D Tilt Card Component
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [showCode, setShowCode] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10; // Tilt angle
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out"
      }}
      className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-[#050814]/90 border border-zinc-800/90 hover:border-cyan-500/50 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between group shadow-xl hover:shadow-cyan-950/40 overflow-hidden"
    >
      {/* Glare effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(6, 182, 212, 0.4) 0%, transparent 60%)`,
          opacity: glarePos.opacity
        }}
      />

      <div className="relative z-10 space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              {project.category.includes("Mobil") ? (
                <Smartphone className="w-5 h-5" />
              ) : (
                <FolderGit2 className="w-5 h-5" />
              )}
            </div>
            <span className="text-xs font-mono text-cyan-300 font-medium px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/20">
              {project.category}
            </span>
          </div>

          {project.badge ? (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{project.badge}</span>
            </span>
          ) : project.featured ? (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-violet-400" />
              <span>Öne Çıkan</span>
            </span>
          ) : null}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Feature List */}
        <ul className="space-y-1.5 pt-1">
          {project.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Code Snippet & Case Study Drawers */}
        {(project.codeSnippet || project.caseStudy) && (
          <div className="pt-2 space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              {project.caseStudy && (
                <button
                  onClick={() => {
                    setShowCaseStudy(!showCaseStudy);
                    if (!showCaseStudy) setShowCode(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{showCaseStudy ? "Mimari Vakayı Gizle" : "Mimari & Teknik Vaka"}</span>
                </button>
              )}

              {project.codeSnippet && (
                <button
                  onClick={() => {
                    setShowCode(!showCode);
                    if (!showCode) setShowCaseStudy(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 text-zinc-300 hover:text-cyan-300 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{showCode ? "Kod Önizlemesini Gizle" : "Örnek Kodu İncele"}</span>
                </button>
              )}
            </div>

            {showCaseStudy && project.caseStudy && (
              <div className="mt-2 rounded-xl bg-black/80 border border-cyan-500/30 p-3.5 text-xs space-y-2.5 text-zinc-300">
                <div>
                  <span className="font-mono font-bold text-cyan-400 block text-[11px] uppercase tracking-wider">1. Çözülen Zorluk (Problem)</span>
                  <p className="text-zinc-300 mt-0.5 leading-relaxed">{project.caseStudy.problem}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-violet-400 block text-[11px] uppercase tracking-wider">2. Mimari Karar & Veri Akışı</span>
                  <p className="text-zinc-300 mt-0.5 leading-relaxed">{project.caseStudy.architecture}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-amber-400 block text-[11px] uppercase tracking-wider">3. Yazılım Testi & Güvenlik Doğrulaması</span>
                  <p className="text-zinc-300 mt-0.5 leading-relaxed">{project.caseStudy.testing}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-emerald-400 block text-[11px] uppercase tracking-wider">4. Teknik Sonuç</span>
                  <p className="text-zinc-300 mt-0.5 leading-relaxed">{project.caseStudy.outcome}</p>
                </div>
              </div>
            )}

            {showCode && project.codeSnippet && (
              <div className="mt-2 relative rounded-xl bg-black/80 border border-zinc-800 p-3 text-[11px] font-mono text-zinc-300 overflow-x-auto">
                <button
                  onClick={handleCopyCode}
                  className="absolute top-2 right-2 p-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  title="Kodu Kopyala"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <pre className="pr-8">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom: Tech Badges & Actions */}
      <div className="relative z-10 pt-5 mt-5 border-t border-zinc-800/80 space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900 transition-colors"
              >
                <span>Google Play</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-sky-950/80 border border-sky-500/40 text-sky-300 hover:bg-sky-900 transition-colors"
              >
                <span>App Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.liveUrl && !project.playStoreUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 transition-colors"
              >
                <span>Canlı Bağlantı</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <span className="text-[11px] font-mono text-zinc-600 group-hover:text-cyan-400 transition-colors">
            3D TILT
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("Tümü");

  const categories = ["Tümü", "Mobil / Flutter", "Web / AI", "Full-Stack"];

  const filteredProjects = filter === "Tümü"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Canlı Mağaza & Web Çıktıları</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Yayınlanan ve{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
            Canlıda Olan Projelerim
          </span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
          Google Play Store ve Apple App Store üzerinde canlı kullanıcı deneyimine sahip mobil uygulamalarım ve web platformlarım.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              filter === cat
                ? "bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25"
                : "bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects 3D Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
