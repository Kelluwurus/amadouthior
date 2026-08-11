import { ArrowRight, Film, Users, Heart } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Projects() {
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
                  KOOM COM GROUPE
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0eb] mb-3">
                  CINECLUB – DÎNER DÉBAT
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-4 max-w-xl">
                  Événementiel culturel, citoyen et humanitaire alliant projection de
                  film, dîner convivial et débat. Chaque édition est liée à une
                  Journée Internationale de l&apos;ONU.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-[#9ca3af] bg-[#2E5C1E]/20 px-3 py-1 rounded-full">
                    <Film size={12} className="text-[#D4AF37]" />
                    Cinéma
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#9ca3af] bg-[#2E5C1E]/20 px-3 py-1 rounded-full">
                    <Users size={12} className="text-[#D4AF37]" />
                    Dialogue
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#9ca3af] bg-[#2E5C1E]/20 px-3 py-1 rounded-full">
                    <Heart size={12} className="text-[#D4AF37]" />
                    Solidarité
                  </span>
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
