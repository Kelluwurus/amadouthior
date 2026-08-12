import type { Metadata } from "next";
import { Film, Clapperboard, GraduationCap, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Plus de quatre décennies au cœur du cinéma sénégalais. De la formation à Paris à la réalisation indépendante, de l'administration du cinéma à la transmission des savoirs.",
};

const chronology = [
  {
    period: "1974–1977",
    title: "École Nationale Vaugirard-Louis Lumière, Paris",
    description: "Études de cinéma. BTS Cinéma, option image, obtenu en 1977.",
  },
  {
    period: "1981–1988",
    title: "Bureau du Cinéma — Ministère de la Culture et de la Communication du Sénégal",
    description: "Réalisateur chargé des études techniques.",
  },
  {
    period: "1987",
    title: "Camp de Thiaroye",
    description: "Assistant réalisateur d'Ousmane Sembène.",
    note: "Film réalisé par Ousmane Sembène.",
  },
  {
    period: "1988–1989",
    title: "RTS — Radiodiffusion Télévision du Sénégal",
    description: "Réalisateur détaché.",
  },
  {
    period: "1989",
    title: "Stage — Gestion de la production télévisuelle et cinématographique",
    description: "École Internationale de Bordeaux.",
  },
  {
    period: "À partir de 1990",
    title: "Producteur-réalisateur indépendant",
    description: "Consultant et formateur audiovisuel.",
  },
  {
    period: "1992",
    title: "Guelwaar",
    description: "Assistant réalisateur d'Ousmane Sembène.",
    note: "Film réalisé par Ousmane Sembène.",
  },
  {
    period: "1994",
    title: "Fondation du GIE Consultants et Réalisateurs Associés",
    description: "Avec Assane Diagne. Objectif : autoproduction de projets de fiction et de documentaire.",
  },
  {
    period: "1996–1997",
    title: "Producteur délégué de « Bien-être pour Tous »",
    description: "",
  },
  {
    period: "1998–2000",
    title: "Président de CINESEAS",
    description: "Association des Cinéastes Sénégalais Associés.",
  },
  {
    period: "1999",
    title: "Formation de formateurs aux métiers de l'audiovisuel",
    description: "Forum Media Centre de Dakar.",
  },
  {
    period: "2001",
    title: "Certificat de producteur — « Africa & Pinocchio »",
    description: "Projet Suisse-Sénégal-France.",
  },
  {
    period: "2008–2009",
    title: "Co-concepteur de la Licence Professionnelle de Création Multimédia",
    description: "Université de Ziguinchor.",
  },
  {
    period: "2008–2013",
    title: "Co-concepteur de la LPCM",
    description: "Université de Thiès.",
  },
  {
    period: "2014–2015",
    title: "Co-concepteur de la LPCM",
    description: "Université Cheikh Anta Diop de Dakar.",
  },
  {
    period: "Depuis juin 2014",
    title: "Enseignant associé — ISMA",
    description: "Institut Supérieur des Métiers de l'Audiovisuel, Cotonou.",
  },
  {
    period: "2015",
    title: "Plan Quinquennal de Développement Intégré du Cinéma et de l'Audiovisuel du Sénégal",
    description: "Proposition d'étude.",
  },
  {
    period: "2015",
    title: "Formation à Movie Magic Scheduling",
    description: "CIFAP Paris.",
  },
  {
    period: "2016",
    title: "Plateforme numérique de gestion des activités cinématographiques",
    description: "Conception d'une application de billetterie nationale numérique sécurisée pour le cinéma, en collaboration avec SIAMOIS-IT.",
  },
  {
    period: "2017–2018",
    title: "Programme « Scénario pour tous »",
    description: "Financé par le FOPICA. Ateliers consacrés à la conception de la « Bible » d'une série télévisée.",
  },
  {
    period: "2021–2022",
    title: "Enseignant — ISAC",
    description: "Institut Supérieur des Arts et de la Culture. Cours : Langage cinématographique.",
  },
  {
    period: "2021–2023",
    title: "Enseignant — CESTI",
    description: "Cours : Techniques de réalisation et découpage technique de film.",
  },
  {
    period: "Août 2024",
    title: "URAC Sénégal",
    description: "Animation d'ateliers de formation avec Martin Faye à destination des correspondants de la Radio Télévision Communautaire.",
  },
  {
    period: "2025",
    title: "Patrimoine cinématographique",
    description: "Intervention dans le débat sur la nécessité d'une cinémathèque nationale au Sénégal et sur les enjeux de conservation du patrimoine cinématographique.",
  },
];

export default function ParcoursPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">Parcours</p>
            <h1 className="text-h1 mb-6 max-w-2xl">
              Un parcours au cœur du cinéma sénégalais
            </h1>
            <p className="text-body text-[--color-fg-muted] max-w-xl leading-relaxed">
              De la formation à Paris à la réalisation indépendante, de
              l&apos;administration du cinéma à la transmission des savoirs,
              Amadou Thior a traversé plusieurs générations et plusieurs
              transformations de l&apos;industrie audiovisuelle.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ===== LES 4 AXES ===== */}
      <section className="py-12 md:py-16 bg-[--color-surface]">
        <Container>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-8">
              Une trajectoire entre création, transmission et structuration du secteur
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={60}>
              <div className="flex gap-3">
                <Film size={18} className="text-[--color-accent] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-1">Création</h3>
                  <p className="text-caption text-[--color-fg-muted]">
                    Réalisation, scénario, cinéma et télévision.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex gap-3">
                <Clapperboard size={18} className="text-[--color-accent] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-1">Production</h3>
                  <p className="text-caption text-[--color-fg-muted]">
                    Production, gestion de projets et développement.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex gap-3">
                <GraduationCap size={18} className="text-[--color-accent] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-1">Transmission</h3>
                  <p className="text-caption text-[--color-fg-muted]">
                    Enseignement, formation et ingénierie pédagogique.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex gap-3">
                <Building2 size={18} className="text-[--color-accent] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-h3 mb-1">Politique et industrie</h3>
                  <p className="text-caption text-[--color-fg-muted]">
                    Politiques cinématographiques et structuration du secteur.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== CHRONOLOGIE ===== */}
      <section className="section-py">
        <Container>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-10">
              Chronologie
            </p>
          </Reveal>

          <div className="max-w-3xl">
            {chronology.map((entry, index) => (
              <Reveal key={`${entry.period}-${entry.title}`} delay={index * 30}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-[--color-accent-muted] shrink-0 mt-2.5 z-10" />
                    {index < chronology.length - 1 && (
                      <div className="w-px flex-1 bg-[--color-border] mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span className="text-meta text-[--color-accent] block mb-1">
                      {entry.period}
                    </span>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-base md:text-lg text-[--color-fg] mb-1">
                      {entry.title}
                    </h3>
                    {entry.description && (
                      <p className="text-caption text-[--color-fg-muted] leading-relaxed">
                        {entry.description}
                      </p>
                    )}
                    {entry.note && (
                      <p className="text-xs text-[--color-fg-subtle] italic mt-1">
                        {entry.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
