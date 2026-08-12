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

// Navigation principale — parcours logique du visiteur :
// Qui est-il ? → Qu'a-t-il fait ? → Que transmet-il ? → Que fait-il maintenant ? → Contact
export const mainNav: NavLink[] = [
  { label: "À propos", href: "/a-propos" },
  { label: "Parcours", href: "/parcours" },
  { label: "Œuvres", href: "/oeuvre" },
  { label: "Transmission", href: "/transmission" },
  { label: "Projets", href: "/projets" },
  { label: "Contact", href: "/contact" },
];

// Pages accessibles depuis les pages internes (liens contextuels, footer, etc.)
export const secondaryNav: NavLink[] = [
  { label: "Production", href: "/production" },
  { label: "Expertise", href: "/expertise" },
  { label: "Distinctions", href: "/distinctions" },
  { label: "Archives", href: "/archives" },
  { label: "Collaborations", href: "/collaborations" },
];
