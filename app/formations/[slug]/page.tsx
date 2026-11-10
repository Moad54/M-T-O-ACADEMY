import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, CheckCircle2, ChevronRight, Clock, Dumbbell, GraduationCap } from "lucide-react";
import { formations, getFormation } from "@/data/formations";
import { IconeMeteo } from "@/components/IconeMeteo";
import { BoutonAchat } from "@/components/BoutonAchat";
import { BoutonFavori } from "@/components/BoutonFavori";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: Props) {
  const formation = getFormation(params.slug);
  if (!formation) return { title: "Formation introuvable" };
  return {
    title: formation.titre,
    description: formation.presentation.slice(0, 155),
  };
}

export default function PageFormation({ params }: Props) {
  const formation = getFormation(params.slug);
  if (!formation) notFound();

  const nombreLecons = formation.chapitres.reduce((total, c) => total + c.lecons.length, 0);
  const premiere = formation.chapitres[0]?.lecons[0];

  return (
    <>
      {/* En-tête de formation */}
      <section className={`bg-gradient-to-br ${formation.couleur} text-white`}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/formations" className="hover:underline">Formations</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
              <li aria-current="page" className="font-semibold text-white">{formation.titre}</li>
            </ol>
          </nav>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <IconeMeteo nom={formation.icone} className="h-7 w-7" />
              </span>
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">{formation.titre}</h1>
              <p className="mt-4 text-lg text-white/85">{formation.sousTitre}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <span className="rounded-full bg-white/15 px-3 py-1">Niveau : {formation.niveau}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                  <Clock className="h-4 w-4" aria-hidden="true" /> {formation.duree}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1">{nombreLecons} leçons</span>
              </div>
            </div>

            <div className="carte w-full max-w-sm space-y-4 p-6 text-[var(--texte)]">
              {formation.acces === "premium" && formation.prix ? (
                <p className="text-2xl font-extrabold text-soleil-500">{formation.prix} MAD</p>
              ) : (
                <p className="text-2xl font-extrabold text-ciel-600 dark:text-ciel-300">Gratuit</p>
              )}
              {premiere && (
                <Link href={`/formations/${formation.slug}/${formation.chapitres[0].slug}/${premiere.slug}`} className="bouton-primaire w-full">
                  <BookOpen className="h-4 w-4" aria-hidden="true" /> Commencer la formation
                </Link>
              )}
              {formation.acces === "premium" && <BoutonAchat formation={formation} />}
              <BoutonFavori slug={formation.slug} />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-12 lg:col-span-2">
          {/* Présentation */}
          <section aria-labelledby="presentation-titre">
            <h2 id="presentation-titre" className="titre-section">Présentation</h2>
            <p className="mt-4 leading-relaxed text-[var(--texte-doux)]">{formation.presentation}</p>
          </section>

          {/* Programme */}
          <section aria-labelledby="programme-titre">
            <h2 id="programme-titre" className="titre-section">Programme</h2>
            <ol className="mt-6 space-y-4">
              {formation.chapitres.map((chapitre, index) => (
                <li key={chapitre.slug} className="carte p-5">
                  <h3 className="font-bold">
                    <span className="mr-2 text-soleil-500">{index + 1}.</span>
                    {chapitre.titre}
                  </h3>
                  <ul className="mt-3 grid gap-2">
                    {chapitre.lecons.map((lecon) => (
                      <li key={lecon.slug}>
                        <Link
                          href={`/formations/${formation.slug}/${chapitre.slug}/${lecon.slug}`}
                          className="flex items-center justify-between gap-4 rounded-lg px-3 py-2 text-sm transition hover:bg-ciel-50 dark:hover:bg-nuit-800"
                        >
                          <span>{lecon.titre}</span>
                          <span className="shrink-0 text-xs text-[var(--texte-doux)]">{lecon.duree}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          {/* Exercices */}
          <section aria-labelledby="exercices-titre">
            <h2 id="exercices-titre" className="titre-section flex items-center gap-3">
              <Dumbbell className="h-6 w-6 text-soleil-500" aria-hidden="true" /> Exercices
            </h2>
            <ul className="mt-6 space-y-3">
              {formation.exercices.map((exercice) => (
                <li key={exercice} className="carte flex gap-3 p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ciel-500" aria-hidden="true" />
                  <span>{exercice}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          {/* Objectifs */}
          <section className="carte p-6" aria-labelledby="objectifs-titre">
            <h2 id="objectifs-titre" className="text-lg font-bold">Objectifs pédagogiques</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {formation.objectifs.map((objectif) => (
                <li key={objectif} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-soleil-500" aria-hidden="true" />
                  <span>{objectif}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Quiz final */}
          <section className="carte p-6" aria-labelledby="quiz-titre">
            <h2 id="quiz-titre" className="flex items-center gap-2 text-lg font-bold">
              <GraduationCap className="h-5 w-5 text-ciel-500" aria-hidden="true" /> Quiz final
            </h2>
            <p className="mt-3 text-sm text-[var(--texte-doux)]">
              {formation.quizFinal.length} questions, corrigées automatiquement avec explications.
            </p>
            <Link href={`/quiz/${formation.slug}`} className="bouton-secondaire mt-5 w-full">
              Passer le quiz
            </Link>
          </section>
        </aside>
      </div>
    </>
  );
}
