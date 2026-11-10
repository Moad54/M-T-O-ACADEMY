"use client";

import Link from "next/link";
import { Award, BookOpen, Heart, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { formations } from "@/data/formations";
import { lireFavoris, lireProgression, type Progression } from "@/lib/stockage";

/**
 * Tableau de bord : progression par formation, résultats de quiz et favoris.
 * Les données proviennent du stockage local (mode démonstration).
 */
export function TableauBordApprenant() {
  const [progression, setProgression] = useState<Progression>({ leconsTerminees: [], quiz: {} });
  const [favoris, setFavoris] = useState<string[]>([]);
  const [pret, setPret] = useState(false);

  useEffect(() => {
    setProgression(lireProgression());
    setFavoris(lireFavoris());
    setPret(true);
  }, []);

  const totalLecons = formations.reduce(
    (t, f) => t + f.chapitres.reduce((s, c) => s + c.lecons.length, 0),
    0,
  );
  const leconsFaites = progression.leconsTerminees.length;
  const pourcentageGlobal = totalLecons ? Math.round((leconsFaites / totalLecons) * 100) : 0;
  const certificats = formations.filter((f) => {
    const r = progression.quiz[f.slug];
    return r && r.score / r.total >= 0.7;
  });

  if (!pret) {
    return <p className="text-[var(--texte-doux)]">Chargement de votre progression…</p>;
  }

  return (
    <div className="space-y-10">
      <div className="flex items-start gap-3 rounded-xl bg-ciel-50 p-4 text-sm dark:bg-nuit-800" role="note">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-ciel-600" aria-hidden="true" />
        <p>
          Mode démonstration : votre progression est enregistrée sur cet appareil uniquement.
          La synchronisation entre appareils nécessite la configuration de Supabase (voir README.md).
        </p>
      </div>

      {/* Indicateurs */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="carte p-6">
          <BookOpen className="h-6 w-6 text-ciel-500" aria-hidden="true" />
          <p className="mt-4 text-3xl font-extrabold">{leconsFaites} / {totalLecons}</p>
          <p className="mt-1 text-sm text-[var(--texte-doux)]">leçons terminées</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--bordure)]" role="progressbar" aria-valuenow={pourcentageGlobal} aria-valuemin={0} aria-valuemax={100} aria-label="Progression globale">
            <div className="h-full rounded-full bg-gradient-to-r from-ciel-400 to-soleil-500 transition-all duration-500" style={{ width: `${pourcentageGlobal}%` }} />
          </div>
        </div>
        <div className="carte p-6">
          <Award className="h-6 w-6 text-soleil-500" aria-hidden="true" />
          <p className="mt-4 text-3xl font-extrabold">{certificats.length}</p>
          <p className="mt-1 text-sm text-[var(--texte-doux)]">certificat{certificats.length > 1 ? "s" : ""} obtenu{certificats.length > 1 ? "s" : ""}</p>
        </div>
        <div className="carte p-6">
          <Heart className="h-6 w-6 text-soleil-500" aria-hidden="true" />
          <p className="mt-4 text-3xl font-extrabold">{favoris.length}</p>
          <p className="mt-1 text-sm text-[var(--texte-doux)]">formation{favoris.length > 1 ? "s" : ""} en favoris</p>
        </div>
      </div>

      {/* Détail par formation */}
      <section aria-labelledby="detail-titre">
        <h2 id="detail-titre" className="text-xl font-bold">Progression par formation</h2>
        <ul className="mt-6 grid gap-4">
          {formations.map((formation) => {
            const total = formation.chapitres.reduce((s, c) => s + c.lecons.length, 0);
            const faites = formation.chapitres.reduce(
              (s, c) => s + c.lecons.filter((l) => progression.leconsTerminees.includes(`${formation.slug}/${c.slug}/${l.slug}`)).length,
              0,
            );
            const pct = Math.round((faites / total) * 100);
            const resultat = progression.quiz[formation.slug];
            return (
              <li key={formation.slug} className="carte flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <Link href={`/formations/${formation.slug}`} className="font-bold hover:text-soleil-500">
                    {formation.titre}
                  </Link>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--bordure)]" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`Progression : ${formation.titre}`}>
                    <div className="h-full rounded-full bg-ciel-500 transition-all duration-500" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-[var(--texte-doux)]">{faites} / {total} leçons · {pct} %</p>
                </div>
                <div className="text-sm sm:w-48 sm:text-right">
                  {resultat ? (
                    <p>
                      Quiz : <strong>{resultat.score} / {resultat.total}</strong>{" "}
                      <span className={resultat.score / resultat.total >= 0.7 ? "text-emerald-600" : "text-soleil-500"}>
                        {resultat.score / resultat.total >= 0.7 ? "réussi" : "à retenter"}
                      </span>
                    </p>
                  ) : (
                    <Link href={`/quiz/${formation.slug}`} className="font-semibold text-ciel-600 hover:text-soleil-500 dark:text-ciel-300">
                      Passer le quiz →
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
