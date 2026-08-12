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
          <div className="flex flex-col items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[--color-accent-muted] shrink-0 mt-2 z-10" />
            {index < items.length - 1 && (
              <div className="w-px flex-1 bg-[--color-border] mt-2" />
            )}
          </div>
          <div className="flex-1 min-w-0 pb-1">
            <span className="text-meta text-[--color-accent] block mb-1">
              {event.year}
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-base md:text-lg text-[--color-fg] mb-1">
              {event.title}
            </h4>
            <p className="text-caption text-[--color-fg-muted] leading-relaxed">
              {event.description}
            </p>
            {event.sources && event.sources.length > 0 && (
              <p className="text-xs text-[--color-fg-subtle] mt-1.5 italic">
                {event.sources[0].publisher}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
