import type { Metadata } from "next";
import { Award } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Distinctions & Prix",
  description:
    "Récompenses et sélections en festivals d'Amadou Thior : FESPACO, Milan, Carthage, Vues d'Afrique.",
};

const prix = [
  {
    film: "Xareek Maral / Halte au désert",
    festival: "FESPACO 1985",
    award: "1er Prix de la CEE dans la catégorie du meilleur film sur le développement.",
  },
  {
    film: "Bien-être pour Tous",
    festival: "FESPACO 1999",
    award: "Prix CILSS pour la production.",
  },
  {
    film: "Almodou",
    festival: "FESPACO 2001",
    award: "Prix Plan International / Children's Right.",
  },
];

const selections = [
  {
    film: "Almodou",
    events: [
      "Festival de Milan",
      "Vues d'Afrique, Montréal",
      "RTS",
      "CFI",
      "TV5",
    ],
  },
  {
    film: "Mariage précoce",
    events: ["Milan", "Carthage", "FESPACO"],
  },
];

export default function DistinctionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">
              Distinctions & Prix
            </p>
            <h1 className="text-h1 mb-6 max-w-2xl">
              Récompenses
            </h1>
            <p className="text-body text-[--color-fg-muted] max-w-xl leading-relaxed">
              Seules les distinctions documentées et vérifiées sont présentées
              ici.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* PRIX */}
      <section className="pb-20">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-10">Prix</p>
          </Reveal>
          <div className="space-y-12">
            {prix.map((p, i) => (
              <Reveal key={p.film} delay={i * 80}>
                <div className="border-l-2 border-[--color-accent] pl-6">
                  <span className="text-meta text-[--color-accent] block mb-2">
                    {p.festival}
                  </span>
                  <div className="flex items-start gap-3 mb-2">
                    <Award
                      size={18}
                      className="text-[--color-accent] shrink-0 mt-0.5"
                    />
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[--color-fg]">
                      {p.film}
                    </h3>
                  </div>
                  <p className="text-body text-[--color-fg-muted]">
                    {p.award}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SÉLECTIONS & DIFFUSION */}
      <section className="section-py bg-[--color-surface]">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-10">
              Sélections & Diffusion
            </p>
          </Reveal>
          <div className="space-y-10">
            {selections.map((s, i) => (
              <Reveal key={s.film} delay={i * 80}>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[--color-fg] mb-3">
                    {s.film}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {s.events.map((event) => (
                      <span
                        key={event}
                        className="text-caption text-[--color-fg-muted]"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
