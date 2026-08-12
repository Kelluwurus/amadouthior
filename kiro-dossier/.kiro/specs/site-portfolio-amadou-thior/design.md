# Design technique — Portfolio Amadou Thior

## Vue d'ensemble
Application Next.js 14 (App Router, TypeScript), contenu statique typé,
génération SSG pour toutes les pages, déploiement Vercel. Voir
`.kiro/steering/tech.md` pour la stack imposée.

## Modèles de données (lib/types.ts)

```ts
export type StatutDonnee = "confirme" | "a_confirmer";

export interface RoleAmadouThior {
  fonction: "realisation" | "realisation_scenario" | "production_management"
          | "assistant_realisateur" | "producteur_delegue";
  label: string;            // ex: "Assistant réalisateur — Ousmane Sembène"
}

export interface Source {
  nom: string;               // ex: "BnF", "Africultures", "CV Amadou Thior 2024"
  url?: string;
}

export interface Oeuvre {
  slug: string;
  titre: string;
  titreAlternatif?: string;
  annee: string;             // string pour gérer "1982/1985"
  anneeStatut: StatutDonnee;
  genre: string;
  categorie: "realisation" | "production" | "collaboration";
  sousGenre?: "documentaire" | "fiction" | "television";
  duree?: string;
  dureeStatut?: StatutDonnee;
  pays?: string;
  langue?: string;
  role: RoleAmadouThior;
  synopsis?: string;         // markdown, peut être vide -> "à compléter"
  ficheTechnique: { label: string; valeur: string }[];
  distinctions?: string[];
  festivals?: string[];
  sources: Source[];
  image?: string;            // chemin /public, optionnel
}

export interface EvenementTimeline {
  periode: string;           // "1974–1977"
  titre: string;
  description?: string;
  lienOeuvreSlug?: string;
}

export interface BlocTransmission {
  titre: string;             // "Enseignement" | "Formation professionnelle" | "Ingénierie pédagogique"
  items: { nom: string; lieu?: string; periode?: string; description?: string }[];
}

export interface DomaineExpertise {
  titre: string;
  description: string;
}

export interface EditionCineclub {
  annee: string;
  statut: "passee" | "a_venir" | "en_preparation";
  lieu?: string;
  film?: { titre: string; realisateur?: string; pourquoi?: string };
  theme?: string;
  objectifs?: string[];
  resultats?: string[];      // uniquement pour éditions passées documentées
  sources: Source[];
}

export interface CategoriePartenariat {
  nom: string;
  description: string;
  avantages: string[];
}
```

## Architecture des routes
Voir `.kiro/steering/structure.md` pour l'arborescence complète App Router.

Points clés :
- `/oeuvres/[slug]` et `/cineclub/editions/[annee]` utilisent
  `generateStaticParams()` à partir de `content/filmography.json` et
  `content/cineclub.json`.
- Chaque page dynamique appelle `generateMetadata()` pour le SEO.

## Couche contenu (lib/content.ts)
Fonctions pures qui importent les JSON de `/content`, les valident (typage
TypeScript strict, pas de validation runtime nécessaire en V1 car le
contenu est contrôlé), et exposent des sélecteurs :
- `getAllOeuvres()`, `getOeuvreBySlug(slug)`, `getOeuvresByCategorie(cat)`
- `getTimeline()`
- `getTransmission()`, `getExpertise()`
- `getCineclubEditions()`, `getCineclubEdition(annee)`, `getPartenariats()`

## Composants clés

### `components/oeuvres/OeuvreFiche.tsx`
Affiche la fiche complète d'une œuvre. Si `categorie === "collaboration"`,
affiche un bandeau `RoleBadge` en évidence avant tout autre contenu :
« Assistant réalisateur — [réalisateur] », avec un style visuellement
distinct (bordure, icône) pour éviter toute confusion avec les œuvres
réalisées par Amadou Thior.

### `components/cineclub/StepFlow.tsx`
Séquence narrative animée au scroll des 5 temps (Projection → Dîner →
Débat → Mise en réseau → Action). Respecte `prefers-reduced-motion`
(désactive l'animation de scroll, garde le contenu visible statiquement).

### `components/shared/SourceBlock.tsx`
Prend un tableau `Source[]` en props, affiche une liste discrète en pied de
fiche (« Sources : CV Amadou Thior 2024, Africultures, BnF »), avec lien si
`url` est fourni.

### `components/shared/StatutBadge.tsx`
Affiche un badge « à confirmer » quand `StatutDonnee === "a_confirmer"`.

## Thème visuel
Les tokens Tailwind sont générés à partir de
`design/charte-graphique-luxury.md`. Deux variantes de thème coexistent :
- **Portfolio** (par défaut) : fond ivoire/blanc cassé, accents terre
  cuite et sable.
- **CINECLUB** : même famille de couleurs mais fond vert profond (à définir
  dans la charte comme variante "événementielle") pour signaler un univers
  distinct sans rupture de cohérence graphique globale.

Implémentation recommandée : classe `data-theme="cineclub"` sur le
conteneur racine des routes `/cineclub/**`, tokens CSS custom properties
surchargés en conséquence.

## Déploiement
- Repo GitHub connecté à Vercel (import direct, aucune configuration
  serveur nécessaire — Next.js est nativement supporté).
- Chaque pull request Kiro (par vague de tâches) génère automatiquement une
  preview Vercel, à valider avant merge sur `main`.
