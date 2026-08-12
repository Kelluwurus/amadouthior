# Requirements — Portfolio Amadou Thior

## Contexte
Voir `.kiro/steering/product.md` pour la vision produit et les règles
éditoriales non négociables. Le contenu source est dans `/content/*.json`,
la direction artistique dans `/design/charte-graphique-luxury.md`.

---

## 1. Accueil

**User Story** : En tant que visiteur, je veux comprendre en quelques
secondes qui est Amadou Thior et ce que représente son parcours, afin de
décider d'explorer le site plus en profondeur.

Acceptance Criteria (EARS) :
- WHEN un visiteur arrive sur `/` THE SYSTEM SHALL afficher un hero avec le
  nom, la signature de marque, une accroche, et deux appels à l'action
  (« Explorer les œuvres », « Découvrir le parcours »).
- THE SYSTEM SHALL afficher, sous le hero, une section « Vision » avec les
  quatre axes (Éveiller les consciences, Transmettre les savoirs,
  Faire vivre une mémoire, Penser l'avenir de l'audiovisuel) issus de
  `content/expertise.json` / `content/bio.json`.
- THE SYSTEM SHALL afficher un teaser du projet CINECLUB — Dîner Débat avec
  lien vers `/cineclub`.
- WHEN le contenu affiché décrit la durée de carrière THE SYSTEM SHALL
  utiliser la formulation « plus de quatre décennies » et non une durée
  inférieure.

## 2. Parcours (timeline)

**User Story** : En tant que visiteur, je veux voir la trajectoire complète
d'Amadou Thior dans le temps, afin de comprendre la cohérence de son
parcours entre création, institution, production et transmission.

- THE SYSTEM SHALL afficher une timeline chronologique construite
  exclusivement à partir de `content/timeline.json`.
- WHEN un événement de la timeline correspond à une collaboration (ex.
  Camp de Thiaroye, Guelwaar) THE SYSTEM SHALL afficher explicitement le
  rôle « Assistant réalisateur — Ousmane Sembène » et non « réalisateur ».

## 3. Œuvres

**User Story** : En tant que visiteur (cinéphile ou professionnel), je veux
parcourir et filtrer les œuvres liées à Amadou Thior selon son rôle réel,
afin de comprendre précisément sa contribution à chacune.

- THE SYSTEM SHALL afficher une liste filtrable des œuvres avec au minimum
  les filtres : Tout, Réalisation, Production, Collaboration.
- WHEN un visiteur sélectionne un filtre THE SYSTEM SHALL n'afficher que
  les œuvres dont la catégorie correspond, sans rechargement de page.
- WHEN un visiteur clique sur une œuvre THE SYSTEM SHALL naviguer vers une
  page dédiée `/oeuvres/[slug]` (pas de modale) affichant : titre, année,
  genre, durée, synopsis, fiche technique, rôle exact d'Amadou Thior,
  distinctions, festivals, et un bloc Sources.
- IF une donnée d'une œuvre a le statut `a_confirmer` dans le JSON THEN THE
  SYSTEM SHALL afficher un badge ou une mention visible « à confirmer » à
  côté de cette donnée plutôt que de l'omettre silencieusement.
- WHEN une œuvre appartient à la catégorie `collaboration` THE SYSTEM SHALL
  afficher un bandeau distinct indiquant clairement qu'Amadou Thior n'en
  est pas le réalisateur.

## 4. Transmission

**User Story** : En tant que public professionnel (école, institution), je
veux comprendre l'ensemble de l'activité pédagogique d'Amadou Thior, afin
d'évaluer une collaboration possible.

- THE SYSTEM SHALL présenter trois blocs : Enseignement, Formation
  professionnelle, Ingénierie pédagogique, alimentés par
  `content/transmission.json`.

## 5. Expertise

**User Story** : En tant qu'institution ou partenaire, je veux comprendre
le champ d'expertise sectorielle d'Amadou Thior au-delà de la réalisation,
afin d'identifier des opportunités de collaboration (conseil, politiques
publiques, numérique, patrimoine).

- THE SYSTEM SHALL présenter les domaines d'expertise listés dans
  `content/expertise.json` (production audiovisuelle, politiques
  cinématographiques, formation, développement de projets, numérisation,
  patrimoine audiovisuel).

## 6. Archives

**User Story** : En tant que visiteur, je veux consulter les documents et
photos disponibles, afin d'apprécier le patrimoine documentaire du site.

- THE SYSTEM SHALL structurer la page Archives en catégories (Photographies,
  Affiches, Documents, Tournages, Festivals, Presse, Enseignement,
  Rencontres).
- IF aucun fichier réel n'est disponible pour une catégorie THEN THE SYSTEM
  SHALL afficher un état vide sobre indiquant que les documents seront
  ajoutés progressivement, SANS utiliser d'image de substitution présentée
  comme une archive réelle.

## 7. Projet CINECLUB — Dîner Débat

**User Story** : En tant que visiteur ou partenaire potentiel, je veux
comprendre le concept du CINECLUB, ses éditions passées et à venir, et
comment devenir partenaire.

- THE SYSTEM SHALL présenter le concept en 5 temps (Projection, Dîner,
  Débat, Mise en réseau, Action) comme séquence visuelle narrative,
  alimentée par `content/cineclub.json`.
- THE SYSTEM SHALL lister les éditions (`/cineclub/editions`) avec au moins
  les éditions renseignées dans le contenu (2016, 2026, et toute édition
  future marquée « en préparation »).
- WHEN une édition a le statut `a_venir` THE SYSTEM SHALL afficher sa date
  ou la mention « en préparation », jamais comme un événement déjà tenu.
- WHEN la page présente des objectifs d'une édition à venir THE SYSTEM
  SHALL les libeller explicitement comme « objectifs » et non comme
  « résultats ».
- THE SYSTEM SHALL fournir une page `/cineclub/sponsors` présentant les
  catégories de partenariat définies dans `content/cineclub.json`.
- THE SYSTEM SHALL utiliser une variante de la charte graphique (fond vert
  profond, voir `design/charte-graphique-luxury.md`) pour distinguer
  visuellement l'univers CINECLUB de celui du portfolio principal, tout en
  conservant la même typographie et les mêmes accents.

## 8. Contact

- THE SYSTEM SHALL fournir un formulaire de contact simple (nom, e-mail,
  organisation, message) avec validation côté client.
- WHEN un visiteur soumet le formulaire sans configuration d'envoi d'e-mail
  active THE SYSTEM SHALL afficher un message clair invitant à écrire
  directement à une adresse e-mail de secours (placeholder à renseigner).

## 9. Transverse — sourcing et intégrité éditoriale

- THE SYSTEM SHALL afficher, en pied de chaque page de contenu détaillé
  (œuvre, édition CINECLUB), un bloc Sources listant les références
  fournies dans le JSON correspondant.
- THE SYSTEM SHALL NEVER afficher un texte biographique, une date, un
  crédit ou un synopsis qui n'existe pas dans `/content`.

## 10. Performance, SEO, accessibilité

- THE SYSTEM SHALL générer des métadonnées (titre, description, Open
  Graph) propres à chaque page.
- THE SYSTEM SHALL respecter un contraste texte/fond conforme WCAG AA sur
  l'ensemble des combinaisons de couleurs de la charte graphique.
- THE SYSTEM SHALL rester utilisable et lisible sur mobile (375px) jusqu'à
  desktop large (1440px+).
