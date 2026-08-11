import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { cineclubProject, editions } from "@/data/cineclub-project";

export const metadata: Metadata = {
  title: `Éditions — ${cineclubProject.title}`,
  description: `Découvrez les différentes éditions du ${cineclubProject.title}.`,
};

const statusLabels: Record<string, string> = {
  completed: "Réalisée",
  upcoming: "À venir",
  "in-progress": "En préparation",
};

const statusVariants: Record<string, "default" | "accent" | "muted"> = {
  completed: "muted",
  upcoming: "accent",
  "in-progress": "default",
};

export default function EditionsPage() {
  const sortedEditions = [...editions].sort((a, b) => b.year - a.year);

  return (
    <>
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <span className="text-meta text-[#C8A24A] block mb-4">Archives & programmation</span>
              <h1 className="text-h1 text-[--color-fg] mb-4">Éditions</h1>
              <p className="text-body text-[--color-fg-muted] max-w-xl mx-auto">
                Chaque édition est adossée à une Journée Internationale de l&apos;ONU
                et propose un film en lien avec une grande cause sociale.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEditions.map((edition, i) => (
              <Reveal key={edition.year} delay={i * 100}>
                <Link
                  href={`/projets/cineclub-diner-debat/editions/${edition.year}`}
                  className="group block bg-[--color-surface] border border-[--color-border] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#0F382C]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="h-2 bg-gradient-to-r from-[#0F382C] to-[#C8A24A]/50" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-2 text-2xl font-[family-name:var(--font-playfair)] text-[#C8A24A]">
                        <Calendar size={16} />
                        {edition.year}
                      </span>
                      <Badge variant={statusVariants[edition.status]}>
                        {statusLabels[edition.status]}
                      </Badge>
                    </div>
                    <h3 className="text-h3 text-[--color-fg] mb-2 text-lg">{edition.title}</h3>
                    {edition.theme && (
                      <p className="text-xs text-[#C8A24A] font-medium mb-3">{edition.theme}</p>
                    )}
                    {edition.film && (
                      <p className="text-caption text-[--color-fg-muted] mb-4">
                        Film : <em>{edition.film.title}</em> — {edition.film.director}
                      </p>
                    )}
                    {edition.description && !edition.film && (
                      <p className="text-caption text-[--color-fg-muted] mb-4 line-clamp-2">
                        {edition.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#C8A24A] group-hover:gap-2.5 transition-all">
                      Voir l&apos;édition <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
