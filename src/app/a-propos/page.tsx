import type { Metadata } from "next";
import { Film, Clapperboard, GraduationCap, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Amadou Thior, cinéaste, producteur-réalisateur, scénariste, consultant et formateur audiovisuel sénégalais. Plus de 40 ans d'expérience.",
};

const metiers = [
  "Cinéaste",
  "Réalisateur",
  "Producteur",
  "Scénariste",
  "Consultant audiovisuel",
  "Formateur audiovisuel",
  "Enseignant",
  "Expert des problématiques cinématographiques",
];

export default function AProposPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">À propos</p>
            <h1 className="text-h1 mb-8 max-w-2xl">Amadou Thior</h1>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4 text-body text-[--color-fg-muted] leading-relaxed max-w-xl">
              <p>
                Amadou Thior est un cinéaste, producteur-réalisateur, scénariste,
                consultant et formateur audiovisuel sénégalais.
              </p>
              <p>
                Son parcours couvre plus de 40 ans d&apos;expérience en
                réalisation et production de films au cinéma et à la télévision
                ainsi que dans l&apos;administration du cinéma au Sénégal.
              </p>
              <p>
                Il exerce depuis plus de 25 ans comme cinéaste indépendant.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* NAISSANCE & FORMATION */}
      <section className="pb-16 border-t border-[--color-border] pt-12">
        <Container narrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal>
              <div>
                <p className="text-meta text-[--color-accent] mb-3">Naissance</p>
                <p className="text-body text-[--color-fg-muted]">
                  23 juillet 1951
                </p>
                <p className="text-caption text-[--color-fg-subtle]">
                  Boulel, Sine-Saloum, Sénégal.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p className="text-meta text-[--color-accent] mb-3">Formation</p>
                <p className="text-body text-[--color-fg-muted]">
                  École Nationale Vaugirard-Louis Lumière, Paris
                </p>
                <p className="text-caption text-[--color-fg-subtle]">
                  1974–1977 — BTS Cinéma, option image.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MÉTIERS */}
      <section className="py-12 md:py-16 bg-[--color-surface]">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-6">Métiers</p>
          </Reveal>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {metiers.map((m, i) => (
              <Reveal key={m} delay={i * 30}>
                <span className="text-body text-[--color-fg-muted]">{m}</span>
                {i < metiers.length - 1 && (
                  <span className="text-[--color-fg-subtle] ml-6 hidden sm:inline">·</span>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* POSITIONNEMENT */}
      <section className="section-py">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-3">Positionnement</p>
            <p className="text-body text-[--color-fg-muted] leading-relaxed max-w-xl mb-10">
              Un parcours professionnel qui traverse plusieurs niveaux de la
              chaîne audiovisuelle :
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-caption text-[--color-fg-muted] mb-16">
              {[
                "Création",
                "Production",
                "Télévision",
                "Administration",
                "Formation",
                "Conseil",
                "Réflexion stratégique",
              ].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <span>{step}</span>
                  {i < arr.length - 1 && (
                    <span className="text-[--color-accent-muted]">→</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          {/* 4 DIMENSIONS */}
          <Reveal>
            <h2 className="text-h2 mb-8">
              Une carrière à plusieurs dimensions
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Reveal delay={60}>
              <div className="flex gap-4">
                <Film size={18} className="text-[--color-accent] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-1">Création</h3>
                  <p className="text-caption text-[--color-fg-muted]">
                    Réalisation, scénario, cinéma et télévision.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex gap-4">
                <Clapperboard size={18} className="text-[--color-accent] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-1">Production</h3>
                  <p className="text-caption text-[--color-fg-muted]">
                    Production déléguée, production exécutive et développement
                    de projets.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex gap-4">
                <GraduationCap size={18} className="text-[--color-accent] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-1">Transmission</h3>
                  <p className="text-caption text-[--color-fg-muted]">
                    Enseignement, formation et ingénierie pédagogique.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex gap-4">
                <Building2 size={18} className="text-[--color-accent] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-1">Expertise</h3>
                  <p className="text-caption text-[--color-fg-muted]">
                    Politiques cinématographiques, industrie audiovisuelle et
                    transformation numérique.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
