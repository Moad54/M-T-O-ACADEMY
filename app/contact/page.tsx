import { FormulaireContact } from "@/components/FormulaireContact";

export const metadata = {
  title: "Contact",
  description: "Contactez l'équipe de MÉTÉO ACADEMY pour toute question sur les formations.",
};

export default function PageContact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
      <div className="lg:col-span-2">
        <h1 className="titre-section">Contactez-nous</h1>
        <p className="mt-4 text-[var(--texte-doux)]">
          Une question sur une formation, un problème de compte ou une suggestion de cours ? Écrivez-nous.
        </p>
      </div>

      <div className="lg:col-span-3">
        <FormulaireContact />
      </div>
    </section>
  );
}
