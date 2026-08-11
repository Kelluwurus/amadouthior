import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import FilmCard from "@/components/films/FilmCard";
import Timeline from "@/components/timeline/Timeline";
import { identity, biographySections } from "@/content/biography";
import { featuredFilms } from "@/content/films";
import { timeline } from "@/content/timeline";
import { cineclubProject } from "@/data/cineclub-project";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="grain relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[--color-bg] via-[--color-surface] to-[--color-bg]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(196,114,58,0.04)_0%,transparent_50%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h1 className="text-display text-[--color-fg] mb-4">
              {identity.fullName.toUpperCase()}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-meta text-[--color-accent] mb-8">
              {identity.roles.join(" · ")}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-h3 text-[--color-fg-muted] font-normal max-w-xl mx-auto mb-12 leading-relaxed">
              {identity.tagline}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/parcours" variant="primary">
                Découvrir son parcours
              </CTAButton>
              <CTAButton href="/oeuvre" variant="secondary">
                Explorer l&apos;œuvre
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="section-py bg-[--color-surface]">
        <Container narrow>
          <Reveal>
            <p className="text-body text-[--color-fg-muted] leading-relaxed text-lg">
              {biographySections.formation.text} {biographySections.realisation.text.split(". Voir")[0]}.
            </p>
            <Link
              href="/parcours"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
            >
              Lire la biographie
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ===== ŒUVRES MAJEURES ===== */}
      <section className="section-py">
        <Container>
          <Reveal>
            <SectionHeader
              label="Filmographie"
              title="Œuvres majeures"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
              >
                Voir toute la filmographie
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section-py bg-[--color-surface]">
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
                  className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
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
      <section className="section-py">
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
      <section className="section-py border-t border-[#0F382C]/15">
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
              className="group block bg-[#0F382C]/8 border border-[#0F382C]/20 rounded-xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A24A]/30"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <Badge variant="accent" className="mb-3">Nouveau projet</Badge>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed mb-4 max-w-xl">
                    {cineclubProject.heroDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#C8A24A] group-hover:gap-3 transition-all duration-300">
                    Découvrir CINECLUB
                    <ArrowRight size={14} />
                  </span>
                </div>
                <div className="hidden md:block text-right">
                  <span className="text-meta text-[#C8A24A]/60">
                    {cineclubProject.tagline}
                  </span>
                </div>
              </div>
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
              description="Photographies, affiches, documents de tournage, articles de presse. Une mémoire visuelle du parcours d'Amadou Thior dans le cinéma sénégalais."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Photographies", "Tournages", "Affiches", "Presse"].map(
                (cat) => (
                  <div
                    key={cat}
                    className="aspect-square bg-[--color-surface-2] border border-[--color-border] rounded-lg flex items-center justify-center"
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
                className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
              >
                Explorer les archives
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section-py">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <p className="text-body text-[--color-fg-muted] mb-8 max-w-lg mx-auto">
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
