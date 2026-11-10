"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { TermeGlossaire } from "@/lib/types";

const sansAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/**
 * Glossaire avec recherche instantanée, regroupé par initiale.
 */
export function GlossaireRecherche({ termes }: { termes: TermeGlossaire[] }) {
  const [requete, setRequete] = useState("");

  const filtres = useMemo(() => {
    const q = sansAccents(requete.trim());
    const triés = [...termes].sort((a, b) => sansAccents(a.terme).localeCompare(sansAccents(b.terme), "fr"));
    if (!q) return triés;
    return triés.filter((t) => sansAccents(t.terme + " " + t.definition).includes(q));
  }, [termes, requete]);

  const groupes = useMemo(() => {
    const map = new Map<string, TermeGlossaire[]>();
    for (const t of filtres) {
      const lettre = sansAccents(t.terme).charAt(0).toUpperCase();
      map.set(lettre, [...(map.get(lettre) ?? []), t]);
    }
    return [...map.entries()];
  }, [filtres]);

  return (
    <div>
      <label className="relative block max-w-md">
        <span className="sr-only">Rechercher un terme</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--texte-doux)]" aria-hidden="true" />
        <input
          type="search"
          value={requete}
          onChange={(e) => setRequete(e.target.value)}
          placeholder="Rechercher un terme ou une définition…"
          className="champ pl-12"
        />
      </label>

      <p className="mt-4 text-sm text-[var(--texte-doux)]" aria-live="polite">
        {filtres.length} terme{filtres.length > 1 ? "s" : ""}
      </p>

      {groupes.length === 0 ? (
        <p className="carte mt-10 p-8 text-center text-[var(--texte-doux)]">Aucun terme ne correspond à votre recherche.</p>
      ) : (
        <div className="mt-10 space-y-12">
          {groupes.map(([lettre, liste]) => (
            <section key={lettre} aria-labelledby={`lettre-${lettre}`}>
              <h2 id={`lettre-${lettre}`} className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-nuit-700 text-lg font-bold text-white dark:bg-ciel-500">
                {lettre}
              </h2>
              <dl className="grid gap-4 md:grid-cols-2">
                {liste.map((t) => (
                  <div key={t.terme} className="carte p-5">
                    <dt className="flex flex-wrap items-center gap-2 font-bold">
                      {t.terme}
                      <span className="rounded-full bg-ciel-50 px-2.5 py-0.5 text-xs font-medium text-ciel-600 dark:bg-nuit-800 dark:text-ciel-300">
                        {t.categorie}
                      </span>
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-[var(--texte-doux)]">{t.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
