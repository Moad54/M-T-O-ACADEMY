import type { Formation } from "@/lib/types";

/**
 * Formations 2 à 4 — nuages, orages et grands systèmes.
 * Version initiale : chaque formation contient présentation, objectifs,
 * chapitre, leçon, exercices et quiz. Les contenus seront approfondis
 * dans l'étape suivante.
 */

export const nuagesPrecipitations: Formation = {
  slug: "nuages-precipitations",
  titre: "Comprendre les nuages et les précipitations",
  sousTitre: "Reconnaître les nuages et comprendre comment ils produisent la pluie",
  presentation:
    "Apprenez à identifier les principaux types de nuages à partir de leur forme et de leur altitude, puis à comprendre les mécanismes qui transforment la vapeur d'eau en pluie, neige ou grêle.",
  niveau: "Débutant",
  duree: "3 h 30",
  acces: "gratuit",
  icone: "nuages",
  couleur: "from-ciel-300 to-ciel-600",
  objectifs: [
    "Classer les nuages par étage et par forme.",
    "Expliquer la formation d'une goutte de pluie.",
    "Distinguer les différents types de précipitations.",
  ],
  chapitres: [
    {
      slug: "classification-nuages",
      titre: "Classification des nuages",
      lecons: [
        {
          slug: "etages-nuageux",
          titre: "Les trois étages nuageux",
          duree: "14 min",
          contenu: [
            "Les nuages sont classés selon l'altitude de leur base : l'étage supérieur (au-delà de 6 km environ aux latitudes moyennes), l'étage moyen (entre 2 et 7 km) et l'étage inférieur (en dessous de 2 km). Chaque étage possède ses genres caractéristiques, comme les cirrus, les altocumulus ou les stratocumulus.",
            "La forme renseigne sur la dynamique de l'air : les nuages en étendue, horizontaux, traduisent une atmosphère stable, tandis que les nuages verticaux, comme les cumulus, signalent une convection active.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Observer le ciel pendant dix minutes et noter les genres de nuages rencontrés, avec leur étage probable.",
    "Expliquer pourquoi un cumulus bourgeonnant peut donner une averse en fin de journée.",
  ],
  quizFinal: [
    {
      id: "nuag-q1",
      enonce: "Quel genre de nuage est typique de l'étage supérieur ?",
      choix: ["Le stratus", "Le cirrus", "Le nimbostratus", "Le cumulus"],
      reponse: 1,
      explication: "Les cirrus, formés de cristaux de glace, appartiennent à l'étage supérieur.",
    },
    {
      id: "nuag-q2",
      enonce: "Un nuage vertical comme le cumulus signale généralement :",
      choix: ["Une atmosphère très stable", "Une convection active", "Un brouillard dense", "Une absence de vent"],
      reponse: 1,
      explication: "Les nuages verticaux naissent de l'ascension de l'air chaud et humide.",
    },
  ],
};

export const orages: Formation = {
  slug: "orages-phenomenes-extremes",
  titre: "Les orages et les phénomènes extrêmes",
  sousTitre: "Comprendre la formation des cellules orageuses et leurs dangers",
  presentation:
    "Cette formation explique comment se développe un orage, quels sont ses mécanismes électriques et quels phénomènes extrêmes peuvent l'accompagner : fortes rafales, grêle, trombes et crues éclair.",
  niveau: "Intermédiaire",
  duree: "4 h",
  acces: "premium",
  prix: 349,
  icone: "orage",
  couleur: "from-nuit-700 to-soleil-500",
  objectifs: [
    "Décrire les trois conditions nécessaires à la formation d'un orage.",
    "Identifier les dangers d'une cellule orageuse et les bons réflexes de sécurité.",
  ],
  chapitres: [
    {
      slug: "formation-orage",
      titre: "Naissance d'un orage",
      lecons: [
        {
          slug: "conditions-orage",
          titre: "Les trois ingrédients de l'orage",
          duree: "16 min",
          contenu: [
            "Un orage naît lorsque trois conditions sont réunies : une atmosphère humide dans les basses couches, une instabilité qui permet à l'air de s'élever rapidement, et un mécanisme de déclenchement, comme un front ou un relief.",
            "Une fois la cellule formée, les courants ascendants et descendants séparent les charges électriques dans le nuage. Les décharges qui en résultent constituent la foudre. La règle de prudence la plus simple consiste à se mettre à l'abri dès que le tonnerre se fait entendre.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "À partir d'un sondage fictif fourni par le formateur, identifier si l'atmosphère est instable.",
    "Rédiger trois consignes de sécurité à destination d'un public lors d'un orage.",
  ],
  quizFinal: [
    {
      id: "orag-q1",
      enonce: "Lequel de ces éléments n'est pas nécessaire à la formation d'un orage ?",
      choix: ["Une humidité suffisante", "Une instabilité de l'air", "Un mécanisme de déclenchement", "Une pression supérieure à 1100 hPa"],
      reponse: 3,
      explication: "Un niveau de pression élevé n'est pas une condition de l'orage ; ce sont l'humidité, l'instabilité et le déclenchement qui comptent.",
    },
    {
      id: "orag-q2",
      enonce: "Quelle est la règle de prudence la plus simple face à la foudre ?",
      choix: ["Rester sous un arbre isolé", "Se mettre à l'abri dès qu'on entend le tonnerre", "Attendre la fin de la pluie", "Sortir pour observer la cellule"],
      reponse: 1,
      explication: "Si le tonnerre s'entend, la foudre peut frapper : il faut rejoindre un abri.",
    },
  ],
};

export const depressionsAnticyclones: Formation = {
  slug: "depressions-anticyclones",
  titre: "Les dépressions et les anticyclones",
  sousTitre: "Les grands centres d'action qui gouvernent le temps",
  presentation:
    "Les dépressions et les anticyclones sont les acteurs principaux du temps aux latitudes moyennes. Cette formation montre comment ils naissent, comment ils tournent, et ce qu'ils apportent comme temps.",
  niveau: "Intermédiaire",
  duree: "3 h 45",
  acces: "premium",
  prix: 349,
  icone: "depression",
  couleur: "from-nuit-600 to-ciel-500",
  objectifs: [
    "Expliquer le sens de rotation des vents autour d'une dépression et d'un anticyclone.",
    "Associer chaque système au temps qu'il apporte généralement.",
  ],
  chapitres: [
    {
      slug: "centres-action",
      titre: "Dépressions et anticyclones",
      lecons: [
        {
          slug: "rotation-vents",
          titre: "La rotation des vents",
          duree: "15 min",
          contenu: [
            "Dans l'hémisphère nord, les vents tournent dans le sens inverse des aiguilles d'une montre autour d'une dépression, et dans le sens des aiguilles d'une montre autour d'un anticyclone. Cette rotation résulte de la force de Coriolis, due à la rotation de la Terre.",
            "Une dépression est associée généralement à un temps instable, avec nuages et précipitations. Un anticyclone apporte le plus souvent un temps stable, avec un ciel dégagé, à moins que l'air ne soit humide et que des nuages bas ne se forment.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Sur une carte fictive, tracer le sens de rotation des vents autour d'une dépression et d'un anticyclone.",
    "Expliquer pourquoi un anticyclone hivernal peut donner du brouillard.",
  ],
  quizFinal: [
    {
      id: "depr-q1",
      enonce: "Dans l'hémisphère nord, les vents tournent autour d'une dépression :",
      choix: ["Dans le sens des aiguilles d'une montre", "Dans le sens inverse des aiguilles d'une montre", "Sans rotation", "Vers le centre en ligne droite"],
      reponse: 1,
      explication: "La force de Coriolis fait tourner les vents à gauche de leur direction dans l'hémisphère nord.",
    },
    {
      id: "depr-q2",
      enonce: "Un anticyclone apporte généralement :",
      choix: ["Un temps instable et pluvieux", "Un temps stable, souvent sec", "Des orages violents", "Des vents de tempête"],
      reponse: 1,
      explication: "La subsidence de l'air sur l'anticyclone limite la formation de nuages.",
    },
  ],
};
