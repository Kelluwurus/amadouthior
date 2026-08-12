import type { EvenementTimeline } from "@/lib/types";
import TimelineItem from "./TimelineItem";
import Reveal from "@/components/ui/Reveal";

interface TimelineListProps {
  events: EvenementTimeline[];
}

export default function TimelineList({ events }: TimelineListProps) {
  return (
    <div className="space-y-0">
      {events.map((event, i) => (
        <Reveal key={`${event.periode}-${event.titre}`} delay={i * 40}>
          <TimelineItem event={event} />
        </Reveal>
      ))}
    </div>
  );
}
