import { notFound } from "next/navigation";
import { films } from "@/content/films";
import Container from "@/components/ui/Container";

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
    title: film.title,
    description: film.synopsis || `${film.title} — Film d'Amadou Thior`,
  };
}

export default async function FilmPage({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = films.find((f) => f.slug === slug);
  if (!film) notFound();

  return (
    <div className="section-py pt-32">
      <Container narrow>
        <div className="text-meta text-[--color-accent] mb-3">{film.type}</div>
        <h1 className="text-h1 text-[--color-fg] mb-2">{film.title}</h1>
        {film.year && (
          <p className="text-caption text-[--color-fg-muted] mb-8">
            {film.year} · {film.country} {film.duration && `· ${film.duration}`}
          </p>
        )}
        {film.synopsis && (
          <p className="text-body text-[--color-fg-muted] leading-relaxed">
            {film.synopsis}
          </p>
        )}
        {/* TODO: Phase 4 — Full film page sections */}
      </Container>
    </div>
  );
}
