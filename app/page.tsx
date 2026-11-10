import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Award, Search, Sparkles } from "lucide-react";
import { formations } from "@/data/formations";
import { glossaire } from "@/data/glossaire";
import { CarteFormation } from "@/components/CarteFormation";

export const metadata = {
  title: "Accueil",
  description:
    "Apprenez la météorologie en français avec MÉTÉO ACADEMY : cours structurés, quiz corrigés, glossaire et certificats.",
};

const atouts = [
  {
    icone: BookOpen,
    titre: "Des cours structurés",
    texte: "Chaque formation avance par chapitres et leçons, avec des objectifs clairs et des illustrations.",
  },
  {
    icone: Sparkles,
    titre: "Des quiz corrigés",
    texte: "Vérifiez vos acquis à chaque étape. Chaque réponse est accompagnée d'une explication.",
  },
  {
    icone: BarChart3,
    titre: "Un suivi de progression",
    texte: "Votre tableau de bord recense les leçons terminées et les résultats de vos quiz.",
  },
  {
    icone: Award,
    titre: "Des certificats",
    texte: "Obtenez un certificat de réussite à l'issue de chaque formation validée.",
  },
];

export default function Accueil() {
  const aLaUne = formations.slice(0, 3);

  return (
    <>
      {/* Bandeau d'accueil */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nuit-900 via-nuit-700 to-ciel-500 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-ciel-300 blur-3xl animate-drift" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-soleil-500 blur-3xl animate-drift" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <Sparkles className="h-4 w-4 text-soleil-400" aria-hidden="true" />
              L&apos;académie numérique de météorologie
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Comprendre le temps,{" "}
              <span className="text-soleil-400">anticiper l&apos;avenir.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              MÉTÉO ACADEMY vous accompagne en français, du premier concept sur l&apos;atmosphère
              jusqu&apos;à la lecture des cartes et la présentation d&apos;un bulletin.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/formations" className="bouton-primaire">
                Explorer les formations <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/inscription" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10">
                Créer un compte gratuit
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-up" aria-label="Chiffres clés de l'académie">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-4xl font-extrabold">{formations.length}</p>
              <p className="mt-2 text-sm text-white/75">formations structurées</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-4xl font-extrabold">{glossaire.length}</p>
              <p className="mt-2 text-sm text-white/75">termes au glossaire</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-lg font-semibold">Du débutant à l&apos;avancé</p>
              <p className="mt-2 text-sm text-white/75">
                Une progression pensée pour apprendre étape par étape, sans prérequis scientifique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="atouts-titre">
        <div className="max-w-2xl">
          <h2 id="atouts-titre" className="titre-section">Une véritable plateforme d&apos;apprentissage</h2>
          <p className="mt-3 text-[var(--texte-doux)]">
            Plus qu&apos;une vitrine : un parcours complet, du cours au certificat.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map(({ icone: Icone, titre, texte }) => (
            <div key={titre} className="carte carte-survol p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ciel-50 text-ciel-600 dark:bg-nuit-800 dark:text-ciel-300">
                <Icone className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{titre}</h3>
              <p className="mt-2 text-sm text-[var(--texte-doux)]">{texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formations à la une */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="une-titre">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="une-titre" className="titre-section">Formations à la une</h2>
            <p className="mt-3 text-[var(--texte-doux)]">Pour commencer, ou pour aller plus loin.</p>
          </div>
          <Link href="/formations" className="inline-flex items-center gap-2 font-semibold text-ciel-600 hover:text-soleil-500 dark:text-ciel-300">
            Tout le catalogue <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aLaUne.map((formation) => (
            <CarteFormation key={formation.slug} formation={formation} />
          ))}
        </div>
      </section>

      {/* Appel à l'action glossaire */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="carte flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-soleil-500/15 text-soleil-500">
              <Search className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-bold">Un terme vous échappe ?</h2>
              <p className="mt-2 text-[var(--texte-doux)]">
                Le glossaire rassemble les définitions des notions scientifiques utilisées dans les cours.
              </p>
            </div>
          </div>
          <Link href="/glossaire" className="bouton-secondaire shrink-0">
            Consulter le glossaire
          </Link>
        </div>
      </section>
    </>
  );
}
