import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { films } from "@/content/films";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";

interface FilmPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = films.find((f) => f.slug === slug);
  if (!film) return {};
  return {
    title: `${film.title} — Amadou Thior`,
    description: film.synopsis || `${film.title}, ${film.type} réalisé par Amadou Thior`,
  };
}

export default async function FilmPage({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = films.find((f) => f.slug === slug);
  if (!film) notFound();

  return (
    <div className="section-py pt-32">
      <Container narrow>
        <Reveal>
          <Link
            href="/oeuvre"
            className="inline-flex items-center gap-2 text-sm text-[--color-fg-muted] hover:text-[--color-accent] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Filmographie
          </Link>
        </Reveal>

        {/* Hero */}
        <Reveal>
          <div className="mb-10">
            <Badge variant="accent" className="mb-4">{film.type}</Badge>
            <h1 className="text-h1 text-[--color-fg] mb-3">{film.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-caption text-[--color-fg-muted]">
              {film.year && <span>{film.year}</span>}
              {film.country && <span>· {film.country}</span>}
              {film.duration && <span>· {film.duration}</span>}
              {film.language && <span>· {film.language}</span>}
            </div>
          </div>
        </Reveal>

        {/* Synopsis */}
        {film.synopsis && (
          <Reveal delay={100}>
            <section className="mb-10">
              <h2 className="text-h3 text-[--color-fg] mb-3">Synopsis</h2>
              <p className="text-body text-[--color-fg-muted] leading-relaxed">
                {film.synopsis}
              </p>
            </section>
          </Reveal>
        )}

        {/* Credits */}
        {(film.director || film.writer || film.production) && (
          <Reveal delay={150}>
            <section className="mb-10">
              <h2 className="text-h3 text-[--color-fg] mb-4">Équipe</h2>
              <div className="space-y-2">
                {film.director && (
                  <div className="flex gap-3 text-caption">
                    <span className="text-[--color-fg-subtle] w-28 shrink-0">Réalisation</span>
                    <span className="text-[--color-fg-muted]">{film.director}</span>
                  </div>
                )}
                {film.writer && (
                  <div className="flex gap-3 text-caption">
                    <span className="text-[--color-fg-subtle] w-28 shrink-0">Scénario</span>
                    <span className="text-[--color-fg-muted]">{film.writer}</span>
                  </div>
                )}
                {film.production && (
                  <div className="flex gap-3 text-caption">
                    <span className="text-[--color-fg-subtle] w-28 shrink-0">Production</span>
                    <span className="text-[--color-fg-muted]">{film.production}</span>
                  </div>
                )}
              </div>
            </section>
          </Reveal>
        )}

        {/* Cast */}
        {film.cast && film.cast.length > 0 && (
          <Reveal delay={200}>
            <section className="mb-10">
              <h2 className="text-h3 text-[--color-fg] mb-4">Distribution</h2>
              <div className="flex flex-wrap gap-2">
                {film.cast.map((actor) => (
                  <Badge key={actor}>{actor}</Badge>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Credits (additional) */}
        {film.credits && film.credits.length > 0 && (
          <Reveal delay={200}>
            <section className="mb-10">
              <h2 className="text-h3 text-[--color-fg] mb-4">Crédits</h2>
              <ul className="space-y-1.5">
                {film.credits.map((credit) => (
                  <li key={credit} className="text-caption text-[--color-fg-muted]">
                    {credit}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Awards */}
        {film.awards && film.awards.length > 0 && (
          <Reveal delay={250}>
            <section className="mb-10">
              <h2 className="text-h3 text-[--color-fg] mb-4">Distinctions</h2>
              <div className="space-y-3">
                {film.awards.map((award) => (
                  <div
                    key={award}
                    className="bg-[--color-surface] border border-[--color-border] rounded-lg p-4"
                  >
                    <p className="text-sm text-[--color-accent] font-medium">{award}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Festivals */}
        {film.festivals && film.festivals.length > 0 && (
          <Reveal delay={300}>
            <section className="mb-10">
              <h2 className="text-h3 text-[--color-fg] mb-4">Festivals</h2>
              <div className="flex flex-wrap gap-2">
                {film.festivals.map((festival) => (
                  <Badge key={festival} variant="muted">{festival}</Badge>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Sources */}
        {film.sources && film.sources.length > 0 && (
          <Reveal delay={350}>
            <section className="mt-12 pt-8 border-t border-[--color-border]">
              <p className="text-xs text-[--color-fg-subtle] mb-2">Sources</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {film.sources.map((source) => (
                  <span key={source.title} className="text-xs text-[--color-fg-subtle]">
                    {source.publisher || source.title}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>
        )}
      </Container>
    </div>
  );
}
