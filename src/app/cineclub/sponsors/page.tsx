import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Bouton from "@/components/ui/Bouton";
import Carte from "@/components/ui/Carte";
import ImageSlot from "@/components/shared/ImageSlot";
import { getPartenariats, getCineclub } from "@/lib/content";

export const metadata: Metadata = {
  title: "Devenir partenaire — CINECLUB",
  description:
    "Associer votre institution à une expérience qui transforme une projection en dialogue et le dialogue en action.",
};

export default function SponsorsPage() {
  const data = getPartenariats();
  const cineclub = getCineclub();

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <Reveal>
          <p className="text-meta mb-4">Partenariat</p>
          <h1 className="text-h1 mb-6">Devenir partenaire</h1>
          <p className="text-body text-lg max-w-xl leading-relaxed mb-12">
            {data.accroche}
          </p>
        </Reveal>

        {/* Avantages */}
        <Reveal delay={60}>
          <p className="text-meta mb-4">Pourquoi devenir partenaire</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            {data.avantagesGeneraux.map((a) => (
              <div key={a} className="border border-[--color-border] px-4 py-3 text-xs text-[--color-fg-muted]">{a}</div>
            ))}
          </div>
        </Reveal>

        {/* Catégories */}
        <Reveal delay={100}>
          <p className="text-meta mb-6">Formules de partenariat</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.categories.map((cat, i) => (
            <Reveal key={cat.nom} delay={120 + i * 50}>
              <Carte as="article" className="h-full flex flex-col">
                <h3 className="text-h3 mb-2">{cat.nom}</h3>
                <p className="text-caption mb-4 flex-1">{cat.description}</p>
                <ul className="space-y-1 border-t border-[--color-border] pt-3">
                  {cat.avantages.map((av) => (
                    <li key={av} className="text-xs text-[--color-fg-muted] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[--color-accent]" />
                      {av}
                    </li>
                  ))}
                </ul>
              </Carte>
            </Reveal>
          ))}
        </div>

        {/* Image offres */}
        {data.imageOffres && (
          <Reveal delay={200}>
            <div className="mb-12">
              <p className="text-meta mb-4">Tableau des offres</p>
              <ImageSlot
                src={data.imageOffres}
                alt="Tableau comparatif des offres de sponsoring CINECLUB — Dîner Débat"
                aspect="landscape"
              />
            </div>
          </Reveal>
        )}

        {/* Partenaires visés */}
        <Reveal delay={250}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-meta mb-3">Partenaires privés visés</p>
              <ul className="space-y-1">
                {cineclub.partenairesPrives.map((p) => (
                  <li key={p} className="text-caption">{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-meta mb-3">Partenaires institutionnels visés</p>
              <ul className="space-y-1">
                {cineclub.partenairesInstitutionnels.map((p) => (
                  <li key={p} className="text-caption">{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Note + CTA */}
        <Reveal delay={300}>
          <p className="text-xs text-[--color-fg-subtle] italic mb-10 max-w-lg">{data.note}</p>
          <Bouton href="/contact" variant="primaire">
            Prendre contact
          </Bouton>
        </Reveal>
      </div>
    </div>
  );
}
