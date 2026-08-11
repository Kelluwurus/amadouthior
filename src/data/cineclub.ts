export interface ConceptStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface Edition {
  id: string;
  year: number;
  filmTitle: string;
  director: string;
  producer?: string;
  country: string;
  duration: string;
  genre: string;
  synopsis: string;
  context: string;
  objectives?: string[];
  themes?: string[];
  audiences?: string[];
  highlight?: string;
  media?: string[];
}

export interface SponsorTier {
  name: string;
  color: string;
  bgClass: string;
  borderClass: string;
  features: Record<string, boolean>;
}

export interface CineClubContact {
  organization: string;
  manager: string;
  role: string;
  address: string;
  phones: string[];
  email: string;
}

// --- Concept Steps ---
export const conceptSteps: ConceptStep[] = [
  {
    number: 1,
    title: "La Projection",
    description: "Un film de qualité, sélectionné en lien avec une Journée Internationale de l'ONU, projeté dans un cadre prestigieux.",
    icon: "film",
  },
  {
    number: 2,
    title: "Le Dîner",
    description: "Un moment convivial de partage autour d'un repas gastronomique, favorisant les échanges informels.",
    icon: "utensils",
  },
  {
    number: 3,
    title: "Le Débat",
    description: "Une table ronde animée par des experts et personnalités, confrontant les regards sur la thématique du film.",
    icon: "message-circle",
  },
  {
    number: 4,
    title: "La Mise en réseau",
    description: "Tisser des liens entre acteurs institutionnels, société civile, artistes et mécènes autour d'une cause commune.",
    icon: "users",
  },
  {
    number: 5,
    title: "L'Action",
    description: "Transformer l'émotion en engagement concret : collecte, plaidoyer, sensibilisation, appui à des associations.",
    icon: "heart-handshake",
  },
];

export const valueChain = [
  "Émouvoir",
  "Comprendre",
  "Dialoguer",
  "Mobiliser",
  "Agir",
];

export const distinctivePoints = [
  "Un concept original alliant culture, gastronomie et engagement citoyen",
  "Chaque édition adossée à une Journée Internationale de l'ONU",
  "Des films rares, de qualité, porteurs de sens et d'humanité",
  "Un cadre prestigieux favorisant le dialogue entre décideurs et société civile",
  "Une visibilité médiatique forte (TV, radio, presse, digital)",
  "Un impact social mesurable à chaque édition",
];

// --- Editions ---
export const editions: Edition[] = [
  {
    id: "marcedes-2016",
    year: 2016,
    filmTitle: "Marcedes",
    director: "Hady Zaccak",
    country: "Liban",
    duration: "68 min",
    genre: "Documentaire",
    synopsis:
      "Marcedes retrace l'histoire de la Mercedes-Benz au Liban, symbole de statut social, d'exil et de mémoire. À travers ce véhicule iconique, le film explore les fractures et les espoirs d'un pays marqué par la guerre civile.",
    context:
      "Projection au Grand Théâtre National de Dakar, sous le haut parrainage du Ministre de la Culture du Sénégal, en présence de S.E. l'Ambassadeur du Liban au Sénégal. L'événement a réuni personnalités culturelles, diplomates et acteurs de la société civile autour d'un dîner-débat sur le thème du dialogue interculturel.",
    media: [
      "Interview sur Vibe Radio",
      "Passage dans l'émission « Kenkelibaa » sur la RTS",
    ],
  },
  {
    id: "ghadi-2026",
    year: 2026,
    filmTitle: "Ghadi",
    director: "Amin Dora",
    producer: "Gabriel Chamoun",
    country: "Liban",
    duration: "100 min",
    genre: "Fiction / Comédie dramatique",
    synopsis:
      "Ghadi raconte l'histoire d'un père de famille qui, pour protéger son fils handicapé des moqueries du voisinage, invente un stratagème extraordinaire : faire croire que l'enfant est un ange envoyé du ciel. Une fable universelle sur l'acceptation de la différence.",
    context:
      "Édition organisée à l'occasion de la Journée Internationale des Personnes Handicapées (3 décembre). Dakar, décembre 2026.",
    highlight: "Journée Internationale des Personnes Handicapées — Dakar, décembre 2026",
    objectives: [
      "Sensibiliser le grand public aux droits et à la dignité des personnes en situation de handicap",
      "Favoriser le dialogue entre institutions, familles et associations spécialisées",
      "Mobiliser les décideurs autour de politiques d'inclusion concrètes",
      "Créer un moment de solidarité et de convivialité autour d'une œuvre cinématographique porteuse d'espoir",
      "Renforcer la visibilité des acteurs engagés pour l'inclusion au Sénégal",
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
    audiences: [
      "Décideurs institutionnels et politiques",
      "Associations et ONG du handicap",
      "Familles et éducateurs",
      "Professionnels de la santé et du social",
      "Communauté artistique et culturelle",
      "Grand public sensibilisé",
    ],
  },
];

// --- Sponsoring ---
export const sponsorFeatureLabels = [
  "Affiche et Bâche",
  "Flyers",
  "Carte d'invitation",
  "Kakémonos",
  "Spots télé",
  "Spots radio",
  "Plateforme numérique et réseaux sociaux",
  "Accueil hôtesses",
  "Box cadeaux « Këllu Wurus »",
  "E-ticketing",
];

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Bronze",
    color: "#C97B5A",
    bgClass: "bg-[#C97B5A]",
    borderClass: "border-[#C97B5A]",
    features: {
      "Affiche et Bâche": true,
      "Flyers": true,
      "Carte d'invitation": true,
      "Kakémonos": false,
      "Spots télé": false,
      "Spots radio": false,
      "Plateforme numérique et réseaux sociaux": true,
      "Accueil hôtesses": false,
      "Box cadeaux « Këllu Wurus »": false,
      "E-ticketing": true,
    },
  },
  {
    name: "Argent",
    color: "#A8A8A8",
    bgClass: "bg-[#A8A8A8]",
    borderClass: "border-[#A8A8A8]",
    features: {
      "Affiche et Bâche": true,
      "Flyers": true,
      "Carte d'invitation": true,
      "Kakémonos": true,
      "Spots télé": false,
      "Spots radio": true,
      "Plateforme numérique et réseaux sociaux": true,
      "Accueil hôtesses": true,
      "Box cadeaux « Këllu Wurus »": false,
      "E-ticketing": true,
    },
  },
  {
    name: "Or",
    color: "#D4AF37",
    bgClass: "bg-[#D4AF37]",
    borderClass: "border-[#D4AF37]",
    features: {
      "Affiche et Bâche": true,
      "Flyers": true,
      "Carte d'invitation": true,
      "Kakémonos": true,
      "Spots télé": true,
      "Spots radio": true,
      "Plateforme numérique et réseaux sociaux": true,
      "Accueil hôtesses": true,
      "Box cadeaux « Këllu Wurus »": true,
      "E-ticketing": true,
    },
  },
];

// --- Contact ---
export const cineclubContact: CineClubContact = {
  organization: "KOOM COM GROUPE",
  manager: "Amadou Thior",
  role: "Gérant",
  address: "N° 69 TE Cité Diamalaye 2, Dakar – Sénégal",
  phones: ["(+221) 77 656 56 60", "(+221) 33 820 29 31"],
  email: "thioramadou@gmail.com",
};
