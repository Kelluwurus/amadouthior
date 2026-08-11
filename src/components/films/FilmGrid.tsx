"use client";

import { useState } from "react";
import type { Film, FilmType } from "@/content/types";
import FilmCard from "./FilmCard";

interface FilmGridProps {
  films: Film[];
}

const filters: { label: string; value: FilmType | "all" }[] = [
  { label: "Tous", value: "all" },
  { label: "Documentaires", value: "documentaire" },
  { label: "Fictions", value: "fiction" },
  { label: "Longs métrages", value: "long-metrage" },
  { label: "Courts métrages", value: "court-metrage" },
  { label: "Téléfilms", value: "telefilm" },
];

export default function FilmGrid({ films }: FilmGridProps) {
  const [active, setActive] = useState<FilmType | "all">("all");

  // Only show confirmed films in the grid
  const confirmedFilms = films.filter((f) => f.status !== "to-confirm");

  const filtered =
    active === "all"
      ? confirmedFilms
      : confirmedFilms.filter((f) => f.type === active);

  // Only show filter buttons for types that have films
  const availableFilters = filters.filter(
    (f) => f.value === "all" || confirmedFilms.some((film) => film.type === f.value)
  );

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Filtrer par type">
        {availableFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActive(filter.value)}
            role="tab"
            aria-selected={active === filter.value}
            className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-300 ${
              active === filter.value
                ? "bg-[--color-accent] text-white border-[--color-accent]"
                : "text-[--color-fg-muted] border-[--color-border] hover:text-[--color-fg] hover:border-[--color-border-accent]"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((film) => (
            <FilmCard key={film.slug} film={film} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-caption text-[--color-fg-subtle]">
            Aucun film dans cette catégorie.
          </p>
        </div>
      )}
    </div>
  );
}
