import Link from "next/link";
import { Award } from "lucide-react";
import type { Film } from "@/content/types";
import Badge from "@/components/ui/Badge";

interface FilmCardProps {
  film: Film;
}

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <Link
      href={`/oeuvre/${film.slug}`}
      className="group block bg-[--color-surface] border border-[--color-border] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[--color-border-accent] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-[--color-surface-2] to-[--color-surface] flex items-center justify-center overflow-hidden">
        <span className="font-[family-name:var(--font-cormorant)] text-xl text-[--color-fg-subtle] group-hover:text-[--color-fg-muted] transition-colors duration-500">
          {film.title}
        </span>
        {film.year && (
          <div className="absolute top-3 right-3">
            <Badge variant="accent">{film.year}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-meta text-[--color-accent] block mb-1.5">
          {film.type}
        </span>
        <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[--color-fg] mb-2">
          {film.title}
        </h3>
        {film.synopsis && (
          <p className="text-caption text-[--color-fg-muted] line-clamp-2 mb-3">
            {film.synopsis}
          </p>
        )}
        {film.awards && film.awards.length > 0 && (
          <div className="flex items-start gap-1.5 text-xs text-[--color-accent]">
            <Award size={12} className="shrink-0 mt-0.5" />
            <span className="line-clamp-1">{film.awards[0]}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
