import { FormulaireAuth } from "@/components/FormulaireAuth";

export const metadata = {
  title: "Inscription",
  description: "Créez votre compte MÉTÉO ACADEMY gratuitement pour accéder aux formations.",
};

export default function PageInscription() {
  return (
    <section className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <header className="mb-8 text-center">
        <h1 className="titre-section">Créer un compte</h1>
        <p className="mt-3 text-[var(--texte-doux)]">Un compte gratuit suffit pour suivre les formations gratuites.</p>
      </header>
      <FormulaireAuth mode="inscription" />
    </section>
  );
}
