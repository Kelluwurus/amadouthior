import type { Metadata } from "next";
import { Award as AwardIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { awards } from "@/content/awards";

export const metadata: Metadata = {
  title: "Distinctions",
  description:
    "Prix et récompenses d'Amadou Thior : FESPACO, festivals internationaux et sélections.",
};

export default function DistinctionsPage() {
  // Group awards by year
  const groupedByYear = awards.reduce<Record<string, typeof awards>>((acc, award) => {
    if (!acc[award.year]) acc[award.year] = [];
    acc[award.year].push(award);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => Number(a) - Number(b));

  return (
    <div className="section-py pt-32">
      <Container narrow>
        <Reveal>
          <span className="text-meta text-[--color-accent] block mb-3">Palmarès</span>
          <h1 className="text-h1 text-[--color-fg] mb-10">Distinctions</h1>
        </Reveal>

        <div className="space-y-10">
          {years.map((year, i) => (
            <Reveal key={year} delay={i * 80}>
              <div className="relative flex gap-6">
                {/* Timeline marker */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[--color-accent] bg-[--color-bg] shrink-0 mt-2 z-10" />
                  {i < years.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[--color-accent]/30 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <span className="text-meta text-[--color-accent] block mb-3">{year}</span>
                  <div className="space-y-4">
                    {groupedByYear[year].map((award) => (
                      <div
                        key={`${award.title}-${award.work}`}
                        className="bg-[--color-surface] border border-[--color-border] rounded-lg p-5"
                      >
                        <div className="flex items-start gap-3">
                          <AwardIcon size={18} className="text-[--color-accent] shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-sm font-semibold text-[--color-fg] mb-1">
                              {award.title}
                            </h3>
                            {award.organization && (
                              <p className="text-xs text-[--color-fg-muted] mb-1">
                                {award.organization}
                              </p>
                            )}
                            {award.work && (
                              <p className="text-xs text-[--color-accent]">
                                Œuvre : <em>{award.work}</em>
                              </p>
                            )}
                            {award.sources && award.sources.length > 0 && (
                              <p className="text-xs text-[--color-fg-subtle] mt-2">
                                Source : {award.sources[0].publisher || award.sources[0].title}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
