// lib/content.ts
// Sélecteurs de contenu — importent les JSON et exposent des fonctions typées

import bioData from "@/content/bio.json";
import filmographyData from "@/content/filmography.json";
import timelineData from "@/content/timeline.json";
import expertiseData from "@/content/expertise.json";
import transmissionData from "@/content/transmission.json";
import cineclubData from "@/content/cineclub.json";

import type {
  BioDonnees,
  Oeuvre,
  EvenementTimeline,
  ExpertiseDonnees,
  TransmissionDonnees,
  CineclubDonnees,
  EditionCineclub,
} from "./types";

// --- Bio ---
export function getBio(): BioDonnees {
  return bioData as unknown as BioDonnees;
}

// --- Œuvres ---
export function getAllOeuvres(): Oeuvre[] {
  return filmographyData as unknown as Oeuvre[];
}

export function getOeuvreBySlug(slug: string): Oeuvre | undefined {
  return getAllOeuvres().find((o) => o.slug === slug);
}

export function getOeuvresByCategorie(
  cat: "realisation" | "production" | "collaboration"
): Oeuvre[] {
  return getAllOeuvres().filter((o) => o.categorie === cat);
}

// --- Timeline ---
export function getTimeline(): EvenementTimeline[] {
  return timelineData as unknown as EvenementTimeline[];
}

// --- Expertise ---
export function getExpertise(): ExpertiseDonnees {
  return expertiseData as unknown as ExpertiseDonnees;
}

// --- Transmission ---
export function getTransmission(): TransmissionDonnees {
  return transmissionData as unknown as TransmissionDonnees;
}

// --- CINECLUB ---
export function getCineclub(): CineclubDonnees {
  return cineclubData as unknown as CineclubDonnees;
}

export function getCineclubEditions(): EditionCineclub[] {
  return getCineclub().editions;
}

export function getCineclubEdition(annee: string): EditionCineclub | undefined {
  return getCineclubEditions().find((e) => e.annee === annee);
}

export function getPartenariats() {
  return getCineclub().partenariat;
}
