import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import { cineclubProject } from "@/data/cineclub-project";

export const metadata: Metadata = {
  title: "CINECLUB – Dîner Débat",
  description: cineclubProject.heroDescription,
};

export default function CineclubMainPage() {
  const { title, tagline, slogan, heroDescription, openingQuote, concept, promoterWord } =
    cineclubProject;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F4D1E]/15 via-[#0C0C0C] to-[#0C0C0C]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(31,77,30,0.12)_0%,transparent_60%)]" />

        <div className="relative z-10">
          <Container narrow>
            <Reveal>
              <div className="text-center">
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#F5F0EB] leading-[1.05] mb-2">
                  CINECLUB
                </h1>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#D4AF37] leading-[1.05] mb-6">
                  DÎNER DÉBAT
                </h1>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-center text-sm md:text-base font-medium tracking-[0.15em] uppercase text-[#D4AF37]/80 mb-6">
                {slogan}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-center text-meta text-[#2E5C1E] mb-8">
                {tagline}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-center text-base md:text-lg text-[#8A8A8A] leading-relaxed max-w-2xl mx-auto mb-8">
                {heroDescription}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <blockquote className="text-center text-sm italic text-[#8A8A8A]/70 max-w-xl mx-auto border-l-0 mb-10">
                &ldquo;{openingQuote}&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/projets/cineclub-diner-debat/deroulement">
                  Découvrir le concept
                </CTAButton>
                <CTAButton href="/projets/cineclub-diner-debat/editions" variant="secondary">
                  Voir les éditions
                </CTAButton>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* ===== LE CONCEPT ===== */}
      <section className="section-py bg-[--color-surface] border-t border-[#1F4D1E]/15">
        <Container narrow>
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-meta text-[#D4AF37] block mb-3">Le concept</span>
              <h2 className="text-h2 text-[--color-fg]">
                Cinéma, dialogue et action
              </h2>
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
                  className="px-3 py-1.5 text-xs font-medium bg-[#1F4D1E]/15 border border-[#1F4D1E]/25 rounded-full text-[#8A8A8A]"
                >
                  {audience}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[#1F4D1E]/10 border border-[#1F4D1E]/20 rounded-xl p-8 text-center">
              <p className="text-base md:text-lg text-[#D4AF37] font-medium leading-relaxed font-[family-name:var(--font-playfair)]">
                {concept.closingStatement}
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="text-center mt-8">
              <Link
                href="/projets/cineclub-diner-debat/deroulement"
                className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#E0B84B] transition-colors"
              >
                Voir le déroulement du concept
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== MOT DU PROMOTEUR ===== */}
      <section className="section-py border-t border-[--color-border]">
        <Container narrow>
          <Reveal>
            <span className="text-meta text-[#D4AF37] block mb-3">Le mot du promoteur</span>
            <h2 className="text-h2 text-[--color-fg] mb-2">{promoterWord.author}</h2>
            <p className="text-xs text-[#C97B5A] font-medium uppercase tracking-wider mb-8">
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
