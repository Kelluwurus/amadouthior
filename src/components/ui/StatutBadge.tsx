import type { StatutDonnee } from "@/lib/types";

interface StatutBadgeProps {
  statut?: StatutDonnee;
}

/**
 * Affiche un badge discret "à confirmer" quand la donnée n'est pas vérifiée.
 * Ne rend rien si statut === "confirme" ou undefined.
 * Style: fond sable, texte brun, petite taille — nuance documentaire, pas une erreur.
 */
export default function StatutBadge({ statut }: StatutBadgeProps) {
  if (!statut || statut === "confirme") return null;

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[0.65rem] font-medium bg-[--color-sand]/30 text-[--color-fg-muted] rounded-sm">
      À confirmer
    </span>
  );
}
