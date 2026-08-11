// content/biography.ts
// Contenu biographique — statut "vérifié" basé sur Africultures, IFcinéma, BnF.
// Toute information non confirmée est marquée explicitement.

import { Source } from "./types";

export const biographySources: Source[] = [
  { title: "Fiche Amadou Thior", publisher: "Africultures" },
  { title: "Catalogue Amadou Thior", publisher: "Institut français / IFcinéma" },
  { title: "Notice Almodou", publisher: "BnF Catalogue général" },
  { title: "Fiche Amadou Thior", publisher: "IMDb" },
  { title: "Consultants & Réalisateurs Associés", publisher: "Africultures" },
  { title: "Formation des correspondants RTC (août 2024)", publisher: "URAC Sénégal" },
  { title: "Article sur la cinémathèque nationale (juillet 2025)", publisher: "Sud Quotidien" },
];

export const identity = {
  fullName: "Amadou Thior",
  roles: ["Réalisateur", "Producteur", "Scénariste", "Formateur audiovisuel"],
  tagline: "Une vie consacrée au cinéma, à l'audiovisuel et à la transmission.",
  birthDate: "23 juillet 1951",
  birthPlace: "Boulel, Sine-Saloum, Sénégal",
  status: "confirmed" as const,
};

export const biographySections = {
  formation: {
    title: "Formation",
    period: "1977",
    text:
      "Amadou Thior s'est formé à l'École Nationale Supérieure Louis-Lumière à Paris, promotion 1977.",
    status: "confirmed" as const,
  },

  debuts: {
    title: "Débuts professionnels — Ministère de la Culture",
    period: "1981 – 1988",
    text:
      "Réalisateur, chargé des études techniques au Bureau du Cinéma du Ministère de la Culture et de la Communication du Sénégal, de 1981 à 1988.",
    status: "confirmed" as const,
  },

  rts: {
    title: "RTS — Radiodiffusion Télévision Sénégalaise",
    period: "1988 – 1989",
    text: "Réalisateur détaché à la RTS en 1988-1989.",
    status: "confirmed" as const,
  },

  sembene: {
    title: "Collaboration avec Ousmane Sembène",
    period: "1987 – 1992",
    text:
      "Amadou Thior a été assistant réalisateur d'Ousmane Sembène sur Camp de Thiaroye (1987), puis sur Guelwaar (1992). Il convient de toujours présenter précisément ce rôle : assistant réalisateur, et non réalisateur principal de ces deux œuvres, qui restent des films d'Ousmane Sembène.",
    status: "confirmed" as const,
  },

  production: {
    title: "Production — Consultants & Réalisateurs Associés",
    period: "1994 – 2004",
    text:
      "En 1994, Amadou Thior cofonde avec Assane Diagne le GIE Consultants & Réalisateurs Associés (CRA), une structure destinée notamment à autoproduire leurs projets de fiction et documentaires. La structure a porté plusieurs projets, dont Almodou. En 2004, elle est remplacée par Filmi Darou Wahab, et les deux réalisateurs créent chacun leur propre société de production.",
    status: "confirmed" as const,
  },

  realisation: {
    title: "Réalisation",
    period: "1980s – 2006",
    text:
      "Réalisateur et scénariste de plusieurs œuvres documentaires, fictions et téléfilms, dont Xareek Maral, Mariage précoce, Almodou, Mayelle et Meissa Pote / Ndiaye Milliardaire. Voir la section Œuvre pour le détail de chaque film.",
    status: "confirmed" as const,
  },

  transmission: {
    title: "Transmission",
    period: "2024 – aujourd'hui",
    text:
      "Présenté par Africultures comme formateur et consultant audiovisuel, et comme Directeur des études de l'IPMICA. En août 2024, il participe avec Martin Faye à une formation destinée aux correspondants de la Radio Télévision Communautaire (RTC), organisée avec l'URAC Sénégal, portant sur la couverture de l'actualité locale, la collecte d'informations et le travail en équipe.",
    status: "confirmed" as const,
  },

  patrimoine: {
    title: "Mémoire et patrimoine audiovisuel",
    period: "2025",
    text:
      "Cité en juillet 2025 dans un article de Sud Quotidien consacré à la nécessité pour le Sénégal de se doter d'une cinémathèque nationale, à propos du fonctionnement historique de la Cinémathèque sénégalaise et de l'acquisition des droits non commerciaux de films.",
    status: "confirmed" as const,
  },

  today: {
    title: "Aujourd'hui",
    period: "2025+",
    text:
      "Amadou Thior apparaît également comme ambassadeur de la Communauté Teranga pour l'Intelligence Artificielle. Ce rôle doit être présenté tel qu'il est documenté, sans suggérer une expertise technique en IA — il s'inscrit dans le prolongement de son parcours de transmission.",
    status: "confirmed" as const,
  },
};

// Note : à la demande explicite du client, l'ensemble des données textuelles
// (biographie, filmographie, timeline, distinctions, collaborations) est traité
// comme confirmé pour cette phase du projet. Les éléments suivants restent
// toutefois des ACTIFS MÉDIA (et non des informations factuelles) à obtenir
// directement auprès d'Amadou Thior avant mise en ligne, car ils ne peuvent pas
// être extraits d'une recherche web : photographie officielle haute résolution,
// archives personnelles (photos de tournage, affiches originales), extraits
// vidéo / bandes-annonces avec droits de diffusion confirmés, et coordonnées
// professionnelles à afficher publiquement.
export const mediaAssetsToRequest = [
  "Photographie officielle haute résolution",
  "Archives personnelles (photos de tournage, affiches originales)",
  "Extraits vidéo / bandes-annonces avec droits de diffusion confirmés",
  "Coordonnées professionnelles à afficher publiquement sur le site",
];
