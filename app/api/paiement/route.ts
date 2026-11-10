import { NextResponse, type NextRequest } from "next/server";

/**
 * Point d'entrée serveur du paiement.
 *
 * ⚠️ Non implémenté : tant que Stripe (ou une passerelle marocaine) n'est pas branché,
 * cette route refuse explicitement toute demande. Elle ne valide jamais un achat.
 * À compléter : créer une session de paiement côté serveur, puis rediriger l'acheteur.
 */
export async function GET(requete: NextRequest) {
  const formation = requete.nextUrl.searchParams.get("formation");
  return NextResponse.json(
    {
      statut: "non-configure",
      formation,
      message:
        "Le paiement n'est pas encore configuré sur cette plateforme. Aucun achat n'a été enregistré.",
    },
    { status: 501 },
  );
}
