// content/types.ts
// Interfaces TypeScript communes à tout le contenu du site Amadou Thior

export interface Source {
  title: string;
  url?: string;
  publisher?: string;
  date?: string;
}

export interface Film {
  slug: string;
  title: string;
  year?: number | string; // string autorisé pour "années 1980" quand l'année exacte n'est pas confirmée
  yearStatus?: "confirmed" | "to-confirm";
  type: string; // "Documentaire" | "Fiction" | "Long métrage" | "Court métrage" | "Téléfilm"
  duration?: string;
  country?: string;
  language?: string;
  director?: string;
  writer?: string;
  production?: string;
  synopsis?: string;
  image?: string;
  trailer?: string;
  awards?: string[];
  festivals?: string[];
  cast?: string[];
  credits?: string[];
  sources?: Source[];
  featured?: boolean;
  status?: "confirmed" | "to-confirm"; // statut global de la fiche
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category?: "formation" | "institution" | "film" | "award" | "production" | "transmission" | "patrimoine";
  image?: string;
  status?: "confirmed" | "to-confirm";
  sources?: Source[];
}

export interface Award {
  year: string;
  title: string;
  work?: string; // titre du film associé
  organization?: string;
  status?: "confirmed" | "to-confirm";
  sources?: Source[];
}

export interface Collaboration {
  name: string;
  role: string; // description de la nature de la collaboration
  period?: string;
  relatedWorks?: string[];
  status?: "confirmed" | "to-confirm";
  sources?: Source[];
}
