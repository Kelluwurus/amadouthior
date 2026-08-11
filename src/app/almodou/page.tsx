import type { Metadata } from "next";
import { films } from "@/content/films";
import Container from "@/components/ui/Container";

const almodou = films.find((f) => f.slug === "almodou")!;

export const metadata: Metadata = {
  title: "Almodou — Un film d'Amadou Thior",
  description: almodou.synopsis,
};

export default function AlmodouPage() {
  return (
    <div className="section-py pt-32">
      <Container narrow>
        <div className="text-meta text-[--color-accent] mb-3">
          Un film d&apos;Amadou Thior
        </div>
        <h1 className="text-display text-[--color-fg] mb-4">ALMODOU</h1>
        <p className="text-caption text-[--color-fg-muted] mb-10">
          {almodou.year} · {almodou.country} · {almodou.duration}
        </p>
        {almodou.synopsis && (
          <section className="mb-12">
            <h2 className="text-h3 text-[--color-fg] mb-4">Synopsis</h2>
            <p className="text-body text-[--color-fg-muted] leading-relaxed">
              {almodou.synopsis}
            </p>
          </section>
        )}
        {almodou.awards && almodou.awards.length > 0 && (
          <section className="mb-12">
            <h2 className="text-h3 text-[--color-fg] mb-4">Distinctions</h2>
            <div className="bg-[--color-surface] border border-[--color-border] rounded-lg p-6">
              {almodou.awards.map((award) => (
                <div key={award.title}>
                  <p className="text-sm font-semibold text-[--color-accent]">
                    {award.title}
                  </p>
                  <p className="text-caption text-[--color-fg-muted]">
                    {award.festival} — {award.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
        {/* TODO: Phase 4 — Full Almodou page (cast, gallery, press, etc.) */}
      </Container>
    </div>
  );
}
