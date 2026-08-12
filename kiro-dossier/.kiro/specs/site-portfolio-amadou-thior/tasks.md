# Tasks — Portfolio Amadou Thior

Chaque tâche référence les exigences correspondantes de `requirements.md`
entre crochets. À exécuter dans l'ordre ; les tâches sans dépendance entre
elles au sein d'une même section peuvent être parallélisées par Kiro.

## 1. Initialisation projet
- [ ] 1.1 Créer le projet Next.js 14 (App Router, TypeScript, ESLint,
      Tailwind) — `tech.md`
- [ ] 1.2 Configurer `next/font` (Cormorant Garamond + Inter) — `tech.md`
- [ ] 1.3 Copier `/content` et `/design` fournis à la racine du dépôt
- [ ] 1.4 Créer `lib/types.ts` à partir des interfaces de `design.md`
- [ ] 1.5 Créer `lib/content.ts` avec les sélecteurs de contenu

## 2. Design system
- [ ] 2.1 Traduire `design/charte-graphique-luxury.md` en tokens
      `tailwind.config.ts` (couleurs, typographie, rayons, ombres)
- [ ] 2.2 Construire les composants `components/ui/` (Bouton, Carte,
      Divider, Badge, StatutBadge) conformes à la charte
- [ ] 2.3 Construire `components/layout/Header.tsx`,
      `Footer.tsx`, `Navigation.tsx` [req. transverse]

## 3. Page Accueil [req. 1]
- [ ] 3.1 Composant `Hero` (nom, signature de marque, CTA)
- [ ] 3.2 Composant `VisionSection` (4 axes)
- [ ] 3.3 Composant `CineclubTeaser`
- [ ] 3.4 Assembler `app/page.tsx`, `generateMetadata`

## 4. Parcours / Timeline [req. 2]
- [ ] 4.1 Composant `TimelineList` + `TimelineItem`
- [ ] 4.2 Traitement spécial des événements `assistant_realisateur`
      (affichage explicite du rôle)
- [ ] 4.3 `app/parcours/page.tsx`

## 5. Œuvres [req. 3]
- [ ] 5.1 Composant `OeuvreFilterBar` (filtres Tout/Réalisation/
      Production/Collaboration, client component)
- [ ] 5.2 Composant `OeuvreCard`
- [ ] 5.3 `app/oeuvres/page.tsx` (liste + filtres)
- [ ] 5.4 Composant `OeuvreFiche` avec `RoleBadge` pour les collaborations
- [ ] 5.5 `app/oeuvres/[slug]/page.tsx` avec `generateStaticParams` et
      `generateMetadata`
- [ ] 5.6 Intégrer `SourceBlock` et `StatutBadge` sur chaque fiche

## 6. Transmission [req. 4]
- [ ] 6.1 Composant `TransmissionBlock` (x3 : Enseignement, Formation,
      Ingénierie pédagogique)
- [ ] 6.2 `app/transmission/page.tsx`

## 7. Expertise [req. 5]
- [ ] 7.1 Composant `ExpertiseGrid`
- [ ] 7.2 `app/expertise/page.tsx`

## 8. Archives [req. 6]
- [ ] 8.1 Composant `ArchiveCategorySection` avec état vide sobre
- [ ] 8.2 `app/archives/page.tsx`

## 9. CINECLUB — Dîner Débat [req. 7]
- [ ] 9.1 Thème visuel `data-theme="cineclub"` (fond vert profond, variante
      de la charte)
- [ ] 9.2 Composant `StepFlow` (5 temps, animation scroll + fallback
      `prefers-reduced-motion`)
- [ ] 9.3 `app/cineclub/page.tsx` (hub : manifeste, concept, teaser édition
      en cours, lien éditions, lien sponsors)
- [ ] 9.4 Composant `EditionCard` + `EditionDetail`
- [ ] 9.5 `app/cineclub/editions/page.tsx` et `[annee]/page.tsx`
      (statuts `passee` / `a_venir` / `en_preparation` gérés explicitement)
- [ ] 9.6 Composant `ImpactBlock` (Sensibiliser / Connecter / Mobiliser /
      Agir)
- [ ] 9.7 `app/cineclub/sponsors/page.tsx` (catégories de partenariat,
      pas de logique "Bronze/Argent/Or" par défaut sauf si le contenu
      l'impose explicitement)

## 10. Contact [req. 8]
- [ ] 10.1 Formulaire de contact (validation client) + message de secours
      si aucun service d'envoi n'est configuré

## 11. Transverse — sourcing, SEO, accessibilité [req. 9, 10]
- [ ] 11.1 Vérifier la présence de `SourceBlock` sur toutes les pages de
      contenu détaillé
- [ ] 11.2 Audit de contraste WCAG AA sur la palette (voir charte
      graphique, section accessibilité)
- [ ] 11.3 `generateMetadata` pour toutes les routes + Open Graph par
      défaut
- [ ] 11.4 Test responsive 375px → 1440px+

## 12. Déploiement
- [ ] 12.1 Vérifier build local (`next build`) sans erreur
- [ ] 12.2 Connecter le dépôt GitHub à Vercel, valider une preview
- [ ] 12.3 Merge sur `main`, valider le déploiement de production
