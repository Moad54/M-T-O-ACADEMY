import { TableauBordApprenant } from "@/components/TableauBordApprenant";

export const metadata = {
  title: "Tableau de bord",
  description: "Suivez votre progression, vos résultats de quiz et vos favoris sur MÉTÉO ACADEMY.",
};

export default function PageTableauDeBord() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="titre-section">Mon tableau de bord</h1>
        <p className="mt-3 text-[var(--texte-doux)]">Votre progression dans l&apos;académie, formation par formation.</p>
      </header>
      <TableauBordApprenant />
    </section>
  );
}
