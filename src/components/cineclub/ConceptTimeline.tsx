import { Film, UtensilsCrossed, MessageCircle, Users, HeartHandshake } from "lucide-react";
import { conceptSteps, valueChain, distinctivePoints } from "@/data/cineclub";
import { CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  film: Film,
  utensils: UtensilsCrossed,
  "message-circle": MessageCircle,
  users: Users,
  "heart-handshake": HeartHandshake,
};

export default function ConceptTimeline() {
  return (
    <div className="space-y-12">
      {/* 5 Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {conceptSteps.map((step) => {
          const Icon = iconMap[step.icon] || Film;
          return (
            <div
              key={step.number}
              className="relative bg-[#1a2e1a] border border-[#2E5C1E]/30 rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2E5C1E]/30 mb-3">
                <Icon size={22} className="text-[#D4AF37]" />
              </div>
              <span className="block text-xs font-bold text-[#D4AF37] mb-1">
                {step.number}.
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

      {/* Distinctive Points */}
      <div className="bg-[#1a2e1a] border border-[#2E5C1E]/30 rounded-lg p-6 md:p-8">
        <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[#f5f0eb] mb-5">
          Ce qui distingue CINECLUB – DÎNER DÉBAT
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {distinctivePoints.map((point) => (
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
