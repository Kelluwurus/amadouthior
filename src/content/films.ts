// content/films.ts
// Source unique de vérité pour toutes les fiches films.
// Toute modification ici se répercute automatiquement
// dans la filmographie, les fiches détaillées et la page d'accueil.

// --- Interfaces ---

export type DataStatus = "verified" | "to_confirm" | "incomplete";

export interface FilmAward {
  title: string;
  year?: string;
  status?: DataStatus;
}

export interface FilmData {
  slug: string;
  title: string;
  originalTitle?: string;
  year?: string;
  yearStatus?: DataStatus;
  type: string;
  genre?: string;
  duration?: string;
  durationNote?: string;
  format?: string;
  director?: string;
  screenplay?: string;
  producer?: string;
  productionCompany?: string;
  language?: string;
  subtitles?: string;
  synopsis?: string;
  synopsisStatus?: DataStatus;
  technicalSheet?: string[];
  roleOfAmadouThior: string;
  awards?: FilmAward[];
  festivals?: string[];
  broadcasts?: string[];
  distribution?: string[];
  collection?: string;
  audience?: string;
  relatedWorks?: string[];
  images?: string[];
  notes?: string;
  dataStatus: DataStatus;
}

// --- Données ---

export const films: FilmData[] = [
  {
    slug: "xareek-maral",
    title: "Xareek Maral / Halte au désert",
    originalTitle: "Xareek Maral",
    year: "1982",
    yearStatus: "verified",
    type: "Documentaire",
    genre: "Documentaire",
    duration: "30 min",
    format: "16 mm couleur",
    director: "Amadou Thior",
    roleOfAmadouThior: "Réalisateur",
    awards: [
      {
        title: "1er Prix de la CEE au FESPACO 1985 — catégorie meilleur film sur le développement",
        year: "1985",
        status: "verified",
      },
    ],
    notes:
      "Premier film à affirmer la vision cinématographique d'Amadou Thior. Œuvre fondatrice de son parcours, distinguée lors de la plus importante manifestation panafricaine de cinéma.",
    dataStatus: "verified",
  },
  {
    slug: "exchange-cross-road",
    title: "Exchange Cross Road",
    year: "1994",
    yearStatus: "verified",
    type: "Documentaire",
    genre: "Documentaire",
    director: "Amadou Thior",
    roleOfAmadouThior: "Réalisateur",
    notes: "Données principalement issues du CV — fiche filmographique à compléter.",
    dataStatus: "incomplete",
  },
  {
    slug: "mariage-precoce",
    title: "Mariage précoce",
    year: "1995",
    yearStatus: "verified",
    type: "Fiction / Drame",
    genre: "Fiction",
    duration: "19 min",
    director: "Amadou Thior",
    roleOfAmadouThior: "Réalisateur",
    productionCompany: "Consultants et Réalisateurs Associés",
    notes: "Soutien de l'Organisation internationale de la Francophonie.",
    festivals: ["Milan", "Carthage", "FESPACO"],
    distribution: ["Cinémathèque Afrique"],
    dataStatus: "verified",
  },
  {
    slug: "almodou",
    title: "Almodou",
    year: "2000",
    yearStatus: "verified",
    type: "Fiction",
    genre: "Fiction",
    duration: "85 min",
    director: "Amadou Thior",
    screenplay: "Amadou Thior",
    roleOfAmadouThior: "Réalisateur et scénariste",
    productionCompany: "Consultants et Réalisateurs Associés",
    language: "Wolof",
    subtitles: "Français",
    synopsis:
      "Le film traite de la situation d'un jeune garçon confié à un maître coranique et confronté à la mendicité et aux violences liées à son exploitation.",
    synopsisStatus: "verified",
    awards: [
      {
        title: "Prix Plan International / Children's Right — FESPACO 2001",
        year: "2001",
        status: "verified",
      },
    ],
    festivals: ["Festival de Milan", "Vues d'Afrique, Montréal"],
    broadcasts: ["RTS", "CFI", "TV5"],
    dataStatus: "verified",
  },
  {
    slug: "mayelle",
    title: "Mayelle",
    type: "Fiction courte — Jeune public",
    genre: "Fiction",
    durationNote: "Durée à confirmer (sources divergentes : 26 min / 32 min)",
    director: "Amadou Thior",
    roleOfAmadouThior: "Réalisateur",
    collection: "« Contes à Rebours »",
    audience: "Enfants de 8 à 12 ans",
    dataStatus: "to_confirm",
  },
  {
    slug: "meissa-pote-ndiaye-milliardaire",
    title: "Meissa Pote / Ndiaye Milliardaire",
    year: "2006",
    yearStatus: "verified",
    type: "Téléfilm de fiction",
    genre: "Téléfilm",
    duration: "2 × 45 min",
    director: "Amadou Thior",
    roleOfAmadouThior: "Réalisateur",
    productionCompany: "TAF Production",
    notes: "Données principalement issues du CV — fiche filmographique primaire à compléter.",
    dataStatus: "incomplete",
  },
  {
    slug: "bien-etre-pour-tous",
    title: "Bien-être pour Tous",
    year: "1996–1997",
    yearStatus: "verified",
    type: "Production déléguée",
    genre: "Production",
    roleOfAmadouThior: "Producteur délégué",
    relatedWorks: ["Nef", "Kiné", "Coumba"],
    awards: [
      {
        title: "Prix CILSS au FESPACO 1999",
        year: "1999",
        status: "verified",
      },
    ],
    broadcasts: ["CFI", "TV5", "Télévisions d'Afrique francophone", "RTS"],
    dataStatus: "verified",
  },
];

// --- Helpers ---

export function getFilmBySlug(slug: string): FilmData | undefined {
  return films.find((f) => f.slug === slug);
}

export const featuredFilms = films.filter(
  (f) => f.slug === "xareek-maral" || f.slug === "almodou"
);
