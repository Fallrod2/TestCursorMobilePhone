import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin") ?? "";

    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecret) {
      return NextResponse.json(
        { error: "Stripe n'est pas configuré (STRIPE_SECRET_KEY manquant)." },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecret);

    // Le panier persiste côté client. Ici, rediriger vers une page Checkout simulée
    // Comme simplification: créer une Session sans lignes si aucune integration côté client.
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        // Placeholder: l'app réelle enverrait les lignes précises
        {
          price_data: {
            currency: "eur",
            unit_amount: 1000,
            product_data: { name: "Article de test" },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cart`,
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

