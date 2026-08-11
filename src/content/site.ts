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
  description: string;
  locale: string;
}

export const siteConfig: SiteConfig = {
  name: "Amadou Thior",
  title: "Amadou Thior — Réalisateur · Producteur · Scénariste · Formateur",
  subtitle: "Réalisateur · Producteur · Scénariste · Formateur",
  signature: "Une vie consacrée au cinéma, à l'audiovisuel et à la transmission.",
  description:
    "Site officiel d'Amadou Thior, réalisateur, producteur, scénariste et formateur audiovisuel sénégalais. Plus de quatre décennies au service du cinéma africain.",
  locale: "fr_FR",
};

export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Œuvre", href: "/oeuvre" },
  { label: "Parcours", href: "/parcours" },
  { label: "Projets", href: "/projets" },
  { label: "Archives", href: "/archives" },
  { label: "Transmission", href: "/transmission" },
  { label: "Contact", href: "/contact" },
];

export const secondaryNav: NavLink[] = [
  { label: "Distinctions", href: "/distinctions" },
  { label: "Collaborations", href: "/collaborations" },
];
