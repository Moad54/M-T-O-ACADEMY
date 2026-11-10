import type { TermeGlossaire } from "@/lib/types";

/**
 * Glossaire météorologique — définitions en français, classées par ordre alphabétique.
 */
export const glossaire: TermeGlossaire[] = [
  {
    terme: "Anticyclone",
    definition:
      "Zone de haute pression où l'air descend lentement. Elle apporte généralement un temps stable et souvent sec.",
    categorie: "Grands systèmes",
  },
  {
    terme: "Averse",
    definition:
      "Précipitation brève, souvent intense, qui commence et s'arrête assez brusquement.",
    categorie: "Précipitations",
  },
  {
    terme: "Baromètre",
    definition: "Instrument qui mesure la pression atmosphérique.",
    categorie: "Instruments",
  },
  {
    terme: "Cirrus",
    definition:
      "Nuage élevé, fin et filamenteux, formé de cristaux de glace.",
    categorie: "Nuages",
  },
  {
    terme: "Cumulus",
    definition:
      "Nuage vertical à contours bien délimités, signe d'une convection active.",
    categorie: "Nuages",
  },
  {
    terme: "Dépression",
    definition:
      "Zone de basse pression où l'air s'élève. Elle est associée le plus souvent à un temps instable.",
    categorie: "Grands systèmes",
  },
  {
    terme: "Front",
    definition:
      "Zone de contact entre deux masses d'air de caractéristiques différentes, souvent le siège de nuages et de précipitations.",
    categorie: "Fronts",
  },
  {
    terme: "Front chaud",
    definition:
      "Front où une masse d'air chaud glisse lentement sur une masse d'air froid, générant des pluies longues et régulières.",
    categorie: "Fronts",
  },
  {
    terme: "Front froid",
    definition:
      "Front où une masse d'air froid, plus dense, pousse l'air chaud vers le haut. Les précipitations sont souvent brèves et intenses.",
    categorie: "Fronts",
  },
  {
    terme: "Hectopascal (hPa)",
    definition:
      "Unité de pression. La pression moyenne au niveau de la mer vaut environ 1013 hPa.",
    categorie: "Unités",
  },
  {
    terme: "Humidité relative",
    definition:
      "Rapport, en pourcentage, entre la quantité de vapeur d'eau présente dans l'air et la quantité maximale possible à la même température.",
    categorie: "Grandeurs",
  },
  {
    terme: "Isobare",
    definition:
      "Ligne reliant les points qui ont la même pression atmosphérique sur une carte. Plus elles sont serrées, plus le vent est fort.",
    categorie: "Cartes",
  },
  {
    terme: "Masse d'air",
    definition:
      "Volume d'air dont la température et l'humidité sont relativement homogènes.",
    categorie: "Grands systèmes",
  },
  {
    terme: "Point de rosée",
    definition:
      "Température à laquelle l'air, refroidi à pression constante, devient saturé de vapeur d'eau.",
    categorie: "Grandeurs",
  },
  {
    terme: "Vigilance",
    definition:
      "Niveau d'alerte officiel, représenté par une couleur (vert, jaune, orange, rouge), indiquant le danger potentiel d'un phénomène sur une zone donnée.",
    categorie: "Alertes",
  },
];
