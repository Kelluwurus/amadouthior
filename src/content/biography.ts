import type { BiographySection, Collaboration } from "./types";

export const biography: BiographySection[] = [
  {
    id: "formation",
    title: "Formation",
    content:
      "Amadou Thior est diplômé de l'École Nationale Supérieure Louis-Lumière (Vaugirard) à Paris, promotion Cinéma 1977. Cette formation de référence mondiale en techniques cinématographiques a posé les fondations d'une carrière entièrement dédiée au 7ᵉ art.",
  },
  {
    id: "debuts",
    title: "Débuts professionnels",
    content:
      "De retour au Sénégal, il intègre le Ministère de la Culture où il contribue en tant que cadre technique à la structuration des politiques cinématographiques nationales et à la promotion du patrimoine audiovisuel sénégalais.",
  },
  {
    id: "rts",
    title: "RTS — Radiodiffusion Télévision du Sénégal",
    content:
      "Réalisateur et Journaliste Reporter d'Images à la RTS, il réalise documentaires, magazines et émissions culturelles pour la télévision nationale, contribuant à la diffusion de la culture sénégalaise auprès du grand public.",
  },
  {
    id: "sembene",
    title: "Collaboration avec Ousmane Sembène",
    content:
      "Compagnonnage exceptionnel avec le père du cinéma africain. Amadou Thior est assistant réalisateur sur Camp de Thiaroye (1987), fresque historique sur le massacre de tirailleurs sénégalais, et Guelwaar (1992), film traitant des conflits religieux et de la dignité africaine face à l'aide internationale. Ces collaborations forgent sa vision du cinéma comme outil de mémoire et de conscience.",
  },
  {
    id: "production",
    title: "Production",
    content:
      "Fondateur ou membre de la structure Consultants & Réalisateurs Associés, puis de TAF Productions Afrique Sarl et KOOM COM GROUPE, il porte ses propres réalisations et accompagne des projets audiovisuels en Afrique de l'Ouest.",
  },
  {
    id: "realisation",
    title: "Réalisation",
    content:
      "Sa filmographie comprend des œuvres majeures comme Almodou (Prix Plan International, FESPACO 2001), Xareek Maral (Grand Prix de la CEE, FESPACO 1985), Mariage précoce et Mayelle, traitant avec humanisme des enjeux sociaux du Sénégal : enfance vulnérable, condition féminine, mutations culturelles.",
  },
  {
    id: "transmission",
    title: "Transmission",
    content:
      "Formateur, consultant et enseignant vacataire, il transmet son expertise aux nouvelles générations de cinéastes et techniciens de l'audiovisuel. Son engagement pour la préservation du patrimoine audiovisuel sénégalais prolonge une vie entièrement consacrée au cinéma.",
  },
];

export const collaborations: Collaboration[] = [
  {
    name: "Ousmane Sembène",
    role: "Assistant réalisateur",
    period: "1987–1992",
    description:
      "Collaboration sur Camp de Thiaroye (1987) et Guelwaar (1992) en tant qu'assistant réalisateur. Compagnonnage fondateur avec le père du cinéma africain.",
    type: "personne",
    films: ["Camp de Thiaroye", "Guelwaar"],
  },
  {
    name: "Radiodiffusion Télévision du Sénégal (RTS)",
    role: "Réalisateur / JRI",
    period: "1980–1995",
    description:
      "Réalisation de documentaires, magazines et émissions culturelles pour la télévision nationale.",
    type: "institution",
  },
  {
    name: "Ministère de la Culture du Sénégal",
    role: "Cadre technique",
    period: "1981–",
    description:
      "Contribution à la structuration des politiques cinématographiques nationales.",
    type: "institution",
  },
  {
    name: "Consultants & Réalisateurs Associés",
    role: "Producteur / Réalisateur",
    period: "1994–",
    description:
      "Structure de production ayant porté les réalisations personnelles d'Amadou Thior.",
    type: "production",
  },
  {
    name: "2S TV",
    role: "Collaborateur",
    description:
      "Collaboration avec la chaîne de télévision privée sénégalaise.",
    type: "institution",
  },
];

export const introText =
  "Amadou Thior est un cinéaste indépendant sénégalais avec plus de quatre décennies d'expérience dans la réalisation, la production, l'écriture et la formation audiovisuelle. Né à Boulel, formé à l'École Nationale Supérieure Louis-Lumière à Paris, il a consacré sa vie au cinéma, à l'audiovisuel et à la transmission.";
