"use client";

import { Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Mode = "connexion" | "inscription";

/**
 * Formulaire de connexion ou d'inscription.
 *
 * ⚠️ L'authentification n'est pas encore branchée : aucune session n'est créée
 * et aucun mot de passe n'est transmis. Le branchement sur Supabase Auth
 * est décrit dans README.md, section « Connecter Supabase ».
 */
export function FormulaireAuth({ mode }: { mode: Mode }) {
  const inscription = mode === "inscription";
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [nom, setNom] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  function soumettre(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setInfo(null);
    if (inscription && nom.trim().length < 2) return setErreur("Indiquez votre nom complet.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErreur("Saisissez une adresse e-mail valide.");
    if (motDePasse.length < 8) return setErreur("Le mot de passe doit contenir au moins 8 caractères.");
    setErreur(null);
    setInfo(
      inscription
        ? "Formulaire validé. La création de compte n'est pas encore active : elle nécessite la configuration de Supabase."
        : "Formulaire validé. La connexion n'est pas encore active : elle nécessite la configuration de Supabase.",
    );
  }

  return (
    <form onSubmit={soumettre} noValidate className="carte space-y-5 p-6 sm:p-8">
      {inscription && (
        <div>
          <label htmlFor="nom" className="mb-2 block text-sm font-semibold">Nom complet</label>
          <input id="nom" className="champ" autoComplete="name" value={nom} onChange={(e) => setNom(e.target.value)} />
        </div>
      )}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold">Adresse e-mail</label>
        <input id="email" type="email" className="champ" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="motdepasse" className="mb-2 block text-sm font-semibold">Mot de passe</label>
        <input
          id="motdepasse"
          type="password"
          className="champ"
          autoComplete={inscription ? "new-password" : "current-password"}
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          aria-describedby="aide-mdp"
        />
        <p id="aide-mdp" className="mt-2 text-xs text-[var(--texte-doux)]">8 caractères minimum.</p>
      </div>

      {erreur && <p role="alert" className="text-sm text-red-600">{erreur}</p>}
      {info && (
        <p role="status" className="flex gap-2 rounded-xl bg-ciel-50 p-4 text-sm dark:bg-nuit-800">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-ciel-600" aria-hidden="true" />
          {info}
        </p>
      )}

      <button type="submit" className="bouton-primaire w-full">
        {inscription ? "Créer mon compte" : "Se connecter"}
      </button>

      <p className="text-center text-sm text-[var(--texte-doux)]">
        {inscription ? "Vous avez déjà un compte ? " : "Pas encore de compte ? "}
        <Link href={inscription ? "/connexion" : "/inscription"} className="font-semibold text-ciel-600 hover:text-soleil-500 dark:text-ciel-300">
          {inscription ? "Se connecter" : "S'inscrire"}
        </Link>
      </p>
    </form>
  );
}
