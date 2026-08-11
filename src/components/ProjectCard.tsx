import { Award, User } from "lucide-react";
import type { Project } from "@/data/content";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<Project["category"], string> = {
  long: "Long-métrage",
  court: "Court-métrage",
  documentaire: "Documentaire",
  collaboration: "Collaboration",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-[#1a1a1a] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#c4723a]/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
      {/* Image placeholder */}
      <div className="relative h-44 md:h-52 bg-gradient-to-br from-[#242424] to-[#1a1a1a] flex items-center justify-center overflow-hidden">
        <span className="font-[family-name:var(--font-playfair)] text-xl text-[#3a3a3a] group-hover:text-[#4a4a4a] transition-colors duration-500">
          {project.title}
        </span>
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-semibold tracking-wider px-2.5 py-1 bg-[#0f0f0f]/80 border border-[#c4723a]/30 rounded-full text-[#c4723a]">
            {project.year}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-medium tracking-wider px-2.5 py-1 bg-[#0f0f0f]/80 border border-white/10 rounded-full text-[#9ca3af]">
            {categoryLabels[project.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-[#f5f0eb] mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs text-[#c4723a] font-medium mb-3">
          {project.role}
        </p>
        <p className="text-sm text-[#9ca3af] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Meta info */}
        <div className="flex flex-col gap-2">
          {project.director && (
            <div className="flex items-center gap-2 text-xs text-[#6b7280]">
              <User size={12} className="text-[#c4723a]" />
              <span>Réalisé par {project.director}</span>
            </div>
          )}
          {project.award && (
            <div className="flex items-center gap-2 text-xs text-[#c9a84c]">
              <Award size={12} />
              <span>{project.award}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
