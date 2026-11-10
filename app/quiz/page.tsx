import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { formations } from "@/data/formations";

export const metadata = {
  title: "Quiz",
  description: "Testez vos connaissances en météorologie avec les quiz corrigés de MÉTÉO ACADEMY.",
};

export default function PageQuizIndex() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="titre-section">Quiz</h1>
        <p className="mt-3 text-[var(--texte-doux)]">
          Choisissez une formation pour passer son quiz final. Chaque réponse est corrigée immédiatement, avec une explication.
        </p>
      </header>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {formations.map((formation) => (
          <li key={formation.slug}>
            <Link href={`/quiz/${formation.slug}`} className="carte carte-survol flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ciel-50 text-ciel-600 dark:bg-nuit-800 dark:text-ciel-300">
                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block font-bold">{formation.titre}</span>
                <span className="block text-sm text-[var(--texte-doux)]">{formation.quizFinal.length} questions</span>
              </span>
              <ArrowRight className="h-5 w-5 text-ciel-500" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
