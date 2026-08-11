import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Transmission",
  description:
    "Formation, conseil et accompagnement. L'expertise d'Amadou Thior au service des nouvelles générations de cinéastes.",
};

export default function TransmissionPage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <div className="text-meta text-[--color-accent] mb-3">
          Formation & Conseil
        </div>
        <h1 className="text-h1 text-[--color-fg] mb-6">Transmettre</h1>
        <p className="text-body text-[--color-fg-muted] max-w-2xl">
          Formation, conseil et accompagnement. L&apos;expertise d&apos;Amadou
          Thior au service des nouvelles générations de cinéastes et techniciens
          de l&apos;audiovisuel.
        </p>
        {/* TODO: Phase 5 — Formation, conseil, interventions, RTC */}
      </Container>
    </div>
  );
}
