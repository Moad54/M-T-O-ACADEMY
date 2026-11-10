"use client";

import { Mail, Send } from "lucide-react";
import { useState } from "react";

const EMAIL_CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

interface Erreurs {
  nom?: string;
  email?: string;
  sujet?: string;
  message?: string;
}

/**
 * Formulaire de contact : validation côté client, puis ouverture du message
 * prérempli dans la messagerie de l'utilisateur (mailto:).
 *
 * ⚠️ Aucun envoi serveur n'est effectué. Pour un envoi direct, brancher une route
 * /api/contact (voir README.md, section « Formulaire de contact »).
 */
export function FormulaireContact() {
  const [valeurs, setValeurs] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [erreurs, setErreurs] = useState<Erreurs>({});
  const [pret, setPret] = useState(false);

  function modifier(champ: keyof typeof valeurs, valeur: string) {
    setValeurs((v) => ({ ...v, [champ]: valeur }));
    setPret(false);
  }

  function valider(): Erreurs {
    const e: Erreurs = {};
    if (valeurs.nom.trim().length < 2) e.nom = "Indiquez votre nom (2 caractères minimum).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valeurs.email)) e.email = "Saisissez une adresse e-mail valide.";
    if (valeurs.sujet.trim().length < 3) e.sujet = "Précisez le sujet de votre message.";
    if (valeurs.message.trim().length < 10) e.message = "Votre message doit contenir au moins 10 caractères.";
    return e;
  }

  function soumettre(evenement: React.FormEvent<HTMLFormElement>) {
    evenement.preventDefault();
    const trouvees = valider();
    setErreurs(trouvees);
    if (Object.keys(trouvees).length === 0) setPret(true);
  }

  const lienMailto = EMAIL_CONTACT
    ? `mailto:${EMAIL_CONTACT}?subject=${encodeURIComponent(`[MÉTÉO ACADEMY] ${valeurs.sujet}`)}&body=${encodeURIComponent(
        `${valeurs.message}\n\n— ${valeurs.nom} (${valeurs.email})`,
      )}`
    : null;

  return (
    <form onSubmit={soumettre} noValidate className="carte space-y-6 p-6 sm:p-8" aria-labelledby="form-contact-titre">
      <h2 id="form-contact-titre" className="sr-only">Formulaire de contact</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-2 block text-sm font-semibold">Nom complet</label>
          <input id="nom" name="nom" autoComplete="name" className="champ" value={valeurs.nom} onChange={(e) => modifier("nom", e.target.value)} aria-invalid={!!erreurs.nom} aria-describedby={erreurs.nom ? "erreur-nom" : undefined} />
          {erreurs.nom && <p id="erreur-nom" className="mt-2 text-sm text-red-600">{erreurs.nom}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">Adresse e-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" className="champ" value={valeurs.email} onChange={(e) => modifier("email", e.target.value)} aria-invalid={!!erreurs.email} aria-describedby={erreurs.email ? "erreur-email" : undefined} />
          {erreurs.email && <p id="erreur-email" className="mt-2 text-sm text-red-600">{erreurs.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="sujet" className="mb-2 block text-sm font-semibold">Sujet</label>
        <input id="sujet" name="sujet" className="champ" value={valeurs.sujet} onChange={(e) => modifier("sujet", e.target.value)} aria-invalid={!!erreurs.sujet} aria-describedby={erreurs.sujet ? "erreur-sujet" : undefined} />
        {erreurs.sujet && <p id="erreur-sujet" className="mt-2 text-sm text-red-600">{erreurs.sujet}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">Message</label>
        <textarea id="message" name="message" rows={6} className="champ resize-y" value={valeurs.message} onChange={(e) => modifier("message", e.target.value)} aria-invalid={!!erreurs.message} aria-describedby={erreurs.message ? "erreur-message" : undefined} />
        {erreurs.message && <p id="erreur-message" className="mt-2 text-sm text-red-600">{erreurs.message}</p>}
      </div>

      {!pret ? (
        <button type="submit" className="bouton-primaire">
          <Send className="h-4 w-4" aria-hidden="true" /> Préparer mon message
        </button>
      ) : lienMailto ? (
        <div className="rounded-xl bg-ciel-50 p-5 dark:bg-nuit-800" role="status">
          <p className="font-semibold">Votre message est prêt.</p>
          <p className="mt-1 text-sm text-[var(--texte-doux)]">Il sera ouvert dans votre messagerie. Vous pourrez le relire avant de l&apos;envoyer.</p>
          <a href={lienMailto} className="bouton-primaire mt-4">
            <Mail className="h-4 w-4" aria-hidden="true" /> Ouvrir dans ma messagerie
          </a>
        </div>
      ) : (
        <p role="status" className="rounded-xl bg-soleil-500/10 p-4 text-sm">
          L&apos;adresse de contact n&apos;est pas encore configurée. Renseignez NEXT_PUBLIC_CONTACT_EMAIL (voir README.md).
        </p>
      )}
    </form>
  );
}
