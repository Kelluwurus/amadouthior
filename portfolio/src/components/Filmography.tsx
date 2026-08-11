"use client";

import { useState } from "react";
import { Award, Calendar } from "lucide-react";

type Category = "all" | "long" | "court" | "sembene";

interface FilmProject {
  title: string;
  type: string;
  category: Category;
  year: string;
  description: string;
  award?: string;
}

const projects: FilmProject[] = [
  {
    title: "Almodou",
    type: "Long-métrage",
    category: "long",
    year: "2001",
    description:
      "Drame social puissant sur l'enfance et les réalités du Sénégal contemporain. Une œuvre primée qui interroge la société avec humanisme.",
    award: "Prix Spécial PLAN International — FESPACO 2001",
  },
  {
    title: "Xareek Maral",
    type: "Documentaire",
    category: "court",
    year: "1985",
    description:
      "Documentaire fondateur explorant les traditions et mutations sociales sénégalaises. Couronné par la plus haute distinction européenne au FESPACO.",
    award: "Grand Prix de la CEE — FESPACO 1985",
  },
  {
    title: "Camp de Thiaroye & Guelwaar",
    type: "Collaboration O. Sembène",
    category: "sembene",
    year: "1988–1992",
    description:
      "Assistant Réalisateur auprès du maître Ousmane Sembène. Un compagnonnage exceptionnel au cœur du cinéma panafricain historique.",
  },
  {
    title: "Mayelle / Mariage Précoce",
    type: "Courts-métrages",
    category: "court",
    year: "1990s",
    description:
      "Courts-métrages de fiction sociétale traitant des réalités féminines et des traditions face à la modernité.",
  },
];

const tabs: { label: string; value: Category }[] = [
  { label: "Tous les projets", value: "all" },
  { label: "Longs-métrages", value: "long" },
  { label: "Courts & Documentaires", value: "court" },
  { label: "Collaborations O. Sembène", value: "sembene" },
];

export default function Filmography() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="filmographie" className="section-padding bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#C8A24A] mb-4">
            Œuvres & Réalisations
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#F8F5EF]">
            Filmographie & Projets Majeurs
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 md:px-6 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-300 ${
                activeTab === tab.value
                  ? "bg-[#C8A24A] text-[#121212] border-[#C8A24A]"
                  : "text-zinc-400 border-zinc-700 hover:text-[#F8F5EF] hover:border-[#C8A24A]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group bg-[#121212] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A24A]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Image placeholder */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center overflow-hidden">
                <span className="font-[family-name:var(--font-cormorant)] text-2xl text-zinc-600 group-hover:scale-105 transition-transform duration-500">
                  {project.type}
                </span>
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider px-3 py-1 bg-[#121212]/85 border border-[#C8A24A]/30 rounded-full text-[#C8A24A]">
                    <Calendar size={10} />
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C8A24A] mb-2 block">
                  {project.type}
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#F8F5EF] mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.award && (
                  <div className="flex items-start gap-2 text-xs text-[#C8A24A]/80">
                    <Award size={14} className="mt-0.5 shrink-0" />
                    <span>{project.award}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block px-8 py-3.5 text-sm font-medium border border-[#C8A24A] text-[#F8F5EF] rounded hover:bg-[#C8A24A]/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Voir la filmographie complète
          </a>
        </div>
      </div>
    </section>
  );
}
