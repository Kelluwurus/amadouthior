import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/**
 * Section "Vision" — 4 axes éditoriaux du parcours.
 * Titres conformes à requirements.md (Éveiller / Transmettre / Faire vivre / Penser l'avenir).
 * Contenu inspiré de content/expertise.json mais reformulé pour la homepage.
 */

const axes = [
  {
    numero: "01",
    titre: "Éveiller les consciences",
    description:
      "Donner une voix aux récits qui interrogent notre société — des enfants talibés aux femmes confrontées au mariage précoce.",
    href: "/oeuvres",
  },
  {
    numero: "02",
    titre: "Transmettre les savoirs",
    description:
      "Former les nouvelles générations de cinéastes et structurer l'enseignement des métiers de l'audiovisuel.",
    href: "/transmission",
  },
  {
    numero: "03",
    titre: "Faire vivre une mémoire",
    description:
      "Préserver le patrimoine cinématographique sénégalais et honorer l'héritage des maîtres du 7ᵉ art.",
    href: "/archives",
  },
  {
    numero: "04",
    titre: "Penser l'avenir de l'audiovisuel",
    description:
      "Mettre l'expertise sectorielle au service du développement de l'industrie cinématographique.",
    href: "/expertise",
  },
];

export default function VisionSection() {
  return (
    <section className="section-py bg-[--color-bg-alt]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-meta mb-3">Le parcours</p>
          <h2 className="text-h2 mb-12">
            Ce que le cinéma fait traverser
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {axes.map((axe, i) => (
            <Reveal key={axe.numero} delay={i * 80}>
              <Link href={axe.href} className="group block">
                <span className="font-[family-name:var(--font-cormorant)] text-4xl text-[--color-accent]/25 group-hover:text-[--color-accent]/60 transition-colors">
                  {axe.numero}
                </span>
                <h3 className="text-h3 mt-2 mb-2 group-hover:text-[--color-accent] transition-colors">
                  {axe.titre}
                </h3>
                <p className="text-caption leading-relaxed">
                  {axe.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
