// lib/types.ts
// Interfaces TypeScript — source unique de vérité pour le typage du contenu

export type StatutDonnee = "confirme" | "a_confirmer";

export interface RoleAmadouThior {
  fonction:
    | "realisation"
    | "realisation_scenario"
    | "production_management"
    | "assistant_realisateur"
    | "producteur_delegue";
  label: string;
}

export interface Source {
  nom: string;
  url?: string;
}

export interface FicheTechniqueItem {
  label: string;
  valeur: string;
}

export interface Oeuvre {
  slug: string;
  titre: string;
  titreAlternatif?: string;
  annee: string;
  anneeStatut: StatutDonnee;
  genre: string;
  categorie: "realisation" | "production" | "collaboration";
  sousGenre?: "documentaire" | "fiction" | "television";
  duree?: string | null;
  dureeStatut?: StatutDonnee;
  pays?: string;
  langue?: string | null;
  role: RoleAmadouThior;
  synopsis?: string;
  ficheTechnique: FicheTechniqueItem[];
  distinctions?: string[];
  festivals?: string[];
  sources: Source[];
  image?: string;
}

export interface EvenementTimeline {
  periode: string;
  titre: string;
  description?: string;
  lienOeuvreSlug?: string | null;
  role?: string;
}

export interface TransmissionItem {
  nom: string;
  lieu?: string;
  periode?: string;
  description?: string;
}

export interface BlocTransmission {
  titre: string;
  items: TransmissionItem[];
}

export interface DomaineExpertise {
  titre: string;
  description: string;
}

export interface FonctionAssociative {
  titre: string;
  periode: string;
  description: string;
}

export interface EditionCineclubFilm {
  titre: string;
  realisateur?: string | null;
  pourquoi?: string | null;
}

export interface EditionCineclub {
  annee: string;
  statut: "passee" | "a_venir" | "en_preparation";
  lieu?: string | null;
  date?: string;
  film?: EditionCineclubFilm | null;
  theme?: string;
  objectifs?: string[];
  resultats?: string[];
  sources: Source[];
}

export interface CategoriePartenariat {
  nom: string;
  description: string;
  avantages: string[];
}

export interface CinqTemps {
  numero: number;
  titre: string;
  description: string;
}

export interface ImpactItem {
  titre: string;
  description: string;
}

export interface BioDonnees {
  nom: string;
  nationalite: string;
  naissance: {
    date: string;
    lieu: string;
    statut: string;
    sources: Source[];
  };
  titreCourt: string;
  signatureMarque: string;
  resumeExecutif: string;
  dureeCarriere: string;
  fonctions: string[];
  formation: {
    principale: {
      etablissement: string;
      periode: string;
      diplome: string;
      sources: Source[];
    };
    complementaires: {
      annee: string;
      intitule: string;
      lieu?: string;
    }[];
    outils: string[];
  };
  filRouge: {
    texte: string;
    note: string;
  };
  sourcesGenerales: Source[];
}

export interface ExpertiseDonnees {
  intro: string;
  domaines: DomaineExpertise[];
  fonctionsAssociatives: FonctionAssociative[];
  sources: Source[];
}

export interface TransmissionDonnees {
  intro: string;
  blocs: BlocTransmission[];
  sources: Source[];
}

export interface CineclubDonnees {
  titre: string;
  sousTitre: string;
  slogan: string;
  manifeste: string;
  accroche: string;
  porteurProjet: string;
  description: string;
  resumeExecutif: string;
  citation: string;
  citationAuteur: string;
  motDuPromoteur: string[];
  cinqTemps: CinqTemps[];
  chaineDeValeur: string[];
  distingue: string[];
  ecosysteme: string[];
  cibles: string[];
  impact: ImpactItem[];
  editions: EditionCineclub[];
  partenariat: {
    accroche: string;
    avantagesGeneraux: string[];
    categories: CategoriePartenariat[];
    note: string;
    imageOffres?: string;
  };
  partenairesPrives: string[];
  partenairesInstitutionnels: string[];
  organisateur: {
    structure: string;
    gerant: string;
    adresse: string;
    telephones: string[];
    email: string;
    logo: string;
  };
  sources: Source[];
}
