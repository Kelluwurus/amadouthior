import { Eye, GraduationCap, Film, Tv } from "lucide-react";

const cards = [
  {
    icon: Eye,
    label: "Éveiller les consciences",
    title: "Donner une voix aux récits oubliés",
    text: "Interroger la société, traiter de l'enfance et des réalités sociales à travers des œuvres poignantes comme Almodou.",
  },
  {
    icon: GraduationCap,
    label: "Transmettre le savoir",
    title: "Former les générations de demain",
    text: "Transmettre la rigueur du métier dans les hautes écoles (ISMA, IPMICA) et structurer l'industrie africaine de demain.",
  },
  {
    icon: Film,
    label: "Penser le patrimoine",
    title: "Honorer les maîtres du 7ᵉ art",
    text: "Inscrire ses pas dans l'héritage des grands noms, fort d'un compagnonnage historique avec Ousmane Sembène (Camp de Thiaroye, Guelwaar).",
  },
  {
    icon: Tv,
    label: "Façonner l'avenir",
    title: "Accompagner les politiques culturelles",
    text: "Mettre l'expertise technique et institutionnelle au service de la réhabilitation des salles et de la structuration de la distribution.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="section-padding bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#C8A24A] mb-4">
            La vision d&apos;un cinéaste
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#F8F5EF] mb-6">
            Ce que nous faisons traverser au public
          </h2>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            Le cinéma n&apos;est pas un simple divertissement. C&apos;est le miroir de
            nos identités, un catalyseur de dialogue et le gardien de notre
            mémoire collective.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card) => (
            <div
              key={card.label}
              className="group relative bg-[#1E1E1E] border border-[#C8A24A]/20 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A24A]/60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
            >
              {/* Top glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />

              <card.icon
                size={36}
                className="text-[#C8A24A] mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F8F5EF] mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {card.text}
              </p>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C8A24A]">
                {card.label}
              </span>
            </div>
          ))}
        </div>

        {/* Immersive Emerald Block */}
        <div className="relative bg-[#0F382C] rounded-xl p-10 md:p-16 text-center overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,162,74,0.04)_0%,transparent_50%)] pointer-events-none" />

          <h3 className="relative font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl lg:text-4xl text-[#F8F5EF] mb-5">
            Imaginez la salle qui s&apos;éclaire...
          </h3>
          <p className="relative text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            Un film s&apos;achève, la lumière se rallume. Les spectateurs ne voient
            plus le monde de la même manière. Ils ont compris. Ils se sont
            reconnus. Ils sont prêts à transmettre. C&apos;est toute la force d&apos;une
            œuvre pensée avec rigueur et humanisme.
          </p>
        </div>
      </div>
    </section>
  );
}
