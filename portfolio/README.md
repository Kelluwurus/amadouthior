# Amadou Thior — Portfolio Cinématographique

Site web portfolio premium et immersif d'**Amadou Thior**, réalisateur, producteur et consultant cinématographique sénégalais avec plus de 30 ans de carrière au cœur du 7ᵉ art africain.

## Stack Technique

| Technologie | Version | Rôle |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.3 | Framework React (App Router) |
| [React](https://react.dev) | 19.2 | Bibliothèque UI |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Typage statique |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling utilitaire |
| [Lucide React](https://lucide.dev) | 1.31+ | Icônes SVG |

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Build & Production

```bash
npm run build
npm start
```

## Déploiement

Prêt pour [Vercel](https://vercel.com) — connecter le dépôt GitHub et le déploiement se fait automatiquement.

## Architecture du Projet

```
src/
├── app/
│   ├── globals.css             # Thème Tailwind v4 (tokens couleurs, fonts, scrollbar)
│   ├── layout.tsx              # Layout racine — métadonnées SEO/OpenGraph, fonts Google
│   └── page.tsx                # Page d'accueil — assemblage de tous les composants
└── components/
    ├── Navbar.tsx              # Navigation fixe avec détection du scroll + menu mobile
    ├── Hero.tsx                # Section héro plein écran cinématographique
    ├── Vision.tsx              # Vision & Impact — grille de 4 cartes + bloc émeraude
    ├── Filmography.tsx         # Filmographie — filtres par onglets interactifs
    ├── Experience.tsx          # Parcours (timeline verticale) & Distinctions (badges)
    ├── Services.tsx            # Expertise — 3 cartes de services institutionnels
    ├── Contact.tsx             # Formulaire de contact avec validation
    └── Footer.tsx              # Pied de page avec navigation et mentions légales
```

## Direction Artistique

### Palette de couleurs

| Nom | Hex | Usage |
|---|---|---|
| Noir Profond | `#121212` | Fond principal |
| Anthracite | `#1E1E1E` | Fond des cartes et sections alternées |
| Or Mat | `#C8A24A` | Accent principal (titres, bordures, CTA) |
| Vert Émeraude | `#0F382C` | Bloc immersif (citation) |
| Ivoire | `#F8F5EF` | Texte principal |

### Typographies

- **Titres** : Cormorant Garamond (serif, élégante et prestigieuse)
- **Corps de texte** : Inter (sans-serif, épurée et lisible)

Chargées via `next/font/google` pour une optimisation automatique.

### Style visuel

- Mode sombre par défaut
- Bordures fines dorées semi-transparentes (`border-[#C8A24A]/20`)
- Ombres portées subtiles au survol
- Transitions fluides (300ms, ease)
- Effets de grain cinématographique sur le hero
- Gradient radial lumineux sur les blocs immersifs

## Sections de la Page

### 1. Hero — « L'Empreinte »

Section plein écran avec fond cinématographique (grain + gradient), accroche de présentation et deux boutons d'appel à l'action.

### 2. Vision & Impact

Philosophie artistique présentée en 4 piliers (Éveiller, Transmettre, Penser, Façonner) sous forme de cartes interactives. Bloc immersif en fond émeraude sur l'impact culturel du cinéma.

### 3. Filmographie & Projets Majeurs

Système de filtres par onglets (Tous / Longs-métrages / Courts & Documentaires / Collaborations O. Sembène). Cartes de films avec année, synopsis et distinctions.

**Œuvres présentées :**
- *Almodou* — Prix Spécial PLAN International, FESPACO 2001
- *Xareek Maral* — Grand Prix de la CEE, FESPACO 1985
- *Camp de Thiaroye & Guelwaar* — Collaboration avec Ousmane Sembène
- *Mayelle / Mariage Précoce* — Courts-métrages de fiction sociétale

### 4. Parcours & Distinctions

Double colonne avec timeline verticale (Louis-Lumière 1977, RTS, Ministère, Consultant) et grille de récompenses (FESPACO, FESTEL, sélections internationales).

### 5. Expertise & Services

Trois cartes de services institutionnels : Masterclasses & Enseignement, Conseil en Politiques Cinématographiques, Jury & Conférences.

### 6. Contact

Formulaire de sollicitation professionnelle avec champs : Nom, Email, Organisation, Motif (Masterclass, Consultance, Jury, Presse, Autre), Message.

## Responsive Design

- **Mobile** : Navigation en overlay, cartes empilées, marges généreuses
- **Tablette** : Grilles adaptées (2 colonnes)
- **Desktop** : Grilles complètes (3-4 colonnes), espaces d'air généreux

## SEO & Métadonnées

Configuré dans `layout.tsx` :
- Titre et description optimisés
- Balises OpenGraph (type, locale fr_FR, siteName)
- Langue HTML en français (`lang="fr"`)

## Auteur

**Amadou Thior**  
Réalisateur, Producteur & Consultant Cinématographique  
Sénégal | Formation Louis-Lumière (Paris, 1977)

---

© Amadou Thior — Cinéaste & Consultant. Tous droits réservés.
