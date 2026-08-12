# Charte graphique — Luxury Ivoire / Sable

Cette charte **remplace** la précédente version sombre (noir/or) discutée
plus tôt dans le projet. Direction : cinéma d'auteur + patrimoine +
élégance institutionnelle contemporaine, dans une tonalité chaude et
minérale plutôt que "luxe africain générique".

## 1. Palette

Séquence demandée : Blanc cassé → Terre cuite → Ivoire → Sable →
Terre cuite foncée → Ivoire.

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Fond principal | Blanc cassé | `#FAF6EF` | Fond de page par défaut |
| Fond secondaire | Ivoire | `#F3EAD8` | Sections alternées, cartes, bandeaux |
| Fond tertiaire | Sable | `#D8C3A0` | Séparateurs, fonds de badges, hover discret |
| Accent principal | Terre cuite | `#B5622F` | CTA, liens actifs, accents, icônes |
| Accent fort / événementiel | Terre cuite foncée | `#7C3D1E` | Titres forts, section CINECLUB (fond), boutons primaires |
| Texte principal | Brun encre | `#2B2018` | Texte courant (jamais de noir pur `#000`) |
| Texte secondaire | Brun sable | `#6B5A46` | Légendes, métadonnées, sources |
| Bordures | Sable clair | `#E4D7C1` | Bordures de cartes, dividers |

Règle de dosage (comme pour la version précédente, adaptée) :
- **65–70 %** blanc cassé / ivoire (fond, respiration)
- **20–25 %** sable et brun encre (texte, structure)
- **10 %** terre cuite / terre cuite foncée (accents, CTA) — cette couleur
  doit rester rare pour garder son pouvoir de signal.

### Variante CINECLUB (thème événementiel)
Pour distinguer visuellement l'univers du CINECLUB — Dîner Débat sans
rompre la cohérence globale :
- Fond : Terre cuite foncée `#7C3D1E`
- Texte : Ivoire `#F3EAD8`
- Accent : Sable `#D8C3A0`

Même typographie, même style de composants — seule l'inversion de fond
change de registre (institutionnel patrimonial → événementiel chaleureux).

## 2. Typographie
- **Titres / éditorial** : Cormorant Garamond (élégant, cinématographique).
  Graisses : 500 (courant), 600 (fort), italique autorisée pour les
  accroches.
- **Interface / texte courant** : Inter. Graisses 400/500/600.
- Chiffres de la timeline : Inter, variante tabulaire, légèrement plus
  contemporaine que le reste pour créer un contraste visuel avec les
  titres en Cormorant.
- Échelle suggérée (desktop) : H1 `56–64px`, H2 `36–40px`, H3 `24–28px`,
  corps `16–18px`, légendes `13–14px`.

## 3. Composants — style de référence

### Boutons
- Primaire : fond terre cuite `#B5622F`, texte ivoire, coins légèrement
  arrondis (`6–8px`, pas de style pilule), hover → terre cuite foncée.
- Secondaire : contour sable, texte brun encre, fond transparent.

### Cartes (œuvres, éditions, expertise)
- Fond ivoire sur page blanc cassé (ou inverse), bordure sable clair 1px,
  pas d'ombre portée marquée — préférer une bordure fine à une ombre lourde
  pour garder l'esprit "papier/patrimoine".
- Image en haut, ratio stable (ex. 4:5 pour les affiches, 16:9 pour les
  tournages), légère désaturation/grain très subtil autorisé sur les
  visuels d'archive (jamais sur les photos contemporaines).

### Badges de statut
- `StatutBadge` ("à confirmer") : fond sable, texte brun encre, petite
  taille, jamais alarmant (pas de rouge) — c'est une nuance documentaire,
  pas une erreur.
- `RoleBadge` collaboration (Sembène) : contour terre cuite foncée, icône
  discrète, texte clair indiquant "Assistant réalisateur — [nom]".

### Dividers / séparateurs
- Trait fin sable `1px`, ou motif pointillé très discret pour les timelines.

## 4. Imagerie et grain
- Photographies contemporaines : nettes, chaleureuses, pas de filtre.
- Documents d'archive (quand fournis par la famille) : grain argentique
  léger autorisé, jamais de sépia artificiel appliqué à des photos
  contemporaines pour "faire vieux" — l'authenticité prime sur l'effet.
- Aucune image de stock présentée comme une archive (voir règle éditoriale
  dans `.kiro/steering/product.md`).

## 5. Animation
- `fade-up` léger (400–500ms), parallaxe très discrète sur le hero
  uniquement, transitions d'image douces.
- Le `StepFlow` du CINECLUB (5 temps) peut avoir une animation de scroll
  plus marquée car c'est la pièce maîtresse narrative du site — mais
  toujours avec un fallback statique complet si
  `prefers-reduced-motion: reduce`.
- Interdits : particules, zooms agressifs, texte qui tourne, effets 3D
  décoratifs.

## 6. Accessibilité (contraste)
Vérifier notamment :
- Texte brun encre `#2B2018` sur blanc cassé `#FAF6EF` → contraste élevé,
  conforme AA/AAA.
- Texte ivoire `#F3EAD8` sur terre cuite foncée `#7C3D1E` (thème
  CINECLUB) → à valider AA pour le texte courant ; réserver le sable clair
  aux éléments décoratifs, pas au texte de lecture longue.
- Ne jamais utiliser sable clair `#D8C3A0` comme couleur de texte sur fond
  ivoire (contraste insuffisant) : réserver au décoratif.
