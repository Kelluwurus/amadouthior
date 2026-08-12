import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import { cineclubProject, cineclubContact } from "@/data/cineclub-project";

export const metadata: Metadata = {
  title: `${cineclubProject.title} | Amadou Thior`,
  description: cineclubProject.heroDescription,
};

export default function CineclubMainPage() {
  const { title, tagline, slogan, heroDescription, openingQuote, concept, promoterWord } =
    cineclubProject;

  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[--color-emerald]/10 via-[--color-bg] to-[--color-bg]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(31,77,30,0.12)_0%,transparent_60%)]" />

        <div className="relative z-10">
          <Container narrow>
            <Reveal>
              <div className="text-center">
                <p className="text-meta text-[--color-accent] mb-6">
                  {cineclubContact.structure}
                </p>
                <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[--color-fg] leading-[1.05] mb-6">
                  {title}
                </h1>
                <p className="text-sm md:text-base font-medium tracking-[0.15em] uppercase text-[--color-accent]/80 mb-4">
                  {slogan}
                </p>
                <p className="text-meta text-[var(--color-emerald-light)] mb-8">{tagline}</p>
                <p className="text-base md:text-lg text-[--color-fg-muted] leading-relaxed max-w-2xl mx-auto mb-6">
                  {heroDescription}
                </p>
                <blockquote className="text-sm italic text-[--color-fg-muted]/70 max-w-xl mx-auto mb-10">
                  &ldquo;{openingQuote}&rdquo;
                </blockquote>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <CTAButton href="/projets/cineclub-diner-debat/deroulement">
                    Découvrir le concept
                  </CTAButton>
                  <CTAButton href="/projets/cineclub-diner-debat/editions" variant="secondary">
                    Voir les éditions
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="section-py bg-[--color-surface] border-t border-[--color-accent]/15">
        <Container narrow>
          <Reveal>
            <div className="text-center mb-8">
              <span className="text-meta text-[--color-accent] block mb-3">Le concept</span>
              <h2 className="text-h2 text-[--color-fg]">Cinéma, dialogue et action</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-body text-[--color-fg-muted] leading-relaxed text-center mb-8">
              {concept.summary}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {concept.audiences.map((audience) => (
                <span
                  key={audience}
                  className="px-3 py-1.5 text-xs font-medium bg-[--color-accent]/15 border border-[--color-accent]/25 rounded-full text-[--color-fg-muted]"
                >
                  {audience}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-[--color-accent]/10 border border-[--color-accent]/20 rounded-xl p-8 text-center">
              <p className="text-base md:text-lg text-[--color-accent] font-medium leading-relaxed font-[family-name:var(--font-cormorant)]">
                {concept.closingStatement}
              </p>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="text-center mt-8">
              <Link
                href="/projets/cineclub-diner-debat/deroulement"
                className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
              >
                Voir le déroulement du concept
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* MOT DU PROMOTEUR */}
      <section className="section-py border-t border-[--color-border]">
        <Container narrow>
          <Reveal>
            <span className="text-meta text-[--color-accent] block mb-3">Le mot du promoteur</span>
            <h2 className="text-h2 text-[--color-fg] mb-2">{promoterWord.author}</h2>
            <p className="text-xs text-[--color-accent-muted] font-medium uppercase tracking-wider mb-8">
              {promoterWord.role}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-[--color-fg-muted] leading-relaxed">
              {promoterWord.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
