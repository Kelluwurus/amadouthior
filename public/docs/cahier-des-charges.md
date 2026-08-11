# CAHIER DES CHARGES — SITE PORTFOLIO AMADOU THIOR

## 1. Présentation du projet

### Nom du projet

**Amadou Thior — Portfolio & Archives**

### Nature du projet

Création d'un site web portfolio professionnel, éditorial et patrimonial consacré à **Amadou Thior**, réalisateur, producteur, scénariste, consultant et formateur audiovisuel sénégalais.

Le site doit présenter :

* son parcours professionnel ;
* sa filmographie ;
* ses réalisations ;
* ses collaborations ;
* ses distinctions ;
* son activité de formation et de transmission ;
* ses archives photographiques et audiovisuelles ;
* ses interventions et actualités ;
* son rôle dans la préservation et la transmission du patrimoine audiovisuel.

Le site ne doit pas ressembler à un simple CV.

Il doit être conçu comme une **archive numérique vivante d'une carrière dans le cinéma et l'audiovisuel sénégalais**.

---

# 2. Objectifs

## Objectif principal

Créer une présence numérique officielle, élégante et durable permettant de découvrir l'œuvre et le parcours d'Amadou Thior.

## Objectifs secondaires

1. Valoriser sa filmographie.
2. Mettre en avant ses principales œuvres.
3. Documenter son parcours professionnel.
4. Mettre en valeur ses collaborations avec les grandes figures et institutions du cinéma sénégalais.
5. Préserver numériquement ses archives.
6. Valoriser son activité de transmission.
7. Faciliter les demandes professionnelles.
8. Améliorer sa visibilité sur les moteurs de recherche.
9. Construire une base facilement extensible pour ajouter de nouveaux contenus.
10. Permettre une évolution future vers une véritable cinémathèque numérique personnelle.

---

# 3. Positionnement éditorial

Le site doit transmettre trois idées principales.

### L'ŒUVRE

Films, documentaires, fictions, téléfilms, scénarios et productions.

### L'EXPÉRIENCE

Plusieurs décennies dans le cinéma et l'audiovisuel sénégalais, collaborations, institutions, festivals et production.

### LA TRANSMISSION

Formation, conseil, accompagnement, patrimoine audiovisuel et transmission aux nouvelles générations.

---

# 4. Signature du site

Proposition :

> **AMADOU THIOR**
>
> Réalisateur · Producteur · Scénariste · Formateur
>
> **Une vie consacrée au cinéma, à l'audiovisuel et à la transmission.**

Cette formulation doit rester facilement modifiable dans le système de contenu.

---

# 5. Public cible

Le site doit s'adresser à :

* professionnels du cinéma ;
* journalistes ;
* chercheurs ;
* étudiants ;
* réalisateurs ;
* producteurs ;
* institutions culturelles ;
* festivals ;
* écoles de cinéma ;
* organismes de formation ;
* partenaires professionnels ;
* grand public intéressé par le cinéma sénégalais ;
* personnes recherchant des informations sur les œuvres d'Amadou Thior.

---

# 6. Direction artistique

## Concept

Le design doit mélanger :

**cinéma + archives + Afrique de l'Ouest + modernité numérique.**

Il faut éviter :

* le design corporate classique ;
* les templates de portfolio génériques ;
* les interfaces surchargées ;
* les animations excessives ;
* les couleurs trop vives ;
* l'esthétique « startup ».

Le résultat doit être **sobre, premium, éditorial et cinématographique**.

---

# 7. Identité visuelle

## Palette

Utiliser principalement :

* noir profond ;
* blanc cassé / ivoire ;
* gris chaud ;
* nuances terre / brun ;
* une couleur d'accent inspirée du Sénégal.

Prévoir les couleurs dans des variables CSS afin de pouvoir les modifier facilement.

Exemple :

```css
--background: ...
--foreground: ...
--muted: ...
--accent: ...
--surface: ...
```

Ne pas disperser les couleurs directement dans les composants.

---

# 8. Typographie

Utiliser deux familles complémentaires.

### Titres

Une typographie serif élégante et cinématographique.

### Texte

Une typographie sans-serif moderne et extrêmement lisible.

Prévoir une hiérarchie claire :

* Display
* H1
* H2
* H3
* Body
* Caption
* Metadata

---

# 9. Technologies

Utiliser :

* Next.js ;
* TypeScript ;
* React ;
* Tailwind CSS ;
* GitHub ;
* Vercel.

Architecture recommandée :

**Next.js App Router**

Le projet doit être responsive et optimisé pour :

* desktop ;
* tablette ;
* mobile.

---

# 10. Architecture générale du site

Navigation principale :

```text
ACCUEIL
ŒUVRE
PARCOURS
ARCHIVES
TRANSMISSION
ACTUALITÉS
CONTACT
```

Navigation secondaire éventuelle :

```text
À propos
Distinctions
Collaborations
Presse
```

Le logo / nom « AMADOU THIOR » doit toujours permettre de revenir à l'accueil.

---

# 11. Page ACCUEIL

Route :

```text
/
```

## Section Hero

Grand écran d'introduction.

Contenu :

```text
AMADOU THIOR

Réalisateur · Producteur · Scénariste · Formateur

Une vie consacrée au cinéma,
à l'audiovisuel et à la transmission.
```

Ajouter :

* photographie principale ;
* effet grain cinématographique subtil ;
* navigation ;
* CTA.

Boutons :

```text
DÉCOUVRIR SON PARCOURS
EXPLORER L'ŒUVRE
```

---

## Section Introduction

Présenter brièvement Amadou Thior.

Texte éditorial court.

Ajouter un lien :

```text
Lire la biographie →
```

---

## Section Œuvres majeures

Afficher 3 à 4 œuvres.

Priorité :

1. Almodou
2. Xareek Maral
3. Mariage précoce
4. Mayelle

Chaque carte doit contenir :

* image ;
* titre ;
* année ;
* type ;
* durée si disponible ;
* court résumé ;
* lien vers la fiche.

---

## Section Timeline

Titre :

**Plus de quatre décennies d'audiovisuel**

Afficher une timeline horizontale ou verticale.

Événements importants :

```text
1977 — Formation Louis-Lumière
1981 — Ministère de la Culture
1985 — Grand Prix FESPACO
1987 — Camp de Thiaroye
1992 — Guelwaar
1994 — Consultants & Réalisateurs Associés
1995 — Mariage précoce
2000 — Almodou
2001 — Prix Plan International
2002 — Mayelle
2006 — Meissa Pote / Ndiaye Milliardaire
2024 — Formation RTC
2025+ — Transmission & patrimoine
```

Les dates devront être modifiables dans les données.

---

## Section Transmission

Présenter son activité de formateur et consultant.

CTA :

```text
Découvrir son travail de transmission →
```

---

## Section Archives

Mettre en avant :

* photographies ;
* affiches ;
* documents ;
* tournages ;
* presse.

CTA :

```text
Explorer les archives →
```

---

## Section Contact

Phrase :

> Vous souhaitez inviter Amadou Thior, organiser une projection, une formation, une interview ou collaborer sur un projet ?

CTA :

```text
Prendre contact →
```

---

# 12. Page ŒUVRE

Route :

```text
/oeuvre
```

## Hero

Titre :

**L'ŒUVRE**

Sous-titre :

> Films, documentaires, fictions et productions qui témoignent d'un regard porté sur la société sénégalaise.

---

## Filtres

Créer des filtres :

```text
TOUS
DOCUMENTAIRES
FICTIONS
LONGS MÉTRAGES
COURTS MÉTRAGES
TÉLÉFILMS
```

Les filtres doivent fonctionner côté client.

---

## Grille

Créer une grille responsive de cartes de films.

Chaque carte :

```text
IMAGE

TITRE

ANNÉE
TYPE

DESCRIPTION COURTE

VOIR LE FILM →
```

---

# 13. Données des œuvres

Créer une structure TypeScript.

Exemple :

```ts
export interface Film {
  slug: string
  title: string
  year?: number
  type: string
  duration?: string
  country?: string
  language?: string
  director?: string
  writer?: string
  production?: string
  synopsis?: string
  image?: string
  trailer?: string
  awards?: string[]
  festivals?: string[]
  cast?: string[]
  credits?: string[]
  sources?: string[]
  featured?: boolean
}
```

Les données doivent être séparées de l'interface.

---

# 14. Fiches individuelles des films

Route :

```text
/oeuvre/[slug]
```

Chaque film possède une page dédiée.

Structure :

```text
Hero image

Titre
Année
Type
Durée
Pays
Langue

Synopsis

Contexte

Équipe

Distribution

Distinctions

Festivals

Galerie

Vidéo

Presse

Sources
```

Prévoir des champs optionnels.

Une section vide ne doit pas être affichée si aucune donnée n'existe.

---

# 15. Page spéciale ALMODOU

Route :

```text
/almodou
```

Cette œuvre doit disposer d'une page particulièrement travaillée.

Hero plein écran :

```text
ALMODOU

Un film d'Amadou Thior

2000 · Sénégal · 85 min
```

Sections :

* présentation ;
* synopsis ;
* contexte social ;
* personnages ;
* équipe ;
* distribution ;
* prix ;
* festivals ;
* galerie ;
* vidéos ;
* presse ;
* archives.

Mettre particulièrement en avant :

**Prix spécial Plan International — FESPACO 2001**

Ne pas inventer d'informations absentes des sources vérifiées.

---

# 16. Page PARCOURS

Route :

```text
/parcours
```

Titre :

**UN PARCOURS**

Construire une biographie narrative.

Sections :

### Formation

École Nationale Supérieure Louis-Lumière.

### Débuts professionnels

Ministère de la Culture.

### RTS

Expérience de réalisateur à la RTS.

### Collaboration avec Ousmane Sembène

Présenter précisément les rôles documentés.

Notamment :

* Camp de Thiaroye — assistant réalisateur ;
* Guelwaar — assistant réalisateur.

Ne jamais présenter Amadou Thior comme réalisateur principal de ces œuvres.

### Production

Consultants & Réalisateurs Associés.

### Réalisation

Présenter ses œuvres.

### Transmission

Formation, conseil et accompagnement.

### Patrimoine

Son intérêt pour la conservation et la transmission du patrimoine audiovisuel.

---

# 17. Timeline interactive

Créer un composant réutilisable :

```text
Timeline
TimelineItem
```

Chaque événement possède :

```ts
interface TimelineEvent {
  year: string
  title: string
  description: string
  category?: string
  image?: string
}
```

Interaction desktop :

* scroll ;
* hover ;
* apparition progressive.

Mobile :

* timeline verticale.

---

# 18. Page ARCHIVES

Route :

```text
/archives
```

Concept :

**Une mémoire visuelle du parcours d'Amadou Thior.**

Catégories :

```text
PHOTOGRAPHIES
TOURNAGES
AFFICHES
DOCUMENTS
PRESSE
FESTIVALS
PORTRAITS
VIDÉOS
```

Créer une galerie masonry responsive.

Chaque élément doit pouvoir avoir :

```ts
interface ArchiveItem {
  title: string
  category: string
  year?: string
  description?: string
  image: string
  credit?: string
}
```

Prévoir une lightbox.

---

# 19. Page TRANSMISSION

Route :

```text
/transmission
```

Titre :

**TRANSMETTRE**

Présenter Amadou Thior comme :

* formateur ;
* consultant ;
* accompagnateur ;
* professionnel expérimenté.

Sections :

### Formation

Présenter son expérience pédagogique.

### Conseil audiovisuel

Présenter les domaines d'expertise documentés.

### Interventions

Présenter les formations et rencontres.

### Formation RTC

Présenter l'intervention documentée en 2024 auprès des correspondants de la Radio Télévision Communautaire.

Ne pas transformer une intervention ponctuelle en activité permanente sans preuve.

---

# 20. Page ACTUALITÉS

Route :

```text
/actualites
```

Créer un système d'articles.

Structure :

```ts
interface Article {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  image?: string
  source?: string
}
```

Catégories :

```text
ACTUALITÉ
CINÉMA
PATRIMOINE
FORMATION
PRESSE
ARCHIVES
```

---

# 21. Page DISTINCTIONS

Route :

```text
/distinctions
```

Présenter les récompenses dans une timeline.

Exemple :

### 1985

**Grand Prix de la CEE — FESPACO**

Œuvre :

*Xareek Maral*

### 2001

**Prix spécial Plan International**

Œuvre :

*Almodou*

Les récompenses doivent être accompagnées d'une source ou d'un document lorsqu'il est disponible.

---

# 22. Page COLLABORATIONS

Route :

```text
/collaborations
```

Présenter les collaborations professionnelles importantes.

Exemples documentés :

* Ousmane Sembène ;
* RTS ;
* Ministère de la Culture ;
* Consultants & Réalisateurs Associés ;
* institutions cinématographiques ;
* organismes de formation.

Ne pas ajouter de logo institutionnel sans vérifier les droits d'utilisation.

---

# 23. Page CONTACT

Route :

```text
/contact
```

Formulaire :

```text
Nom
Email
Organisation
Sujet
Message
```

Catégories de sujet :

```text
Projection
Formation
Interview
Presse
Partenariat
Archives
Autre
```

Prévoir :

* validation ;
* messages d'erreur ;
* état de chargement ;
* confirmation d'envoi ;
* protection anti-spam.

---

# 24. Footer

Contenu :

```text
AMADOU THIOR

Réalisateur · Producteur · Scénariste · Formateur

Œuvre
Parcours
Archives
Transmission
Actualités
Contact

© 2026 Amadou Thior
```

Ajouter éventuellement :

```text
Site conçu et développé avec ...
```

mais uniquement si le propriétaire souhaite afficher les crédits.

---

# 25. SEO

Chaque page doit avoir :

* title ;
* meta description ;
* Open Graph ;
* Twitter/X metadata ;
* canonical URL ;
* image sociale.

Créer des métadonnées dynamiques pour les films.

Exemple :

```text
Amadou Thior — Almodou | Réalisateur sénégalais
```

Prévoir les données structurées Schema.org lorsque pertinentes :

* Person ;
* Movie ;
* Article ;
* CreativeWork ;
* WebSite.

---

# 26. Accessibilité

Le site doit respecter les bonnes pratiques WCAG.

Prévoir :

* navigation clavier ;
* contrastes suffisants ;
* alt text ;
* boutons accessibles ;
* focus visible ;
* titres hiérarchisés ;
* labels de formulaires ;
* réduction des animations si `prefers-reduced-motion`.

Les animations ne doivent jamais empêcher l'utilisation du site.

---

# 27. Performance

Objectif :

Site rapide malgré les nombreuses images.

Utiliser :

* `next/image` ;
* lazy loading ;
* images optimisées ;
* formats WebP/AVIF si possible ;
* dimensions explicites ;
* chargement différé des vidéos ;
* composants serveur lorsque possible.

Éviter les bibliothèques lourdes inutiles.

---

# 28. Responsive design

Breakpoints minimum :

```text
Mobile
Tablet
Desktop
Large Desktop
```

Le mobile doit être conçu comme une expérience complète et non comme une version réduite du desktop.

---

# 29. Animations

Utiliser des animations très sobres.

Exemples :

* fade-in ;
* reveal au scroll ;
* déplacement très léger ;
* transitions de galerie ;
* transition entre pages.

Éviter :

* animations permanentes ;
* effets flashy ;
* parallax excessif ;
* éléments qui bougent constamment.

Le contenu doit rester prioritaire.

---

# 30. Architecture technique

Structure souhaitée :

```text
app/
├── page.tsx
├── oeuvre/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── almodou/
│   └── page.tsx
├── parcours/
│   └── page.tsx
├── archives/
│   └── page.tsx
├── transmission/
│   └── page.tsx
├── actualites/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── distinctions/
│   └── page.tsx
├── collaborations/
│   └── page.tsx
└── contact/
    └── page.tsx
```

Composants :

```text
components/
├── layout/
├── navigation/
├── hero/
├── films/
├── timeline/
├── archive/
├── awards/
├── articles/
├── forms/
└── ui/
```

Données :

```text
content/
├── films.ts
├── timeline.ts
├── awards.ts
├── biography.ts
├── articles.ts
└── archives.ts
```

---

# 31. Gestion du contenu

Dans la première version, ne pas installer de CMS complexe.

Utiliser des fichiers TypeScript/JSON/MDX structurés.

Objectif :

Permettre de transformer ultérieurement le site en CMS sans refaire l'architecture.

Prévoir une séparation claire :

```text
CONTENU
↓
DATA
↓
COMPONENTS
↓
PAGES
```

---

# 32. Gestion des sources

Chaque information biographique importante doit pouvoir avoir une source.

Prévoir :

```ts
interface Source {
  title: string
  url: string
  publisher?: string
  date?: string
}
```

Exemple :

```ts
sources: [
  {
    title: "Profil Amadou Thior",
    url: "...",
    publisher: "Africultures"
  }
]
```

Les sources peuvent être affichées discrètement dans les pages concernées.

---

# 33. Règle éditoriale essentielle

**NE JAMAIS INVENTER UNE INFORMATION.**

Si une information n'est pas confirmée :

```text
À confirmer
```

ou ne pas l'afficher.

Si deux sources donnent des informations différentes :

```text
À vérifier
```

et conserver les deux informations dans les notes internes jusqu'à validation.

---

# 34. Gestion des images

Créer :

```text
public/images/
├── hero/
├── portraits/
├── films/
├── archives/
├── press/
└── awards/
```

Chaque image doit avoir :

* nom propre ;
* alt text ;
* crédit ;
* source ;
* année si connue ;
* statut des droits si disponible.

Exemple :

```ts
{
  src: "/images/films/almodou.jpg",
  alt: "Affiche du film Almodou",
  credit: "...",
  year: 2000
}
```

---

# 35. Droits d'auteur

Le site doit respecter les droits :

* photographies ;
* affiches ;
* extraits vidéo ;
* captures de films ;
* logos ;
* articles de presse.

Ne jamais télécharger automatiquement des images provenant d'Internet pour les republier.

Les images trouvées pendant la recherche servent uniquement à identifier les œuvres.

Pour la version finale, demander les fichiers originaux et les autorisations nécessaires.

---

# 36. Sécurité

Le site doit :

* ne jamais exposer de secrets côté client ;
* utiliser `.env.local` ;
* ne jamais commit les clés API ;
* utiliser des variables d'environnement Vercel ;
* valider les formulaires côté serveur ;
* protéger les endpoints ;
* limiter les abus du formulaire de contact.

Créer :

```text
.env.example
```

mais jamais :

```text
.env.local
```

dans GitHub.

---

# 37. GitHub

Repository :

```text
amadou-thior-portfolio
```

Branches :

```text
main
develop
feature/*
```

Workflow :

```text
feature
   ↓
Pull Request
   ↓
review
   ↓
develop
   ↓
production
   ↓
main
```

Commits propres et explicites.

Exemples :

```text
feat: add film archive
feat: add almodou page
fix: improve mobile navigation
style: refine cinematic typography
content: add 2002 film data
seo: add movie structured data
```

---

# 38. Vercel

Connecter le repository GitHub à Vercel.

Prévoir :

```text
main → Production
feature/* → Preview
develop → Preview
```

Chaque Pull Request doit pouvoir générer une preview.

Avant production :

* vérifier mobile ;
* vérifier desktop ;
* vérifier les images ;
* vérifier les métadonnées ;
* vérifier les liens ;
* vérifier les performances.

---

# 39. Analytics

Prévoir l'intégration future d'un outil d'analytics respectueux de la vie privée.

Ne pas ajouter immédiatement de tracking inutile.

L'architecture doit permettre l'ajout ultérieur de :

* Vercel Analytics ;
* Google Analytics ;
* Plausible ;
* autre solution.

---

# 40. Internationalisation

Prévoir une architecture permettant d'ajouter :

```text
FR
EN
WO
```

La première version peut être en français.

Ne pas traduire automatiquement les textes sans validation éditoriale.

---

# 41. Architecture des données

Créer les données initiales suivantes.

## Films

```text
Xareek Maral
Mariage précoce
Almodou
Mayelle
Meissa Pote / Ndiaye Milliardaire
Exchange Cross Road
Halte au Désert
```

Toutes les données non confirmées doivent être marquées comme telles.

---

# 42. Contenu biographique initial

Le contenu doit partir des informations documentées disponibles.

Points à intégrer :

* naissance à Boulel ;
* formation à l'École Nationale Supérieure Louis-Lumière ;
* carrière au Ministère de la Culture ;
* expérience à la RTS ;
* collaboration avec Ousmane Sembène ;
* création / activité de Consultants & Réalisateurs Associés ;
* réalisation de films ;
* distinctions ;
* activité de formation ;
* activité de consultant ;
* transmission ;
* patrimoine audiovisuel.

Le texte final devra être relu et validé par Amadou Thior.

---

# 43. Composants UI principaux

Créer des composants réutilisables :

```text
Navbar
MobileMenu
Footer

Hero
SectionHeader
CTAButton

FilmCard
FilmGrid
FilmMeta
FilmHero
FilmCredits
FilmAwards
FilmGallery

Timeline
TimelineItem

ArchiveCard
ArchiveGrid
Lightbox

AwardCard
ArticleCard
ArticleGrid

ContactForm

PageTransition
Reveal
Container
```

---

# 44. Principes de code

Le code doit être :

* propre ;
* typé ;
* modulaire ;
* réutilisable ;
* accessible ;
* documenté uniquement lorsque nécessaire.

Éviter :

* duplication ;
* composants énormes ;
* logique métier dans les composants visuels ;
* données hardcodées dans les pages ;
* dépendances inutiles.

---

# 45. Tests

Avant mise en production :

### Fonctionnels

* navigation ;
* filtres ;
* fiches films ;
* galerie ;
* lightbox ;
* formulaire ;
* liens externes.

### Responsive

* iPhone/mobile ;
* tablette ;
* laptop ;
* desktop large.

### Accessibilité

* clavier ;
* lecteur d'écran ;
* contraste ;
* focus.

### SEO

* titres ;
* descriptions ;
* sitemap ;
* robots.txt ;
* canonical ;
* Open Graph.

---

# 46. Sitemap

Prévoir :

```text
/
 /oeuvre
 /oeuvre/[slug]
 /almodou
 /parcours
 /archives
 /transmission
 /actualites
 /actualites/[slug]
 /distinctions
 /collaborations
 /contact
```

Générer automatiquement :

```text
/sitemap.xml
```

et :

```text
/robots.txt
```

---

# 47. Critères d'acceptation

Le projet sera considéré comme terminé lorsque :

* toutes les pages principales existent ;
* le site fonctionne sur mobile ;
* la navigation est fluide ;
* la filmographie est structurée ;
* les œuvres possèdent des fiches ;
* Almodou possède une page dédiée ;
* la timeline fonctionne ;
* les archives sont consultables ;
* le formulaire fonctionne ;
* les métadonnées SEO sont présentes ;
* les images sont optimisées ;
* aucune information inventée n'est publiée ;
* les sources sont correctement référencées ;
* GitHub contient le projet proprement structuré ;
* Vercel déploie correctement le site ;
* aucune clé secrète n'est présente dans le repository.

---

# 48. Phase 1 — Foundation

Kiro doit commencer par :

1. Initialiser Next.js + TypeScript.
2. Configurer Tailwind.
3. Configurer les fonts.
4. Créer le design system.
5. Créer Header / Footer.
6. Créer le système de routing.
7. Créer les interfaces TypeScript.
8. Créer les fichiers de données.
9. Créer la structure des composants.
10. Configurer ESLint.
11. Configurer Git.
12. Créer README.md.

Ne pas commencer par remplir toutes les pages.

---

# 49. Phase 2 — Design

Créer :

* homepage ;
* navigation ;
* hero ;
* film cards ;
* timeline ;
* typographie ;
* responsive ;
* animations.

Objectif :

Obtenir une **homepage visuellement excellente** avant de construire toutes les autres pages.

---

# 50. Phase 3 — Contenu

Ajouter :

* biographie ;
* filmographie ;
* distinctions ;
* collaborations ;
* transmission ;
* archives.

---

# 51. Phase 4 — Pages détaillées

Créer :

* pages films ;
* page Almodou ;
* articles ;
* archives ;
* contact.

---

# 52. Phase 5 — SEO & Performance

Ajouter :

* metadata ;
* Open Graph ;
* sitemap ;
* robots ;
* structured data ;
* optimisation images ;
* performance.

---

# 53. Phase 6 — QA

Tester :

```text
Desktop
Tablet
Mobile

Chrome
Safari
Firefox

Navigation
Images
Vidéo
Formulaire
SEO
Accessibilité
Performance
```

---

# 54. Phase 7 — Production

Connecter :

```text
GitHub
    ↓
Vercel
    ↓
Domain
```

Prévoir un domaine du type :

```text
amadouthior.com
```

ou une variante disponible et validée par le propriétaire.

---

# 55. Instruction principale pour Kiro

Kiro doit considérer ce document comme la spécification principale du projet.

**Ne pas essayer de tout générer en une seule étape.**

Travailler par phases.

Avant chaque phase :

1. analyser l'architecture existante ;
2. vérifier les fichiers déjà créés ;
3. ne pas casser les fonctionnalités existantes ;
4. réutiliser les composants existants ;
5. signaler les éventuelles ambiguïtés ;
6. implémenter proprement ;
7. tester ;
8. résumer les modifications.

Priorité absolue :

```text
QUALITÉ
>
ACCESSIBILITÉ
>
PERFORMANCE
>
MAINTENABILITÉ
>
ESTHÉTIQUE
>
RAPIDITÉ DE DÉVELOPPEMENT
```

Le site doit donner l'impression d'une **archive cinématographique institutionnelle haut de gamme**, et non d'un template de portfolio.

---

# 56. Prompt initial à donner à Kiro

Commence par analyser ce cahier des charges sans coder.

Je veux construire un site portfolio premium et patrimonial consacré au réalisateur, producteur, scénariste et formateur audiovisuel sénégalais Amadou Thior.

Le site doit être conçu comme une archive numérique de sa carrière.

Stack obligatoire :

* Next.js App Router
* TypeScript
* React
* Tailwind CSS
* GitHub
* Vercel

Ne génère pas encore toutes les pages.

Commence par :

1. analyser les exigences ;
2. proposer l'architecture technique ;
3. proposer l'arborescence des fichiers ;
4. proposer les interfaces TypeScript ;
5. proposer le design system ;
6. proposer les composants réutilisables ;
7. identifier les éventuelles ambiguïtés ;
8. créer un plan d'implémentation par étapes.

Après validation du plan, implémente uniquement la Phase 1.

Ne jamais inventer de contenu biographique.

Tout contenu non confirmé doit être identifié comme `TODO`, `À CONFIRMER` ou laissé vide.

Le design doit être cinématographique, éditorial, premium, minimaliste et fortement orienté photographie/archives.

Ne pas utiliser un template de portfolio générique.

Ne pas installer de dépendance inutile.

Ne pas créer de CMS pour le moment.

Le contenu doit être séparé du code de présentation.

Le site doit être pensé dès le départ pour pouvoir devenir une archive numérique beaucoup plus importante dans le futur.

---

# 57. Definition of Done

Le projet final doit répondre à cette question :

> **Est-ce que quelqu'un qui découvre Amadou Thior pour la première fois comprend immédiatement qui il est, ce qu'il a créé, avec qui il a travaillé, ce qu'il a apporté au cinéma sénégalais et ce qu'il transmet aujourd'hui ?**

Si la réponse est oui, le site remplit son objectif.
