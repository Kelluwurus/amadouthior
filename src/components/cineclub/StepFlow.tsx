import Reveal from "@/components/ui/Reveal";
import type { CinqTemps } from "@/lib/types";

interface StepFlowProps {
  steps: CinqTemps[];
}

/**
 * Séquence narrative des 5 temps du CINECLUB.
 * Animation progressive au scroll via Reveal (fallback statique si prefers-reduced-motion).
 */
export default function StepFlow({ steps }: StepFlowProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <Reveal key={step.numero} delay={i * 80}>
            <div className="relative flex gap-6 md:gap-10 py-8 md:py-10">
              {/* Number + connector */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[--color-accent] flex items-center justify-center shrink-0">
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-[--color-accent]">
                    {String(step.numero).padStart(2, "0")}
                  </span>
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-[--color-accent]/30 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-3">
                <h3 className="text-h3 text-[--color-fg] mb-2">{step.titre}</h3>
                <p className="text-body leading-relaxed">{step.description}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
