"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type FilterValue = "tous" | "documentaire" | "fiction" | "telefilm" | "production";

interface FilmEntry {
  slug: string;
  title: string;
  subtitle?: string;
  year: string;
  type: string;
  category: "realisation" | "production";
  filterType: FilterValue;
  duration?: string;
  durationNote?: string;
  format?: string;
  director?: string;
  writer?: string;
  production?: string;
  language?: string;
  subtitles?: string;
  support?: string;
  subject?: string;
  awards?: string[];
  festivals?: string[];
  diffusions?: string[];
  collection?: string;
  audience?: string;
  works?: string[];
  note?: string;
}

const films: FilmEntry[] = [
  {
    slug: "xareek-maral",
    title: "Xareek Maral / Halte au désert",
    year: "1982",
    type: "Documentaire",
    category: "realisation",
    filterType: "documentaire",
    format: "16 mm couleur",
    duration: "30 min",
    director: "Amadou Thior",
    awards: [
      "1er Prix de la CEE au FESPACO 1985 — catégorie meilleur film sur le développement",
    ],
  },
  {
    slug: "exchange-cross-road",
    title: "Exchange Cross Road",
    year: "1994",
    type: "Documentaire",
    category: "realisation",
    filterType: "documentaire",
    director: "Amadou Thior",
    note: "Données principalement issues du CV — fiche à compléter.",
  },
  {
    slug: "mariage-precoce",
    title: "Mariage précoce",
    year: "1995",
    type: "Fiction / Drame",
    category: "realisation",
    filterType: "fiction",
    duration: "19 min",
    director: "Amadou Thior",
    production: "Consultants et Réalisateurs Associés",
    support: "Organisation internationale de la Francophonie",
    festivals: ["Milan", "Carthage", "FESPACO"],
    diffusions: ["Cinémathèque Afrique"],
  },
  {
    slug: "almodou",
    title: "Almodou",
    year: "2000",
    type: "Fiction",
    category: "realisation",
    filterType: "fiction",
    duration: "85 min",
    director: "Amadou Thior",
    writer: "Amadou Thior",
    production: "Consultants et Réalisateurs Associés",
    language: "Wolof",
    subtitles: "Français",
    subject:
      "Le film traite de la situation d'un jeune garçon confié à un maître coranique et confronté à la mendicité et aux violences liées à son exploitation.",
    awards: ["Prix Plan International / Children's Right — FESPACO 2001"],
    festivals: ["Festival de Milan", "Vues d'Afrique, Montréal"],
    diffusions: ["RTS", "CFI", "TV5"],
  },
  {
    slug: "mayelle",
    title: "Mayelle",
    year: "À confirmer",
    type: "Fiction courte — Jeune public",
    category: "realisation",
    filterType: "fiction",
    durationNote: "Durée à confirmer (sources divergentes : 26 min / 32 min)",
    director: "Amadou Thior",
    collection: "« Contes à Rebours »",
    audience: "Enfants de 8 à 12 ans",
  },
  {
    slug: "meissa-pote-ndiaye-milliardaire",
    title: "Meissa Pote / Ndiaye Milliardaire",
    year: "2006",
    type: "Téléfilm de fiction",
    category: "realisation",
    filterType: "telefilm",
    duration: "2 × 45 min",
    director: "Amadou Thior",
    production: "TAF Production",
    note: "Données principalement issues du CV — fiche filmographique primaire à compléter.",
  },
  {
    slug: "bien-etre-pour-tous",
    title: "Bien-être pour Tous",
    subtitle: "Nef · Kiné · Coumba",
    year: "1996–1997",
    type: "Production déléguée",
    category: "production",
    filterType: "production",
    works: ["Nef", "Kiné", "Coumba"],
    awards: ["Prix CILSS au FESPACO 1999"],
    diffusions: ["CFI", "TV5", "Télévisions d'Afrique francophone", "RTS"],
  },
];

const filters: { label: string; value: FilterValue }[] = [
  { label: "Tous", value: "tous" },
  { label: "Documentaires", value: "documentaire" },
  { label: "Fictions", value: "fiction" },
  { label: "Téléfilms", value: "telefilm" },
  { label: "Production", value: "production" },
];

export default function OeuvrePage() {
  const [active, setActive] = useState<FilterValue>("tous");

  const filtered =
    active === "tous" ? films : films.filter((f) => f.filterType === active);

  const realisations = filtered.filter((f) => f.category === "realisation");
  const productions = filtered.filter((f) => f.category === "production");

  return (
    <>
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">Filmographie</p>
            <h1 className="text-h1 mb-6 max-w-2xl">L&apos;Œuvre</h1>
            <p className="text-body text-[--color-fg-muted] max-w-xl leading-relaxed">
              Films de fiction, documentaires, téléfilms et productions qui
              témoignent d&apos;un regard porté sur la société sénégalaise et africaine.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FILTERS */}
      <section className="pb-10">
        <Container>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par type">
            {filters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={active === f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-2 text-sm transition-colors duration-200 ${
                  active === f.value
                    ? "bg-[--color-accent] text-white"
                    : "text-[--color-fg-muted] hover:text-[--color-fg] bg-[--color-surface] hover:bg-[--color-surface-2]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* RÉALISATIONS */}
      {realisations.length > 0 && (
        <section className="pb-16">
          <Container>
            <Reveal>
              <h2 className="text-meta text-[--color-accent] mb-8">Réalisations</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {realisations.map((film, i) => (
                <Reveal key={film.slug} delay={i * 60}>
                  <FilmCard film={film} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* PRODUCTIONS */}
      {productions.length > 0 && (
        <section className="pb-16">
          <Container>
            <Reveal>
              <h2 className="text-meta text-[--color-accent] mb-8">
                Productions / Productions déléguées
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productions.map((film, i) => (
                <Reveal key={film.slug} delay={i * 60}>
                  <FilmCard film={film} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

function FilmCard({ film }: { film: FilmEntry }) {
  return (
    <Link
      href={`/oeuvre/${film.slug}`}
      className="group block border border-[--color-border] hover:border-[--color-accent]/30 transition-colors duration-300"
    >
      {/* Image placeholder */}
      <div className="aspect-[3/2] bg-[--color-surface] flex items-center justify-center p-6">
        <span className="text-caption text-[--color-fg-subtle] text-center">
          Image à ajouter
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <span className="text-meta text-[--color-accent]">{film.year}</span>
          <span className="text-xs text-[--color-fg-subtle]">{film.type}</span>
        </div>

        <h3 className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors duration-300 mb-1">
          {film.title}
        </h3>

        {film.subtitle && (
          <p className="text-caption text-[--color-fg-subtle] italic mb-2">
            {film.subtitle}
          </p>
        )}

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-[--color-fg-muted] mb-3">
          {film.duration && <span>{film.duration}</span>}
          {film.durationNote && (
            <span className="italic text-[--color-fg-subtle]">{film.durationNote}</span>
          )}
          {film.format && <span>{film.format}</span>}
          {film.language && <span>{film.language}{film.subtitles && `, sous-titré ${film.subtitles}`}</span>}
        </div>

        {/* Subject */}
        {film.subject && (
          <p className="text-caption text-[--color-fg-muted] leading-relaxed mb-3 line-clamp-3">
            {film.subject}
          </p>
        )}

        {/* Awards */}
        {film.awards && film.awards.length > 0 && (
          <div className="space-y-1 mb-3">
            {film.awards.map((award) => (
              <div key={award} className="flex items-start gap-2 text-xs text-[--color-accent]">
                <Award size={12} className="shrink-0 mt-0.5" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        )}

        {/* Festivals */}
        {film.festivals && film.festivals.length > 0 && (
          <p className="text-xs text-[--color-fg-subtle] mb-2">
            Festivals : {film.festivals.join(" · ")}
          </p>
        )}

        {/* Works (for production category) */}
        {film.works && (
          <p className="text-caption text-[--color-fg-muted] mb-2">
            Œuvres : {film.works.join(", ")}
          </p>
        )}

        {/* Collection */}
        {film.collection && (
          <p className="text-xs text-[--color-fg-subtle]">
            Collection {film.collection}
            {film.audience && ` — ${film.audience}`}
          </p>
        )}

        {/* Note */}
        {film.note && (
          <p className="text-xs text-[--color-fg-subtle] italic mt-2">
            {film.note}
          </p>
        )}

        {/* Link indicator */}
        <span className="inline-flex items-center gap-1.5 text-xs text-[--color-accent] mt-4 group-hover:gap-2.5 transition-all duration-300">
          Voir la fiche <ArrowRight size={11} />
        </span>
      </div>
    </Link>
  );
}
