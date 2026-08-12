import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Politiques cinématographiques, industrie audiovisuelle, transformation numérique et patrimoine. L'expertise d'Amadou Thior au service du secteur.",
};

const expertises = [
  "Conseil audiovisuel",
  "Politiques cinématographiques",
  "Production",
  "Formation",
  "Développement de projets",
  "Organisation de l'industrie",
  "Patrimoine cinématographique",
  "Transformation numérique",
];

export default function ExpertisePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">Expertise</p>
            <h1 className="text-h1 mb-6 max-w-2xl">
              Penser le cinéma au-delà de l&apos;écran
            </h1>
            <p className="text-body text-[--color-fg-muted] max-w-xl leading-relaxed">
              Son expérience ne se limite pas à la réalisation et à la
              production. Amadou Thior intervient également sur les questions de
              politiques cinématographiques, de développement de l&apos;industrie
              audiovisuelle, de formation et de transformation numérique du
              secteur.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 4 AXES */}
      <section className="pb-16 md:pb-20">
        <Container>
          <div className="space-y-16">
            {/* 1. Politiques cinématographiques */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
                <div>
                  <span className="text-meta text-[--color-accent] block mb-2">01</span>
                  <h2 className="text-h2">Politiques cinématographiques</h2>
                </div>
                <div>
                  <span className="text-meta text-[--color-accent] block mb-2">2015</span>
                  <h3 className="text-h3 mb-3">
                    Plan Quinquennal de Développement Intégré du Cinéma et de
                    l&apos;Audiovisuel du Sénégal
                  </h3>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed">
                    Proposition d&apos;étude portant sur une réflexion stratégique
                    globale sur le développement du secteur cinématographique et
                    audiovisuel au Sénégal.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="border-t border-[--color-border]" />

            {/* 2. Industrie audiovisuelle */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
                <div>
                  <span className="text-meta text-[--color-accent] block mb-2">02</span>
                  <h2 className="text-h2">Industrie audiovisuelle</h2>
                </div>
                <div>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed mb-4">
                    Interventions dans :
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Séminaires nationaux",
                      "Séminaires internationaux",
                      "Études sur les politiques cinématographiques",
                      "Développement de l'industrie audiovisuelle",
                      "Outils de gestion du cinéma",
                    ].map((item) => (
                      <li
                        key={item}
                        className="text-caption text-[--color-fg-muted] flex items-center gap-2.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[--color-accent-muted] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <div className="border-t border-[--color-border]" />

            {/* 3. Transformation numérique */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
                <div>
                  <span className="text-meta text-[--color-accent] block mb-2">03</span>
                  <h2 className="text-h2">Transformation numérique</h2>
                </div>
                <div>
                  <span className="text-meta text-[--color-accent] block mb-2">2016</span>
                  <h3 className="text-h3 mb-3">
                    Plateforme numérique de gestion des activités
                    cinématographiques
                  </h3>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed mb-3">
                    Conception d&apos;une application de billetterie nationale
                    numérique sécurisée pour le cinéma.
                  </p>
                  <p className="text-caption text-[--color-fg-subtle]">
                    Collaboration : SIAMOIS-IT.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="border-t border-[--color-border]" />

            {/* 4. Patrimoine cinématographique */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
                <div>
                  <span className="text-meta text-[--color-accent] block mb-2">04</span>
                  <h2 className="text-h2">Patrimoine cinématographique</h2>
                </div>
                <div>
                  <span className="text-meta text-[--color-accent] block mb-2">2025</span>
                  <h3 className="text-h3 mb-3">
                    Cinémathèque nationale du Sénégal
                  </h3>
                  <p className="text-body text-[--color-fg-muted] leading-relaxed">
                    Intervention dans le débat sur la nécessité pour le Sénégal
                    de se doter d&apos;une cinémathèque nationale. Thématique :
                    acquisition, conservation et valorisation des films et de la
                    mémoire cinématographique sénégalaise.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* EXPERTISES (cartes) */}
      <section className="section-py bg-[--color-surface]">
        <Container>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-8">
              Domaines d&apos;expertise
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertises.map((exp, i) => (
              <Reveal key={exp} delay={i * 40}>
                <div className="border border-[--color-border] bg-[--color-bg] p-5 transition-colors duration-300 hover:border-[--color-accent]/30">
                  <p className="font-[family-name:var(--font-cormorant)] text-base text-[--color-fg]">
                    {exp}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
