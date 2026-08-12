import Link from "next/link";
import { ArrowRight, Film, Clapperboard, GraduationCap, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="grain min-h-[80vh] flex items-end pb-16 md:pb-24 pt-36 md:pt-44">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">
              Amadou Thior
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-display text-[--color-fg] mb-6 max-w-3xl">
              Cinéaste, producteur-réalisateur, formateur et acteur de la transformation du cinéma africain.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-body text-[--color-fg-muted] max-w-xl mb-10 leading-relaxed">
              Depuis plusieurs décennies, Amadou Thior évolue au cœur du cinéma
              et de l&apos;audiovisuel sénégalais, de la réalisation à la production,
              de la formation à la réflexion sur les politiques cinématographiques.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/parcours" variant="primary">
                Découvrir son parcours
              </CTAButton>
              <CTAButton href="/oeuvre" variant="ghost">
                Voir les films
                <ArrowRight size={14} />
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== SIGNATURE ===== */}
      <section className="py-12 md:py-16 border-t border-[--color-border]">
        <Container narrow>
          <Reveal>
            <p className="text-caption text-[--color-fg-subtle] leading-relaxed">
              Cinéaste — Producteur Réalisateur, Consultant et Formateur Audiovisuel.
              Plus de 40 ans d&apos;expérience en réalisation et production de films
              au cinéma et à la télévision, ainsi que dans l&apos;administration du
              cinéma au Sénégal. Plus de 25 ans comme cinéaste indépendant.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ===== LES 4 DIMENSIONS ===== */}
      <section className="section-py bg-[--color-surface]">
        <Container>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-10">
              Un parcours, quatre dimensions
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <Reveal delay={60}>
              <div className="flex gap-4">
                <Film size={20} className="text-[--color-accent] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-2">Réalisation</h3>
                  <p className="text-body text-[--color-fg-muted]">
                    Films de fiction, documentaires et téléfilms.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex gap-4">
                <Clapperboard size={20} className="text-[--color-accent] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-2">Production</h3>
                  <p className="text-body text-[--color-fg-muted]">
                    Production déléguée, production exécutive et développement
                    de projets audiovisuels.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex gap-4">
                <GraduationCap size={20} className="text-[--color-accent] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-2">Transmission</h3>
                  <p className="text-body text-[--color-fg-muted]">
                    Plusieurs décennies de formation aux métiers du cinéma et de
                    l&apos;audiovisuel.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex gap-4">
                <Building2 size={20} className="text-[--color-accent] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-2">Expertise</h3>
                  <p className="text-body text-[--color-fg-muted]">
                    Politiques cinématographiques, industrie audiovisuelle,
                    patrimoine et transformation numérique.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== XAREEK MARAL — BLOC PATRIMONIAL ===== */}
      <section className="section-py">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <div>
                <p className="text-meta text-[--color-accent] mb-3">
                  Œuvre fondatrice
                </p>
                <h2 className="text-h1 mb-4">Xareek Maral / Halte au désert</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-[--color-fg-subtle] mb-4">
                  <span>1982</span>
                  <span>·</span>
                  <span>Documentaire</span>
                  <span>·</span>
                  <span>16 mm couleur</span>
                  <span>·</span>
                  <span>30 min</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <div className="border-l-2 border-[--color-accent] pl-6 mb-6">
                  <p className="text-body text-[--color-fg] font-medium leading-relaxed">
                    1er Prix de la CEE au FESPACO 1985 dans la catégorie du
                    meilleur film sur le développement.
                  </p>
                </div>
                <p className="text-body text-[--color-fg-muted] leading-relaxed">
                  Premier film à affirmer la vision cinématographique d&apos;Amadou
                  Thior : un regard documentaire engagé sur les réalités sociales
                  du Sénégal, porté par une rigueur technique forgée à
                  l&apos;École Louis-Lumière.
                </p>
                <Link
                  href="/oeuvre/xareek-maral"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
                >
                  Voir la fiche du film <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== ALMODOU ===== */}
      <section className="section-py bg-[--color-surface]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Poster placeholder */}
            <Reveal>
              <Link
                href="/oeuvre/almodou"
                className="block aspect-[2/3] bg-[--color-surface-2] flex items-center justify-center group"
              >
                <span className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[--color-fg-subtle] group-hover:text-[--color-accent] transition-colors duration-300">
                  Almodou
                </span>
              </Link>
            </Reveal>

            {/* Info */}
            <Reveal delay={100}>
              <div className="py-4">
                <p className="text-meta text-[--color-accent] mb-3">
                  Long métrage
                </p>
                <h2 className="text-h1 mb-3">Almodou</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-[--color-fg-subtle] mb-6">
                  <span>2000</span>
                  <span>·</span>
                  <span>Fiction</span>
                  <span>·</span>
                  <span>85 min</span>
                  <span>·</span>
                  <span>Wolof, sous-titré français</span>
                </div>

                <div className="space-y-3 text-caption text-[--color-fg-muted] mb-6">
                  <p><span className="text-[--color-fg-subtle]">Réalisation et scénario</span> — Amadou Thior</p>
                  <p><span className="text-[--color-fg-subtle]">Production</span> — Consultants et Réalisateurs Associés</p>
                </div>

                <div className="border-l-2 border-[--color-accent] pl-6 mb-8">
                  <p className="text-body text-[--color-fg] font-medium">
                    Prix Plan International / Children&apos;s Right au FESPACO 2001.
                  </p>
                </div>

                <Link
                  href="/oeuvre/almodou"
                  className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
                >
                  Voir la fiche complète <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== FORMATION ===== */}
      <section className="section-py border-t border-[--color-border]">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-3">Formation</p>
            <h2 className="text-h2 mb-4">
              École Nationale Vaugirard-Louis Lumière, Paris
            </h2>
            <p className="text-body text-[--color-fg-muted] mb-2">
              Études : 1974–1977
            </p>
            <p className="text-body text-[--color-fg-muted]">
              BTS Cinéma, option image — 1977.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-py bg-[--color-surface]">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <h2 className="text-h2 mb-4">Explorer le parcours complet</h2>
              <p className="text-body text-[--color-fg-muted] mb-8 max-w-md mx-auto">
                Filmographie, collaborations, enseignement, projets contemporains
                et archives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <CTAButton href="/parcours" variant="primary">
                  Le parcours
                </CTAButton>
                <CTAButton href="/oeuvre" variant="secondary">
                  La filmographie
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
