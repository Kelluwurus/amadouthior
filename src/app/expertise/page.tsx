import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Carte from "@/components/ui/Carte";
import SourceBlock from "@/components/shared/SourceBlock";
import { getExpertise } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Production audiovisuelle, politiques cinématographiques, formation, développement de projets, numérisation et patrimoine audiovisuel.",
};

export default function ExpertisePage() {
  const data = getExpertise();

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <Reveal>
          <p className="text-meta mb-4">Expertise</p>
          <h1 className="text-h1 mb-6 max-w-2xl">
            Penser le cinéma au-delà de l&apos;écran
          </h1>
          <p className="text-body text-lg max-w-xl leading-relaxed mb-16">
            {data.intro}
          </p>
        </Reveal>

        {/* Domaines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.domaines.map((domaine, i) => (
            <Reveal key={domaine.titre} delay={i * 50}>
              <Carte as="article" className="h-full">
                <h3 className="text-h3 mb-3">{domaine.titre}</h3>
                <p className="text-caption leading-relaxed">
                  {domaine.description}
                </p>
              </Carte>
            </Reveal>
          ))}
        </div>

        {/* Fonctions associatives */}
        {data.fonctionsAssociatives.length > 0 && (
          <Reveal delay={300}>
            <div className="border-t border-[--color-border] pt-10 mb-10">
              <p className="text-meta mb-6">Fonctions associatives</p>
              {data.fonctionsAssociatives.map((f) => (
                <div key={f.titre} className="mb-4">
                  <h3 className="text-h3 mb-1">{f.titre}</h3>
                  <p className="text-meta mb-1">{f.periode}</p>
                  <p className="text-caption">{f.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* Sources */}
        <Reveal delay={350}>
          <SourceBlock sources={data.sources} />
        </Reveal>
      </div>
    </div>
  );
}
