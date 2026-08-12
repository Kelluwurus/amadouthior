# Organisation du projet

## Arborescence cible (Next.js App Router)

```
app/
├── layout.tsx
├── page.tsx                          # Accueil
├── parcours/page.tsx                 # Timeline 1974 → aujourd'hui
├── oeuvres/
│   ├── page.tsx                      # Liste filtrable (Tout / Réalisation / Documentaire / Fiction / Production / Collaboration)
│   └── [slug]/page.tsx               # Fiche œuvre individuelle
├── transmission/page.tsx             # Enseignement / Formation / Ingénierie pédagogique
├── expertise/page.tsx                # Production / Politiques culturelles / Numérique / Patrimoine
├── archives/page.tsx                 # Photos / Documents / Affiches / Presse (galerie + placeholders)
├── cineclub/
│   ├── page.tsx                      # Hub CINECLUB — Dîner Débat
│   ├── editions/
│   │   ├── page.tsx                  # Liste des éditions (2016, 2026, 2027…)
│   │   └── [annee]/page.tsx          # Détail d'une édition
│   └── sponsors/page.tsx             # Devenir partenaire
└── contact/page.tsx

components/
├── ui/                                # Boutons, cartes, dividers, badges — design system générique
├── layout/                            # Header, Footer, Navigation
├── home/                              # Hero, Vision (4 cartes), teaser CINECLUB
├── oeuvres/                           # OeuvreCard, OeuvreFilterBar, OeuvreFiche, RoleBadge
├── parcours/                          # TimelineItem, TimelineList
├── cineclub/                          # StepFlow (5 temps), EditionCard, ImpactBlock
└── shared/                            # SourceBlock (bloc "Sources"), MarkdownText

content/                               # JSON — source de vérité éditoriale (voir dossier /content livré)
lib/
├── content.ts                         # Fonctions de lecture/typage du contenu JSON
└── types.ts                           # Interfaces TypeScript (Film, TimelineEvent, Edition, etc.)

public/
└── images/
    ├── oeuvres/
    ├── archives/
    └── cineclub/

messages/
└── fr.json                            # Textes d'interface (préparation i18n)
```

## Conventions de nommage
- Routes et slugs en français, en minuscules, sans accent
  (`mariage-precoce`, `xareek-maral`, `almodou`).
- Composants React en `PascalCase`, fichiers `kebab-case.tsx` interdits pour
  les composants (utiliser `PascalCase.tsx`), `kebab-case.ts` pour les
  utilitaires.
- Chaque page de contenu (œuvre, édition CINECLUB) doit avoir un composant
  `SourceBlock` en pied de page listant les sources déclarées dans le JSON
  correspondant.

## Catégorisation des œuvres (filtre `/oeuvres`)
Quatre familles, strictement alignées sur `content/filmography.json` :
1. `realisation` — Amadou Thior réalisateur (+ scénariste le cas échéant)
2. `production` — Amadou Thior producteur / production management
3. `collaboration` — Amadou Thior assistant réalisateur (Sembène)
4. Sous-filtres transverses : `documentaire`, `fiction`, `television`

## Palette et typographie
Ne jamais redéfinir de couleurs ou polices localement dans un composant :
toujours consommer les tokens définis dans `tailwind.config.ts` à partir de
`design/charte-graphique-luxury.md`.
