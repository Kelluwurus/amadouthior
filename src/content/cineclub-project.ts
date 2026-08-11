// data/cineclub-project.ts
// Données structurées du projet "CINECLUB – DÎNER DÉBAT"
// Porté par KOOM COM GROUPE, conçu par Amadou Thior

export const cineclubProject = {
  title: "CINECLUB – DÎNER DÉBAT",
  tagline: "Cinéma · Dialogue · Solidarité · Action",
  slogan: "Le cinéma au service de l'humanitaire. Mêler l'utile à l'événementiel !",
  openingQuote:
    "Le cinéma ne change pas le monde à lui seul. Mais il peut changer notre regard sur le monde… et c'est ainsi que naissent les plus grandes transformations.",

  promoterWord: {
    author: "Amadou THIOR",
    role: "Fondateur et Directeur de KOOM COM GROUPE, Concepteur du programme CINECLUB – DÎNER DÉBAT",
    text: `Depuis toujours, le cinéma constitue l'un des plus puissants moyens d'expression de notre humanité. Il raconte nos histoires, révèle nos différences, célèbre nos valeurs communes et nous invite à regarder l'autre avec davantage de compréhension, d'empathie et de respect.

À une époque où les défis sociaux, sanitaires, environnementaux et humanitaires se multiplient, il devient essentiel de créer des espaces capables de rassembler les citoyens, les institutions, les entreprises et les organisations autour d'un dialogue constructif et porteur de solutions.

C'est dans cet esprit qu'est né CINECLUB – DÎNER DÉBAT. Notre ambition est simple, mais profondément innovante : transformer chaque projection cinématographique en une véritable plateforme de réflexion, de sensibilisation, de plaidoyer et d'engagement citoyen.

Notre ambition est de faire de Dakar un rendez-vous incontournable du cinéma citoyen en Afrique, capable de rayonner progressivement à l'échelle régionale et internationale.`,
  },

  executiveSummary: `CINECLUB – DÎNER DÉBAT est un programme culturel, citoyen et humanitaire porté par KOOM COM GROUPE en partenariat avec des institutions publiques, entreprises privées, organisations internationales, ambassades, fondations, ONG et professionnels du cinéma. L'objectif : faire du cinéma un véritable outil de sensibilisation, de dialogue et de mobilisation autour des grands enjeux de société.`,

  concept: {
    description:
      "CINECLUB – DÎNER DÉBAT est un concept original qui transforme chaque séance de cinéma en une expérience immersive où se rencontrent la culture, la réflexion, le dialogue citoyen, le réseautage et l'engagement collectif. Le cinéma devient ainsi un véritable catalyseur de changement social.",
    valueChain: ["Émouvoir", "Comprendre", "Dialoguer", "Mobiliser", "Agir"],
    steps: [
      {
        order: 1,
        title: "La Projection",
        description:
          "Projection d'un film de référence internationale, sélectionné pour la qualité de son message et sa portée sociale. Le film est le point de départ de la réflexion collective.",
        icon: "clapperboard",
      },
      {
        order: 2,
        title: "Le Dîner",
        description:
          "Un moment de convivialité favorisant les échanges informels entre invités, décideurs, partenaires, diplomatiques, artistes, universitaires, médias et membres de la société civile.",
        icon: "utensils",
      },
      {
        order: 3,
        title: "Le Débat",
        description:
          "Animé par un modérateur expérimenté, le débat réunit les différentes parties prenantes autour des thématiques abordées par le film dans une session interactive de questions-réponses avec le public.",
        icon: "mic",
      },
      {
        order: 4,
        title: "La Mise en réseau",
        description:
          "Un espace privilégié de rencontres entre institutions publiques, entreprises, fondations, ONG, médias et porteurs de projets pour créer des synergies et bâtir des partenariats durables.",
        icon: "network",
      },
      {
        order: 5,
        title: "L'Action",
        description:
          "Transformer les échanges en engagements concrets : campagnes, financement, soutien aux associations, projets collaboratifs, mécénat ou volontariat. Chaque édition laisse une empreinte durable.",
        icon: "lightbulb",
      },
    ],
    highlights: [
      "Une programmation alignée aux Journées Internationales des Nations Unies",
      "Une sélection d'œuvres cinématographiques à fort impact social",
      "Un format associant culture, débat et réseautage",
      "Une plateforme de dialogue entre secteurs public, privé et société civile",
      "Un dispositif favorisant la naissance de partenariats et d'actions concrètes",
      "Un programme appelé à devenir un rendez-vous annuel de référence au Sénégal, avec une vocation régionale et internationale",
    ],
  },

  editions: [
    {
      id: "2016-marcedes",
      year: 2016,
      status: "reference",
      editionLabel: "Édition inaugurale 2016",
      filmTitle: "Marcedes",
      director: "Hady ZACCAK",
      producer: null,
      country: "Liban",
      duration: "1h 8min (68 min)",
      originalLanguage: "Arabe",
      genre: "Documentaire long métrage",
      awards: [
        "Dubai International Film Festival 2011 – Nominé Muhr Arab Award",
        "2011 – Gagnant FIPRESCI Prize",
      ],
      synopsis:
        "Ce long métrage retrace les périodes noires de l'histoire du Liban à travers une voiture de marque \"Mercedes\", puissant témoin silencieux des bouleversements du pays.",
      eventStory:
        "Dans le cadre de la promotion du cinéma international au Sénégal et du renforcement des échanges culturels entre le Sénégal et le Liban, le cinéaste libanais Hady Zaccak a effectué un séjour officiel à Dakar. La projection exceptionnelle de \"Marcedes\" a été organisée par TAF PRODUCTION AFRIQUE au Grand Théâtre National de Dakar, sous le parrainage de M. Mbagnick Ndiaye, Ministre de la Culture et de la Communication, et en présence de Son Excellence M. Khalil El Habre, Ambassadeur du Liban au Sénégal.",
      mediaAppearances: [
        "Émission matinale \"Kenkelibaa\" sur la RTS",
        "Émission sur Vibe Radio en compagnie d'Amadou Thior",
      ],
      eventDate: "10 février 2016",
      venue: "Grand Théâtre National de Dakar",
    },
    {
      id: "2026-ghadi",
      year: 2026,
      status: "upcoming",
      editionLabel: "Édition 2026 — \"Le cinéma au service de l'inclusion\"",
      internationalDay: {
        name: "Journée Internationale des Personnes Handicapées",
        date: "3 décembre",
        location: "Dakar",
      },
      filmTitle: "Ghadi",
      director: "Amin DORA",
      producer: "Gabriel CHAMOUN",
      country: "Liban",
      duration: "100 minutes",
      originalLanguage: "Arabe (sous-titré en français)",
      genre: "Fiction – Comédie dramatique",
      recognition:
        "Plus de 17 000 entrées dans les cinémas libanais lors de sa première semaine de sortie.",
      synopsis:
        "Après plusieurs années passées à l'étranger, Leba et Lara reviennent s'installer dans leur quartier d'enfance à Beyrouth. Leur bonheur est immense lorsqu'ils donnent naissance à leur troisième enfant, Ghadi. Mais très vite, ils découvrent que celui-ci est porteur d'une différence. Alors que le voisinage manifeste son incompréhension et son rejet, la famille va devoir faire face aux préjugés et apprendre à transformer cette différence en force. À travers humour, émotion et humanité, le film invite à porter un regard nouveau sur le handicap, la diversité et l'acceptation de l'autre.",
      objectives: [
        "Sensibiliser le grand public aux questions du handicap",
        "Promouvoir les droits des personnes vivant avec un handicap",
        "Valoriser les initiatives des associations spécialisées",
        "Favoriser les échanges entre décideurs, experts, familles et société civile",
        "Encourager le développement de partenariats en faveur de l'inclusion",
        "Mobiliser des ressources au profit des organisations partenaires",
      ],
      themes: [
        "L'inclusion sociale",
        "Le handicap et la différence",
        "La lutte contre les préjugés",
        "Le rôle de la famille",
        "Le vivre-ensemble",
        "La dignité humaine",
        "L'espoir et la résilience",
      ],
      targetAudiences: [
        "Institutions publiques",
        "Organisations internationales",
        "Associations et ONG",
        "Professionnels de la santé",
        "Entreprises publiques et privées",
        "Universités et établissements scolaires",
        "Médias",
        "Grand public",
      ],
    },
  ],

  targets: [
    "Les associations caritatives",
    "Les organisations féminines et pour l'enfance",
    "Les organisations professionnelles et sociales",
    "Les ONG de développement communautaire",
  ],

  partners: {
    private: [
      "Opérateur de Mobile Money (Wave / Orange Money / Mixx by YAS) + E-Ticketing",
      "Novotel",
      "Seanema – Hôtel Sea Plaza",
      "Pathé Cinéma Dakar",
    ],
    institutional: [
      "Musée des Civilisations Noires",
      "Monument de la Renaissance Africaine",
      "Place du Souvenir Africain",
      "Grand Théâtre National Doudou Ndiaye Rose",
      "Ambassades et Fondations au Sénégal",
      "Le Ministère de la Santé",
      "Le Ministère de la Femme et de l'Enfant",
      "Le Ministère de la Culture, de l'Artisanat et du Tourisme",
      "La Ville de Dakar",
    ],
    media:
      "Une émission télévisée sur le cinéma est prévue au bout de trois éditions du CCDD, basée sur les captations des discussions qui suivent les projections, en partenariat avec une télévision de grande audience et/ou une plateforme numérique.",
  },

  ticketing: {
    description:
      "La commercialisation des billets de projection ainsi que la réservation des places pour le dîner-débat (tables VIP et tables partenaires) sont assurées par une plateforme de billetterie numérique. Les paiements s'effectuent exclusivement par voie électronique (Mobile Money, cartes bancaires) via un prestataire agréé, garantissant traçabilité, sécurité et fiabilité.",
  },

  sponsorshipTiers: [
    {
      tier: "Bronze",
      colorHex: "#C97B5A",
      benefits: ["Affiche et Bâche", "Flyers", "Carte d'invitation", "Kakémonos"],
    },
    {
      tier: "Argent",
      colorHex: "#A8A8A8",
      benefits: [
        "Affiche et Bâche",
        "Flyers",
        "Carte d'invitation",
        "Kakémonos",
        "Spots télé + avant et après écran",
        "Spots radio",
        "Plateforme numérique et réseaux sociaux (Facebook, Instagram, WhatsApp, TikTok)",
      ],
    },
    {
      tier: "Or",
      colorHex: "#D4AF37",
      benefits: [
        "Affiche et Bâche",
        "Flyers",
        "Carte d'invitation",
        "Kakémonos",
        "Spots télé + avant et après écran",
        "Spots radio",
        "Plateforme numérique et réseaux sociaux",
        "Accueil (hôtesses aux couleurs et logo du sponsor)",
        "Box cadeaux « Këllu Wurus » avec logo du sponsor pour les invités VIP",
        "E-ticketing de l'événementiel",
      ],
    },
  ],

  organizer: {
    structure: "KOOM COM GROUPE",
    manager: "Amadou THIOR — Cinéaste, Producteur-Réalisateur",
    address: "N° 69 TE Cité Diamalaye 2, Dakar – Sénégal",
    phone: ["+221 77 656 56 60", "+221 33 820 29 31"],
    email: "thioramadou@gmail.com",
  },

  partnersContacts: [
    {
      name: "KËLLU WURUS",
      manager: "Safiétou Raby THIOR — Informaticienne, Chef de Projet",
      address: "87, Rue de Fontanières, Villeurbanne, 69100, France",
      phone: "+33 6 23 75 01 99",
      email: "safietouthior@gmail.com",
    },
  ],
} as const;

export type CineclubProject = typeof cineclubProject;
