import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey) : null;

export async function POST(request) {
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is not configured." }, { status: 500 });
  }

  try {
    const { packageName, price } = await request.json();

    if (!packageName || !price || Number(price) <= 0) {
      return NextResponse.json({ error: "Valid package name and price are required." }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: packageName,
            },
            unit_amount: Math.round(Number(price) * 100),
          },
        },
      ],
      success_url: `${baseUrl}/thankyou`,
      cancel_url: `${baseUrl}/checkout-cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Failed to create Stripe checkout session." }, { status: 500 });
  }
}
