import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import SourceBlock from "@/components/shared/SourceBlock";
import { getCineclubEditions, getCineclubEdition } from "@/lib/content";

interface Props {
  params: Promise<{ annee: string }>;
}

export async function generateStaticParams() {
  return getCineclubEditions().map((e) => ({ annee: e.annee }));
}

export async function generateMetadata({ params }: Props) {
  const { annee } = await params;
  const edition = getCineclubEdition(annee);
  if (!edition) return {};

  const statutLabel =
    edition.statut === "a_venir"
      ? "Édition à venir"
      : edition.statut === "en_preparation"
      ? "En préparation"
      : "Édition passée";

  return {
    title: `Édition ${edition.annee} — ${statutLabel}`,
    description: edition.theme || `Édition ${edition.annee} du CINECLUB — Dîner Débat.`,
  };
}

export default async function EditionPage({ params }: Props) {
  const { annee } = await params;
  const edition = getCineclubEdition(annee);
  if (!edition) notFound();

  const statutLabel =
    edition.statut === "a_venir"
      ? "Édition à venir"
      : edition.statut === "en_preparation"
      ? "En préparation"
      : "Édition passée";

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[--color-accent]">
              {edition.annee}
            </span>
            <Badge variant="accent">{statutLabel}</Badge>
          </div>
        </Reveal>

        {/* Theme */}
        {edition.theme && (
          <Reveal delay={60}>
            <h1 className="text-h2 mb-6">{edition.theme}</h1>
          </Reveal>
        )}

        {/* Lieu / date */}
        {(edition.lieu || edition.date) && (
          <Reveal delay={80}>
            <p className="text-caption text-[--color-fg-subtle] mb-8">
              {[edition.lieu, edition.date].filter(Boolean).join(" · ")}
            </p>
          </Reveal>
        )}

        {/* Film */}
        {edition.film && (
          <Reveal delay={100}>
            <section className="mb-10 border border-[--color-border] p-6">
              <p className="text-meta mb-2">Film</p>
              <h2 className="text-h3 mb-1">{edition.film.titre}</h2>
              {edition.film.realisateur && (
                <p className="text-caption">
                  Réalisateur : {edition.film.realisateur}
                </p>
              )}
              {edition.film.pourquoi && (
                <p className="text-xs text-[--color-fg-subtle] italic mt-2">
                  {edition.film.pourquoi}
                </p>
              )}
            </section>
          </Reveal>
        )}

        {/* Objectifs — libellés explicitement "Objectifs", JAMAIS "Résultats" pour éditions futures */}
        {edition.objectifs && edition.objectifs.length > 0 && (
          <Reveal delay={120}>
            <section className="mb-10">
              <p className="text-meta mb-4">Objectifs</p>
              <ul className="space-y-2">
                {edition.objectifs.map((obj) => (
                  <li key={obj} className="flex items-start gap-3 text-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent] shrink-0 mt-2.5" />
                    {obj}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Résultats — UNIQUEMENT pour éditions passées documentées */}
        {edition.resultats && edition.resultats.length > 0 && (
          <Reveal delay={140}>
            <section className="mb-10">
              <p className="text-meta mb-4">Résultats</p>
              <ul className="space-y-2">
                {edition.resultats.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent] shrink-0 mt-2.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Sources */}
        <Reveal delay={160}>
          <SourceBlock sources={edition.sources} />
        </Reveal>
      </div>
    </div>
  );
}
