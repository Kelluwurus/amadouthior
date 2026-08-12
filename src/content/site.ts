// content/site.ts

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
  title: "Amadou Thior — Cinéaste, Producteur-Réalisateur et Formateur",
  subtitle: "Cinéaste · Producteur-réalisateur · Scénariste · Formateur",
  signature: "Créer. Transmettre. Préserver la mémoire.",
  heroMessage:
    "Plus de 40 ans d'expérience au service du cinéma, de la production audiovisuelle, de la transmission et du développement de l'industrie cinématographique au Sénégal.",
  secondaryTagline:
    "Plus de quatre décennies au service du cinéma et de l'audiovisuel africains.",
  description:
    "Site officiel d'Amadou Thior, cinéaste, producteur-réalisateur, scénariste, consultant et formateur audiovisuel sénégalais.",
  locale: "fr_FR",
};

// Navigation principale — parcours éditorial du visiteur
export const mainNav: NavLink[] = [
  { label: "Le cinéaste", href: "/a-propos" },
  { label: "Filmographie", href: "/oeuvre" },
  { label: "Parcours", href: "/parcours" },
  { label: "Transmission", href: "/transmission" },
  { label: "Expertise", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

// Pages secondaires accessibles via footer et liens contextuels
export const secondaryNav: NavLink[] = [
  { label: "Production", href: "/production" },
  { label: "Distinctions", href: "/distinctions" },
  { label: "Archives", href: "/archives" },
  { label: "Projets", href: "/projets" },
];
