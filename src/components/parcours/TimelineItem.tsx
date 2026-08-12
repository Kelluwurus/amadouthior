import Link from "next/link";
import type { EvenementTimeline } from "@/lib/types";
import Badge from "@/components/ui/Badge";

interface TimelineItemProps {
  event: EvenementTimeline;
}

export default function TimelineItem({ event }: TimelineItemProps) {
  const isCollaboration = event.role === "assistant_realisateur";

  return (
    <div className="relative flex gap-5 pb-8 last:pb-0">
      {/* Dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-2.5 h-2.5 rounded-full shrink-0 mt-2 z-10 ${
            isCollaboration ? "bg-[--color-accent]" : "bg-[--color-sand]"
          }`}
        />
        <div className="w-px flex-1 bg-[--color-border] mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-2">
        <span className="text-meta block mb-1">{event.periode}</span>
        <h3 className="font-[family-name:var(--font-display)] text-base md:text-lg text-[--color-fg] mb-1">
          {event.titre}
        </h3>

        {/* RoleBadge très visible pour les collaborations */}
        {isCollaboration && (
          <div className="mb-2">
            <Badge variant="accent">Assistant réalisateur — Ousmane Sembène</Badge>
          </div>
        )}

        {event.description && (
          <p className="text-caption leading-relaxed">{event.description}</p>
        )}

        {event.lienOeuvreSlug && (
          <Link
            href={`/oeuvres/${event.lienOeuvreSlug}`}
            className="inline-block mt-2 text-xs text-[--color-accent] hover:text-[--color-accent-hover] transition-colors"
          >
            Voir la fiche →
          </Link>
        )}
      </div>
    </div>
  );
}
