import type { RoleAmadouThior } from "@/lib/types";

interface RoleBadgeProps {
  role: RoleAmadouThior;
}

/**
 * Badge de rôle pour les collaborations.
 * TRÈS VISIBLE pour les films où Amadou Thior est assistant réalisateur.
 * Bordure terre cuite, icône discrète — ne doit jamais être confondu avec "réalisateur".
 */
export default function RoleBadge({ role }: RoleBadgeProps) {
  const isCollaboration = role.fonction === "assistant_realisateur";

  if (!isCollaboration) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[--color-accent] rounded-md bg-[--color-accent]/5 text-sm font-medium text-[--color-accent]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {role.label}
    </div>
  );
}
