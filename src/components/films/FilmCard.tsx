import Link from "next/link";
import { Award } from "lucide-react";
import type { Film } from "@/content/types";

interface FilmCardProps {
  film: Film;
}

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <Link
      href={`/oeuvre/${film.slug}`}
      className="group block"
    >
      {/* Poster placeholder */}
      <div className="relative aspect-[2/3] bg-[--color-surface] mb-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <span className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[--color-fg-subtle] text-center leading-tight group-hover:text-[--color-accent] transition-colors duration-300">
            {film.title}
          </span>
        </div>
        {/* Year badge */}
        {film.year && (
          <span className="absolute bottom-3 left-3 text-meta text-[--color-fg-subtle] bg-[--color-bg]/80 px-2 py-0.5">
            {film.year}
          </span>
        )}
      </div>

      {/* Info */}
      <div>
        <p className="text-meta text-[--color-accent] mb-1">{film.type}</p>
        <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[--color-fg] group-hover:text-[--color-accent] transition-colors duration-300 mb-1">
          {film.title}
        </h3>
        {film.duration && (
          <p className="text-caption text-[--color-fg-subtle] mb-2">
            {film.country && `${film.country} · `}{film.duration}
          </p>
        )}
        {film.awards && film.awards.length > 0 && (
          <div className="flex items-start gap-1.5 text-xs text-[--color-accent]">
            <Award size={11} className="shrink-0 mt-0.5" />
            <span className="line-clamp-1">{film.awards[0]}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
