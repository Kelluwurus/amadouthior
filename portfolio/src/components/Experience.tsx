import { Star, MapPin } from "lucide-react";

const timeline = [
  {
    year: "1977",
    title: "École Nationale Supérieure Louis-Lumière",
    location: "Paris, France",
    description:
      "Formation en cinéma au cœur de l'institution technique de référence mondiale du 7ᵉ art.",
  },
  {
    year: "1980–2000",
    title: "Réalisateur à la RTS & Cadre ministériel",
    location: "Dakar, Sénégal",
    description:
      "Réalisateur à la Radiodiffusion Télévision du Sénégal et cadre au Ministère de la Culture du Sénégal.",
  },
  {
    year: "2000–Présent",
    title: "Consultant International & Enseignant",
    location: "Sénégal & International",
    description:
      "Consultant en politiques cinématographiques et enseignant dans les hautes écoles de cinéma (ISMA, IPMICA).",
  },
];

const awards = [
  {
    title: "FESPACO 1985",
    description: "Grand Prix de la CEE — Xareek Maral",
  },
  {
    title: "FESPACO 2001",
    description: "Prix Spécial PLAN International — Almodou",
  },
  {
    title: "FESTEL 2002",
    description: "Sélection officielle",
  },
  {
    title: "Vues d'Afrique Montréal & Milan",
    description: "Sélections internationales",
  },
];

export default function Experience() {
  return (
    <section id="parcours" className="section-padding bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#C8A24A] mb-4">
            Parcours & Distinctions
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#F8F5EF]">
            Un itinéraire d&apos;exception
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Timeline */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-[#C8A24A] mb-8 pb-4 border-b border-[#C8A24A]/20">
              Parcours
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex gap-5">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#C8A24A] bg-[#121212] shrink-0 mt-1 z-10" />
                    {index < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-[#C8A24A]/50 to-transparent mt-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-2">
                    <span className="text-xs font-semibold tracking-wider text-[#C8A24A] block mb-1">
                      {item.year}
                    </span>
                    <h4 className="font-[family-name:var(--font-cormorant)] text-lg text-[#F8F5EF] mb-1.5">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-zinc-500 mb-2">
                      <MapPin size={11} />
                      <span>{item.location}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Awards */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-[#C8A24A] mb-8 pb-4 border-b border-[#C8A24A]/20">
              Distinctions
            </h3>
            <div className="space-y-4">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="group flex items-start gap-4 p-5 bg-[#1E1E1E] border border-white/5 rounded-lg transition-all duration-300 hover:border-[#C8A24A]/30 hover:translate-x-1"
                >
                  <Star
                    size={20}
                    className="text-[#C8A24A] shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#F8F5EF] mb-1">
                      {award.title}
                    </h4>
                    <p className="text-sm text-zinc-400">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
