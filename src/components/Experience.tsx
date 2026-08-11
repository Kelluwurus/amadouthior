import { timeline } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section-py bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Parcours"
          title="Expérience & Formation"
          description="De l'École Louis-Lumière au compagnonnage avec Ousmane Sembène, un itinéraire forgé par la passion et l'exigence."
        />

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timeline.map((entry, index) => (
            <div key={entry.year + entry.title} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border-2 border-[#c4723a] bg-[#0f0f0f] shrink-0 mt-1.5 z-10" />
                {index < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-[#c4723a]/40 to-[#c4723a]/5 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <span className="text-xs font-semibold tracking-wider text-[#c4723a]">
                  {entry.year}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#f5f0eb] mt-1 mb-1">
                  {entry.title}
                </h3>
                <p className="text-xs text-[#6b7280] mb-2">
                  {entry.organization}
                </p>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
