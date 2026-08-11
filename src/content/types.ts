// ============================================
// AMADOU THIOR — PORTFOLIO & ARCHIVES
// TypeScript Interfaces
// ============================================

// --- Sources & References ---

export interface Source {
  title: string;
  url?: string;
  publisher?: string;
  date?: string;
}

// --- Films & Filmography ---

export type FilmType =
  | "documentaire"
  | "fiction"
  | "long-metrage"
  | "court-metrage"
  | "telefilm";

export interface Credit {
  role: string;
  name: string;
}

export interface Film {
  slug: string;
  title: string;
  year?: number;
  type: FilmType;
  duration?: string;
  country?: string;
  language?: string;
  director?: string;
  writer?: string;
  production?: string;
  synopsis?: string;
  context?: string;
  image?: string;
  poster?: string;
  trailer?: string;
  awards?: Award[];
  festivals?: string[];
  cast?: string[];
  credits?: Credit[];
  sources?: Source[];
  featured?: boolean;
  status?: "confirmed" | "to-confirm";
}

// --- Timeline ---

export type TimelineCategory =
  | "formation"
  | "realisation"
  | "collaboration"
  | "institution"
  | "production"
  | "transmission";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category?: TimelineCategory;
  image?: string;
  link?: string;
}

// --- Awards & Distinctions ---

export interface Award {
  year: number;
  title: string;
  festival: string;
  film?: string;
  filmSlug?: string;
  source?: Source;
}

// --- Archives ---

export type ArchiveCategory =
  | "photographie"
  | "tournage"
  | "affiche"
  | "document"
  | "presse"
  | "festival"
  | "portrait"
  | "video";

export interface ArchiveItem {
  id: string;
  title: string;
  category: ArchiveCategory;
  year?: string;
  description?: string;
  image: string;
  credit?: string;
  source?: Source;
}

// --- Articles / Actualités ---

export type ArticleCategory =
  | "actualite"
  | "cinema"
  | "patrimoine"
  | "formation"
  | "presse"
  | "archives";

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: ArticleCategory;
  excerpt: string;
  content: string;
  image?: string;
  source?: Source;
}

// --- Collaborations ---

export interface Collaboration {
  name: string;
  role?: string;
  period?: string;
  description: string;
  type: "personne" | "institution" | "production";
  image?: string;
  films?: string[];
}

// --- Biography ---

export interface BiographySection {
  id: string;
  title: string;
  content: string;
  sources?: Source[];
}

// --- Navigation ---

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// --- Site Metadata ---

export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  signature: string;
  description: string;
  url?: string;
  locale: string;
}
