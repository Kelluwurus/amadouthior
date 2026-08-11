import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { collaborations } from "@/content/biography";

export const metadata: Metadata = {
  title: "Collaborations",
  description:
    "Collaborations professionnelles d'Amadou Thior : Ousmane Sembène, RTS, Ministère de la Culture et institutions du cinéma sénégalais.",
};

export default function CollaborationsPage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <div className="text-meta text-[--color-accent] mb-3">Partenaires</div>
        <h1 className="text-h1 text-[--color-fg] mb-10">Collaborations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {collaborations.map((collab) => (
            <div
              key={collab.name}
              className="bg-[--color-surface] border border-[--color-border] rounded-lg p-6"
            >
              <h3 className="text-h3 text-[--color-fg] mb-1">{collab.name}</h3>
              {collab.role && (
                <p className="text-xs text-[--color-accent] font-medium mb-2">
                  {collab.role}
                  {collab.period && ` · ${collab.period}`}
                </p>
              )}
              <p className="text-caption text-[--color-fg-muted]">
                {collab.description}
              </p>
            </div>
          ))}
        </div>
        {/* TODO: Phase 4 — Richer collaboration pages */}
      </Container>
    </div>
  );
}
