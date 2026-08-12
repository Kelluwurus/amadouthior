import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { getFilmBySlug } from "@/content/films";

const almodou = getFilmBySlug("almodou")!;

export const metadata: Metadata = {
  title: "Almodou — Amadou Thior",
  description: almodou.synopsis,
};

export default function AlmodouPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain pt-36 md:pt-44 pb-16 md:pb-20">
        <Container narrow>
          <Reveal>
            <Link
              href="/oeuvre"
              className="inline-flex items-center gap-2 text-sm text-[--color-fg-subtle] hover:text-[--color-accent] transition-colors mb-10"
            >
              <ArrowLeft size={13} />
              Filmographie
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-meta text-[--color-accent] mb-3">
              {almodou.roleOfAmadouThior}
            </p>
            <h1 className="text-display mb-4">Almodou</h1>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-caption text-[--color-fg-subtle] mb-8">
              <span>{almodou.year}</span>
              <span>·</span>
              <span>{almodou.type}</span>
              <span>·</span>
              <span>{almodou.duration}</span>
              {almodou.language && (
                <>
                  <span>·</span>
                  <span>{almodou.language}{almodou.subtitles && `, sous-titré ${almodou.subtitles}`}</span>
                </>
              )}
            </div>
          </Reveal>

          {/* Prix principal */}
          {almodou.awards && almodou.awards.length > 0 && (
            <Reveal delay={160}>
              <div className="border-l-2 border-[--color-accent] pl-6 mb-10">
                <div className="flex items-start gap-2">
                  <Award size={16} className="text-[--color-accent] shrink-0 mt-0.5" />
                  <p className="text-body text-[--color-fg] font-medium">
                    {almodou.awards[0].title}
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* Content */}
      <section className="pb-20">
        <Container narrow>
          <div className="space-y-12">
            {/* Synopsis */}
            {almodou.synopsis && (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3">Synopsis</h2>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed text-lg">
                    {almodou.synopsis}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Fiche technique */}
            <Reveal>
              <div>
                <h2 className="text-meta text-[--color-accent] mb-4">Fiche technique</h2>
                <div className="space-y-2.5">
                  <FicheRow label="Réalisation" value={almodou.director} />
                  <FicheRow label="Scénario" value={almodou.screenplay} />
                  <FicheRow label="Production" value={almodou.productionCompany} />
                  <FicheRow label="Durée" value={almodou.duration} />
                  <FicheRow label="Type" value={almodou.type} />
                  <FicheRow label="Langue" value={almodou.language} />
                  <FicheRow label="Sous-titrage" value={almodou.subtitles} />
                </div>
              </div>
            </Reveal>

            {/* Festivals */}
            {almodou.festivals && almodou.festivals.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3">Festivals / Sélections</h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {almodou.festivals.map((f) => (
                      <span key={f} className="text-caption text-[--color-fg-muted]">{f}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Diffusions */}
            {almodou.broadcasts && almodou.broadcasts.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3">Diffusions</h2>
                  <p className="text-caption text-[--color-fg-muted]">
                    {almodou.broadcasts.join(" · ")}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Link to full page */}
            <Reveal>
              <div className="border-t border-[--color-border] pt-8">
                <Link
                  href="/oeuvre/almodou"
                  className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
                >
                  Fiche technique complète <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function FicheRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <span className="text-caption text-[--color-fg-subtle] sm:w-36 shrink-0">{label}</span>
      <span className="text-caption text-[--color-fg-muted]">{value}</span>
    </div>
  );
}
