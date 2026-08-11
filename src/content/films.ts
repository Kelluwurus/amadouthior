import type { Film } from "./types";

export const films: Film[] = [
  {
    slug: "almodou",
    title: "Almodou",
    year: 2000,
    type: "long-metrage",
    duration: "85 min",
    country: "Sénégal",
    language: "Wolof / Français",
    director: "Amadou Thior",
    production: "Consultants & Réalisateurs Associés",
    synopsis:
      "Almodou, un jeune garçon des rues de Dakar, lutte quotidiennement pour sa survie dans un environnement hostile. Le film explore avec humanisme la condition de l'enfance vulnérable au Sénégal.",
    awards: [
      {
        year: 2001,
        title: "Prix spécial Plan International",
        festival: "FESPACO",
        film: "Almodou",
      },
    ],
    festivals: ["FESPACO 2001", "Vues d'Afrique, Montréal"],
    featured: true,
    sources: [
      {
        title: "Fiche Almodou",
        publisher: "Africultures",
      },
    ],
  },
  {
    slug: "xareek-maral",
    title: "Xareek Maral",
    year: 1985,
    type: "documentaire",
    country: "Sénégal",
    director: "Amadou Thior",
    synopsis:
      "Documentaire explorant les mutations sociales et culturelles au Sénégal. Premier grand succès international d'Amadou Thior, couronné par la plus haute distinction européenne au FESPACO.",
    awards: [
      {
        year: 1985,
        title: "Grand Prix de la CEE",
        festival: "FESPACO",
        film: "Xareek Maral",
      },
    ],
    festivals: ["FESPACO 1985"],
    featured: true,
  },
  {
    slug: "mariage-precoce",
    title: "Mariage précoce",
    year: 1995,
    type: "court-metrage",
    country: "Sénégal",
    language: "Wolof",
    director: "Amadou Thior",
    synopsis:
      "Court-métrage de fiction interrogeant les traditions du mariage forcé et leur impact sur les jeunes filles dans la société sénégalaise.",
    featured: true,
  },
  {
    slug: "mayelle",
    title: "Mayelle",
    year: 2002,
    type: "court-metrage",
    country: "Sénégal",
    director: "Amadou Thior",
    synopsis:
      "Court-métrage traitant de problématiques sociales contemporaines au Sénégal.",
    festivals: ["FESTEL 2002"],
    featured: true,
  },
  {
    slug: "meissa-pote-ndiaye-milliardaire",
    title: "Meissa Pote / Ndiaye Milliardaire",
    year: 2006,
    type: "telefilm",
    country: "Sénégal",
    director: "Amadou Thior",
    synopsis:
      "Téléfilm de fiction réalisé pour la télévision sénégalaise.",
    status: "to-confirm",
  },
  {
    slug: "exchange-cross-road",
    title: "Exchange Cross Road",
    type: "fiction",
    country: "Sénégal",
    director: "Amadou Thior",
    status: "to-confirm",
  },
  {
    slug: "halte-au-desert",
    title: "Halte au Désert",
    type: "documentaire",
    country: "Sénégal",
    director: "Amadou Thior",
    status: "to-confirm",
  },
];

export const featuredFilms = films.filter((f) => f.featured);
