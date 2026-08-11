import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/timeline/Timeline";
import { identity, biographySections, biographySources } from "@/content/biography";
import { timeline } from "@/content/timeline";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Plus de quatre décennies dans le cinéma et l'audiovisuel sénégalais. Biographie narrative d'Amadou Thior.",
};

const sections = [
  biographySections.formation,
  biographySections.debuts,
  biographySections.rts,
  biographySections.sembene,
  biographySections.production,
  biographySections.realisation,
  biographySections.transmission,
  biographySections.patrimoine,
  biographySections.today,
];

export default function ParcoursPage() {
  return (
    <div className="section-py pt-32">
      {/* Hero */}
      <Container narrow>
        <Reveal>
          <span className="text-meta text-[--color-accent] block mb-3">Biographie</span>
          <h1 className="text-h1 text-[--color-fg] mb-4">Un parcours</h1>
          <p className="text-body text-[--color-fg-muted] max-w-2xl mb-4">
            Né le {identity.birthDate} à {identity.birthPlace}.
          </p>
          <p className="text-body text-[--color-fg-muted] max-w-2xl">
            {identity.tagline}
          </p>
        </Reveal>
      </Container>

      {/* Narrative biography */}
      <section className="section-py">
        <Container narrow>
          <div className="space-y-12">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 50}>
                <article className="border-l-2 border-[--color-accent]/20 pl-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h2 className="text-h3 text-[--color-fg]">{section.title}</h2>
                    {section.period && (
                      <span className="text-meta text-[--color-accent]">{section.period}</span>
                    )}
                  </div>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed">
                    {section.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline complète */}
      <section className="section-py bg-[--color-surface]">
        <Container>
          <Reveal>
            <SectionHeader
              label="Chronologie"
              title="Chronologie complète"
              align="center"
            />
          </Reveal>
          <div className="max-w-3xl mx-auto">
            <Reveal delay={100}>
              <Timeline events={timeline} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Sources */}
      <section className="py-12">
        <Container narrow>
          <Reveal>
            <div className="pt-8 border-t border-[--color-border]">
              <p className="text-xs text-[--color-fg-subtle] mb-3">Sources documentaires</p>
              <div className="space-y-1">
                {biographySources.map((source) => (
                  <p key={source.title} className="text-xs text-[--color-fg-subtle]">
                    {source.title}{source.publisher && ` — ${source.publisher}`}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
