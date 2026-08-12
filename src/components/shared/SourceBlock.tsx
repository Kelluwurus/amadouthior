import type { Source } from "@/lib/types";

interface SourceBlockProps {
  sources: Source[];
}

/**
 * Bloc discret en pied de fiche listant les sources documentaires.
 * Affiche un lien si `url` est fourni, sinon le nom seul.
 */
export default function SourceBlock({ sources }: SourceBlockProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="border-t border-[--color-border] pt-6 mt-10">
      <p className="text-[0.65rem] font-medium uppercase tracking-wider text-[--color-fg-subtle] mb-2">
        Sources
      </p>
      <p className="text-xs text-[--color-fg-subtle] leading-relaxed">
        {sources.map((s, i) => (
          <span key={s.nom}>
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[--color-accent] transition-colors"
              >
                {s.nom}
              </a>
            ) : (
              s.nom
            )}
            {i < sources.length - 1 && " · "}
          </span>
        ))}
      </p>
    </div>
  );
}
