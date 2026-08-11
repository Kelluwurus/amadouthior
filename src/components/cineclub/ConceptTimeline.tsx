import { Clapperboard, Utensils, Mic, Network, Lightbulb, CheckCircle2 } from "lucide-react";
import { cineclubProject } from "@/data/cineclub-project";

const iconMap: Record<string, React.ElementType> = {
  clapperboard: Clapperboard,
  utensils: Utensils,
  mic: Mic,
  network: Network,
  lightbulb: Lightbulb,
};

export default function ConceptTimeline() {
  const { steps, valueChain, highlights, description } = cineclubProject.concept;

  return (
    <div className="space-y-12">
      {/* Description */}
      <p className="text-sm md:text-base text-[#9ca3af] leading-relaxed text-center max-w-3xl mx-auto">
        {description}
      </p>

      {/* 5 Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step) => {
          const Icon = iconMap[step.icon] || Clapperboard;
          return (
            <div
              key={step.order}
              className="relative bg-[#1a2e1a] border border-[#2E5C1E]/30 rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2E5C1E]/30 mb-3">
                <Icon size={22} className="text-[#D4AF37]" />
              </div>
              <span className="block text-xs font-bold text-[#D4AF37] mb-1">
                {step.order}.
              </span>
              <h4 className="font-[family-name:var(--font-playfair)] text-base text-[#f5f0eb] mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Value Chain */}
      <div className="flex flex-wrap items-center justify-center gap-3 py-6">
        {valueChain.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <span className="px-4 py-2 text-sm font-medium bg-[#2E5C1E] text-[#D4AF37] rounded-full">
              {item}
            </span>
            {index < valueChain.length - 1 && (
              <span className="text-[#D4AF37]/50 text-lg">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="bg-[#1a2e1a] border border-[#2E5C1E]/30 rounded-lg p-6 md:p-8">
        <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[#f5f0eb] mb-5">
          Ce qui distingue {cineclubProject.title}
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highlights.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <CheckCircle2
                size={16}
                className="text-[#D4AF37] shrink-0 mt-0.5"
              />
              <span className="text-sm text-[#9ca3af] leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
