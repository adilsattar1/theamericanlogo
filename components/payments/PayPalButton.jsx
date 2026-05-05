"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PAYPAL_CLIENT_ID } from "../../lib/config";

export default function PayPalButton({ packageName, price }) {
  const clientId = PAYPAL_CLIENT_ID;

  if (!clientId) {
    return null;
  }

  return (
    <PayPalScriptProvider options={{ clientId, currency: "USD", intent: "capture" }}>
      <PayPalButtons
        style={{ layout: "horizontal", height: 40 }}
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: packageName,
                amount: {
                  currency_code: "USD",
                  value: String(price),
                },
              },
            ],
          });
        }}
        onApprove={async (_, actions) => {
          await actions.order?.capture();
          window.location.href = "/thankyou";
        }}
      />
    </PayPalScriptProvider>
  );
}
