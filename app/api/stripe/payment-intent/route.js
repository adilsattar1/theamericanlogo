import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey) : null;

export async function POST(request) {
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is not configured." }, { status: 500 });
  }

  try {
    const { packageName, price, customer } = await request.json();

    if (!packageName || !price || Number(price) <= 0) {
      return NextResponse.json({ error: "Valid package name and price are required." }, { status: 400 });
    }

    const amount = Math.round(Number(price) * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      capture_method: "automatic",
      automatic_payment_methods: { enabled: true },
      description: `Payment for ${packageName}`,
      receipt_email: customer?.email,
      metadata: {
        packageName,
        customerName: customer?.fullName || "",
        customerEmail: customer?.email || "",
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create Stripe payment intent." }, { status: 500 });
  }
}
