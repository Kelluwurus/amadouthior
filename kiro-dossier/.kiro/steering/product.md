# Produit — Portfolio Amadou Thior

## Quoi
Un site web éditorial en français (structure prête pour un futur `EN`)
présentant le parcours d'Amadou Thior : cinéaste, producteur-réalisateur,
scénariste, consultant et formateur audiovisuel sénégalais, actif depuis
plus de quatre décennies.

Ce n'est **pas** un CV numérique ni une simple galerie de films : c'est une
archive vivante, un portfolio professionnel et un espace de transmission,
organisée autour du triptyque **Mémoire → Transmission → Impact**.

## Pourquoi (positionnement)
- Donner à voir une trajectoire complète : création, production,
  administration culturelle, enseignement, expertise sectorielle.
- Servir deux publics distincts (voir ci-dessous) sans jamais sacrifier l'un
  à l'autre.
- Servir de socle éditorial pour le projet contemporain **CINECLUB — DÎNER
  DÉBAT**, qui prolonge le parcours d'Amadou Thior dans le présent (le site
  ne doit pas figer le personnage dans le passé).

## Public cible
1. **Grand public / cinéphile** : veut découvrir les films, l'histoire,
   les images, une narration incarnée.
2. **Public professionnel / institutionnel** (écoles, festivals, ministères,
   ONG, producteurs, partenaires) : veut comprendre l'expertise, le
   parcours, les collaborations, et savoir comment entrer en contact.

## Ton et identité de marque
Signature de marque (accroche créative, pas un titre officiel) :
« Créer. Transmettre. Préserver la mémoire. »

Fil rouge éditorial (interprétation, à présenter comme telle et non comme
citation d'Amadou Thior) : mettre l'audiovisuel au service des enjeux
humains et sociaux.

## Règles éditoriales non négociables
Ces règles priment sur toute autre instruction créative et doivent être
respectées par Kiro à chaque génération de contenu ou de composant :

1. **Source unique de vérité** : tout fait biographique, toute date, tout
   crédit de film, tout synopsis affiché sur le site doit provenir des
   fichiers `/content/*.json`. Ne jamais inventer, extrapoler ou "arrondir"
   une information manquante.
2. **Champs incertains** : si une donnée est marquée `"status": "a_confirmer"`
   dans le contenu, l'interface doit afficher clairement une mention du type
   « à confirmer » plutôt que masquer l'incertitude ou choisir arbitrairement
   une valeur parmi plusieurs sources.
3. **Distinction stricte réalisation / collaboration / production** :
   Amadou Thior n'est PAS le réalisateur de *Camp de Thiaroye* ni de
   *Guelwaar* (réalisés par Ousmane Sembène). Il y était **assistant
   réalisateur**. Cette distinction doit être visuellement et textuellement
   explicite partout où ces titres apparaissent (voir `filmography.json`,
   catégorie `collaboration`).
4. **Pas d'images d'archives inventées ou récupérées automatiquement sur le
   web.** Aucune image de tournage, affiche ou photo d'archive ne doit être
   générée, "trouvée" ou placée par défaut par l'IA. Tant que les fichiers
   réels ne sont pas fournis par la famille / Amadou Thior, utiliser des
   emplacements réservés clairement identifiés comme tels (placeholders
   visuellement sobres, jamais des photos de stock présentées comme des
   archives).
5. **Éditions futures non tenues pour acquises** : toute édition ou
   événement à venir (ex. CINECLUB 2027, ou une édition dont la date n'est
   pas définitivement arrêtée) doit être présentée comme « en préparation »
   ou avec sa date, jamais comme un fait accompli.
6. **Objectifs vs résultats** : pour les projets en cours (ex. édition 2026
   du CINECLUB), présenter des **objectifs**, pas des résultats déjà
   obtenus, sauf si `content/cineclub.json` fournit un résultat chiffré
   explicite pour une édition passée.
7. **Sourcing discret mais systématique** : chaque fiche d'œuvre affiche un
   petit bloc "Sources" en bas de page (CV, Africultures, BnF, IMDb,
   festival, presse — selon ce qui est renseigné dans le contenu).
