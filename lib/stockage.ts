/**
 * Stockage de la progression, des favoris et des résultats de quiz.
 *
 * ⚠️ Version de démonstration : les données sont conservées dans le navigateur (localStorage).
 * Elles ne sont ni synchronisées entre appareils ni sécurisées.
 * Pour une version de production, remplacer ces fonctions par des requêtes Supabase
 * (voir README.md, section « Connecter Supabase »). Les signatures restent identiques.
 */

const CLE_PROGRESSION = "meteo-academy-progression";
const CLE_FAVORIS = "meteo-academy-favoris";

export interface ResultatQuiz {
  score: number;
  total: number;
  date: string; // ISO 8601
}

export interface Progression {
  leconsTerminees: string[]; // identifiants au format "formation/chapitre/lecon"
  quiz: Record<string, ResultatQuiz>; // clé : slug de la formation
}

const progressionVide: Progression = { leconsTerminees: [], quiz: {} };

function lire<T>(cle: string, valeurParDefaut: T): T {
  if (typeof window === "undefined") return valeurParDefaut;
  try {
    const brut = window.localStorage.getItem(cle);
    return brut ? (JSON.parse(brut) as T) : valeurParDefaut;
  } catch {
    return valeurParDefaut;
  }
}

function ecrire<T>(cle: string, valeur: T): void {
  try {
    window.localStorage.setItem(cle, JSON.stringify(valeur));
  } catch {
    // Stockage indisponible : l'application reste utilisable sans persistance.
  }
}

/** Lit la progression complète de l'apprenant. */
export function lireProgression(): Progression {
  return lire<Progression>(CLE_PROGRESSION, progressionVide);
}

/** Marque une leçon comme terminée (sans doublon). */
export function marquerLeconTerminee(identifiant: string): void {
  const progression = lireProgression();
  if (!progression.leconsTerminees.includes(identifiant)) {
    progression.leconsTerminees.push(identifiant);
    ecrire(CLE_PROGRESSION, progression);
  }
}

/** Enregistre le résultat d'un quiz, en conservant le meilleur score. */
export function enregistrerResultatQuiz(formation: string, score: number, total: number): void {
  const progression = lireProgression();
  const precedent = progression.quiz[formation];
  if (!precedent || score / total >= precedent.score / precedent.total) {
    progression.quiz[formation] = { score, total, date: new Date().toISOString() };
    ecrire(CLE_PROGRESSION, progression);
  }
}

/** Liste des identifiants de formations ajoutées aux favoris. */
export function lireFavoris(): string[] {
  return lire<string[]>(CLE_FAVORIS, []);
}

/** Ajoute ou retire une formation des favoris. Retourne le nouvel état. */
export function basculerFavori(slug: string): boolean {
  const favoris = lireFavoris();
  const index = favoris.indexOf(slug);
  let estFavori: boolean;
  if (index >= 0) {
    favoris.splice(index, 1);
    estFavori = false;
  } else {
    favoris.push(slug);
    estFavori = true;
  }
  ecrire(CLE_FAVORIS, favoris);
  return estFavori;
}
