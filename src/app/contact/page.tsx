import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Amadou Thior pour une projection, une formation, une interview ou une collaboration.",
};

export default function ContactPage() {
  return (
    <div className="section-py pt-32">
      <Container narrow>
        <div className="text-meta text-[--color-accent] mb-3">Écrire</div>
        <h1 className="text-h1 text-[--color-fg] mb-6">Contact</h1>
        <p className="text-body text-[--color-fg-muted] mb-10 max-w-xl">
          Vous souhaitez inviter Amadou Thior, organiser une projection, une
          formation, une interview ou collaborer sur un projet ?
        </p>
        {/* TODO: Phase 6 — Full contact form with validation */}
        <div className="bg-[--color-surface] border border-[--color-border] rounded-lg p-8">
          <p className="text-caption text-[--color-fg-muted]">
            Formulaire de contact — à venir.
          </p>
        </div>
      </Container>
    </div>
  );
}
