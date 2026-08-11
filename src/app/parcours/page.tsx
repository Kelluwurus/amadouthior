import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Plus de quatre décennies dans le cinéma et l'audiovisuel sénégalais. Formation, collaborations, réalisations et transmission.",
};

export default function ParcoursPage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <div className="text-meta text-[--color-accent] mb-3">Biographie</div>
        <h1 className="text-h1 text-[--color-fg] mb-6">Un parcours</h1>
        <p className="text-body text-[--color-fg-muted] max-w-2xl">
          Plus de quatre décennies dans le cinéma et l&apos;audiovisuel
          sénégalais. Formation, collaborations, réalisations et transmission.
        </p>
        {/* TODO: Phase 4 — Narrative biography + timeline */}
      </Container>
    </div>
  );
}
