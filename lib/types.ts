/**
 * Types partagés de MÉTÉO ACADEMY.
 * Tous les libellés affichés à l'utilisateur sont en français.
 */

export type Niveau = "Débutant" | "Intermédiaire" | "Avancé";

export type Acces = "gratuit" | "premium";

export interface Lecon {
  slug: string;
  titre: string;
  duree: string; // ex. "12 min"
  contenu: string[]; // paragraphes pédagogiques
}

export interface Chapitre {
  slug: string;
  titre: string;
  lecons: Lecon[];
}

export interface Question {
  id: string;
  enonce: string;
  choix: string[];
  reponse: number; // index de la bonne réponse
  explication: string;
}

export interface Formation {
  slug: string;
  titre: string;
  sousTitre: string;
  presentation: string;
  niveau: Niveau;
  duree: string; // ex. "4 h 30"
  acces: Acces;
  prix?: number; // en dirhams (MAD), uniquement pour les formations premium
  icone: "nuages" | "orage" | "depression" | "masse-air" | "vent" | "carte" | "modele" | "alerte" | "micro" | "bulletin";
  couleur: string; // classe de dégradé Tailwind
  objectifs: string[];
  chapitres: Chapitre[];
  exercices: string[];
  quizFinal: Question[];
}

export interface TermeGlossaire {
  terme: string;
  definition: string;
  categorie: string;
}

export interface ProfilUtilisateur {
  id: string;
  nom: string;
  email: string;
  dateInscription: string; // ISO 8601
}
