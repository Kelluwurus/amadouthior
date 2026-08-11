// content/timeline.ts
// Timeline "Un parcours au service de l'audiovisuel sénégalais"
// Données considérées comme confirmées.

import { TimelineEvent } from "./types";

export const timeline: TimelineEvent[] = [
  {
    year: "1951",
    title: "Naissance",
    description: "Naissance à Boulel, Sine-Saloum, Sénégal (23 juillet).",
    category: "formation",
    status: "confirmed",
  },
  {
    year: "1977",
    title: "Formation à Louis-Lumière",
    description:
      "Diplômé de l'École Nationale Supérieure Louis-Lumière à Paris, promotion 1977.",
    category: "formation",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    year: "1981",
    title: "Ministère de la Culture",
    description:
      "Réalisateur, chargé des études techniques au Bureau du Cinéma du Ministère de la Culture et de la Communication du Sénégal (1981–1988).",
    category: "institution",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    year: "1985",
    title: "Xareek Maral — Grand Prix FESPACO",
    description:
      "Réalisation du documentaire Xareek Maral, récompensé du Grand Prix de la CEE au FESPACO 1985, meilleur court-métrage sur le développement.",
    category: "award",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    year: "1987",
    title: "Camp de Thiaroye",
    description:
      "Assistant réalisateur d'Ousmane Sembène sur Camp de Thiaroye.",
    category: "film",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    year: "1988",
    title: "RTS",
    description: "Réalisateur détaché à la Radiodiffusion Télévision Sénégalaise (1988–1989).",
    category: "institution",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    year: "1992",
    title: "Guelwaar",
    description: "Assistant réalisateur d'Ousmane Sembène sur Guelwaar.",
    category: "film",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    year: "1994",
    title: "Consultants & Réalisateurs Associés",
    description:
      "Cofondation avec Assane Diagne du GIE Consultants & Réalisateurs Associés, destiné à autoproduire des projets de fiction et documentaires.",
    category: "production",
    status: "confirmed",
    sources: [{ title: "Consultants & Réalisateurs Associés", publisher: "Africultures" }],
  },
  {
    year: "1995",
    title: "Mariage précoce",
    description:
      "Réalisation de Mariage précoce, fiction sur le mariage forcé, produite par Consultants & Réalisateurs Associés.",
    category: "film",
    status: "confirmed",
    sources: [{ title: "Catalogue Amadou Thior", publisher: "Institut français / IFcinéma" }],
  },
  {
    year: "2000",
    title: "Almodou",
    description:
      "Réalisation et scénario d'Almodou, long métrage sur l'exploitation des enfants talibés.",
    category: "film",
    status: "confirmed",
    sources: [{ title: "Notice Almodou", publisher: "BnF Catalogue général" }],
  },
  {
    year: "2001",
    title: "Prix Plan International — FESPACO",
    description:
      "Almodou reçoit le Prix spécial Plan International du film de long métrage pour les enfants au FESPACO 2001.",
    category: "award",
    status: "confirmed",
    sources: [{ title: "Prix Plan International — FESPACO 2001", publisher: "Africultures" }],
  },
  {
    year: "2002",
    title: "Mayelle",
    description:
      "Réalisation de Mayelle, court métrage de la collection \"Contes à Rebours\", diffusé sur CFI, TV5 et la RTS.",
    category: "film",
    status: "confirmed",
    sources: [{ title: "Catalogue Amadou Thior", publisher: "Institut français / IFcinéma" }],
  },
  {
    year: "2004",
    title: "Filmi Darou Wahab",
    description:
      "Le GIE Consultants & Réalisateurs Associés est remplacé par Filmi Darou Wahab ; Amadou Thior et Assane Diagne créent chacun leur société de production.",
    category: "production",
    status: "confirmed",
    sources: [{ title: "Consultants & Réalisateurs Associés", publisher: "Africultures" }],
  },
  {
    year: "2006",
    title: "Meissa Pote / Ndiaye Milliardaire",
    description: "Réalisation du téléfilm Meissa Pote / Ndiaye Milliardaire.",
    category: "film",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    year: "2024",
    title: "Formation des correspondants RTC",
    description:
      "Participation, aux côtés de Martin Faye, à une formation destinée aux correspondants de la Radio Télévision Communautaire, organisée avec l'URAC Sénégal.",
    category: "transmission",
    status: "confirmed",
    sources: [{ title: "Formation des correspondants RTC (août 2024)", publisher: "URAC Sénégal" }],
  },
  {
    year: "2025",
    title: "Mémoire et patrimoine audiovisuel",
    description:
      "Intervention citée dans un article de Sud Quotidien consacré au projet de cinémathèque nationale du Sénégal, à propos du fonctionnement historique de la Cinémathèque sénégalaise.",
    category: "patrimoine",
    status: "confirmed",
    sources: [{ title: "Article sur la cinémathèque nationale (juillet 2025)", publisher: "Sud Quotidien" }],
  },
];
