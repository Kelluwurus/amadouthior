import Link from "next/link";
import type { Oeuvre } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import RoleBadge from "./RoleBadge";

interface OeuvreCardProps {
  oeuvre: Oeuvre;
}

export default function OeuvreCard({ oeuvre }: OeuvreCardProps) {
  const isCollaboration = oeuvre.categorie === "collaboration";

  return (
    <Link
      href={`/oeuvres/${oeuvre.slug}`}
      className="group block border border-[--color-border] hover:border-[--color-accent]/30 transition-colors duration-300"
    >
      {/* Image placeholder */}
      <div className="aspect-[3/2] max-h-[200px] bg-[--color-surface] flex items-center justify-center overflow-hidden">
        {oeuvre.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={oeuvre.image} alt={oeuvre.titre} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <span className="text-[0.6rem] text-[--color-fg-subtle] tracking-wide uppercase">Image à fournir</span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Role badge for collaborations — very visible */}
        {isCollaboration && (
          <div className="mb-3">
            <RoleBadge role={oeuvre.role} />
          </div>
        )}

        <div className="flex flex-wrap items-baseline gap-2 mb-2">
          <span className="text-meta">{oeuvre.annee}</span>
          <Badge>{oeuvre.genre}</Badge>
        </div>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-[--color-fg] group-hover:text-[--color-accent] transition-colors duration-200 mb-1">
          {oeuvre.titre}
        </h3>

        {oeuvre.titreAlternatif && (
          <p className="text-xs text-[--color-fg-subtle] italic mb-2">
            {oeuvre.titreAlternatif}
          </p>
        )}

        {!isCollaboration && (
          <p className="text-xs text-[--color-fg-muted] mb-2">
            {oeuvre.role.label}
          </p>
        )}

        {oeuvre.distinctions && oeuvre.distinctions.length > 0 && (
          <p className="text-xs text-[--color-accent] line-clamp-1">
            {oeuvre.distinctions[0]}
          </p>
        )}
      </div>
    </Link>
  );
}
