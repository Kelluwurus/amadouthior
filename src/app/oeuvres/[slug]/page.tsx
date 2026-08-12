import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import StatutBadge from "@/components/ui/StatutBadge";
import RoleBadge from "@/components/oeuvres/RoleBadge";
import SourceBlock from "@/components/shared/SourceBlock";
import { getAllOeuvres, getOeuvreBySlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllOeuvres().map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const oeuvre = getOeuvreBySlug(slug);
  if (!oeuvre) return {};
  return {
    title: `${oeuvre.titre} — ${oeuvre.role.label}`,
    description: oeuvre.synopsis || `${oeuvre.titre}, ${oeuvre.genre}. ${oeuvre.role.label}.`,
  };
}

export default async function OeuvrePage({ params }: Props) {
  const { slug } = await params;
  const oeuvre = getOeuvreBySlug(slug);
  if (!oeuvre) notFound();

  const isCollaboration = oeuvre.categorie === "collaboration";

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Reveal>
          <Link
            href="/oeuvres"
            className="inline-flex items-center gap-2 text-sm text-[--color-fg-subtle] hover:text-[--color-accent] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Œuvres
          </Link>
        </Reveal>

        {/* RoleBadge for collaborations — VERY VISIBLE, first thing */}
        {isCollaboration && (
          <Reveal delay={40}>
            <div className="mb-6">
              <RoleBadge role={oeuvre.role} />
            </div>
          </Reveal>
        )}

        {/* Image */}
        {oeuvre.image && (
          <Reveal delay={50}>
            <div className="aspect-[16/9] overflow-hidden mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={oeuvre.image} alt={oeuvre.titre} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        )}

        {/* Header */}
        <Reveal delay={60}>
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <span className="text-meta">{oeuvre.annee}</span>
            <StatutBadge statut={oeuvre.anneeStatut} />
          </div>
          <h1 className="text-h1 mb-2">{oeuvre.titre}</h1>
          {oeuvre.titreAlternatif && (
            <p className="text-caption text-[--color-fg-subtle] italic mb-4">
              Aussi connu sous : {oeuvre.titreAlternatif}
            </p>
          )}
          {!isCollaboration && (
            <p className="text-body text-[--color-accent] font-medium mb-6">
              {oeuvre.role.label}
            </p>
          )}
        </Reveal>

        {/* Meta badges */}
        <Reveal delay={80}>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge>{oeuvre.genre}</Badge>
            {oeuvre.duree && (
              <Badge>
                {oeuvre.duree}
                {oeuvre.dureeStatut === "a_confirmer" && " (à confirmer)"}
              </Badge>
            )}
            {oeuvre.pays && <Badge>{oeuvre.pays}</Badge>}
            {oeuvre.langue && <Badge>{oeuvre.langue}</Badge>}
          </div>
        </Reveal>

        {/* Synopsis */}
        {oeuvre.synopsis && (
          <Reveal delay={100}>
            <section className="mb-10">
              <h2 className="text-meta mb-3">Synopsis</h2>
              <p className="text-body leading-relaxed">{oeuvre.synopsis}</p>
            </section>
          </Reveal>
        )}

        {/* Fiche technique */}
        {oeuvre.ficheTechnique.length > 0 && (
          <Reveal delay={120}>
            <section className="mb-10">
              <h2 className="text-meta mb-4">Fiche technique</h2>
              <div className="space-y-2">
                {oeuvre.ficheTechnique.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="text-caption text-[--color-fg-subtle] sm:w-40 shrink-0">
                      {item.label}
                    </span>
                    <span className="text-caption">{item.valeur}</span>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Distinctions */}
        {oeuvre.distinctions && oeuvre.distinctions.length > 0 && (
          <Reveal delay={140}>
            <section className="mb-10">
              <h2 className="text-meta mb-4">Distinctions</h2>
              <div className="space-y-2">
                {oeuvre.distinctions.map((d) => (
                  <div
                    key={d}
                    className="border-l-2 border-[--color-accent] pl-4 py-1"
                  >
                    <p className="text-body text-[--color-fg]">{d}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Festivals */}
        {oeuvre.festivals && oeuvre.festivals.length > 0 && (
          <Reveal delay={160}>
            <section className="mb-10">
              <h2 className="text-meta mb-3">Festivals / Sélections</h2>
              <div className="flex flex-wrap gap-2">
                {oeuvre.festivals.map((f) => (
                  <Badge key={f}>{f}</Badge>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* Sources */}
        <Reveal delay={180}>
          <SourceBlock sources={oeuvre.sources} />
        </Reveal>
      </div>
    </div>
  );
}
