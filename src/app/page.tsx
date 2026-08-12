import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import FilmCard from "@/components/films/FilmCard";
import Timeline from "@/components/timeline/Timeline";
import { siteConfig } from "@/content/site";
import { identity, biographySections } from "@/content/biography";
import { featuredFilms } from "@/content/films";
import { timeline } from "@/content/timeline";
import { cineclubProject } from "@/data/cineclub-project";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="grain relative min-h-screen flex items-center justify-center overflow-hidden bg-[--color-bg]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-meta mb-6">
              {identity.fullName.toUpperCase()} — {siteConfig.subtitle.toUpperCase()}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-display mb-8">
              {siteConfig.heroMessage}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-body text-lg max-w-xl mx-auto mb-4 leading-relaxed">
              {siteConfig.secondaryTagline}
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="text-caption italic text-[--color-fg-subtle] max-w-md mx-auto mb-14">
              {siteConfig.signature}
            </p>
          </Reveal>
          <Reveal delay={350}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/oeuvre" variant="primary">
                Explorer les œuvres
              </CTAButton>
              <CTAButton href="/parcours" variant="secondary">
                Découvrir le parcours
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="section-py bg-white">
        <Container narrow>
          <Reveal>
            <p className="text-body text-lg leading-relaxed">
              {biographySections.formation.text} {biographySections.realisation.text.split(". Voir")[0]}.
            </p>
            <Link
              href="/parcours"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
            >
              Lire la biographie
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ===== ŒUVRES MAJEURES ===== */}
      <section className="section-py bg-[--color-bg]">
        <Container>
          <Reveal>
            <SectionHeader
              label="Filmographie"
              title="Œuvres majeures"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFilms.slice(0, 4).map((film, i) => (
              <Reveal key={film.slug} delay={i * 100}>
                <FilmCard film={film} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="mt-10">
              <Link
                href="/oeuvre"
                className="inline-flex items-center gap-2 text-sm font-medium text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
              >
                Voir toute la filmographie
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section-py bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            <Reveal>
              <div>
                <SectionHeader
                  label="Chronologie"
                  title="Plus de quatre décennies d'audiovisuel"
                />
                <Link
                  href="/parcours"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
                >
                  Parcours complet
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <Timeline events={timeline} limit={8} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== TRANSMISSION ===== */}
      <section className="section-py bg-[--color-bg]">
        <Container narrow>
          <Reveal>
            <SectionHeader
              label="Transmission"
              title="Former, transmettre, accompagner"
              description={biographySections.transmission.text}
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center">
              <CTAButton href="/transmission" variant="secondary">
                Découvrir son travail de transmission
                <ArrowRight size={14} />
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== PROJET EN VEDETTE ===== */}
      <section className="section-py bg-white">
        <Container>
          <Reveal>
            <SectionHeader
              label="Projet en vedette"
              title="CINECLUB – DÎNER DÉBAT"
              description={cineclubProject.slogan}
            />
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/projets/cineclub-diner-debat"
              className="group block bg-[--color-surface] border border-[--color-border] rounded-sm p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[--color-accent]/30"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <Badge variant="accent" className="mb-3">Nouveau projet</Badge>
                  <p className="text-body leading-relaxed mb-4 max-w-xl">
                    {cineclubProject.heroDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[--color-accent] group-hover:gap-3 transition-all duration-300">
                    Découvrir CINECLUB
                    <ArrowRight size={14} />
                  </span>
                </div>
                <div className="hidden md:block text-right">
                  <span className="text-meta text-[--color-fg-subtle]">
                    {cineclubProject.tagline}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ===== ARCHIVES ===== */}
      <section className="section-py bg-[--color-bg]">
        <Container>
          <Reveal>
            <SectionHeader
              label="Mémoire"
              title="Archives"
              description="Photographies, affiches, documents de tournage, articles de presse. Une mémoire visuelle du parcours d'Amadou Thior dans le cinéma sénégalais."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Photographies", "Tournages", "Affiches", "Presse"].map(
                (cat) => (
                  <div
                    key={cat}
                    className="aspect-square bg-[--color-surface] border border-[--color-border] rounded-sm flex items-center justify-center transition-all duration-300 hover:border-[--color-accent]/30 hover:shadow-sm"
                  >
                    <span className="text-caption text-[--color-fg-subtle]">
                      {cat}
                    </span>
                  </div>
                )
              )}
            </div>
            <div className="mt-8">
              <Link
                href="/archives"
                className="inline-flex items-center gap-2 text-sm font-medium text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
              >
                Explorer les archives
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-py bg-white border-t border-[--color-border]">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <h2 className="text-h2 mb-4">Prolonger l&apos;histoire</h2>
              <p className="text-body mb-8 max-w-lg mx-auto">
                Vous souhaitez inviter Amadou Thior, organiser une projection,
                une formation, une interview ou collaborer sur un projet ?
              </p>
              <CTAButton href="/contact" variant="primary">
                Prendre contact
                <ArrowRight size={14} />
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
