import { notFound } from "next/navigation";
import { Calendar, MapPin, Clock, Clapperboard, Award, Radio, Tag, Users, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { cineclubProject, editions } from "@/data/cineclub-project";

interface EditionPageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return editions.map((e) => ({ year: String(e.year) }));
}

export async function generateMetadata({ params }: EditionPageProps) {
  const { year } = await params;
  const edition = editions.find((e) => e.year === Number(year));
  if (!edition) return {};
  return {
    title: `Édition ${edition.year} — ${edition.title} | ${cineclubProject.title}`,
    description: edition.description || `Édition ${edition.year} du ${cineclubProject.title}`,
  };
}

export default async function EditionPage({ params }: EditionPageProps) {
  const { year } = await params;
  const edition = editions.find((e) => e.year === Number(year));
  if (!edition) notFound();

  const isInProgress = edition.status === "in-progress";

  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <Badge variant="accent" className="mb-4">
                {edition.status === "completed" && "Édition réalisée"}
                {edition.status === "upcoming" && "Prochaine édition"}
                {edition.status === "in-progress" && "En cours d'élaboration"}
              </Badge>
              <h1 className="text-display text-[--color-fg] mb-3">{edition.year}</h1>
              <h2 className="text-h2 text-[--color-accent] mb-4">{edition.title}</h2>
              {edition.internationalDay && (
                <p className="text-caption text-[--color-fg-muted]">
                  {edition.internationalDay}
                  {edition.date && ` — ${edition.date}`}
                  {edition.location && `, ${edition.location}`}
                </p>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* IN PROGRESS */}
      {isInProgress && (
        <section className="pb-20">
          <Container narrow>
            <Reveal>
              <div className="bg-[--color-surface] border border-[--color-border] rounded-xl p-8 md:p-12 text-center">
                <p className="text-body text-[--color-fg-muted] leading-relaxed mb-8">
                  {edition.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Thématique", "Film", "Date", "Lieu"].map((item) => (
                    <div key={item} className="bg-[--color-surface-2] border border-[--color-border] rounded-lg p-4 text-center">
                      <span className="text-meta text-[--color-fg-subtle] block mb-1">{item}</span>
                      <span className="text-caption text-[--color-fg-muted]">À venir</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* FILM */}
      {edition.film && !isInProgress && (
        <section className="pb-12 border-t border-[--color-border] pt-12">
          <Container narrow>
            <Reveal>
              <span className="text-meta text-[--color-accent] block mb-4">Le film</span>
              <h3 className="text-h2 text-[--color-fg] mb-6">{edition.film.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-[--color-fg-muted]">
                  <Clapperboard size={14} className="text-[--color-accent-muted]" />
                  {edition.film.director}
                </div>
                {edition.film.producer && (
                  <div className="flex items-center gap-2 text-sm text-[--color-fg-muted]">
                    <Target size={14} className="text-[--color-accent-muted]" />
                    {edition.film.producer}
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-[--color-fg-muted]">
                  <MapPin size={14} className="text-[--color-accent-muted]" />
                  {edition.film.country}
                </div>
                <div className="flex items-center gap-2 text-sm text-[--color-fg-muted]">
                  <Clock size={14} className="text-[--color-accent-muted]" />
                  {edition.film.duration}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>{edition.film.genre}</Badge>
                <Badge>{edition.film.language}{edition.film.subtitles ? ` (sous-titré ${edition.film.subtitles})` : ""}</Badge>
              </div>
              {edition.film.recognition && (
                <p className="text-sm italic text-[--color-accent] mb-6">{edition.film.recognition}</p>
              )}
              <h4 className="text-sm font-semibold text-[--color-fg] mb-2">Synopsis</h4>
              <p className="text-body text-[--color-fg-muted] leading-relaxed">{edition.film.synopsis}</p>
            </Reveal>
          </Container>
        </section>
      )}

      {/* EVENT STORY */}
      {edition.eventStory && (
        <section className="pb-12 border-t border-[--color-border] pt-12">
          <Container narrow>
            <Reveal>
              <span className="text-meta text-[--color-accent] block mb-4">Contexte</span>
              <p className="text-body text-[--color-fg-muted] leading-relaxed mb-4">{edition.eventStory}</p>
              {edition.venue && (
                <div className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
                  <MapPin size={14} className="text-[--color-accent]" />
                  {edition.venue}
                </div>
              )}
            </Reveal>
          </Container>
        </section>
      )}

      {/* MEDIA */}
      {edition.mediaAppearances && edition.mediaAppearances.length > 0 && (
        <section className="pb-12 border-t border-[--color-border] pt-12">
          <Container narrow>
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <Radio size={16} className="text-[--color-accent]" />
                <span className="text-meta text-[--color-accent]">Couverture médiatique</span>
              </div>
              <ul className="space-y-2">
                {edition.mediaAppearances.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-caption text-[--color-fg-muted]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {/* OBJECTIVES */}
      {edition.objectives && (
        <section className="pb-12 border-t border-[--color-border] pt-12">
          <Container narrow>
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <Award size={16} className="text-[--color-accent]" />
                <span className="text-meta text-[--color-accent]">Objectifs de l&apos;édition</span>
              </div>
              <ul className="space-y-3">
                {edition.objectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-3 text-body text-[--color-fg-muted]">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0 mt-2" />
                    {obj}
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {/* THEMES */}
      {edition.themes && (
        <section className="pb-12 border-t border-[--color-border] pt-12">
          <Container narrow>
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <Tag size={16} className="text-[--color-accent]" />
                <span className="text-meta text-[--color-accent]">Thématiques</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {edition.themes.map((theme) => (
                  <span key={theme} className="px-4 py-2 text-sm bg-[--color-accent]/10 border border-[--color-accent]/25 rounded-full text-[--color-accent]">
                    {theme}
                  </span>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* TARGET AUDIENCES */}
      {edition.targetAudiences && (
        <section className="pb-20 border-t border-[--color-border] pt-12">
          <Container narrow>
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <Users size={16} className="text-[--color-accent]" />
                <span className="text-meta text-[--color-accent]">Publics cibles</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edition.targetAudiences.map((audience) => (
                  <div key={audience} className="flex items-center gap-2.5 text-caption text-[--color-fg-muted]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-muted)]" />
                    {audience}
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}
    </>
  );
}
