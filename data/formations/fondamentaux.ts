import type { Formation } from "@/lib/types";

/**
 * Formation 1 — Les fondamentaux de la météorologie.
 * Contenu complet : sert de modèle pour les autres formations.
 */
export const fondamentaux: Formation = {
  slug: "fondamentaux-meteorologie",
  titre: "Les fondamentaux de la météorologie",
  sousTitre: "Comprendre l'atmosphère et les grandeurs qui décrivent le temps",
  presentation:
    "Point de départ de l'académie, cette formation pose les bases indispensables à toute la suite du parcours : la composition de l'atmosphère, la structure verticale de l'air, les grandeurs mesurées (température, pression, humidité, vent) et les instruments qui les observent. Aucun prérequis scientifique n'est nécessaire.",
  niveau: "Débutant",
  duree: "3 h",
  acces: "gratuit",
  icone: "nuages",
  couleur: "from-ciel-400 to-nuit-600",
  objectifs: [
    "Décrire la composition de l'atmosphère terrestre et le rôle de ses principaux gaz.",
    "Identifier les couches de l'atmosphère et expliquer ce qui distingue la troposphère.",
    "Définir la température, la pression et l'humidité relative, et savoir comment on les mesure.",
    "Reconnaître les instruments de la station météorologique et leur usage.",
  ],
  chapitres: [
    {
      slug: "atmosphere-terrestre",
      titre: "L'atmosphère terrestre",
      lecons: [
        {
          slug: "composition-atmosphere",
          titre: "Composition de l'atmosphère",
          duree: "12 min",
          contenu: [
            "L'air que nous respirons est un mélange de gaz. Le diazote représente environ 78 % du volume, le dioxygène environ 21 %, et l'argon près de 1 %. Le reste est constitué de gaz en très faibles proportions, parmi lesquels le dioxyde de carbone, dont la concentration atteint aujourd'hui environ 0,04 %.",
            "La vapeur d'eau, elle, n'est pas comptée parmi ces gaz fixes : sa quantité varie fortement selon le lieu et l'heure, de quasiment nulle dans les déserts froids à plus de 4 % dans une masse d'air tropicale humide. C'est pourtant elle qui alimente la plupart des phénomènes météorologiques.",
            "Les gaz à effet de serre, comme la vapeur d'eau et le dioxyde de carbone, absorbent une partie du rayonnement infrarouge émis par la Terre. Ce mécanisme naturel maintient une température moyenne habitable à la surface du globe.",
          ],
        },
        {
          slug: "couches-atmosphere",
          titre: "Les couches de l'atmosphère",
          duree: "15 min",
          contenu: [
            "L'atmosphère se divise en couches selon l'évolution de la température avec l'altitude. La troposphère est la plus basse : elle contient la quasi-totalité de la vapeur d'eau et abrite tous les phénomènes météorologiques courants. Son épaisseur varie d'environ 8 km aux pôles à 16 à 18 km à l'équateur.",
            "Au-dessus se trouve la stratosphère, où la température augmente avec l'altitude grâce à l'absorption du rayonnement ultraviolet par l'ozone. C'est là que les avions de ligne évoluent, dans la basse stratosphère, loin de la plupart des nuages.",
            "La mésosphère, la thermosphère et l'exosphère complètent cette structure. Elles n'ont pas d'influence directe sur le temps que nous vivons au sol, mais elles jouent un rôle dans la protection contre le rayonnement solaire.",
          ],
        },
      ],
    },
    {
      slug: "grandeurs-de-base",
      titre: "Température, pression et humidité",
      lecons: [
        {
          slug: "pression-atmospherique",
          titre: "La pression atmosphérique",
          duree: "14 min",
          contenu: [
            "La pression atmosphérique est le poids de la colonne d'air qui s'appuie sur une surface donnée. Au niveau de la mer, sa valeur moyenne est d'environ 1013,25 hectopascals (hPa). Elle diminue avec l'altitude, car la colonne d'air au-dessus de nous se raccourcit.",
            "En météorologie, on parle de zones de haute pression (anticyclones) et de basse pression (dépressions). Cette différence de pression met l'air en mouvement : l'air circule des hautes vers les basses pressions, et c'est ce mouvement qui crée le vent.",
          ],
        },
        {
          slug: "humidite-et-point-de-rosee",
          titre: "Humidité relative et point de rosée",
          duree: "13 min",
          contenu: [
            "L'humidité relative indique le rapport entre la quantité de vapeur d'eau présente dans l'air et la quantité maximale qu'il pourrait contenir à la même température. Exprimée en pourcentage, elle augmente sans que l'air ne contienne plus d'eau lorsque la température baisse.",
            "Le point de rosée est la température à laquelle l'air, refroidi à pression constante, devient saturé. En dessous de cette température, la vapeur se condense en gouttelettes : c'est l'origine de la rosée, du brouillard et des nuages.",
          ],
        },
      ],
    },
    {
      slug: "mesurer-le-temps",
      titre: "Mesurer le temps",
      lecons: [
        {
          slug: "instruments-station",
          titre: "Les instruments d'une station météorologique",
          duree: "11 min",
          contenu: [
            "Une station météorologique regroupe plusieurs instruments. Le thermomètre, abrité sous un écran blanc ventilé pour éviter le rayonnement direct du soleil, mesure la température de l'air. Le baromètre mesure la pression, l'hygromètre l'humidité, l'anémomètre la vitesse du vent et la girouette sa direction.",
            "Le pluviomètre recueille les précipitations et les exprime en millimètres de hauteur d'eau. Un millimètre de pluie correspond à un litre d'eau répartie sur un mètre carré. Ces mesures locales alimentent ensuite les cartes et les modèles de prévision.",
          ],
        },
      ],
    },
  ],
  exercices: [
    "Recopier le tableau des principales couches de l'atmosphère et indiquer, pour chacune, si la température augmente ou diminue avec l'altitude.",
    "Convertir une pression de 1009 hPa en la comparant à la moyenne au niveau de la mer, puis expliquer si elle correspond plutôt à une dépression ou à un anticyclone.",
    "Expliquer pourquoi une eau de pluie de 10 mm représente 10 litres par mètre carré.",
  ],
  quizFinal: [
    {
      id: "fond-q1",
      enonce: "Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      choix: ["Le dioxygène", "Le diazote", "L'argon", "Le dioxyde de carbone"],
      reponse: 1,
      explication: "Le diazote représente environ 78 % du volume de l'air sec.",
    },
    {
      id: "fond-q2",
      enonce: "Dans quelle couche de l'atmosphère se produisent la quasi-totalité des phénomènes météorologiques courants ?",
      choix: ["La stratosphère", "La mésosphère", "La troposphère", "La thermosphère"],
      reponse: 2,
      explication: "La troposphère contient presque toute la vapeur d'eau et les nuages.",
    },
    {
      id: "fond-q3",
      enonce: "La pression atmosphérique moyenne au niveau de la mer est d'environ :",
      choix: ["950 hPa", "1013 hPa", "1100 hPa", "800 hPa"],
      reponse: 1,
      explication: "La valeur de référence est d'environ 1013,25 hPa.",
    },
  ],
};
