"use client";

import { CheckCircle2, RotateCcw, Trophy, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Formation } from "@/lib/types";
import { enregistrerResultatQuiz } from "@/lib/stockage";

/**
 * Quiz interactif avec correction automatique.
 * Chaque question est corrigée dès la validation, puis le score final est enregistré.
 */
export function QuizInteractif({ formation }: { formation: Formation }) {
  const questions = formation.quizFinal;
  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState<number | null>(null);
  const [valide, setValide] = useState(false);
  const [score, setScore] = useState(0);
  const [termine, setTermine] = useState(false);

  const question = questions[index];
  const progression = Math.round(((index + (valide ? 1 : 0)) / questions.length) * 100);

  function valider() {
    if (choisi === null) return;
    setValide(true);
    if (choisi === question.reponse) setScore((s) => s + 1);
  }

  function suivante() {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setChoisi(null);
      setValide(false);
    } else {
      const total = questions.length;
      const final = score;
      enregistrerResultatQuiz(formation.slug, final, total);
      setTermine(true);
    }
  }

  function recommencer() {
    setIndex(0);
    setChoisi(null);
    setValide(false);
    setScore(0);
    setTermine(false);
  }

  if (termine) {
    const pourcentage = Math.round((score / questions.length) * 100);
    const reussi = pourcentage >= 70;
    return (
      <section className="carte mx-auto max-w-2xl p-8 text-center" aria-live="polite">
        <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${reussi ? "bg-emerald-500/15 text-emerald-600" : "bg-soleil-500/15 text-soleil-500"}`}>
          <Trophy className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-2xl font-bold">
          {reussi ? "Bravo, quiz réussi !" : "Quiz terminé"}
        </h2>
        <p className="mt-3 text-lg">
          Votre score : <strong>{score} / {questions.length}</strong> ({pourcentage} %)
        </p>
        <p className="mt-3 text-sm text-[var(--texte-doux)]">
          {reussi
            ? "Le seuil de réussite est de 70 %. Votre résultat a été enregistré dans votre tableau de bord."
            : "Le seuil de réussite est de 70 %. Relisez les leçons et réessayez : chaque tentative compte."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={recommencer} className="bouton-secondaire">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Recommencer
          </button>
          <Link href="/tableau-de-bord" className="bouton-primaire">Voir mon tableau de bord</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl" aria-labelledby="question-titre">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-[var(--texte-doux)]">
          <span>Question {index + 1} sur {questions.length}</span>
          <span>{progression} %</span>
        </div>
        <div
          className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--bordure)]"
          role="progressbar"
          aria-valuenow={progression}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Avancement du quiz"
        >
          <div className="h-full rounded-full bg-gradient-to-r from-ciel-400 to-soleil-500 transition-all duration-500" style={{ width: `${progression}%` }} />
        </div>
      </div>

      <div className="carte p-6 sm:p-8">
        <h2 id="question-titre" className="text-xl font-bold leading-snug">{question.enonce}</h2>

        <fieldset className="mt-6 space-y-3">
          <legend className="sr-only">Choisissez une réponse</legend>
          {question.choix.map((choix, i) => {
            const estBonne = i === question.reponse;
            const estChoisie = i === choisi;
            let style = "border-[var(--bordure)] hover:border-ciel-400";
            if (valide && estBonne) style = "border-emerald-500 bg-emerald-500/10";
            else if (valide && estChoisie && !estBonne) style = "border-red-500 bg-red-500/10";
            else if (estChoisie) style = "border-ciel-500 bg-ciel-50 dark:bg-nuit-800";

            return (
              <label
                key={choix}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition ${style} ${valide ? "cursor-default" : ""}`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={i}
                  checked={estChoisie}
                  disabled={valide}
                  onChange={() => setChoisi(i)}
                  className="h-4 w-4 accent-ciel-600"
                />
                <span className="flex-1">{choix}</span>
                {valide && estBonne && <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-label="Bonne réponse" />}
                {valide && estChoisie && !estBonne && <XCircle className="h-5 w-5 text-red-600" aria-label="Mauvaise réponse" />}
              </label>
            );
          })}
        </fieldset>

        {valide && (
          <div className="mt-6 rounded-xl bg-ciel-50 p-4 text-sm dark:bg-nuit-800" role="status">
            <p className="font-semibold">{choisi === question.reponse ? "Bonne réponse !" : "Ce n'est pas la bonne réponse."}</p>
            <p className="mt-1 text-[var(--texte-doux)]">{question.explication}</p>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          {!valide ? (
            <button type="button" onClick={valider} disabled={choisi === null} className="bouton-primaire">
              Valider ma réponse
            </button>
          ) : (
            <button type="button" onClick={suivante} className="bouton-primaire">
              {index + 1 < questions.length ? "Question suivante" : "Voir mon résultat"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
