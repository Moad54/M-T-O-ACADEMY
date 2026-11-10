"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Formation, Niveau } from "@/lib/types";
import { CarteFormation } from "./CarteFormation";

const niveaux: ("Tous" | Niveau)[] = ["Tous", "Débutant", "Intermédiaire", "Avancé"];

/**
 * Catalogue interactif : recherche par texte et filtre par niveau.
 * La recherche porte sur le titre, le sous-titre, la présentation et les objectifs.
 */
export function CatalogueFormations({ formations }: { formations: Formation[] }) {
  const [requete, setRequete] = useState("");
  const [niveau, setNiveau] = useState<"Tous" | Niveau>("Tous");

  const resultats = useMemo(() => {
    const mots = requete
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    return formations.filter((f) => {
      if (niveau !== "Tous" && f.niveau !== niveau) return false;
      if (mots.length === 0) return true;
      const texte = [f.titre, f.sousTitre, f.presentation, ...f.objectifs]
        .join(" ")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");
      return mots.every((mot) => texte.includes(mot));
    });
  }, [formations, requete, niveau]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="relative w-full md:max-w-md">
          <span className="sr-only">Rechercher une formation</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--texte-doux)]" aria-hidden="true" />
          <input
            type="search"
            value={requete}
            onChange={(e) => setRequete(e.target.value)}
            placeholder="Rechercher une formation, un thème…"
            className="champ pl-12"
          />
        </label>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par niveau">
          {niveaux.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setNiveau(n)}
              aria-pressed={niveau === n}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                niveau === n
                  ? "bg-nuit-700 text-white dark:bg-ciel-500"
                  : "border border-[var(--bordure)] bg-[var(--surface)] hover:border-ciel-400"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-[var(--texte-doux)]" aria-live="polite">
        {resultats.length} formation{resultats.length > 1 ? "s" : ""} trouvée{resultats.length > 1 ? "s" : ""}
      </p>

      {resultats.length > 0 ? (
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resultats.map((formation) => (
            <CarteFormation key={formation.slug} formation={formation} />
          ))}
        </div>
      ) : (
        <div className="carte mt-10 p-10 text-center">
          <p className="font-semibold">Aucune formation ne correspond à votre recherche.</p>
          <p className="mt-2 text-sm text-[var(--texte-doux)]">Essayez un autre mot-clé ou retirez le filtre de niveau.</p>
          <button
            type="button"
            onClick={() => {
              setRequete("");
              setNiveau("Tous");
            }}
            className="bouton-secondaire mt-6"
          >
            Réinitialiser
          </button>
        </div>
      )}
    </div>
  );
}
