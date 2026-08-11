export interface Project {
  id: string;
  title: string;
  year: number | string;
  role: string;
  category: "long" | "court" | "documentaire" | "collaboration";
  description: string;
  award?: string;
  director?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "almodou",
    title: "Almodou",
    year: 2002,
    role: "Réalisateur / Producteur",
    category: "long",
    description:
      "Long-métrage de fiction traitant de l'enfance vulnérable et des réalités sociales au Sénégal. Une œuvre humaniste saluée par la critique internationale.",
    award: "Prix PLAN International — FESPACO 2001",
  },
  {
    id: "mariage-precoce",
    title: "Mariage Précoce",
    year: 1996,
    role: "Réalisateur",
    category: "court",
    description:
      "Court-métrage de fiction sociétale interrogeant les traditions du mariage forcé et leur impact sur les jeunes filles.",
  },
  {
    id: "xareek-maral",
    title: "Xareek Maral",
    year: 1985,
    role: "Réalisateur",
    category: "documentaire",
    description:
      "Documentaire fondateur explorant les mutations sociales et culturelles au Sénégal. Premier grand succès international.",
    award: "Grand Prix de la CEE — FESPACO 1985",
  },
  {
    id: "guelwaar",
    title: "Guelwaar",
    year: 1992,
    role: "Assistant Réalisateur",
    category: "collaboration",
    description:
      "Collaboration avec Ousmane Sembène sur ce long-métrage traitant des conflits religieux et de la dignité africaine face à l'aide internationale.",
    director: "Ousmane Sembène",
  },
  {
    id: "camp-de-thiaroye",
    title: "Camp de Thiaroye",
    year: 1987,
    role: "Assistant Réalisateur",
    category: "collaboration",
    description:
      "Assistant réalisateur auprès d'Ousmane Sembène sur cette fresque historique relatant le massacre de tirailleurs sénégalais en 1944.",
    director: "Ousmane Sembène",
    award: "Grand Prix Spécial du Jury — Festival de Venise 1988",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "1977",
    title: "Diplôme de l'École Nationale Louis-Lumière (Vaugirard)",
    organization: "Paris, France",
    description:
      "Formation cinématographique à l'une des plus prestigieuses écoles techniques du 7ᵉ art. Promotion Cinéma 1977.",
  },
  {
    year: "1980–1995",
    title: "Réalisateur & Journaliste Reporter d'Images",
    organization: "RTS — Radiodiffusion Télévision du Sénégal",
    description:
      "Réalisation de documentaires, magazines et émissions culturelles pour la télévision nationale sénégalaise.",
  },
  {
    year: "1987",
    title: "Assistant Réalisateur — Camp de Thiaroye",
    organization: "Collaboration avec Ousmane Sembène",
    description:
      "Première collaboration majeure avec le père du cinéma africain sur cette œuvre historique primée à Venise.",
  },
  {
    year: "1992",
    title: "Assistant Réalisateur — Guelwaar",
    organization: "Collaboration avec Ousmane Sembène",
    description:
      "Seconde collaboration avec Sembène, approfondissant son compagnonnage avec le maître et consolidant son expertise en mise en scène.",
  },
  {
    year: "1995–2005",
    title: "Cadre au Ministère de la Culture",
    organization: "Ministère de la Culture du Sénégal",
    description:
      "Responsabilités dans la structuration des politiques cinématographiques nationales et la promotion du patrimoine audiovisuel.",
  },
  {
    year: "2002",
    title: "Réalisation d'Almodou",
    organization: "TAF Productions Afrique",
    description:
      "Réalisation de son long-métrage phare, couronné par le Prix PLAN International au FESPACO 2001.",
  },
  {
    year: "2005–Présent",
    title: "Consultant & Formateur Audiovisuel",
    organization: "TAF Productions Afrique Sarl / 2S TV / Université",
    description:
      "Consultant international, formateur en audiovisuel et enseignant vacataire à la Faculté des Sciences et Techniques. Fondateur de TAF Productions Afrique Sarl.",
  },
];

export const services: Service[] = [
  {
    id: "production",
    title: "Production Audiovisuelle",
    description:
      "Accompagnement complet de projets audiovisuels, du développement à la post-production, pour le cinéma, la télévision et les institutionnels.",
    items: [
      "Production de films et documentaires",
      "Production exécutive",
      "Coordination de tournage",
      "Post-production et finalisation",
    ],
  },
  {
    id: "formation",
    title: "Formation & Masterclasses",
    description:
      "Transmission du savoir-faire cinématographique à travers des ateliers pratiques, des formations universitaires et des masterclasses.",
    items: [
      "Ateliers de réalisation",
      "Écriture de scénario",
      "Direction d'acteurs",
      "Formation technique (image & son)",
    ],
  },
  {
    id: "consulting",
    title: "Consulting & Expertise",
    description:
      "Conseil stratégique pour les institutions, les chaînes de télévision et les fonds de promotion du cinéma en Afrique.",
    items: [
      "Études de faisabilité audiovisuelle",
      "Conseil en politiques culturelles",
      "Jury et sélection de festivals",
      "Accompagnement de projets institutionnels",
    ],
  },
];
