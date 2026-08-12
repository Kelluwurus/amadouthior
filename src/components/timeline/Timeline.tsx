import type { TimelineEvent } from "@/content/types";

interface TimelineProps {
  events: TimelineEvent[];
  limit?: number;
}

export default function Timeline({ events, limit }: TimelineProps) {
  const items = limit ? events.slice(0, limit) : events;

  return (
    <div className="space-y-0">
      {items.map((event, index) => (
        <div key={`${event.year}-${event.title}`} className="relative flex gap-5 pb-8 last:pb-0">
          {/* Vertical line */}
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full border-2 border-[--color-accent] bg-[--color-bg] shrink-0 mt-1.5 z-10" />
            {index < items.length - 1 && (
              <div className="w-px flex-1 bg-gradient-to-b from-[--color-accent]/30 to-[--color-border] mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <span className="text-meta">
              {event.year}
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-base md:text-lg text-[--color-fg] mt-1 mb-1.5">
              {event.title}
            </h4>
            <p className="text-caption leading-relaxed">
              {event.description}
            </p>
            {event.sources && event.sources.length > 0 && (
              <p className="text-xs text-[--color-fg-subtle] mt-2 italic">
                Source : {event.sources[0].publisher}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
