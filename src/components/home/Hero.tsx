import Bouton from "@/components/ui/Bouton";
import Reveal from "@/components/ui/Reveal";
import { getBio } from "@/lib/content";

export default function Hero() {
  const bio = getBio();

  return (
    <section className="min-h-[85vh] flex items-end pb-16 md:pb-24 pt-32 md:pt-40">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h1 className="text-display mb-4">{bio.nom}</h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-meta mb-8">{bio.titreCourt}</p>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-body text-lg max-w-xl leading-relaxed mb-12">
            {bio.resumeExecutif}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-4">
            <Bouton href="/oeuvres" variant="primaire">
              Explorer les œuvres
            </Bouton>
            <Bouton href="/parcours" variant="ghost">
              Découvrir le parcours →
            </Bouton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
