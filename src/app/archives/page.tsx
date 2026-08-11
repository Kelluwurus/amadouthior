import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Archives",
  description:
    "Une mémoire visuelle du parcours d'Amadou Thior. Photographies, tournages, affiches, documents et presse.",
};

export default function ArchivesPage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <div className="text-meta text-[--color-accent] mb-3">Mémoire</div>
        <h1 className="text-h1 text-[--color-fg] mb-6">Archives</h1>
        <p className="text-body text-[--color-fg-muted] max-w-2xl">
          Une mémoire visuelle du parcours d&apos;Amadou Thior. Photographies,
          tournages, affiches, documents et presse.
        </p>
        {/* TODO: Phase 5 — Masonry gallery with categories */}
      </Container>
    </div>
  );
}
