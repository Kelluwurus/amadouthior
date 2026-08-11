import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { collaborations } from "@/content/collaborations";

export const metadata: Metadata = {
  title: "Collaborations",
  description:
    "Collaborations professionnelles d'Amadou Thior : Ousmane Sembène, RTS, Ministère de la Culture et institutions du cinéma sénégalais.",
};

export default function CollaborationsPage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <Reveal>
          <span className="text-meta text-[--color-accent] block mb-3">Partenaires</span>
          <h1 className="text-h1 text-[--color-fg] mb-4">Collaborations</h1>
          <p className="text-body text-[--color-fg-muted] max-w-2xl mb-10">
            Institutions et personnalités ayant marqué le parcours d&apos;Amadou Thior
            dans le cinéma et l&apos;audiovisuel sénégalais.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {collaborations.map((collab, i) => (
            <Reveal key={collab.name} delay={i * 60}>
              <div className="bg-[--color-surface] border border-[--color-border] rounded-lg p-6 h-full">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[--color-fg] mb-2">
                  {collab.name}
                </h3>
                {collab.period && (
                  <span className="text-meta text-[--color-accent] block mb-3">
                    {collab.period}
                  </span>
                )}
                <p className="text-caption text-[--color-fg-muted] leading-relaxed mb-4">
                  {collab.role}
                </p>

                {/* Related works as badges */}
                {collab.relatedWorks && collab.relatedWorks.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {collab.relatedWorks.map((work) => (
                      <Badge key={work} variant="accent">{work}</Badge>
                    ))}
                  </div>
                )}

                {/* Source */}
                {collab.sources && collab.sources.length > 0 && (
                  <p className="text-xs text-[--color-fg-subtle]">
                    Source : {collab.sources[0].publisher || collab.sources[0].title}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
