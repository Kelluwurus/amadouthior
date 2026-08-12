import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Bouton from "@/components/ui/Bouton";
import StepFlow from "@/components/cineclub/StepFlow";
import ImpactBlock from "@/components/cineclub/ImpactBlock";
import { getCineclub } from "@/lib/content";

export const metadata: Metadata = {
  title: "CINECLUB — Dîner Débat",
  description:
    "Le cinéma au service de l'humanitaire. Cinéma · Dialogue · Solidarité · Action.",
};

export default function CineclubPage() {
  const data = getCineclub();

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <Reveal>
          <p className="text-meta mb-4">{data.manifeste}</p>
          <h1 className="text-h1 mb-4">{data.titre}</h1>
          <p className="text-body text-lg max-w-xl leading-relaxed mb-4">
            {data.description}
          </p>
          <p className="text-caption italic text-[--color-fg-subtle] mb-10">
            {data.accroche}
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <Bouton href="/cineclub/editions" variant="primaire">
              Voir les éditions
            </Bouton>
            <Bouton href="/cineclub/sponsors" variant="secondaire">
              Devenir partenaire
            </Bouton>
          </div>
        </Reveal>

        {/* 5 temps */}
        <Reveal>
          <p className="text-meta mb-6">Les cinq temps</p>
        </Reveal>
        <StepFlow steps={data.cinqTemps} />

        {/* Impact */}
        <div className="mt-16">
          <Reveal>
            <p className="text-meta mb-6">Impact</p>
          </Reveal>
          <ImpactBlock items={data.impact} />
        </div>

        {/* Écosystème */}
        <div className="mt-16">
          <Reveal>
            <p className="text-meta mb-4">Écosystème</p>
            <div className="flex flex-wrap gap-3">
              {data.ecosysteme.map((e) => (
                <span
                  key={e}
                  className="px-3 py-1.5 text-xs border border-[--color-border] text-[--color-fg-muted]"
                >
                  {e}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Link to editions */}
        <Reveal>
          <div className="mt-16 border-t border-[--color-border] pt-10">
            <Link
              href="/cineclub/editions"
              className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
            >
              Voir toutes les éditions <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
