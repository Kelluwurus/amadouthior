import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Transmission & Formation",
  description:
    "La transmission des savoirs occupe une place centrale dans le parcours d'Amadou Thior. Conception de formations universitaires, enseignement des techniques de réalisation, accompagnement de la professionnalisation des métiers de l'audiovisuel.",
};

export default function TransmissionPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">
              Transmission & Formation
            </p>
            <h1 className="text-h1 mb-6 max-w-2xl">
              Transmettre le cinéma
            </h1>
            <p className="text-body text-[--color-fg-muted] max-w-xl leading-relaxed">
              La transmission des savoirs occupe une place centrale dans le
              parcours d&apos;Amadou Thior. De la conception de formations
              universitaires à l&apos;enseignement des techniques de réalisation,
              il accompagne depuis plusieurs décennies la professionnalisation
              des métiers de l&apos;audiovisuel.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FORMATION INITIALE */}
      <section className="pb-16 border-t border-[--color-border] pt-12">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-6">
              Formation initiale
            </p>
            <div className="border-l-2 border-[--color-accent-muted] pl-6">
              <span className="text-meta text-[--color-accent] block mb-1">
                1974–1977
              </span>
              <h3 className="text-h3 mb-2">
                École Nationale Vaugirard-Louis Lumière — Paris
              </h3>
              <p className="text-body text-[--color-fg-muted]">
                BTS Cinéma, option image — 1977.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FORMATIONS COMPLÉMENTAIRES */}
      <section className="pb-16 bg-[--color-surface] py-12 md:py-16">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-8">
              Formations complémentaires
            </p>
          </Reveal>
          <div className="space-y-8">
            <Reveal delay={60}>
              <Entry
                period="1989"
                title="Gestion de la production télévisuelle et cinématographique"
                place="École Internationale de Bordeaux."
              />
            </Reveal>
            <Reveal delay={120}>
              <Entry
                period="1999"
                title="Formation de formateurs aux métiers de l'audiovisuel"
                place="Forum Media Centre de Dakar."
              />
            </Reveal>
            <Reveal delay={180}>
              <Entry
                period="2001"
                title="Certificat de producteur"
                place="Projet Africa & Pinocchio — Suisse/Sénégal/France."
              />
            </Reveal>
            <Reveal delay={240}>
              <Entry
                period="2015"
                title="Formation à Movie Magic Scheduling"
                place="CIFAP Paris."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CONCEPTION DE PROGRAMMES */}
      <section className="section-py">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-3">
              Conception de programmes
            </p>
            <h2 className="text-h2 mb-8">
              LPCM — Licence Professionnelle de Création Multimédia
            </h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={60}>
              <Entry
                period="2008–2009"
                title="Co-concepteur de la LPCM"
                place="Université de Ziguinchor."
              />
            </Reveal>
            <Reveal delay={120}>
              <Entry
                period="2008–2013"
                title="Co-concepteur de la LPCM"
                place="Université de Thiès."
              />
            </Reveal>
            <Reveal delay={180}>
              <Entry
                period="2014–2015"
                title="Co-concepteur de la LPCM"
                place="Université Cheikh Anta Diop de Dakar."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* IPMICA */}
      <section className="py-12 md:py-16 bg-[--color-surface]">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-3">IPMICA</p>
            <h2 className="text-h2 mb-3">
              Concepteur et Directeur des Études
            </h2>
            <p className="text-body text-[--color-fg-muted]">
              Institut Panafricain des Métiers de la Communication Audiovisuelle.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ENSEIGNEMENT */}
      <section className="section-py">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-8">
              Enseignement
            </p>
          </Reveal>
          <div className="space-y-10">
            <Reveal delay={60}>
              <div>
                <Entry
                  period="Depuis juin 2014"
                  title="ISMA — Institut Supérieur des Métiers de l'Audiovisuel"
                  place="Cotonou, Bénin."
                />
                <p className="text-caption text-[--color-fg-muted] mt-1 ml-6 border-l border-[--color-border] pl-4">
                  Enseignant associé.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <Entry
                  period="2021–2022"
                  title="ISAC — Institut Supérieur des Arts et de la Culture"
                />
                <p className="text-caption text-[--color-fg-muted] mt-1 ml-6 border-l border-[--color-border] pl-4">
                  Cours : Langage cinématographique.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div>
                <Entry
                  period="2021–2023"
                  title="CESTI"
                />
                <p className="text-caption text-[--color-fg-muted] mt-1 ml-6 border-l border-[--color-border] pl-4">
                  Cours : Techniques de réalisation et découpage technique de film.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SCÉNARIO POUR TOUS */}
      <section className="py-12 md:py-16 bg-[--color-surface]">
        <Container narrow>
          <Reveal>
            <Entry
              period="2017–2018"
              title="Scénario pour tous"
              place="Programme financé par le FOPICA."
            />
            <p className="text-caption text-[--color-fg-muted] mt-2 ml-6 border-l border-[--color-border] pl-4">
              Thématique : concevoir la « Bible » d&apos;une série télévisée.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FORMATION 2024 */}
      <section className="section-py">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-3">
              Formation récente
            </p>
            <Entry
              period="Août 2024"
              title="URAC Sénégal"
              place="Animation d'ateliers avec Martin Faye destinés aux correspondants de la Radio Télévision Communautaire."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 ml-6 border-l border-[--color-border] pl-4">
              <p className="text-caption text-[--color-fg-subtle] mb-2">
                Thématiques abordées :
              </p>
              <ul className="space-y-1.5">
                {[
                  "Couverture de l'actualité locale",
                  "Collecte et exploitation de sujets",
                  "Transmission de l'information",
                  "Proposition de sujets",
                  "Veille locale",
                  "Respect des délais",
                  "Travail en équipe",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-caption text-[--color-fg-muted] flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[--color-accent-muted] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function Entry({
  period,
  title,
  place,
}: {
  period: string;
  title: string;
  place?: string;
}) {
  return (
    <div>
      <span className="text-meta text-[--color-accent] block mb-1">
        {period}
      </span>
      <h3 className="font-[family-name:var(--font-cormorant)] text-base md:text-lg text-[--color-fg]">
        {title}
      </h3>
      {place && (
        <p className="text-caption text-[--color-fg-muted] mt-0.5">{place}</p>
      )}
    </div>
  );
}
