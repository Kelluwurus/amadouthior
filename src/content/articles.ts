import type { Article } from "./types";

// Articles / Actualités — à compléter au fur et à mesure des publications
// Structure prête pour un futur CMS (cf. CDC §31)

export const articles: Article[] = [
  // Les articles seront ajoutés progressivement
];

export const articleCategories = [
  { id: "actualite", label: "Actualité" },
  { id: "cinema", label: "Cinéma" },
  { id: "patrimoine", label: "Patrimoine" },
  { id: "formation", label: "Formation" },
  { id: "presse", label: "Presse" },
  { id: "archives", label: "Archives" },
] as const;
