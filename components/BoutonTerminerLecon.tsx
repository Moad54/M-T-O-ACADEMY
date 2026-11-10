"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { lireProgression, marquerLeconTerminee } from "@/lib/stockage";

/** Enregistre la leçon comme terminée dans la progression de l'apprenant. */
export function BoutonTerminerLecon({ identifiant }: { identifiant: string }) {
  const [terminee, setTerminee] = useState(false);

  useEffect(() => {
    setTerminee(lireProgression().leconsTerminees.includes(identifiant));
  }, [identifiant]);

  function terminer() {
    marquerLeconTerminee(identifiant);
    setTerminee(true);
  }

  return (
    <button
      type="button"
      onClick={terminer}
      disabled={terminee}
      className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold transition ${
        terminee
          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
          : "bouton-primaire"
      }`}
    >
      <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
      {terminee ? "Leçon terminée" : "Marquer comme terminée"}
    </button>
  );
}
