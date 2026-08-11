import { services } from "@/data/content";
import { Clapperboard, GraduationCap, Search } from "lucide-react";
import SectionHeader from "./SectionHeader";

const icons = [Clapperboard, GraduationCap, Search];

export default function Services() {
  return (
    <section id="services" className="section-py bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="TAF Productions Afrique"
          title="Services"
          description="Production, formation et conseil au service du développement audiovisuel en Afrique."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.id}
                className="group bg-[#0f0f0f] border border-white/5 rounded-lg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c4723a]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                <Icon
                  size={28}
                  className="text-[#c4723a] mb-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#f5f0eb] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-[#6b7280]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#c4723a] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
