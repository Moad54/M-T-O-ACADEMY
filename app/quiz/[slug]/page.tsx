import Link from "next/link";
import { notFound } from "next/navigation";
import { formations, getFormation } from "@/data/formations";
import { QuizInteractif } from "@/components/QuizInteractif";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: Props) {
  const formation = getFormation(params.slug);
  return { title: formation ? `Quiz : ${formation.titre}` : "Quiz introuvable" };
}

export default function PageQuiz({ params }: Props) {
  const formation = getFormation(params.slug);
  if (!formation) notFound();

  // Le quiz final d'une formation premium est réservé aux acheteurs.
  if (formation.acces === "premium") {
    return (
      <section className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <h1 className="titre-section">Quiz réservé aux abonnés</h1>
        <p className="mt-4 text-[var(--texte-doux)]">
          Le quiz final de « {formation.titre} » est inclus dans la formation premium.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`/formations/${formation.slug}`} className="bouton-secondaire">Voir la formation</Link>
          <Link href="/tarifs" className="bouton-primaire">Voir les tarifs</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-[var(--texte-doux)]">
        <Link href={`/formations/${formation.slug}`} className="hover:text-soleil-500">
          ← Retour à la formation
        </Link>
      </nav>
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-soleil-500">Quiz final</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">{formation.titre}</h1>
        <p className="mt-3 text-[var(--texte-doux)]">
          Une bonne réponse rapporte un point. Le seuil de réussite est fixé à 70 %.
        </p>
      </header>
      <QuizInteractif formation={formation} />
    </section>
  );
}
