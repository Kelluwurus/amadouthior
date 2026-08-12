import Reveal from "@/components/ui/Reveal";
import type { ImpactItem } from "@/lib/types";

interface ImpactBlockProps {
  items: ImpactItem[];
}

export default function ImpactBlock({ items }: ImpactBlockProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <Reveal key={item.titre} delay={i * 60}>
          <div className="border border-[--color-border] p-6">
            <h3 className="text-h3 text-[--color-fg] mb-2">{item.titre}</h3>
            <p className="text-caption">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
