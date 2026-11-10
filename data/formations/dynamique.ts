import type { Formation } from "@/lib/types";

/**
 * Formations 5 à 7 — masses d'air, vents et cartes.
 * Version initiale, à approfondir à l'étape suivante.
 */

export const massesAir: Formation = {
  slug: "masses-air-fronts",
  titre: "Les masses d'air et les fronts météorologiques",
  sousTitre: "Comprendre les frontières entre les grandes masses d'air",
  presentation:
    "Une masse d'air est un volume d'air aux caractéristiques homogènes de température et d'humidité. Lorsque deux masses d'air se rencontrent, elles forment un front, source fréquente de nuages et de précipitations.",
  niveau: "Intermédiaire",
  duree: "3 h 15",
  acces: "premium",
  prix: 299,
  icone: "masse-air",
  couleur: "from-ciel-500 to-nuit-800",
  objectifs: [
    "Définir une masse d'air et citer ses origines principales.",
    "Distinguer un front chaud d'un front froid et décrire le temps associé.",
  ],
  chapitres: [
    {
      slug: "fronts",
      titre: "Fronts chauds et fronts froids",
      lecons: [
        {
          slug: "front-chaud-froid",
          titre: "Front chaud et front froid",
          duree: "13 min",
          contenu: [
            "Un front chaud se produit lorsqu'une masse d'air chaud remplace une masse d'air froid. L'air chaud, plus léger, glisse lentement sur l'air froid, ce qui génère des nuages étagés et des pluies longues et régulières.",
            "Un front froid est plus rapide : l'air froid, plus dense, pousse l'air chaud vers le haut. Les précipitations sont souvent plus brèves mais plus intenses, et suivies d'une baisse nette de température.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Comparer les nuages attendus avant un front chaud et avant un front froid.",
    "Expliquer pourquoi l'air chaud s'élève au-dessus de l'air froid lors d'un front froid.",
  ],
  quizFinal: [
    {
      id: "mass-q1",
      enonce: "Un front chaud se caractérise généralement par :",
      choix: ["Des averses brèves et intenses", "Des pluies longues et régulières", "Un ciel toujours clair", "Une baisse brutale de température"],
      reponse: 1,
      explication: "L'air chaud glisse lentement sur l'air froid, créant des pluies durables.",
    },
    {
      id: "mass-q2",
      enonce: "Qu'est-ce qu'une masse d'air ?",
      choix: ["Un nuage de grande taille", "Un volume d'air aux caractéristiques homogènes", "Un vent très fort", "Une zone de haute pression uniquement"],
      reponse: 1,
      explication: "Une masse d'air est un volume d'air homogène en température et en humidité.",
    },
  ],
};

export const ventsPression: Formation = {
  slug: "vents-pression-atmospherique",
  titre: "Les vents et la pression atmosphérique",
  sousTitre: "Comprendre pourquoi l'air se met en mouvement",
  presentation:
    "Le vent naît des différences de pression entre deux régions. Cette formation explique les forces qui agissent sur l'air, l'effet de la rotation terrestre et les échelles de description du vent.",
  niveau: "Intermédiaire",
  duree: "3 h",
  acces: "premium",
  prix: 299,
  icone: "vent",
  couleur: "from-ciel-400 to-ciel-700",
  objectifs: [
    "Expliquer le lien entre gradient de pression et vitesse du vent.",
    "Utiliser l'échelle de Beaufort pour décrire un vent.",
  ],
  chapitres: [
    {
      slug: "forces-vent",
      titre: "Les forces qui mettent l'air en mouvement",
      lecons: [
        {
          slug: "gradient-pression",
          titre: "Le gradient de pression",
          duree: "12 min",
          contenu: [
            "Le vent s'établit lorsque la pression varie d'un point à un autre. Plus la différence de pression est forte sur une distance donnée, plus le vent est rapide. Cette variation s'appelle le gradient de pression.",
            "L'échelle de Beaufort, qui comporte 13 degrés, permet de décrire un vent à partir de ses effets observables sur la mer, la végétation et les constructions. Elle reste très utilisée dans les bulletins.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Classer, à partir de descriptions fictives, plusieurs situations sur l'échelle de Beaufort.",
    "Expliquer pourquoi le vent est plus fort en mer qu'à l'intérieur des terres.",
  ],
  quizFinal: [
    {
      id: "vent-q1",
      enonce: "Qu'est-ce qui provoque principalement le vent ?",
      choix: ["Les variations de température seulement", "Les différences de pression atmosphérique", "La couleur du ciel", "La présence de nuages"],
      reponse: 1,
      explication: "L'air se déplace des hautes vers les basses pressions : c'est le vent.",
    },
    {
      id: "vent-q2",
      enonce: "L'échelle de Beaufort compte :",
      choix: ["5 degrés", "10 degrés", "13 degrés", "20 degrés"],
      reponse: 2,
      explication: "L'échelle de Beaufort va de 0 à 12, soit 13 degrés.",
    },
  ],
};

export const lireCartes: Formation = {
  slug: "lire-cartes-meteorologiques",
  titre: "Lire et interpréter les cartes météorologiques",
  sousTitre: "Déchiffrer isobares, fronts et symboles",
  presentation:
    "Les cartes de pression, de température et de précipitations résument l'état de l'atmosphère. Cette formation apprend à lire les isobares, les symboles de fronts et les conventions graphiques utilisées par les services de prévision.",
  niveau: "Intermédiaire",
  duree: "4 h",
  acces: "premium",
  prix: 349,
  icone: "carte",
  couleur: "from-nuit-500 to-ciel-400",
  objectifs: [
    "Lire une carte isobare et estimer la force du vent.",
    "Reconnaître les symboles de fronts sur une carte de surface.",
  ],
  chapitres: [
    {
      slug: "lecture-isobares",
      titre: "Lecture des isobares",
      lecons: [
        {
          slug: "isobares-vent",
          titre: "Isobares et force du vent",
          duree: "14 min",
          contenu: [
            "Une isobare relie les points de même pression. Plus les isobares sont rapprochées, plus le gradient de pression est fort et plus le vent est soutenu. Une carte bien lisible montre donc immédiatement les zones venteuses.",
            "Sur une carte de surface, les fronts sont représentés par des lignes accompagnées de symboles : des triangles pour un front froid, des demi-cercles pour un front chaud. La lecture de ces symboles permet d'anticiper l'évolution du temps.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Sur une carte fictive, repérer les zones où les isobares sont les plus serrées.",
    "Identifier le type de front représenté par chaque symbole d'une légende donnée.",
  ],
  quizFinal: [
    {
      id: "cart-q1",
      enonce: "Lorsque les isobares sont très rapprochées, le vent est généralement :",
      choix: ["Faible", "Nul", "Soutenu", "Inexistant"],
      reponse: 2,
      explication: "Un fort gradient de pression produit un vent soutenu.",
    },
    {
      id: "cart-q2",
      enonce: "Sur une carte de surface, un front froid est représenté par :",
      choix: ["Des demi-cercles", "Des triangles", "Des croix", "Des flèches vertes"],
      reponse: 1,
      explication: "Les triangles désignent le front froid, les demi-cercles le front chaud.",
    },
  ],
};
