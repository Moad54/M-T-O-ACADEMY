# MÉTÉO ACADEMY

> *Comprendre le temps, anticiper l'avenir.*

Plateforme e-learning de météorologie en français, du niveau débutant au niveau avancé.
Next.js (App Router) · TypeScript · Tailwind CSS · Lucide Icons · Supabase (prévu) · Vercel.

---

## 1. État du projet

### Déjà en place (étape 1)

| Domaine | Contenu |
|---|---|
| Pages | Accueil, Formations, Détail de formation, Leçons, Quiz (index et par formation), Glossaire, Tarifs, À propos, Contact, Connexion, Inscription, Tableau de bord, 404 |
| Formations | 10 formations au catalogue. Chacune a une présentation, des objectifs, un programme, des leçons, des exercices et un quiz final |
| Fonctionnalités | Recherche et filtre par niveau, favoris, progression et leçons terminées, quiz corrigés avec score enregistré, glossaire avec recherche, formulaire de contact validé |
| Design | Palette bleu nuit / bleu ciel / blanc / orange, mode clair et mode sombre, responsive, animations respectueuses de `prefers-reduced-motion` |
| SEO | Métadonnées par page, Open Graph, `sitemap.xml`, `robots.txt`, favicon SVG |
| Monétisation | Formations gratuites et premium, page de tarifs, boutons d'achat qui **refusent** d'enregistrer un paiement tant que la passerelle n'est pas branchée |

### Limites connues (à traiter aux étapes suivantes)

- **Contenu** : la formation 1 (fondamentaux) est complète, avec trois chapitres et cinq leçons. Les autres formations ont une seule leçon de fond, qu'il faudra étoffer.
- **Authentification** : les formulaires de connexion et d'inscription sont validés mais ne créent pas de session. Supabase Auth reste à brancher.
- **Données** : la progression et les favoris sont conservés dans le `localStorage` du navigateur (mode démonstration). Ils ne sont pas synchronisés entre appareils.
- **Certificats** : le tableau de bord compte les formations réussies (score ≥ 70 %), mais la page de certificat imprimable n'est pas encore créée.
- **Interface d'administration** : non réalisée. Elle dépendra de Supabase et d'un rôle « administrateur ».
- **Paiement** : aucune transaction n'est simulée. Voir la section 7.
- **Formulaire de contact** : aucun envoi serveur. Le message est préparé puis ouvert dans la messagerie de l'utilisateur.

---

## 2. Structure des dossiers

```
meteo-academy/
├── app/                        # Pages (App Router)
│   ├── layout.tsx              # Gabarit, métadonnées SEO, script de thème
│   ├── page.tsx                # Accueil
│   ├── globals.css             # Styles globaux et variables de thème
│   ├── icon.svg                # Favicon
│   ├── not-found.tsx           # Page 404
│   ├── robots.ts / sitemap.ts  # SEO
│   ├── formations/
│   │   ├── page.tsx            # Catalogue
│   │   └── [slug]/
│   │       ├── page.tsx        # Détail d'une formation
│   │       └── [chapitre]/[lecon]/page.tsx   # Leçon
│   ├── quiz/
│   │   ├── page.tsx            # Index des quiz
│   │   └── [slug]/page.tsx     # Quiz d'une formation
│   ├── glossaire/page.tsx
│   ├── tarifs/page.tsx
│   ├── a-propos/page.tsx
│   ├── contact/page.tsx
│   ├── connexion/page.tsx
│   ├── inscription/page.tsx
│   ├── tableau-de-bord/page.tsx
│   └── api/paiement/route.ts   # Point d'entrée du paiement (non activé)
├── components/                 # Composants réutilisables
├── data/                       # Contenus pédagogiques
│   ├── formations/             # Une formation = un objet TypeScript
│   └── glossaire.ts
├── lib/
│   ├── types.ts                # Types partagés
│   ├── stockage.ts             # Progression et favoris (localStorage)
│   └── paiement.ts             # Préparation de l'achat
├── public/                     # Fichiers statiques
├── .env.example                # Variables d'environnement à renseigner
├── tailwind.config.ts          # Palette de marque
└── package.json
```

---

## 3. Installer et tester en local

### Prérequis

- **Node.js 18.18 ou plus récent** (Node 20 LTS recommandé). Vérifier avec `node -v`.
- **npm** (fourni avec Node) ou pnpm/yarn.

### Étapes

```bash
# 1. Se placer dans le dossier du projet
cd meteo-academy

# 2. Installer les dépendances
npm install

# 3. Créer le fichier d'environnement
cp .env.example .env.local        # Windows PowerShell : Copy-Item .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrir ensuite <http://localhost:3000>.

### Vérifications avant publication

```bash
npm run typecheck   # contrôle TypeScript, sans générer de fichiers
npm run lint        # règles Next.js
npm run build       # build de production : doit se terminer sans erreur
npm run start       # tester le build de production sur http://localhost:3000
```

### Liste de contrôle manuelle

- [ ] Chaque entrée du menu mène à une page non vide.
- [ ] Le bouton de thème passe du clair au sombre et se souvient du choix après rechargement.
- [ ] La recherche du catalogue et le filtre de niveau fonctionnent.
- [ ] Un quiz se corrige question par question et le score s'affiche à la fin.
- [ ] Le menu mobile s'ouvre et se ferme (largeur inférieure à 1024 px).
- [ ] Le formulaire de contact refuse un message vide et propose l'ouverture de la messagerie.

---

## 4. Envoyer le projet sur GitHub

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "Première version de MÉTÉO ACADEMY"
git branch -M main
```

1. Créer un dépôt vide sur <https://github.com/new>, sans README ni .gitignore (ils existent déjà).
2. Relier le dépôt local :

```bash
git remote add origin https://github.com/VOTRE-COMPTE/meteo-academy.git
git push -u origin main
```

Le fichier `.gitignore` exclut `node_modules/`, `.next/` et `.env*.local`. Vérifier avant le premier `push` que `.env.local` n'apparaît pas dans `git status`.

---

## 5. Publier sur Vercel

1. Se connecter sur <https://vercel.com> avec son compte GitHub.
2. Cliquer sur **Add New… → Project**, puis choisir le dépôt `meteo-academy`.
3. Vercel détecte automatiquement Next.js. Laisser les paramètres par défaut :
   - Framework : **Next.js**
   - Build command : `npm run build`
   - Output directory : laisser vide
4. Ouvrir **Environment Variables** et ajouter au minimum :
   - `NEXT_PUBLIC_SITE_URL` = l'adresse finale du site (ex. `https://meteo-academy.vercel.app`)
   - `NEXT_PUBLIC_CONTACT_EMAIL` = l'adresse qui recevra les messages
   - `NEXT_PUBLIC_PAIEMENT_ACTIF` = `false`
5. Cliquer sur **Deploy**. Le site est publié en quelques minutes.
6. Pour chaque `git push` sur `main`, Vercel redéploie automatiquement.

Les variables Supabase et Stripe s'ajoutent de la même manière, à l'étape correspondante.

---

## 6. Connecter Supabase

Supabase fournit l'authentification, la base de données (PostgreSQL) et le stockage. Il remplacera le `localStorage` et les formulaires de démonstration.

### 6.1 Créer le projet

1. Créer un compte sur <https://supabase.com> et un nouveau projet. Choisir une région proche (Europe, par exemple).
2. Dans **Project Settings → API**, copier :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (**serveur uniquement, jamais dans le code client**)

### 6.2 Installer le client

```bash
npm install @supabase/supabase-js @supabase/ssr
```

### 6.3 Schéma de base proposé

Exécuter dans **SQL Editor** :

```sql
-- Profils liés aux comptes d'authentification
create table public.profils (
  id uuid primary key references auth.users on delete cascade,
  nom text not null,
  role text not null default 'apprenant' check (role in ('apprenant', 'administrateur'))
);

-- Formations (le contenu reste dans le code pour l'instant ; cette table servira à la gestion admin)
create table public.formations (
  slug text primary key,
  titre text not null,
  acces text not null check (acces in ('gratuit', 'premium')),
  prix_mad integer,
  publiee boolean not null default false
);

-- Leçons terminées par apprenant
create table public.progression (
  utilisateur uuid references auth.users on delete cascade,
  lecon_id text not null,            -- format "formation/chapitre/lecon"
  terminee_le timestamptz default now(),
  primary key (utilisateur, lecon_id)
);

-- Résultats de quiz
create table public.resultats_quiz (
  id bigint generated always as identity primary key,
  utilisateur uuid references auth.users on delete cascade,
  formation text not null,
  score integer not null,
  total integer not null,
  realise_le timestamptz default now()
);

-- Favoris
create table public.favoris (
  utilisateur uuid references auth.users on delete cascade,
  formation text not null,
  primary key (utilisateur, formation)
);

-- Sécurité : chaque utilisateur ne voit et ne modifie que ses propres données
alter table public.profils enable row level security;
alter table public.progression enable row level security;
alter table public.resultats_quiz enable row level security;
alter table public.favoris enable row level security;

create policy "profil personnel" on public.profils
  for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "progression personnelle" on public.progression
  for all using (auth.uid() = utilisateur) with check (auth.uid() = utilisateur);
create policy "quiz personnels" on public.resultats_quiz
  for all using (auth.uid() = utilisateur) with check (auth.uid() = utilisateur);
create policy "favoris personnels" on public.favoris
  for all using (auth.uid() = utilisateur) with check (auth.uid() = utilisateur);
```

### 6.4 Brancher les fonctions

Dans `lib/stockage.ts`, remplacer le corps de chaque fonction par un appel Supabase en gardant les mêmes signatures. Exemple pour la progression :

```ts
// lib/supabase.ts — client navigateur
import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

// Exemple : marquer une leçon comme terminée
await supabase.from("progression").upsert({ utilisateur: userId, lecon_id: identifiant });
```

Les formulaires `components/FormulaireAuth.tsx` doivent appeler `supabase.auth.signInWithPassword` (connexion) et `supabase.auth.signUp` (inscription). Le message « non active » est alors à retirer.

### 6.5 Administration

Un rôle `administrateur` dans la table `profils` permettra de protéger une future page `/admin` (vérification côté serveur avant tout rendu). Ne jamais se fier à un contrôle effectué uniquement dans le navigateur.

---

## 7. Activer les paiements

**Aucun paiement réel n'est actif dans cette version.** Les boutons d'achat affichent un message explicite et la route `app/api/paiement/route.ts` répond `501 Not Implemented`.

### Stripe (cartes bancaires internationales)

1. Créer un compte sur <https://stripe.com> et récupérer la clé secrète de test (`sk_test_…`).
2. Installer le SDK : `npm install stripe`.
3. Dans `app/api/paiement/route.ts`, créer une **Checkout Session** côté serveur pour la formation demandée, puis renvoyer son URL.
4. Ajouter un webhook (`/api/webhooks/stripe`) qui n'accorde l'accès à la formation qu'après l'événement `checkout.session.completed`, vérifié avec `STRIPE_WEBHOOK_SECRET`.
5. Passer `NEXT_PUBLIC_PAIEMENT_ACTIF=true` une fois ces étapes testées en mode test.

### Solution locale au Maroc

Plusieurs passerelles locales existent (par exemple CMI, PayZone ou un agrégateur de cartes marocaines). Le choix dépend du statut juridique de l'académie et des contrats disponibles. Une fois la passerelle choisie, la logique reste la même : création de la transaction côté serveur, confirmation par webhook, accès accordé seulement après confirmation.

---

## 8. Formulaire de contact

Le formulaire valide les champs puis propose d'ouvrir le message dans la messagerie (`mailto:`). Pour un envoi direct :

- **Option simple** : un service d'e-mails transactionnels (Resend, Brevo, SendGrid) appelé depuis une route `app/api/contact/route.ts`.
- **Option intégrée** : enregistrer les messages dans une table Supabase `messages_contact`, puis les consulter depuis l'administration.

---

## 9. Ajouter ou modifier une formation

1. Créer un fichier dans `data/formations/` (ou compléter un fichier existant) en suivant le type `Formation` de `lib/types.ts`.
2. L'ajouter à la liste dans `data/formations/index.ts`.
3. Chaque formation doit contenir au minimum : une présentation, des objectifs, au moins un chapitre avec une leçon, des exercices et un quiz final.

Les contenus restent rédigés à partir de connaissances météorologiques établies. **Aucune donnée météo en temps réel n'est intégrée** : les cours décrivent des phénomènes et des méthodes, pas l'état actuel de l'atmosphère.

---

## 10. Licence et crédits

Projet MÉTÉO ACADEMY. Tous droits réservés. Les pictogrammes proviennent de la bibliothèque [Lucide](https://lucide.dev) (licence ISC).
