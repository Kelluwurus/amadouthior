import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { cineclubProject } from "@/data/cineclub-project";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les projets culturels et humanitaires d'Amadou Thior.",
};

export default function ProjetsPage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <Reveal>
          <div className="mb-12">
            <span className="text-meta text-[--color-accent] block mb-3">
              Initiatives
            </span>
            <h1 className="text-h1 text-[--color-fg]">Projets</h1>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Link
            href="/projets/cineclub-diner-debat"
            className="group block bg-[--color-surface] border border-[--color-border] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#0F382C]/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
          >
            {/* Top accent */}
            <div className="h-1.5 bg-gradient-to-r from-[#0F382C] via-[#C8A24A] to-[#0F382C]" />

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <Badge variant="accent" className="mb-4">Nouveau projet</Badge>
                  <h2 className="text-h2 text-[--color-fg] mb-3">
                    {cineclubProject.title}
                  </h2>
                  <p className="text-meta text-[#C8A24A] mb-4">
                    {cineclubProject.slogan}
                  </p>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed mb-6 max-w-xl">
                    {cineclubProject.heroDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#C8A24A] group-hover:gap-3 transition-all duration-300">
                    Découvrir CINECLUB
                    <ArrowRight size={16} />
                  </span>
                </div>

                {/* Visual */}
                <div className="hidden md:flex flex-col items-center justify-center w-36 h-36 rounded-2xl bg-[#0F382C]/10 border border-[#0F382C]/20">
                  <span className="font-[family-name:var(--font-playfair)] text-sm text-[#C8A24A]/60 mb-1">
                    CINÉMA
                  </span>
                  <span className="font-[family-name:var(--font-playfair)] text-sm text-[#C8A24A]/60 mb-1">
                    DIALOGUE
                  </span>
                  <span className="font-[family-name:var(--font-playfair)] text-sm text-[#C8A24A]/60 mb-1">
                    SOLIDARITÉ
                  </span>
                  <span className="font-[family-name:var(--font-playfair)] text-sm text-[#C8A24A]">
                    ACTION
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}
