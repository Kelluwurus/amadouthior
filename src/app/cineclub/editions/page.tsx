import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import EditionCard from "@/components/cineclub/EditionCard";
import { getCineclubEditions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Éditions — CINECLUB",
  description: "Les éditions du CINECLUB — Dîner Débat : passées, à venir et en préparation.",
};

export default function EditionsPage() {
  const editions = getCineclubEditions();

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-meta mb-4">Éditions</p>
          <h1 className="text-h1 mb-10">Les éditions</h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {editions.map((edition, i) => (
            <Reveal key={edition.annee} delay={i * 60}>
              <EditionCard edition={edition} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
