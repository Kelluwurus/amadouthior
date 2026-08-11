import { ArrowRight, Film, Users, Heart } from "lucide-react";
import { cineclubProject } from "@/data/cineclub-project";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const { title, tagline, executiveSummary, organizer } = cineclubProject;

  return (
    <section id="projects" className="section-py bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Projets en cours"
          title="Initiatives & Programmes"
          description="Au-delà de la réalisation, des projets culturels et humanitaires portés par la vision d'un cinéma engagé."
        />

        {/* CineClub Card */}
        <a
          href="/projets/cineclub-diner-debat"
          className="group block bg-[#1a2e1a] border border-[#2E5C1E]/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#D4AF37] mb-3">
                  {organizer.structure}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0eb] mb-3">
                  {title}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-4 max-w-xl">
                  {executiveSummary}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {tagline.split(" · ").map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-xs text-[#9ca3af] bg-[#2E5C1E]/20 px-3 py-1 rounded-full"
                    >
                      {tag === "Cinéma" && <Film size={12} className="text-[#D4AF37]" />}
                      {tag === "Dialogue" && <Users size={12} className="text-[#D4AF37]" />}
                      {tag === "Solidarité" && <Heart size={12} className="text-[#D4AF37]" />}
                      {tag === "Action" && <ArrowRight size={12} className="text-[#D4AF37]" />}
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] group-hover:gap-3 transition-all duration-300">
                  Découvrir le projet
                  <ArrowRight size={16} />
                </span>
              </div>

              {/* Visual accent */}
              <div className="hidden md:flex flex-col items-center justify-center w-32 h-32 rounded-full bg-[#2E5C1E]/20 border border-[#D4AF37]/20">
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#D4AF37]">
                  CCDD
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
