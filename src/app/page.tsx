import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="grain min-h-[90vh] flex items-center pt-28">
        <Container narrow>
          <Reveal>
            <h1 className="text-display mb-6">Amadou Thior</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-meta mb-8">
              Cinéaste · Producteur-réalisateur · Scénariste · Formateur
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-body text-lg max-w-lg mb-12 leading-relaxed">
              Plus de 40 ans d&apos;expérience au service du cinéma, de la
              production audiovisuelle, de la transmission et du développement
              de l&apos;industrie cinématographique au Sénégal.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/parcours" variant="primary">
                Découvrir le parcours
              </CTAButton>
              <CTAButton href="/oeuvre" variant="ghost">
                Voir la filmographie
                <ArrowRight size={14} />
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== UNE VIE DE CINÉMA ===== */}
      <section className="section-py border-t border-[--color-border]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
            <Reveal>
              <p className="text-meta mb-3">Présentation</p>
              <h2 className="text-h2">Une vie de cinéma</h2>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p className="text-body text-lg leading-relaxed mb-8">
                  Depuis plus de quatre décennies, Amadou Thior évolue au cœur
                  du cinéma et de l&apos;audiovisuel africain. Réalisateur,
                  producteur, scénariste, formateur et consultant, son parcours
                  traverse la création, la production, la télévision,
                  l&apos;enseignement et la réflexion sur les politiques
                  cinématographiques.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[--color-accent]">
                      40+
                    </span>
                    <p className="text-caption mt-1">ans d&apos;expérience</p>
                  </div>
                  <div>
                    <span className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[--color-accent]">
                      25+
                    </span>
                    <p className="text-caption mt-1">ans cinéaste indépendant</p>
                  </div>
                  <div>
                    <span className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[--color-accent]">
                      1977
                    </span>
                    <p className="text-caption mt-1">BTS Cinéma — Louis-Lumière</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== DE LA CRÉATION À LA TRANSMISSION ===== */}
      <section className="section-py bg-[--color-white]">
        <Container>
          <Reveal>
            <p className="text-meta mb-3">Le parcours</p>
            <h2 className="text-h2 mb-12">De la création à la transmission</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Reveal delay={60}>
              <Link href="/oeuvre" className="group block">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[--color-accent]/30 group-hover:text-[--color-accent] transition-colors">01</span>
                <h3 className="text-h3 mt-3 mb-2 group-hover:text-[--color-accent] transition-colors">Réalisation</h3>
                <p className="text-caption">Films de fiction, documentaires et téléfilms.</p>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/production" className="group block">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[--color-accent]/30 group-hover:text-[--color-accent] transition-colors">02</span>
                <h3 className="text-h3 mt-3 mb-2 group-hover:text-[--color-accent] transition-colors">Production</h3>
                <p className="text-caption">Production indépendante et production exécutive.</p>
              </Link>
            </Reveal>
            <Reveal delay={180}>
              <Link href="/transmission" className="group block">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[--color-accent]/30 group-hover:text-[--color-accent] transition-colors">03</span>
                <h3 className="text-h3 mt-3 mb-2 group-hover:text-[--color-accent] transition-colors">Transmission</h3>
                <p className="text-caption">Formation aux métiers du cinéma et de l&apos;audiovisuel.</p>
              </Link>
            </Reveal>
            <Reveal delay={240}>
              <Link href="/expertise" className="group block">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[--color-accent]/30 group-hover:text-[--color-accent] transition-colors">04</span>
                <h3 className="text-h3 mt-3 mb-2 group-hover:text-[--color-accent] transition-colors">Expertise</h3>
                <p className="text-caption">Politiques cinématographiques, industrie et développement.</p>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== FILMS À RETENIR ===== */}
      <section className="section-py">
        <Container>
          <Reveal>
            <p className="text-meta mb-3">Filmographie</p>
            <h2 className="text-h2 mb-12">Films à retenir</h2>
          </Reveal>

          <div className="space-y-16">
            {/* Xareek Maral */}
            <Reveal delay={60}>
              <Link href="/oeuvre/xareek-maral" className="group grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-14 items-start">
                <div className="aspect-[3/4] bg-[--color-surface] flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-[--color-fg-subtle] group-hover:text-[--color-accent] transition-colors">
                    Image à ajouter
                  </span>
                </div>
                <div className="py-2">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors mb-2">
                    Xareek Maral — Halte au désert
                  </h3>
                  <p className="text-caption text-[--color-fg-subtle] mb-4">1982 · Documentaire · 16 mm · 30 min</p>
                  <p className="text-body leading-relaxed mb-4">
                    1er Prix de la CEE au FESPACO 1985 — catégorie meilleur film sur le développement.
                  </p>
                  <span className="text-sm text-[--color-accent]">Découvrir le film →</span>
                </div>
              </Link>
            </Reveal>

            {/* Mariage précoce */}
            <Reveal delay={120}>
              <Link href="/oeuvre/mariage-precoce" className="group grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-14 items-start">
                <div className="aspect-[3/4] bg-[--color-surface] flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-[--color-fg-subtle] group-hover:text-[--color-accent] transition-colors">
                    Image à ajouter
                  </span>
                </div>
                <div className="py-2">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors mb-2">
                    Mariage précoce
                  </h3>
                  <p className="text-caption text-[--color-fg-subtle] mb-4">1995 · Fiction · Drame · 19 min</p>
                  <p className="text-body leading-relaxed mb-4">
                    Drame autour du mariage forcé et précoce.
                  </p>
                  <span className="text-sm text-[--color-accent]">Découvrir le film →</span>
                </div>
              </Link>
            </Reveal>

            {/* Almodou */}
            <Reveal delay={180}>
              <Link href="/oeuvre/almodou" className="group grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-14 items-start">
                <div className="aspect-[3/4] bg-[--color-surface] flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-[--color-fg-subtle] group-hover:text-[--color-accent] transition-colors">
                    Image à ajouter
                  </span>
                </div>
                <div className="py-2">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors mb-2">
                    Almodou
                  </h3>
                  <p className="text-caption text-[--color-fg-subtle] mb-4">2000 · Fiction · 85 min</p>
                  <p className="text-body leading-relaxed mb-2">
                    Réalisation et scénario : Amadou Thior.
                  </p>
                  <p className="text-body text-[--color-accent] font-medium mb-4">
                    Prix Plan International / Children&apos;s Right — FESPACO 2001
                  </p>
                  <span className="text-sm text-[--color-accent]">Découvrir le film →</span>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="mt-14">
              <Link
                href="/oeuvre"
                className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
              >
                Voir toute la filmographie <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-py bg-[--color-white] border-t border-[--color-border]">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <p className="text-meta mb-3">Contact</p>
              <h2 className="text-h2 mb-4">Parlons cinéma</h2>
              <p className="text-body mb-8 max-w-md mx-auto">
                Pour une collaboration, une formation, un projet audiovisuel ou
                une demande d&apos;information.
              </p>
              <CTAButton href="/contact" variant="primary">
                Prendre contact
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
