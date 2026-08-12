import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award } from "lucide-react";
import { films } from "@/content/films";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";

const almodou = films.find((f) => f.slug === "almodou")!;

export const metadata: Metadata = {
  title: "Almodou — Un film d'Amadou Thior",
  description: almodou.synopsis,
};

export default function AlmodouPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="grain relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-bg] via-[--color-surface] to-[--color-bg]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(200,162,74,0.05)_0%,transparent_60%)]" />

        <div className="relative z-10">
          <Container narrow>
            <Reveal>
              <Link
                href="/oeuvre"
                className="inline-flex items-center gap-2 text-sm text-[--color-fg-muted] hover:text-[--color-accent] transition-colors mb-10"
              >
                <ArrowLeft size={14} />
                Filmographie
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <div className="text-center">
                <h1 className="text-display text-[--color-fg] mb-4">ALMODOU</h1>
                <p className="text-caption text-[--color-fg-muted] mb-2">
                  Un film d&apos;Amadou Thior
                </p>
                <p className="text-meta text-[--color-accent]">
                  {almodou.year} · {almodou.country} · {almodou.duration}
                </p>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* Content */}
      <section className="section-py">
        <Container narrow>
          {/* Prix principal — mis en avant */}
          {almodou.awards && almodou.awards.length > 0 && (
            <Reveal>
              <div className="bg-[--color-accent]/5 border border-[--color-accent]/20 rounded-xl p-6 md:p-8 mb-12 text-center">
                <Award size={24} className="text-[--color-accent] mx-auto mb-3" />
                <p className="text-base md:text-lg font-medium text-[--color-accent]">
                  {almodou.awards[0]}
                </p>
              </div>
            </Reveal>
          )}

          {/* Synopsis */}
          <Reveal delay={100}>
            <section className="mb-12">
              <h2 className="text-h2 text-[--color-fg] mb-4">Présentation</h2>
              <p className="text-body text-[--color-fg-muted] leading-relaxed text-lg">
                {almodou.synopsis}
              </p>
            </section>
          </Reveal>

          {/* Fiche technique */}
          <Reveal delay={150}>
            <section className="mb-12">
              <h2 className="text-h2 text-[--color-fg] mb-6">Fiche technique</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Réalisation", value: almodou.director },
                  { label: "Scénario", value: almodou.writer },
                  { label: "Production", value: almodou.production },
                  { label: "Durée", value: almodou.duration },
                  { label: "Pays", value: almodou.country },
                  { label: "Langue", value: almodou.language },
                  { label: "Année", value: almodou.year?.toString() },
                  { label: "Type", value: almodou.type },
                ].filter((item) => item.value).map((item) => (
                  <div key={item.label} className="flex gap-3 text-caption">
                    <span className="text-[--color-fg-subtle] w-28 shrink-0">{item.label}</span>
                    <span className="text-[--color-fg-muted]">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Distribution */}
          {almodou.cast && almodou.cast.length > 0 && (
            <Reveal delay={200}>
              <section className="mb-12">
                <h2 className="text-h2 text-[--color-fg] mb-4">Distribution</h2>
                <div className="flex flex-wrap gap-2">
                  {almodou.cast.map((actor) => (
                    <Badge key={actor}>{actor}</Badge>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {/* Festivals */}
          {almodou.festivals && almodou.festivals.length > 0 && (
            <Reveal delay={250}>
              <section className="mb-12">
                <h2 className="text-h2 text-[--color-fg] mb-4">Festivals</h2>
                <div className="flex flex-wrap gap-2">
                  {almodou.festivals.map((festival) => (
                    <Badge key={festival} variant="muted">{festival}</Badge>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {/* Sources */}
          {almodou.sources && almodou.sources.length > 0 && (
            <Reveal delay={300}>
              <section className="mt-12 pt-8 border-t border-[--color-border]">
                <p className="text-xs text-[--color-fg-subtle] mb-3">Sources</p>
                <div className="space-y-1">
                  {almodou.sources.map((source) => (
                    <p key={source.title} className="text-xs text-[--color-fg-subtle]">
                      {source.title}{source.publisher && ` — ${source.publisher}`}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          )}
        </Container>
      </section>
    </div>
  );
}
