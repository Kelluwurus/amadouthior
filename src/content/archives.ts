// content/archives.ts
// Archives — à compléter lorsque les fichiers originaux et autorisations seront disponibles
// Ne pas télécharger d'images provenant d'Internet sans autorisation (cf. CDC §35)

export interface ArchiveItem {
  id: string;
  title: string;
  category: string;
  year?: string;
  description?: string;
  image: string;
  credit?: string;
}

export const archives: ArchiveItem[] = [];

export const archiveCategories = [
  { id: "photographie", label: "Photographies" },
  { id: "tournage", label: "Tournages" },
  { id: "affiche", label: "Affiches" },
  { id: "document", label: "Documents" },
  { id: "presse", label: "Presse" },
  { id: "festival", label: "Festivals" },
  { id: "portrait", label: "Portraits" },
  { id: "video", label: "Vidéos" },
] as const;
