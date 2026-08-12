# Dossier Kiro — Portfolio Amadou Thior

Ce dossier contient tout ce qu'il faut donner à **Kiro** pour construire le site
Next.js d'Amadou Thior (cinéaste, producteur, formateur), connecté à **GitHub**
et déployé sur **Vercel**.

Il suit la méthodologie "spec-driven" native de Kiro : fichiers de **steering**
(contexte permanent du projet) + **spec** (requirements / design / tasks).

## Contenu du dossier

```
kiro-dossier/
├── README.md                          ← ce fichier
├── .kiro/
│   ├── steering/
│   │   ├── product.md                 ← vision produit, règles éditoriales
│   │   ├── tech.md                    ← stack technique imposée
│   │   └── structure.md               ← organisation des dossiers/fichiers
│   └── specs/
│       └── site-portfolio-amadou-thior/
│           ├── requirements.md        ← besoins (format EARS)
│           ├── design.md              ← architecture technique
│           └── tasks.md               ← plan d'implémentation (checklist)
├── content/                           ← contenu structuré (source de vérité éditoriale)
│   ├── bio.json
│   ├── timeline.json
│   ├── filmography.json
│   ├── transmission.json
│   ├── expertise.json
│   └── cineclub.json
└── design/
    └── charte-graphique-luxury.md     ← direction artistique Ivoire/Sable
```

## Marche à suivre

### 1. Créer le dépôt GitHub
1. Créez un dépôt vide sur GitHub, ex. `amadou-thior-portfolio`.
2. Clonez-le en local, copiez-y tout le contenu de ce dossier `kiro-dossier/`
   (le dossier `.kiro/` doit rester à la racine du dépôt — c'est là que Kiro
   va le chercher automatiquement).
3. Commit + push initial.

### 2. Ouvrir le projet dans Kiro
1. Ouvrez le dépôt cloné dans Kiro.
2. Kiro détecte automatiquement `.kiro/steering/*.md` et les charge comme
   contexte permanent (vision produit, stack, conventions).
3. Ouvrez la spec `.kiro/specs/site-portfolio-amadou-thior/` : Kiro affiche
   `requirements.md`, `design.md` et `tasks.md`. Validez-les (ou ajustez-les)
   avant de lancer l'exécution.

### 3. Lancer l'exécution
Dans le chat Kiro, un prompt simple suffit puisque tout le contexte est déjà
dans les fichiers :

> « Lis les fichiers de steering et la spec `site-portfolio-amadou-thior`,
> puis exécute `tasks.md` dans l'ordre, en respectant strictement le contenu
> fourni dans `/content` et la charte graphique dans `/design`. Ne jamais
> inventer de fait biographique, de date, de crédit de film ou de synopsis
> qui ne figure pas dans `/content`. »

Kiro exécutera les tâches par "vagues" (dépendances résolues automatiquement).
Validez chaque vague avant de passer à la suivante si vous êtes en mode
supervisé.

### 4. Connecter GitHub (sync continue)
Activez la synchronisation Git de Kiro (ou committez manuellement après
chaque vague de tâches) pour garder un historique propre : un commit par
tâche ou par groupe de tâches cohérent.

### 5. Déployer sur Vercel
1. Sur [vercel.com](https://vercel.com), "Add New Project" → importer le
   dépôt GitHub.
2. Framework preset : **Next.js** (détection automatique).
3. Build command : `next build` (par défaut) — aucune variable d'environnement
   n'est requise pour la V1 (contenu statique en JSON, pas de base de données).
4. Déployez. Chaque push sur `main` déclenchera un déploiement de production ;
   chaque pull request génère une preview Vercel — pratique pour valider
   chaque vague de tâches Kiro avant de merger.

## Règle d'or éditoriale (à ne jamais enfreindre)

Tous les faits biographiques, dates, crédits de films et synopsis affichés
sur le site doivent provenir **exclusivement** des fichiers `/content/*.json`.
Les titres de sections, accroches et textes d'ambiance peuvent être créatifs,
mais ne doivent jamais se substituer à un fait non documenté. En cas de doute
documentaire, le contenu doit afficher « à confirmer » plutôt qu'inventer une
valeur (voir `filmography.json`, champ `status`).
