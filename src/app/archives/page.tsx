import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Archives",
  description:
    "Photographies, affiches, documents de production, tournages, festivals et presse. La mémoire visuelle du parcours d'Amadou Thior.",
};

const categories = [
  { id: "photographies", label: "Photographies" },
  { id: "affiches", label: "Affiches" },
  { id: "documents", label: "Documents" },
  { id: "tournages", label: "Tournages" },
  { id: "festivals", label: "Festivals" },
  { id: "presse", label: "Presse" },
  { id: "enseignement", label: "Enseignement" },
  { id: "rencontres", label: "Rencontres" },
];

export default function ArchivesPage() {
  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <Reveal>
          <p className="text-meta mb-4">Mémoire</p>
          <h1 className="text-h1 mb-6 max-w-2xl">Archives</h1>
          <p className="text-body text-lg max-w-xl leading-relaxed mb-16">
            Photographies, affiches, documents, tournages, festivals et presse.
            Une mémoire visuelle du parcours d&apos;Amadou Thior dans le cinéma
            sénégalais.
          </p>
        </Reveal>

        {/* Categories grid — état vide sobre */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 40}>
              <div className="aspect-[4/3] border border-[--color-border] flex flex-col items-center justify-center gap-2 bg-[--color-surface]">
                <span className="text-caption text-[--color-fg-muted] font-medium">
                  {cat.label}
                </span>
                <span className="text-[0.65rem] text-[--color-fg-subtle]">
                  À venir
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Notice */}
        <Reveal delay={350}>
          <p className="text-xs text-[--color-fg-subtle] mt-10 max-w-md">
            Les documents et photographies d&apos;archives seront ajoutés
            progressivement, après obtention des fichiers originaux et
            vérification des droits d&apos;utilisation.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
