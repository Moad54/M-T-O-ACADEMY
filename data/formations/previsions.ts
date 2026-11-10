import type { Formation } from "@/lib/types";

/**
 * Formations 8 à 10 — modèles numériques, vigilance et bulletin.
 * Version initiale, à approfondir à l'étape suivante.
 */

export const modelesNumeriques: Formation = {
  slug: "modeles-numeriques-prevision",
  titre: "Comprendre les modèles numériques de prévision",
  sousTitre: "Des équations de l'atmosphère aux prévisions à plusieurs jours",
  presentation:
    "Les prévisions modernes reposent sur des modèles numériques qui résolvent les équations de la physique de l'atmosphère sur une grille de points. Cette formation explique leur fonctionnement, leurs limites et la notion d'incertitude.",
  niveau: "Avancé",
  duree: "4 h 30",
  acces: "premium",
  prix: 399,
  icone: "modele",
  couleur: "from-nuit-800 to-ciel-600",
  objectifs: [
    "Décrire le principe d'un modèle numérique de prévision.",
    "Expliquer pourquoi la prévision perd en fiabilité au-delà de quelques jours.",
  ],
  chapitres: [
    {
      slug: "principe-modele",
      titre: "Le principe d'un modèle numérique",
      lecons: [
        {
          slug: "grille-equations",
          titre: "Grille de calcul et équations",
          duree: "15 min",
          contenu: [
            "Un modèle numérique découpe l'atmosphère en une grille tridimensionnelle. À chaque point, il calcule l'évolution de la pression, du vent, de la température et de l'humidité à partir des équations de la dynamique et de la thermodynamique, puis avance pas à pas dans le temps.",
            "La finesse de la grille conditionne la précision des résultats, mais elle exige davantage de calcul. Les phénomènes plus petits que la maille, comme certains orages, doivent être représentés par des paramétrages approchés.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Expliquer, avec vos mots, pourquoi une prévision à dix jours est moins fiable qu'une prévision à 24 heures.",
    "Comparer deux échéances de prévision fictives et identifier celle qui présente la plus grande incertitude.",
  ],
  quizFinal: [
    {
      id: "modl-q1",
      enonce: "Un modèle numérique de prévision calcule l'évolution de l'atmosphère :",
      choix: ["À partir de photographies seulement", "En résolvant des équations physiques sur une grille", "En moyennant les bulletins passés", "Au hasard"],
      reponse: 1,
      explication: "Les modèles résolvent les équations de la physique de l'atmosphère sur une grille de points.",
    },
    {
      id: "modl-q2",
      enonce: "Pourquoi la fiabilité d'une prévision diminue-t-elle avec l'échéance ?",
      choix: ["Parce que les ordinateurs ralentissent", "Parce que de petites erreurs initiales s'amplifient", "Parce que la Terre tourne plus vite", "Parce que les modèles sont arrêtés"],
      reponse: 1,
      explication: "L'atmosphère est un système chaotique : de petites erreurs initiales croissent avec le temps.",
    },
  ],
};

export const alertesVigilance: Formation = {
  slug: "alertes-vigilance",
  titre: "Les alertes météorologiques et la vigilance",
  sousTitre: "Comprendre les niveaux de vigilance et les bons réflexes",
  presentation:
    "Les services de l'État diffusent des niveaux de vigilance pour alerter la population sur les phénomènes dangereux. Cette formation présente la logique des couleurs, les seuils et les consignes associées.",
  niveau: "Débutant",
  duree: "2 h",
  acces: "gratuit",
  icone: "alerte",
  couleur: "from-soleil-400 to-soleil-600",
  objectifs: [
    "Expliquer la signification des couleurs de vigilance.",
    "Adopter les consignes adaptées à chaque niveau d'alerte.",
  ],
  chapitres: [
    {
      slug: "niveaux-vigilance",
      titre: "Les niveaux de vigilance",
      lecons: [
        {
          slug: "couleurs-vigilance",
          titre: "Vert, jaune, orange, rouge",
          duree: "10 min",
          contenu: [
            "La vigilance s'exprime selon une échelle de quatre couleurs. Le vert indique l'absence de danger particulier, le jaune une situation à surveiller, l'orange un danger notable qui demande de la prudence, et le rouge un danger important nécessitant de suivre les consignes officielles.",
            "Une alerte n'est pas une prévision précise de l'heure ou du lieu exact. Elle signale une probabilité de phénomène dangereux sur une zone donnée. Il est donc utile de consulter régulièrement les bulletins officiels pendant toute la durée de l'épisode.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Rédiger une consigne courte pour un niveau de vigilance orange lors de fortes pluies.",
    "Lister les sources officielles à consulter avant une sortie en montagne.",
  ],
  quizFinal: [
    {
      id: "vig-q1",
      enonce: "Quelle couleur de vigilance indique l'absence de danger particulier ?",
      choix: ["Jaune", "Orange", "Vert", "Rouge"],
      reponse: 2,
      explication: "Le vert signale une situation sans danger particulier.",
    },
    {
      id: "vig-q2",
      enonce: "Une alerte de vigilance signale principalement :",
      choix: ["L'heure exacte d'un orage", "Une probabilité de phénomène dangereux sur une zone", "La température du jour", "La fin de la pluie"],
      reponse: 1,
      explication: "La vigilance porte sur une zone et une probabilité, non sur un instant précis.",
    },
  ],
};

export const bulletinMeteo: Formation = {
  slug: "presenter-bulletin-meteo",
  titre: "Présenter un bulletin météo en français",
  sousTitre: "Mettre en forme une prévision claire et agréable à écouter",
  presentation:
    "Un bulletin météo doit être clair, précis et adapté à son public. Cette formation montre comment structurer une prévision, employer le vocabulaire juste et gérer l'oral devant la caméra ou le micro.",
  niveau: "Intermédiaire",
  duree: "3 h",
  acces: "premium",
  prix: 299,
  icone: "bulletin",
  couleur: "from-ciel-500 to-soleil-500",
  objectifs: [
    "Structurer un bulletin en trois temps : situation, évolution, conseils.",
    "Employer un vocabulaire météorologique précis et accessible.",
  ],
  chapitres: [
    {
      slug: "structure-bulletin",
      titre: "Structurer un bulletin",
      lecons: [
        {
          slug: "plan-bulletin",
          titre: "Le plan d'un bulletin",
          duree: "12 min",
          contenu: [
            "Un bon bulletin commence par la situation générale, décrite en une ou deux phrases : quelles masses d'air, quels centres d'action. Il présente ensuite l'évolution attendue, région par région, avec les heures clés. Il se termine par des conseils concrets, par exemple sur la circulation ou les activités de plein air.",
            "Le vocabulaire doit rester précis : préférer « averses » à « pluie » lorsque les précipitations sont brèves et intenses, et employer « éclaircies » plutôt que « trou dans les nuages ». Des phrases courtes facilitent la compréhension à l'oral.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Rédiger un bulletin de 30 secondes pour une journée de vent fort et de pluies sur le nord du pays.",
    "Reformuler une prévision technique en un message compréhensible par un public non averti.",
  ],
  quizFinal: [
    {
      id: "bull-q1",
      enonce: "Dans quel ordre structure-t-on généralement un bulletin météo ?",
      choix: ["Conseils, puis situation, puis évolution", "Situation, évolution, puis conseils", "Évolution, conseils, puis situation", "Conseils uniquement"],
      reponse: 1,
      explication: "Le bulletin part de la situation générale, décrit l'évolution, puis donne des conseils.",
    },
    {
      id: "bull-q2",
      enonce: "Pour décrire une pluie brève et intense, on préfère le terme :",
      choix: ["Éclaircies", "Averses", "Brouillard", "Ciel voilé"],
      reponse: 1,
      explication: "Le mot averse désigne des précipitations brèves et souvent intenses.",
    },
  ],
};
