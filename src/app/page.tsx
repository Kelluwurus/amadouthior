import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import FilmCard from "@/components/films/FilmCard";
import Timeline from "@/components/timeline/Timeline";
import { siteConfig } from "@/content/site";
import { biographySections } from "@/content/biography";
import { featuredFilms } from "@/content/films";
import { timeline } from "@/content/timeline";
import { cineclubProject } from "@/data/cineclub-project";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="grain min-h-[85vh] flex items-end pb-20 md:pb-28 pt-40">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-5">
              {siteConfig.subtitle}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-display text-[--color-fg] mb-6 max-w-2xl">
              {siteConfig.heroMessage}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-body text-[--color-fg-muted] max-w-lg mb-10">
              {siteConfig.secondaryTagline}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/oeuvre" variant="primary">
                Explorer les œuvres
              </CTAButton>
              <CTAButton href="/parcours" variant="ghost">
                Découvrir le parcours
                <ArrowRight size={14} />
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="section-py">
        <Container narrow>
          <Reveal>
            <p className="text-body text-lg text-[--color-fg-muted] leading-relaxed max-w-2xl">
              {biographySections.formation.text} {biographySections.realisation.text.split(". Voir")[0]}.
            </p>
            <Link
              href="/parcours"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
            >
              Lire la biographie <ArrowRight size={13} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ===== ŒUVRES ===== */}
      <section className="section-py bg-[--color-surface]">
        <Container>
          <Reveal>
            <SectionHeader label="Filmographie" title="Œuvres majeures" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {featuredFilms.slice(0, 4).map((film, i) => (
              <Reveal key={film.slug} delay={i * 80}>
                <FilmCard film={film} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={350}>
            <div className="mt-12">
              <Link
                href="/oeuvre"
                className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
              >
                Toute la filmographie <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section-py">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <Reveal>
              <SectionHeader
                label="Parcours"
                title="Plus de quatre décennies d'audiovisuel"
              />
              <Link
                href="/parcours"
                className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
              >
                Chronologie complète <ArrowRight size={13} />
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Timeline events={timeline} limit={8} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== TRANSMISSION ===== */}
      <section className="section-py bg-[--color-surface]">
        <Container narrow>
          <Reveal>
            <SectionHeader
              label="Transmission"
              title="Former, transmettre, accompagner"
              description={biographySections.transmission.text}
              align="center"
            />
            <div className="text-center">
              <CTAButton href="/transmission" variant="ghost">
                En savoir plus <ArrowRight size={13} />
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== CINECLUB ===== */}
      <section className="section-py">
        <Container>
          <Reveal>
            <SectionHeader
              label="Projet"
              title="CINECLUB – DÎNER DÉBAT"
              description={cineclubProject.slogan}
            />
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/projets/cineclub-diner-debat"
              className="group block border border-[--color-border] p-8 md:p-10 transition-colors duration-300 hover:border-[--color-accent]/30"
            >
              <p className="text-body text-[--color-fg-muted] leading-relaxed mb-5 max-w-xl">
                {cineclubProject.heroDescription}
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[--color-accent] group-hover:gap-3 transition-all">
                Découvrir le projet <ArrowRight size={13} />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ===== ARCHIVES ===== */}
      <section className="section-py bg-[--color-surface]">
        <Container>
          <Reveal>
            <SectionHeader
              label="Mémoire"
              title="Archives"
              description="Photographies, affiches, documents de tournage, articles de presse."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Photographies", "Tournages", "Affiches", "Presse"].map((cat) => (
                <div key={cat} className="aspect-[4/3] bg-[--color-surface-2] flex items-center justify-center">
                  <span className="text-caption text-[--color-fg-subtle]">{cat}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/archives" className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors">
                Explorer les archives <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-py">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <h2 className="text-h2 mb-4">Prolonger l&apos;histoire</h2>
              <p className="text-body text-[--color-fg-muted] mb-8 max-w-md mx-auto">
                Vous souhaitez inviter Amadou Thior, organiser une projection,
                une formation ou collaborer sur un projet ?
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
