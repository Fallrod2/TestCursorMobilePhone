Clone Apple Store minimal avec Next.js 15, TypeScript et Tailwind.

## Démarrer

1. Copier `.env.local.example` en `.env.local` et renseigner les clés Stripe (test):
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
2. Installer les dépendances et lancer le serveur:
```bash
npm i
npm run dev
```
3. Ouvrir `http://localhost:3000`.

## Structure

- `app/(store)` : pages du store (home, catégories, produit, panier)
- `components/` : UI et modules
- `lib/` : utilitaires, liste de produits
- `store/` : Zustand (panier)

## Déploiement

Variables d’environnement Stripe requises. Pour un checkout réel, adaptez l’API `/api/checkout` pour recevoir le contenu du panier depuis le client.
