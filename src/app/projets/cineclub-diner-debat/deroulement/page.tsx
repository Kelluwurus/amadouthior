import type { Metadata } from "next";
import { Clapperboard, Utensils, Mic, Network, Lightbulb } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cineclubProject } from "@/data/cineclub-project";

export const metadata: Metadata = {
  title: "Le déroulement du CINECLUB – Dîner Débat",
  description:
    "De la projection à l'action : découvrez l'expérience CINECLUB – DÎNER DÉBAT en 5 temps forts.",
};

const iconMap: Record<string, React.ElementType> = {
  clapperboard: Clapperboard,
  utensils: Utensils,
  mic: Mic,
  network: Network,
  lightbulb: Lightbulb,
};

export default function DeroulementPage() {
  const { steps, valueChain } = cineclubProject;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <span className="text-meta text-[#D4AF37] block mb-4">
                Le concept en action
              </span>
              <h1 className="text-h1 text-[--color-fg] mb-6">Le Déroulement</h1>
              <p className="text-body text-[--color-fg-muted] max-w-2xl mx-auto">
                De la projection à l&apos;action : découvrez l&apos;expérience
                CINECLUB – DÎNER DÉBAT en 5 temps forts.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== LES 5 TEMPS FORTS ===== */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="space-y-0">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || Clapperboard;
              const isLast = index === steps.length - 1;

              return (
                <Reveal key={step.order} delay={index * 80}>
                  <div className="relative">
                    {/* Connector line */}
                    {!isLast && (
                      <div className="absolute left-8 md:left-12 top-full w-px h-8 md:h-12 bg-gradient-to-b from-[#1F4D1E]/50 to-transparent z-0" />
                    )}

                    <div className="relative flex gap-6 md:gap-10 items-start py-8 md:py-12 group">
                      {/* Number + Icon */}
                      <div className="shrink-0 flex flex-col items-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-[#1F4D1E]/15 border border-[#1F4D1E]/30 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#D4AF37]/40 group-hover:bg-[#1F4D1E]/25">
                          <span className="text-2xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#D4AF37]/60 leading-none">
                            {String(step.order).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon size={18} className="text-[#D4AF37]" strokeWidth={1.5} />
                          <span className="text-meta text-[#D4AF37]">
                            {step.subtitle}
                          </span>
                        </div>
                        <h3 className="text-h3 text-[--color-fg] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-body text-[--color-fg-muted] leading-relaxed max-w-xl">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ===== CHAÎNE DE VALEUR ===== */}
      <section className="section-py bg-[--color-surface] border-t border-[#1F4D1E]/15">
        <Container narrow>
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-meta text-[#D4AF37] block mb-3">
                La progression
              </span>
              <h2 className="text-h2 text-[--color-fg]">
                De l&apos;émotion à l&apos;action
              </h2>
            </div>
          </Reveal>

          {/* Vertical progression */}
          <Reveal delay={100}>
            <div className="flex flex-col items-center gap-0">
              {valueChain.map((item, index) => (
                <div key={item} className="flex flex-col items-center">
                  <div className="w-48 md:w-56 py-4 text-center bg-[#1F4D1E]/10 border border-[#1F4D1E]/25 rounded-lg transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#1F4D1E]/20">
                    <span className="text-base md:text-lg font-medium text-[#D4AF37]">
                      {item}
                    </span>
                  </div>
                  {index < valueChain.length - 1 && (
                    <div className="w-px h-6 bg-[#D4AF37]/30 my-1" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Mapping steps to values */}
          <Reveal delay={200}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              {steps.map((step, i) => (
                <div key={step.order} className="space-y-1">
                  <span className="text-xs text-[--color-fg-subtle]">
                    {String(step.order).padStart(2, "0")}
                  </span>
                  <p className="text-caption text-[--color-fg-muted] font-medium">
                    {step.title}
                  </p>
                  <p className="text-xs text-[#D4AF37]">↓</p>
                  <p className="text-sm text-[#D4AF37] font-medium">
                    {valueChain[i]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
