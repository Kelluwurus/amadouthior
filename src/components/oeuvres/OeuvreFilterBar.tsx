"use client";

interface OeuvreFilterBarProps {
  active: string;
  onChange: (value: string) => void;
}

const filters = [
  { label: "Tout", value: "tout" },
  { label: "Réalisation", value: "realisation" },
  { label: "Production", value: "production" },
  { label: "Collaboration", value: "collaboration" },
];

export default function OeuvreFilterBar({ active, onChange }: OeuvreFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les œuvres">
      {filters.map((f) => (
        <button
          key={f.value}
          role="tab"
          aria-selected={active === f.value}
          onClick={() => onChange(f.value)}
          className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
            active === f.value
              ? "bg-[--color-accent] text-[#FAF6EF]"
              : "text-[--color-fg-muted] bg-[--color-surface] hover:text-[--color-accent]"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
