import type { BlocTransmission } from "@/lib/types";

interface TransmissionBlockProps {
  bloc: BlocTransmission;
}

export default function TransmissionBlock({ bloc }: TransmissionBlockProps) {
  return (
    <section>
      <h2 className="text-h2 mb-6">{bloc.titre}</h2>
      <div className="space-y-6">
        {bloc.items.map((item) => (
          <div
            key={item.nom}
            className="border-l-2 border-[--color-border] pl-5 hover:border-[--color-accent]/40 transition-colors"
          >
            {item.periode && (
              <span className="text-meta block mb-1">{item.periode}</span>
            )}
            <h3 className="text-h3 mb-1">{item.nom}</h3>
            {item.lieu && (
              <p className="text-xs text-[--color-fg-subtle] mb-1">{item.lieu}</p>
            )}
            {item.description && (
              <p className="text-caption leading-relaxed">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
