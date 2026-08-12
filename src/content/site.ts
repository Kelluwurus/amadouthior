// content/site.ts
// Configuration du site et navigation

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  signature: string;
  heroMessage: string;
  secondaryTagline: string;
  description: string;
  locale: string;
}

export const siteConfig: SiteConfig = {
  name: "Amadou Thior",
  title: "Amadou Thior — Cinéaste · Producteur · Formateur · Consultant",
  subtitle: "Cinéaste · Producteur · Formateur · Consultant",
  signature: "Créer. Transmettre. Préserver la mémoire.",
  heroMessage: "Filmer l'humain. Transmettre. Construire l'avenir.",
  secondaryTagline:
    "Plus de quatre décennies au service du cinéma et de l'audiovisuel africains.",
  description:
    "Site officiel d'Amadou Thior, cinéaste, producteur-réalisateur, scénariste, consultant et formateur audiovisuel sénégalais. Plus de quatre décennies au service du cinéma et de l'audiovisuel africains.",
  locale: "fr_FR",
};

export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Parcours", href: "/parcours" },
  { label: "Œuvres", href: "/oeuvre" },
  { label: "Production", href: "/production" },
  { label: "Transmission", href: "/transmission" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projets", href: "/projets" },
  { label: "Contact", href: "/contact" },
];

export const secondaryNav: NavLink[] = [
  { label: "Distinctions", href: "/distinctions" },
  { label: "Collaborations", href: "/collaborations" },
];
