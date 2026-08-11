import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Actualités, projections, festivals et interventions d'Amadou Thior.",
};

export default function ActualitesPage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <div className="text-meta text-[--color-accent] mb-3">Journal</div>
        <h1 className="text-h1 text-[--color-fg] mb-6">Actualités</h1>
        <p className="text-body text-[--color-fg-muted] max-w-2xl">
          Projections, festivals, formations et interventions récentes.
        </p>
        {/* TODO: Phase 5 — Articles grid */}
      </Container>
    </div>
  );
}
