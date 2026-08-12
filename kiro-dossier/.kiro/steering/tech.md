# Stack technique

## Framework
- **Next.js 14+ (App Router)**, TypeScript strict.
- Rendu : SSG/ISR pour toutes les pages de contenu (le contenu est statique,
  en JSON local — pas de CMS en V1). `generateStaticParams` pour les pages
  dynamiques d'œuvres (`/oeuvres/[slug]`) et d'éditions CINECLUB
  (`/cineclub/editions/[annee]`).
- Déploiement : **Vercel**, dépôt connecté sur **GitHub** (push sur `main`
  → production, pull request → preview).

## Style
- **Tailwind CSS** pour l'implémentation, mais les valeurs de couleurs,
  typographies et espacements doivent être définies comme **design tokens**
  dans `tailwind.config.ts` à partir de `design/charte-graphique-luxury.md`
  — ne jamais utiliser de couleurs Tailwind par défaut (`slate`, `emerald`,
  etc.) dans les composants finaux.
- Polices via `next/font/google` : **Cormorant Garamond** (titres, éditorial)
  + **Inter** (interface, texte courant). Précharger uniquement les graisses
  utilisées.
- Animations : légères et sobres (fade-up, parallaxe très discrète,
  transitions d'image). Bibliothèque recommandée : **Framer Motion**, avec
  `prefers-reduced-motion` respecté. Pas de particules, pas d'effets 3D,
  pas de texte animé de façon spectaculaire.

## Contenu
- Contenu structuré en JSON dans `/content`, importé côté build (pas de
  fetch runtime). Typage TypeScript strict pour chaque modèle de données
  (voir `design.md` de la spec pour les interfaces).
- Textes longs (synopsis, notes éditoriales) : autorisés en Markdown à
  l'intérieur des champs JSON, rendus via un composant Markdown léger
  (`react-markdown` ou équivalent), pas de HTML brut dans le contenu.
- Images : `next/image`, dossier `/public/images/...` avec sous-dossiers
  par section (`oeuvres/`, `archives/`, `cineclub/`). Pas d'images
  hotlinkées depuis des sites tiers.

## SEO / accessibilité
- Métadonnées par page via l'API `generateMetadata` de Next.js (titre,
  description, Open Graph, image).
- Chaque page d'œuvre a une URL propre et partageable (`/oeuvres/almodou`),
  pas de contenu uniquement accessible via une modale.
- Respect WCAG AA a minima : contrastes suffisants (attention à l'or/sable
  clair sur fond clair — voir charte graphique), navigation clavier,
  attributs `alt` obligatoires et descriptifs sur toutes les images.

## Internationalisation (prévu, non bloquant en V1)
- Structure de routes compatible `next-intl` ou App Router i18n natif
  (`/fr/...`, `/en/...`), même si seul le français est livré en V1.
  Ne pas coder les textes d'interface en dur dans les composants : passer
  par un fichier de traduction `messages/fr.json` dès le départ.

## Qualité
- ESLint + Prettier configurés dès la tâche d'initialisation.
- Un composant = un fichier, dossier `components/` organisé par domaine
  (voir `structure.md`).
- Pas de dépendance ajoutée sans nécessité claire — préférer les capacités
  natives de Next.js.

## Environnement
- Aucune variable d'environnement ni base de données requise en V1
  (contenu statique). Si un formulaire de contact est branché à un service
  d'envoi d'e-mails, documenter la variable nécessaire dans `.env.example`
  et NE JAMAIS committer de clé réelle.
