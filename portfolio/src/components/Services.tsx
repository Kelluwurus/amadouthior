import { BookOpen, Building2, Mic2 } from "lucide-react";

const services = [
  {
    number: "01",
    icon: BookOpen,
    title: "Masterclasses & Enseignement",
    description:
      "Ateliers de réalisation, écriture de scénario et direction d'acteurs. Formation aux techniques de production et post-production.",
    items: ["Réalisation & mise en scène", "Écriture scénaristique", "Direction d'acteurs"],
  },
  {
    number: "02",
    icon: Building2,
    title: "Conseil en Politiques Cinématographiques",
    description:
      "Études de marché, relance du réseau de distribution et accompagnement des fonds de promotion du cinéma africain.",
    items: ["Études de marché", "Réhabilitation des salles", "Structuration de la distribution"],
  },
  {
    number: "03",
    icon: Mic2,
    title: "Jury & Conférences",
    description:
      "Interventions dans les festivals internationaux et colloques universitaires. Membre de jurys prestigieux du cinéma panafricain.",
    items: ["Festivals internationaux", "Colloques universitaires", "Tables rondes institutionnelles"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#C8A24A] mb-4">
            Conseil, Formation & Conférences
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#F8F5EF]">
            Expertise & Transmission
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-[#121212] border border-white/5 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A24A]/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#C8A24A]/30">
                  {service.number}
                </span>
                <service.icon
                  size={28}
                  className="text-[#C8A24A] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F8F5EF] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 pt-4 border-t border-white/5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-zinc-500"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8A24A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
