"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import OeuvreFilterBar from "@/components/oeuvres/OeuvreFilterBar";
import OeuvreCard from "@/components/oeuvres/OeuvreCard";
import { getAllOeuvres } from "@/lib/content";

export default function OeuvresPage() {
  const [filter, setFilter] = useState("tout");
  const oeuvres = getAllOeuvres();

  const filtered =
    filter === "tout"
      ? oeuvres
      : oeuvres.filter((o) => o.categorie === filter);

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <Reveal>
          <p className="text-meta mb-4">Filmographie</p>
          <h1 className="text-h1 mb-6 max-w-2xl">Œuvres</h1>
          <p className="text-body max-w-lg mb-10">
            Films, documentaires, téléfilms et productions. Chaque œuvre a sa
            fiche dédiée avec les informations documentées disponibles.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={80}>
          <div className="mb-10">
            <OeuvreFilterBar active={filter} onChange={setFilter} />
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((oeuvre, i) => (
            <Reveal key={oeuvre.slug} delay={i * 50}>
              <OeuvreCard oeuvre={oeuvre} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-caption text-[--color-fg-subtle] py-12 text-center">
            Aucune œuvre dans cette catégorie.
          </p>
        )}
      </div>
    </div>
  );
}
