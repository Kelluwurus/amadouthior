// ============================================
// CINECLUB – DÎNER DÉBAT
// Données structurées du projet
// Source : dossier PDF KOOM COM GROUPE
// ============================================

// --- Types ---

export interface ConceptStep {
  order: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface CineclubFilm {
  title: string;
  director: string;
  producer?: string;
  country: string;
  duration: string;
  genre: string;
  language: string;
  subtitles?: string;
  synopsis: string;
  recognition?: string;
}

export interface CineclubEdition {
  year: number;
  status: "completed" | "upcoming" | "in-progress";
  title: string;
  theme?: string;
  subtitle?: string;
  description?: string;
  internationalDay?: string;
  date?: string;
  location?: string;
  film?: CineclubFilm;
  objectives?: string[];
  themes?: string[];
  targetAudiences?: string[];
  mediaAppearances?: string[];
  venue?: string;
  eventStory?: string;
}

export interface SponsorBenefit {
  label: string;
  bronze: boolean;
  silver: boolean;
  gold: boolean;
}

export interface SponsorTier {
  name: string;
  colorHex: string;
  description: string;
  benefits: string[];
}

export interface CineclubContact {
  structure: string;
  manager: string;
  address: string;
  phones: string[];
  email: string;
}

// --- Données ---

export const cineclubProject = {
  title: "CINECLUB – DÎNER DÉBAT",
  tagline: "Cinéma · Dialogue · Solidarité · Action",
  slogan: "Le cinéma au service de l'humanitaire",
  heroDescription:
    "Un concept imaginé et porté par Amadou Thior qui transforme une projection cinématographique en espace de rencontre, de réflexion, de dialogue et d'action.",
  openingQuote:
    "Le cinéma ne change pas le monde à lui seul. Mais il peut changer notre regard sur le monde… et c'est ainsi que naissent les plus grandes transformations.",

  concept: {
    summary:
      "CINECLUB – DÎNER DÉBAT associe la projection d'un film à un dîner et à un débat autour d'une problématique sociale ou humanitaire. L'objectif est de faire du cinéma un outil de sensibilisation, de dialogue et de mobilisation.",
    audiences: [
      "Professionnels",
      "Institutions",
      "Associations",
      "Entreprises",
      "Experts",
      "Acteurs de la société civile",
      "Grand public",
    ],
    closingStatement:
      "Un film pour émouvoir. Un débat pour comprendre. Une rencontre pour mobiliser. Une action pour transformer.",
  },

  steps: [
    {
      order: 1,
      title: "La Projection",
      subtitle: "L'Émotion",
      description:
        "Le public découvre un film choisi pour sa qualité artistique et la force de son message en lien avec la thématique de l'édition. Le film est le point de départ de la réflexion collective.",
      icon: "clapperboard",
    },
    {
      order: 2,
      title: "Le Dîner",
      subtitle: "La Rencontre",
      description:
        "Après la projection, les participants se retrouvent autour d'un dîner. Cette étape permet de créer un cadre convivial et de favoriser les échanges informels entre invités, décideurs, partenaires, artistes et société civile.",
      icon: "utensils",
    },
    {
      order: 3,
      title: "Le Débat",
      subtitle: "La Réflexion",
      description:
        "Le film devient le point de départ d'un débat animé par un modérateur expérimenté, réunissant experts, personnalités, acteurs associatifs, professionnels et représentants institutionnels.",
      icon: "mic",
    },
    {
      order: 4,
      title: "La Mise en réseau",
      subtitle: "La Mobilisation",
      description:
        "Un espace privilégié de rencontres entre institutions, entreprises, ONG, associations, fondations, experts, médias et citoyens pour créer des connexions autour de la cause abordée.",
      icon: "network",
    },
    {
      order: 5,
      title: "L'Action",
      subtitle: "L'Impact",
      description:
        "Les échanges débouchent sur des engagements concrets : soutien, partenariats, financement, campagnes, projets collaboratifs, accompagnement et mobilisation.",
      icon: "lightbulb",
    },
  ] as ConceptStep[],

  valueChain: ["Émouvoir", "Comprendre", "Dialoguer", "Mobiliser", "Agir"],

  promoterWord: {
    author: "Amadou Thior",
    role: "Concepteur du programme CINECLUB – DÎNER DÉBAT",
    text: [
      "Depuis toujours, le cinéma constitue l'un des plus puissants moyens d'expression de notre humanité. Il raconte nos histoires, révèle nos différences, célèbre nos valeurs communes et nous invite à regarder l'autre avec davantage de compréhension, d'empathie et de respect.",
      "À une époque où les défis sociaux, sanitaires, environnementaux et humanitaires se multiplient, il devient essentiel de créer des espaces capables de rassembler les citoyens, les institutions, les entreprises et les organisations autour d'un dialogue constructif et porteur de solutions.",
      "C'est dans cet esprit qu'est né CINECLUB – DÎNER DÉBAT : transformer chaque projection cinématographique en une véritable plateforme de réflexion, de sensibilisation, de plaidoyer et d'engagement citoyen.",
    ],
  },
} as const;

// --- Éditions ---

export const editions: CineclubEdition[] = [
  {
    year: 2016,
    status: "completed",
    title: "Aux origines du concept",
    description:
      "L'expérience fondatrice autour du film Marcedes au Grand Théâtre National de Dakar.",
    film: {
      title: "Marcedes",
      director: "Hady Zaccak",
      country: "Liban",
      duration: "68 min",
      genre: "Documentaire",
      language: "Arabe",
      synopsis:
        "Ce long métrage retrace les périodes noires de l'histoire du Liban à travers une voiture de marque Mercedes, puissant témoin silencieux des bouleversements du pays.",
    },
    venue: "Grand Théâtre National de Dakar",
    eventStory:
      "Projection organisée par TAF PRODUCTION AFRIQUE sous le parrainage du Ministre de la Culture et de la Communication, en présence de l'Ambassadeur du Liban au Sénégal.",
    mediaAppearances: [
      "Émission « Kenkelibaa » sur la RTS",
      "Émission sur Vibe Radio",
    ],
  },
  {
    year: 2026,
    status: "upcoming",
    title: "Le cinéma au service de l'inclusion",
    theme: "Inclusion sociale et handicap",
    internationalDay: "Journée Internationale des Personnes Handicapées",
    date: "Décembre 2026",
    location: "Dakar",
    film: {
      title: "Ghadi",
      director: "Amin Dora",
      producer: "Gabriel Chamoun",
      country: "Liban",
      duration: "100 min",
      genre: "Fiction / Comédie dramatique",
      language: "Arabe",
      subtitles: "Français",
      synopsis:
        "Après plusieurs années passées à l'étranger, Leba et Lara reviennent s'installer dans leur quartier d'enfance à Beyrouth. Leur bonheur est immense lorsqu'ils donnent naissance à leur troisième enfant, Ghadi. Mais très vite, ils découvrent que celui-ci est porteur d'une différence. Alors que le voisinage manifeste son incompréhension, la famille va devoir faire face aux préjugés et transformer cette différence en force.",
      recognition:
        "Plus de 17 000 entrées dans les cinémas libanais lors de sa première semaine de sortie.",
    },
    objectives: [
      "Sensibiliser le grand public aux questions du handicap",
      "Promouvoir les droits des personnes vivant avec un handicap",
      "Valoriser les initiatives des associations spécialisées",
      "Favoriser les échanges entre décideurs, experts, familles et société civile",
      "Encourager le développement de partenariats en faveur de l'inclusion",
      "Mobiliser des ressources au profit des organisations partenaires",
    ],
    themes: [
      "Inclusion sociale",
      "Handicap et différence",
      "Lutte contre les préjugés",
      "Rôle de la famille",
      "Vivre-ensemble",
      "Dignité humaine",
      "Espoir et résilience",
    ],
    targetAudiences: [
      "Institutions publiques",
      "Organisations internationales",
      "Associations et ONG",
      "Professionnels de la santé",
      "Entreprises publiques et privées",
      "Universités et établissements scolaires",
      "Médias",
      "Grand public",
    ],
  },
  {
    year: 2027,
    status: "in-progress",
    title: "Édition 2027",
    description:
      "La prochaine édition de CINECLUB – DÎNER DÉBAT est actuellement en préparation. Les informations relatives à la thématique, à la programmation et au déroulement de cette édition seront annoncées prochainement.",
  },
];

// --- Sponsoring ---

export const sponsorBenefits: SponsorBenefit[] = [
  { label: "Affiche et Bâche", bronze: true, silver: true, gold: true },
  { label: "Flyers", bronze: true, silver: true, gold: true },
  { label: "Carte d'invitation", bronze: true, silver: true, gold: true },
  { label: "Kakémonos", bronze: true, silver: true, gold: true },
  { label: "Spots télé + avant et après écran", bronze: false, silver: true, gold: true },
  { label: "Spots radio", bronze: false, silver: true, gold: true },
  { label: "Plateforme numérique et réseaux sociaux", bronze: false, silver: true, gold: true },
  { label: "Accueil hôtesses aux couleurs du sponsor", bronze: false, silver: false, gold: true },
  { label: "Box cadeaux « Këllu Wurus » avec logo sponsor", bronze: false, silver: false, gold: true },
  { label: "E-ticketing de l'événementiel", bronze: false, silver: false, gold: true },
];

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Bronze",
    colorHex: "#C97B5A",
    description:
      "Visibilité sur les supports de communication imprimés et numériques de l'événement.",
    benefits: [
      "Affiche et Bâche",
      "Flyers",
      "Carte d'invitation",
      "Kakémonos",
    ],
  },
  {
    name: "Argent",
    colorHex: "#A8A8A8",
    description:
      "Visibilité étendue incluant les médias audiovisuels et les plateformes numériques.",
    benefits: [
      "Affiche et Bâche",
      "Flyers",
      "Carte d'invitation",
      "Kakémonos",
      "Spots télé + avant et après écran",
      "Spots radio",
      "Plateforme numérique et réseaux sociaux",
    ],
  },
  {
    name: "Or",
    colorHex: "#D4AF37",
    description:
      "Visibilité maximale avec présence personnalisée et expérience VIP complète.",
    benefits: [
      "Affiche et Bâche",
      "Flyers",
      "Carte d'invitation",
      "Kakémonos",
      "Spots télé + avant et après écran",
      "Spots radio",
      "Plateforme numérique et réseaux sociaux",
      "Accueil hôtesses aux couleurs du sponsor",
      "Box cadeaux « Këllu Wurus » avec logo sponsor",
      "E-ticketing de l'événementiel",
    ],
  },
];

export const sponsorReasons = [
  "Associer son image à une initiative culturelle et engagée",
  "Soutenir une cause sociale ou humanitaire",
  "Bénéficier d'une visibilité auprès d'un public qualifié",
  "Développer son réseau",
  "Rencontrer institutions et acteurs économiques",
  "Contribuer à une action porteuse de sens",
  "Renforcer son engagement sociétal",
];

// --- Contact ---

export const cineclubContact: CineclubContact = {
  structure: "KOOM COM GROUPE",
  manager: "Amadou Thior — Gérant",
  address: "N° 69 TE Cité Diamalaye 2, Dakar – Sénégal",
  phones: ["+221 77 656 56 60", "+221 33 820 29 31"],
  email: "thioramadou@gmail.com",
};

// --- Navigation du projet ---

export const cineclubNav = [
  { label: "Présentation", href: "/projets/cineclub-diner-debat" },
  { label: "Concept", href: "/projets/cineclub-diner-debat/concept" },
  { label: "Déroulement", href: "/projets/cineclub-diner-debat/deroulement" },
  { label: "Éditions", href: "/projets/cineclub-diner-debat/editions" },
  { label: "Sponsors", href: "/projets/cineclub-diner-debat/sponsors" },
];

// --- Palette CineClub ---

export const cineclubColors = {
  green: "#1F4D1E",
  greenLight: "#2E5C1E",
  gold: "#D4AF37",
  goldLight: "#E0B84B",
  terracotta: "#C97B5A",
  silver: "#A8A8A8",
  ivory: "#FAFAF8",
  black: "#1A1A1A",
};

export type CineclubProject = typeof cineclubProject;
