# Amadou Thior — Portfolio & Archives

Site web portfolio professionnel, éditorial et patrimonial consacré à **Amadou Thior**, réalisateur, producteur, scénariste et formateur audiovisuel sénégalais.

Conçu comme une **archive numérique vivante** d'une carrière de plus de quatre décennies dans le cinéma et l'audiovisuel.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Lucide React](https://lucide.dev) (icônes)
- Déploiement : [Vercel](https://vercel.com)

## Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Accueil
│   ├── oeuvre/             # Filmographie + fiches films
│   ├── almodou/            # Page spéciale Almodou
│   ├── parcours/           # Biographie + timeline
│   ├── archives/           # Galerie d'archives
│   ├── transmission/       # Formation & conseil
│   ├── actualites/         # Articles
│   ├── distinctions/       # Prix & récompenses
│   ├── collaborations/     # Partenaires
│   ├── contact/            # Formulaire
│   └── projets/            # Projets (CineClub)
├── components/             # Composants réutilisables
│   ├── ui/                 # Container, CTAButton, SectionHeader, Reveal, Badge
│   ├── layout/             # Navbar, Footer
│   ├── films/              # FilmCard, FilmGrid
│   ├── timeline/           # Timeline, TimelineItem
│   ├── cineclub/           # Composants CineClub
│   └── ...
├── content/                # Données (séparées du code)
│   ├── types.ts            # Interfaces TypeScript
│   ├── site.ts             # Configuration + navigation
│   ├── films.ts            # Filmographie
│   ├── timeline.ts         # Chronologie
│   ├── awards.ts           # Distinctions
│   ├── biography.ts        # Biographie + collaborations
│   ├── archives.ts         # Archives (métadonnées)
│   └── articles.ts         # Actualités
└── data/                   # Données projets
    └── cineclub-project.ts # CineClub – Dîner Débat
```

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Principes

- **Séparation contenu / présentation** — tout le contenu dans `content/`, modifiable sans toucher aux composants
- **Règle éditoriale** — aucune information inventée. Données incertaines marquées `status: "to-confirm"` ou omises
- **Design** — cinématographique, patrimonial, sobre et premium
- **Accessibilité** — navigation clavier, contrastes WCAG, `prefers-reduced-motion`
- **Performance** — composants serveur, lazy loading, images optimisées

## Déploiement

Le projet est prêt pour un déploiement sur Vercel connecté à GitHub.

```bash
npm run build
```

## Cahier des charges

Le document de spécification complet est disponible dans :

```
public/docs/cahier-des-charges.md
```

---

© Amadou Thior — Réalisateur · Producteur · Scénariste · Formateur
