// content/films.ts
// Filmographie d'Amadou Thior — données considérées comme confirmées
// conformément à la synthèse de recherche fournie (Africultures, IFcinéma, BnF, IMDb).

import { Film } from "./types";

export const films: Film[] = [
  {
    slug: "xareek-maral",
    title: "Xareek Maral",
    year: 1985,
    yearStatus: "confirmed",
    type: "Documentaire",
    duration: "30 min",
    country: "Sénégal",
    director: "Amadou Thior",
    synopsis:
      "Documentaire consacré à la lutte contre la sécheresse au Sénégal, reconnu comme meilleur court-métrage sur le développement.",
    awards: ["Grand Prix de la CEE — FESPACO 1985 (meilleur court-métrage sur le développement)"],
    festivals: ["FESPACO 1985"],
    sources: [
      { title: "Fiche Amadou Thior", publisher: "Africultures" },
      { title: "Article Grand Prix FESPACO 1985", publisher: "ladepeche.fr" },
    ],
    featured: true,
    status: "confirmed",
  },
  {
    slug: "halte-au-desert",
    title: "Halte au Désert",
    type: "Documentaire",
    country: "Sénégal",
    director: "Amadou Thior",
    synopsis:
      "Documentaire réalisé par Amadou Thior, référencé dans sa filmographie par Africultures.",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
    status: "confirmed",
  },
  {
    slug: "mariage-precoce",
    title: "Mariage précoce",
    year: 1995,
    yearStatus: "confirmed",
    type: "Fiction",
    duration: "19 min",
    country: "Sénégal",
    language: "Wolof",
    director: "Amadou Thior",
    production: "Consultants & Réalisateurs Associés",
    synopsis:
      "Bana, 13 ans, est mariée de force à un homme plus âgé. Le film suit sa tentative d'échapper à ce mariage, abordant les questions de droits des femmes et de droits humains.",
    credits: ["Distribution : Cinémathèque Afrique / Institut français"],
    sources: [
      { title: "Catalogue Amadou Thior", publisher: "Institut français / IFcinéma" },
      { title: "Fiche Mariage précoce", publisher: "Images Francophones" },
    ],
    featured: true,
    status: "confirmed",
  },
  {
    slug: "exchange-cross-road",
    title: "Exchange Cross Road",
    year: 1994,
    yearStatus: "confirmed",
    type: "Documentaire",
    country: "Sénégal",
    director: "Amadou Thior",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
    status: "confirmed",
  },
  {
    slug: "almodou",
    title: "Almodou",
    year: 2000,
    yearStatus: "confirmed",
    type: "Long métrage",
    duration: "85 min",
    country: "Sénégal",
    language: "Wolof",
    director: "Amadou Thior",
    writer: "Amadou Thior",
    production: "Consultants & Réalisateurs Associés",
    synopsis:
      "L'histoire de Modou, jeune garçon talibé confronté à l'exploitation et à la mendicité forcée.",
    awards: [
      "Prix spécial Plan International du film de long métrage pour les enfants — FESPACO 2001",
    ],
    festivals: ["FESPACO 2001", "Festival de Milan", "Vues d'Afrique — Montréal 2002"],
    cast: [
      "Doudou Guillaume Faye",
      "Ndèye Fatou Dione",
      "Bassirou Diakhate",
      "Die Astou Diop",
      "Mamadou Pene",
      "Djibril Gueye",
      "Moustapha Niang",
    ],
    sources: [
      { title: "Notice Almodou", publisher: "BnF Catalogue général" },
      { title: "Fiche Almodou", publisher: "IMDb" },
      { title: "Prix Plan International — FESPACO 2001", publisher: "Africultures" },
      { title: "Sélections festivals", publisher: "Wikipedia" },
    ],
    featured: true,
    status: "confirmed",
  },
  {
    slug: "mayelle",
    title: "Mayelle",
    year: 2002,
    yearStatus: "confirmed",
    type: "Court métrage",
    duration: "27 min",
    country: "Sénégal",
    director: "Amadou Thior",
    synopsis:
      "Une jeune fille et sa famille sont confrontées à des difficultés économiques et sociales. Le film s'inscrit dans la collection africaine \"Contes à Rebours\", destinée aux enfants de 8 à 12 ans.",
    credits: [
      "Diffusion : CFI, TV5, télévisions d'Afrique francophone, RTS",
      "Collection : Contes à Rebours",
    ],
    sources: [
      { title: "Catalogue Amadou Thior", publisher: "Institut français / IFcinéma" },
      { title: "Fiche Amadou Thior", publisher: "Africultures" },
    ],
    featured: true,
    status: "confirmed",
  },
  {
    slug: "meissa-pote-ndiaye-milliardaire",
    title: "Meissa Pote / Ndiaye Milliardaire",
    year: 2006,
    yearStatus: "confirmed",
    type: "Téléfilm",
    country: "Sénégal",
    director: "Amadou Thior",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
    status: "confirmed",
  },
];

// Productions portées par le GIE Consultants & Réalisateurs Associés,
// mentionnées sans fiche technique complète disponible
export const craProductions = ["Almodou", "Nef", "Kiné", "Coumba"];

export const featuredFilms = films.filter((f) => f.featured);
