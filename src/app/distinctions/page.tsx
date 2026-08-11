import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { awards } from "@/content/awards";

export const metadata: Metadata = {
  title: "Distinctions",
  description:
    "Prix et récompenses d'Amadou Thior : FESPACO, festivals internationaux et sélections.",
};

export default function DistinctionsPage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <div className="text-meta text-[--color-accent] mb-3">Palmarès</div>
        <h1 className="text-h1 text-[--color-fg] mb-10">Distinctions</h1>

        <div className="space-y-8 max-w-2xl">
          {awards.map((award) => (
            <div
              key={`${award.year}-${award.title}`}
              className="border-l-2 border-[--color-accent]/40 pl-6"
            >
              <span className="text-meta text-[--color-accent]">
                {award.year}
              </span>
              <h3 className="text-h3 text-[--color-fg] mt-1">{award.title}</h3>
              <p className="text-caption text-[--color-fg-muted] mt-1">
                {award.festival}
                {award.film && ` — ${award.film}`}
              </p>
            </div>
          ))}
        </div>
        {/* TODO: Phase 4 — Richer award cards with sources/images */}
      </Container>
    </div>
  );
}
