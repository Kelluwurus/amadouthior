import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { EditionCineclub } from "@/lib/types";

interface EditionCardProps {
  edition: EditionCineclub;
}

const statutLabels: Record<string, string> = {
  passee: "Édition passée",
  a_venir: "Édition à venir",
  en_preparation: "En préparation",
};

export default function EditionCard({ edition }: EditionCardProps) {
  return (
    <Link
      href={`/cineclub/editions/${edition.annee}`}
      className="group block border border-[--color-border] p-6 hover:border-[--color-accent]/40 transition-colors"
    >
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[--color-accent]">
          {edition.annee}
        </span>
        <Badge variant="accent">{statutLabels[edition.statut]}</Badge>
      </div>

      {edition.theme && (
        <p className="text-caption text-[--color-fg] font-medium mb-2">
          {edition.theme}
        </p>
      )}

      {edition.film && (
        <p className="text-caption mb-2">
          Film : <em>{edition.film.titre}</em>
          {edition.film.realisateur && ` — ${edition.film.realisateur}`}
        </p>
      )}

      {edition.lieu && (
        <p className="text-xs text-[--color-fg-subtle]">{edition.lieu}</p>
      )}

      <span className="inline-flex items-center gap-1.5 text-xs text-[--color-accent] mt-4 group-hover:gap-2.5 transition-all">
        Voir l&apos;édition <ArrowRight size={12} />
      </span>
    </Link>
  );
}
