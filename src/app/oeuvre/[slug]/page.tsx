import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Award, Radio, Globe, Info } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { films, getFilmBySlug } from "@/content/films";
import type { DataStatus } from "@/content/films";

interface FilmPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);
  if (!film) return {};
  return {
    title: `${film.title}`,
    description:
      film.synopsis ||
      `${film.title} — ${film.type}, ${film.roleOfAmadouThior}. Amadou Thior.`,
  };
}

function StatusIndicator({ status }: { status?: DataStatus }) {
  if (!status || status === "verified") return null;
  return (
    <span className="inline-flex items-center gap-1 text-xs text-[--color-fg-subtle] italic ml-2">
      <Info size={10} />
      {status === "to_confirm" ? "À confirmer" : "À compléter"}
    </span>
  );
}

export default async function FilmPage({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);
  if (!film) notFound();

  return (
    <>
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16">
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

          <Reveal delay={60}>
            {/* Image placeholder */}
            <div className="aspect-[16/9] bg-[--color-surface] flex items-center justify-center mb-10">
              <span className="text-caption text-[--color-fg-subtle]">
                Image à ajouter
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <p className="text-meta text-[--color-accent]">
                {film.year || "Année à confirmer"}
              </p>
              <StatusIndicator status={film.yearStatus} />
            </div>
            <h1 className="text-h1 mb-3">{film.title}</h1>
            {film.originalTitle && film.originalTitle !== film.title && (
              <p className="text-caption text-[--color-fg-subtle] italic mb-3">
                Titre original : {film.originalTitle}
              </p>
            )}
            <p className="text-body text-[--color-accent-muted] font-medium mb-6">
              {film.roleOfAmadouThior}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-20">
        <Container narrow>
          <div className="space-y-12">

            {/* Synopsis */}
            {film.synopsis ? (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3">Synopsis</h2>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed">
                    {film.synopsis}
                  </p>
                  <StatusIndicator status={film.synopsisStatus} />
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3">Synopsis</h2>
                  <p className="text-caption text-[--color-fg-subtle] italic">
                    Information à compléter.
                  </p>
                </div>
              </Reveal>
            )}

            {/* Fiche technique */}
            <Reveal>
              <div>
                <h2 className="text-meta text-[--color-accent] mb-4">Fiche technique</h2>
                <div className="space-y-2.5">
                  <Row label="Réalisation" value={film.director} />
                  {film.screenplay && <Row label="Scénario" value={film.screenplay} />}
                  <Row label="Fonction d'Amadou Thior" value={film.roleOfAmadouThior} />
                  {film.productionCompany && <Row label="Production" value={film.productionCompany} />}
                  {film.producer && <Row label="Producteur" value={film.producer} />}
                  <Row label="Type" value={film.type} />
                  {film.duration && <Row label="Durée" value={film.duration} />}
                  {film.durationNote && (
                    <Row label="Durée" value={film.durationNote} status="to_confirm" />
                  )}
                  {film.format && <Row label="Format" value={film.format} />}
                  {film.language && (
                    <Row
                      label="Langue"
                      value={`${film.language}${film.subtitles ? `, sous-titré ${film.subtitles}` : ""}`}
                    />
                  )}
                  {film.collection && <Row label="Collection" value={film.collection} />}
                  {film.audience && <Row label="Public" value={film.audience} />}
                </div>
              </div>
            </Reveal>

            {/* Related works (production) */}
            {film.relatedWorks && film.relatedWorks.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3">Œuvres</h2>
                  <p className="text-body text-[--color-fg-muted]">
                    {film.relatedWorks.join(" · ")}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Récompenses */}
            {film.awards && film.awards.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-4">Récompenses</h2>
                  <div className="space-y-3">
                    {film.awards.map((award) => (
                      <div
                        key={award.title}
                        className="flex items-start gap-3 border-l-2 border-[--color-accent] pl-4 py-1"
                      >
                        <Award size={14} className="text-[--color-accent] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-body text-[--color-fg]">{award.title}</p>
                          <StatusIndicator status={award.status} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Festivals */}
            {film.festivals && film.festivals.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3">Festivals / Sélections</h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {film.festivals.map((f) => (
                      <span key={f} className="text-caption text-[--color-fg-muted]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Diffusions */}
            {film.broadcasts && film.broadcasts.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3 flex items-center gap-2">
                    <Radio size={13} />
                    Diffusions
                  </h2>
                  <p className="text-caption text-[--color-fg-muted]">
                    {film.broadcasts.join(" · ")}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Distribution */}
            {film.distribution && film.distribution.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="text-meta text-[--color-accent] mb-3 flex items-center gap-2">
                    <Globe size={13} />
                    Distribution
                  </h2>
                  <p className="text-caption text-[--color-fg-muted]">
                    {film.distribution.join(" · ")}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Notes */}
            {film.notes && (
              <Reveal>
                <div className="border-t border-[--color-border] pt-8">
                  <h2 className="text-meta text-[--color-fg-subtle] mb-3">Notes</h2>
                  <p className="text-caption text-[--color-fg-subtle] italic leading-relaxed">
                    {film.notes}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Data status global */}
            {film.dataStatus !== "verified" && (
              <Reveal>
                <div className="border-t border-[--color-border] pt-6">
                  <p className="text-xs text-[--color-fg-subtle] italic flex items-center gap-1.5">
                    <Info size={11} />
                    {film.dataStatus === "to_confirm"
                      ? "Certaines informations de cette fiche sont en attente de confirmation."
                      : "Cette fiche est en cours de complétion. Des informations seront ajoutées prochainement."}
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

function Row({
  label,
  value,
  status,
}: {
  label: string;
  value?: string;
  status?: DataStatus;
}) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <span className="text-caption text-[--color-fg-subtle] sm:w-44 shrink-0">
        {label}
      </span>
      <span className="text-caption text-[--color-fg-muted]">
        {value}
        <StatusIndicator status={status} />
      </span>
    </div>
  );
}
