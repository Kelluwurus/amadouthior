"use client";

import { useState } from "react";
import { projects } from "@/data/content";
import type { Project } from "@/data/content";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

type Filter = "all" | Project["category"];

const filters: { label: string; value: Filter }[] = [
  { label: "Tous", value: "all" },
  { label: "Longs-métrages", value: "long" },
  { label: "Courts-métrages", value: "court" },
  { label: "Documentaires", value: "documentaire" },
  { label: "Collaborations", value: "collaboration" },
];

export default function Filmography() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="filmography" className="section-py bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Œuvres"
          title="Filmographie"
          description="Des documentaires fondateurs aux collaborations historiques avec Ousmane Sembène, une filmographie au service de la mémoire africaine."
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-300 ${
                active === f.value
                  ? "bg-[#c4723a] text-white border-[#c4723a]"
                  : "text-[#9ca3af] border-[#333] hover:border-[#c4723a]/40 hover:text-[#f5f0eb]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
