import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Bouton from "@/components/ui/Bouton";
import StepFlow from "@/components/cineclub/StepFlow";
import ImpactBlock from "@/components/cineclub/ImpactBlock";
import ImageSlot from "@/components/shared/ImageSlot";
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
          <div className="flex items-center gap-4 mb-6">
            <ImageSlot
              src={data.organisateur.logo}
              alt="KOOM COM GROUPE"
              aspect="square"
              className="w-16 h-16"
            />
            <p className="text-meta">{data.manifeste}</p>
          </div>
          <h1 className="text-h1 mb-4">{data.titre}</h1>
          <p className="text-body text-lg max-w-xl leading-relaxed mb-2">
            {data.description}
          </p>
          <p className="text-body text-[--color-accent] font-medium mb-4">
            {data.sousTitre}
          </p>
          <blockquote className="text-caption italic text-[--color-fg-subtle] border-l-2 border-[--color-accent] pl-4 mb-10 max-w-lg">
            « {data.citation} »
            <br />
            <span className="text-xs not-italic">— {data.citationAuteur}</span>
          </blockquote>
          <div className="flex flex-wrap gap-4 mb-16">
            <Bouton href="/cineclub/editions" variant="primaire">
              Voir les éditions
            </Bouton>
            <Bouton href="/cineclub/sponsors" variant="secondaire">
              Devenir partenaire
            </Bouton>
          </div>
        </Reveal>

        {/* Résumé */}
        <Reveal>
          <div className="bg-[--color-surface] border border-[--color-border] p-8 mb-16">
            <p className="text-body leading-relaxed">{data.resumeExecutif}</p>
          </div>
        </Reveal>

        {/* 5 temps */}
        <Reveal>
          <p className="text-meta mb-3">Le concept</p>
          <h2 className="text-h2 mb-6">Les cinq temps forts d&apos;une édition</h2>
        </Reveal>
        <StepFlow steps={data.cinqTemps} />

        {/* Chaîne de valeur */}
        <Reveal>
          <div className="mt-12 mb-16 text-center">
            <p className="text-meta mb-4">Chaîne de valeur</p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {data.chaineDeValeur.map((item, i) => (
                <span key={item} className="flex items-center gap-2 md:gap-4">
                  <span className="text-body font-medium text-[--color-accent]">{item}</span>
                  {i < data.chaineDeValeur.length - 1 && <span className="text-[--color-fg-subtle]">→</span>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Ce qui distingue */}
        <Reveal>
          <div className="mb-16">
            <p className="text-meta mb-4">Ce qui distingue CINECLUB — Dîner Débat</p>
            <ul className="space-y-2">
              {data.distingue.map((item) => (
                <li key={item} className="flex items-start gap-3 text-caption">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent] shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Impact */}
        <Reveal>
          <p className="text-meta mb-6">Impact</p>
        </Reveal>
        <ImpactBlock items={data.impact} />

        {/* Écosystème */}
        <Reveal>
          <div className="mt-16 mb-16">
            <p className="text-meta mb-4">Écosystème</p>
            <div className="flex flex-wrap gap-3">
              {data.ecosysteme.map((e) => (
                <span key={e} className="px-3 py-1.5 text-xs border border-[--color-border] text-[--color-fg-muted]">{e}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Links */}
        <Reveal>
          <div className="border-t border-[--color-border] pt-10 flex flex-wrap gap-6">
            <Link href="/cineclub/editions" className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors">
              Voir toutes les éditions <ArrowRight size={14} />
            </Link>
            <Link href="/cineclub/sponsors" className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors">
              Devenir partenaire <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
