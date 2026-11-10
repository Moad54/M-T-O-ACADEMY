import { FormulaireAuth } from "@/components/FormulaireAuth";

export const metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre espace MÉTÉO ACADEMY pour suivre votre progression.",
};

export default function PageConnexion() {
  return (
    <section className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <header className="mb-8 text-center">
        <h1 className="titre-section">Connexion</h1>
        <p className="mt-3 text-[var(--texte-doux)]">Retrouvez vos cours, vos résultats et vos certificats.</p>
      </header>
      <FormulaireAuth mode="connexion" />
    </section>
  );
}
