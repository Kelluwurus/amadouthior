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
      className="group block bg-white border border-[--color-border] rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[--color-accent]/5"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[3/4] bg-[--color-surface] flex items-center justify-center overflow-hidden">
        <span className="font-[family-name:var(--font-cormorant)] text-xl text-[--color-fg-subtle] group-hover:text-[--color-accent] transition-colors duration-500 text-center px-4">
          {film.title}
        </span>
        {film.year && (
          <div className="absolute top-3 left-3">
            <Badge variant="accent">{film.year}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-meta block mb-2">
          {film.type}
        </span>
        <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[--color-fg] mb-2 group-hover:text-[--color-accent] transition-colors">
          {film.title}
        </h3>
        {film.synopsis && (
          <p className="text-caption line-clamp-2 mb-3">
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
