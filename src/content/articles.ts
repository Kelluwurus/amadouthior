// content/articles.ts
// Articles / Actualités — à compléter au fur et à mesure des publications

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
}

export const articles: Article[] = [];

export const articleCategories = [
  { id: "actualite", label: "Actualité" },
  { id: "cinema", label: "Cinéma" },
  { id: "patrimoine", label: "Patrimoine" },
  { id: "formation", label: "Formation" },
  { id: "presse", label: "Presse" },
  { id: "archives", label: "Archives" },
] as const;
