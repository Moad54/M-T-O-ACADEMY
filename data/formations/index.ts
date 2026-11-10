import type { Formation } from "@/lib/types";
import { fondamentaux } from "./fondamentaux";
import { nuagesPrecipitations, orages, depressionsAnticyclones } from "./phenomenes";
import { massesAir, ventsPression, lireCartes } from "./dynamique";
import { modelesNumeriques, alertesVigilance, bulletinMeteo } from "./previsions";

/**
 * Catalogue complet des formations, dans l'ordre pédagogique.
 * Ajouter une nouvelle formation ici suffit à la faire apparaître partout.
 */
export const formations: Formation[] = [
  fondamentaux,
  nuagesPrecipitations,
  orages,
  depressionsAnticyclones,
  massesAir,
  ventsPression,
  lireCartes,
  modelesNumeriques,
  alertesVigilance,
  bulletinMeteo,
];

/** Retourne une formation à partir de son identifiant d'URL. */
export function getFormation(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

/** Retourne les formations gratuites. */
export function formationsGratuites(): Formation[] {
  return formations.filter((f) => f.acces === "gratuit");
}
