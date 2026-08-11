// content/awards.ts
// Distinctions et sélections en festivals — données considérées comme confirmées.

import { Award } from "./types";

export const awards: Award[] = [
  {
    year: "1985",
    title: "Grand Prix de la CEE — FESPACO",
    work: "Xareek Maral",
    organization: "FESPACO (meilleur court-métrage sur le développement)",
    status: "confirmed",
    sources: [
      { title: "Fiche Amadou Thior", publisher: "Africultures" },
      { title: "Article Grand Prix FESPACO 1985", publisher: "ladepeche.fr" },
    ],
  },
  {
    year: "2001",
    title: "Prix spécial Plan International",
    work: "Almodou",
    organization: "FESPACO — catégorie long métrage pour les enfants",
    status: "confirmed",
    sources: [{ title: "Prix Plan International — FESPACO 2001", publisher: "Africultures" }],
  },
  {
    year: "2001",
    title: "Sélection — Festival de Milan",
    work: "Almodou",
    status: "confirmed",
    sources: [{ title: "Sélections festivals", publisher: "Wikipedia" }],
  },
  {
    year: "2002",
    title: "Sélection — Vues d'Afrique",
    work: "Almodou",
    organization: "Vues d'Afrique, Montréal",
    status: "confirmed",
    sources: [{ title: "Sélections festivals", publisher: "Wikipedia" }],
  },
];
