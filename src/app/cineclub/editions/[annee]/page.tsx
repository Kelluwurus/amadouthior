import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import ImageSlot from "@/components/shared/ImageSlot";
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
    edition.statut === "a_venir" ? "Édition à venir"
    : edition.statut === "en_preparation" ? "En préparation"
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
    edition.statut === "a_venir" ? "Édition à venir"
    : edition.statut === "en_preparation" ? "En préparation"
    : "Édition passée";

  // Handle flexible JSON structure (single film or multiple films, extra fields per edition)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ed = edition as any;
  const singleFilm = ed.film;
  const multipleFilms = ed.films || [];

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[--color-accent]">
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
        {(edition.lieu || ed.date) && (
          <Reveal delay={80}>
            <p className="text-caption text-[--color-fg-subtle] mb-8">
              {[edition.lieu, ed.date].filter(Boolean).join(" · ")}
            </p>
          </Reveal>
        )}

        {/* Single film (editions 2016, 2026) */}
        {singleFilm && (
          <Reveal delay={100}>
            <section className="mb-10 border border-[--color-border] p-6">
              {singleFilm.image && (
                <ImageSlot src={singleFilm.image} alt={singleFilm.titre} aspect="cinema" size="lg" className="mb-4" />
              )}
              <p className="text-meta mb-2">Film</p>
              <h2 className="text-h3 mb-1">{singleFilm.titre}</h2>
              {singleFilm.realisateur && <p className="text-caption mb-1">Réalisateur : {singleFilm.realisateur}</p>}
              {singleFilm.producteur && <p className="text-caption mb-1">Producteur : {singleFilm.producteur}</p>}
              <div className="flex flex-wrap gap-2 mt-2 mb-3">
                {singleFilm.pays && <Badge>{singleFilm.pays}</Badge>}
                {singleFilm.duree && <Badge>{singleFilm.duree}</Badge>}
                {singleFilm.genre && <Badge>{singleFilm.genre}</Badge>}
              </div>
              {singleFilm.synopsis && <p className="text-body leading-relaxed mt-3">{singleFilm.synopsis}</p>}
              {singleFilm.succes && <p className="text-caption text-[--color-accent] mt-3 font-medium">{singleFilm.succes}</p>}
              {singleFilm.distinctions && singleFilm.distinctions.length > 0 && (
                <div className="mt-3 space-y-1">
                  {singleFilm.distinctions.map((d: string) => (
                    <p key={d} className="text-xs text-[--color-accent]">{d}</p>
                  ))}
                </div>
              )}
            </section>
          </Reveal>
        )}

        {/* Multiple films (edition 2027) */}
        {multipleFilms.length > 0 && (
          <div className="space-y-10 mb-10">
            {multipleFilms.map((film: any, i: number) => (
              <Reveal key={film.titre as string} delay={100 + i * 60}>
                <section className="border border-[--color-border] p-6">
                  {film.image && (
                    <ImageSlot src={film.image as string} alt={film.titre as string} aspect="cinema" size="lg" className="mb-4" />
                  )}
                  <p className="text-meta mb-2">Film {i + 1}</p>
                  <h2 className="text-h3 mb-1">{film.titre as string}</h2>
                  {film.realisateur && <p className="text-caption mb-1">Réalisateur : {film.realisateur as string}</p>}
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {film.pays && <Badge>{film.pays as string}</Badge>}
                    {film.duree && <Badge>{film.duree as string}</Badge>}
                    {film.genre && <Badge>{film.genre as string}</Badge>}
                    {film.annee && <Badge>{film.annee as string}</Badge>}
                  </div>
                  {film.synopsis && <p className="text-body leading-relaxed mt-3">{film.synopsis as string}</p>}
                  {film.festivals && (
                    <p className="text-xs text-[--color-fg-subtle] mt-3">Festivals : {(film.festivals as string[]).join(" · ")}</p>
                  )}
                  {film.distinctions && (
                    <div className="mt-2 space-y-1">
                      {(film.distinctions as string[]).map((d: string) => (
                        <p key={d} className="text-xs text-[--color-accent] font-medium">{d}</p>
                      ))}
                    </div>
                  )}
                  {film.thematiques && (
                    <div className="mt-4">
                      <p className="text-meta mb-2">Thématiques</p>
                      <div className="flex flex-wrap gap-2">
                        {(film.thematiques as string[]).map((t: string) => (<Badge key={t}>{t}</Badge>))}
                      </div>
                    </div>
                  )}
                </section>
              </Reveal>
            ))}
          </div>
        )}

        {/* Contexte (2016) */}
        {ed.contexte && (
          <Reveal delay={140}>
            <section className="mb-10">
              <p className="text-meta mb-3">Contexte</p>
              <p className="text-body leading-relaxed">{ed.contexte}</p>
            </section>
          </Reveal>
        )}

        {/* Medias (2016) */}
        {ed.medias && ed.medias.length > 0 && (
          <Reveal delay={150}>
            <section className="mb-10">
              <p className="text-meta mb-3">Couverture médiatique</p>
              <ul className="space-y-1">
                {ed.medias.map((m: string) => (
                  <li key={m} className="text-caption flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[--color-accent]" />{m}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Objectifs */}
        {edition.objectifs && edition.objectifs.length > 0 && (
          <Reveal delay={160}>
            <section className="mb-10">
              <p className="text-meta mb-4">Objectifs</p>
              <ul className="space-y-2">
                {edition.objectifs.map((obj) => (
                  <li key={obj} className="flex items-start gap-3 text-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent] shrink-0 mt-2.5" />{obj}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Thématiques */}
        {ed.thematiques && ed.thematiques.length > 0 && (
          <Reveal delay={170}>
            <section className="mb-10">
              <p className="text-meta mb-3">Thématiques de l&apos;édition</p>
              <div className="flex flex-wrap gap-2">
                {ed.thematiques.map((t: string) => (<Badge key={t} variant="accent">{t}</Badge>))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Publics */}
        {ed.publics && ed.publics.length > 0 && (
          <Reveal delay={180}>
            <section className="mb-10">
              <p className="text-meta mb-3">Publics cibles</p>
              <div className="flex flex-wrap gap-2">
                {ed.publics.map((p: string) => (<Badge key={p}>{p}</Badge>))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Résultats */}
        {edition.resultats && edition.resultats.length > 0 && (
          <Reveal delay={190}>
            <section className="mb-10">
              <p className="text-meta mb-4">Résultats</p>
              <ul className="space-y-2">
                {edition.resultats.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent] shrink-0 mt-2.5" />{r}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Sources */}
        <Reveal delay={200}>
          <SourceBlock sources={edition.sources} />
        </Reveal>
      </div>
    </div>
  );
}
