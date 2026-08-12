import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import TimelineList from "@/components/parcours/TimelineList";
import { getTimeline, getBio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "De la formation à Louis-Lumière en 1977 à la transmission contemporaine : la trajectoire complète d'Amadou Thior dans le cinéma et l'audiovisuel.",
};

export default function ParcoursPage() {
  const timeline = getTimeline();
  const bio = getBio();

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <Reveal>
          <p className="text-meta mb-4">Parcours</p>
          <h1 className="text-h1 mb-6 max-w-2xl">
            Un parcours au cœur du cinéma sénégalais
          </h1>
          <p className="text-body text-lg max-w-xl leading-relaxed mb-16">
            {bio.dureeCarriere}. De la création à la production, de la
            formation à la réflexion sur les politiques cinématographiques.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="max-w-3xl">
          <TimelineList events={timeline} />
        </div>
      </div>
    </div>
  );
}
