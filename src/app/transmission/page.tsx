import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import SourceBlock from "@/components/shared/SourceBlock";
import TransmissionBlock from "@/components/parcours/TransmissionBlock";
import { getTransmission } from "@/lib/content";

export const metadata: Metadata = {
  title: "Transmission",
  description:
    "Enseignement, formation professionnelle et ingénierie pédagogique. La transmission des savoirs au cœur du parcours d'Amadou Thior.",
};

export default function TransmissionPage() {
  const data = getTransmission();

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <Reveal>
          <p className="text-meta mb-4">Transmission</p>
          <h1 className="text-h1 mb-6 max-w-2xl">Transmettre le cinéma</h1>
          <p className="text-body text-lg max-w-xl leading-relaxed mb-16">
            {data.intro}
          </p>
        </Reveal>

        {/* Blocs */}
        <div className="space-y-16">
          {data.blocs.map((bloc, i) => (
            <Reveal key={bloc.titre} delay={i * 60}>
              <TransmissionBlock bloc={bloc} />
            </Reveal>
          ))}
        </div>

        {/* Sources */}
        <Reveal delay={200}>
          <SourceBlock sources={data.sources} />
        </Reveal>
      </div>
    </div>
  );
}
