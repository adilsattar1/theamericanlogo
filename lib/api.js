import { resolveBackendUrl, LARAVEL_API_BASE_URL } from "./config";

const apiPrefix = LARAVEL_API_BASE_URL ? "" : "/api";

export const API_ENDPOINTS = {
  lead: resolveBackendUrl(`${apiPrefix}/lead`),
  contact: resolveBackendUrl(`${apiPrefix}/contact`),
  abandonedContact: resolveBackendUrl(`${apiPrefix}/abandoned-contact`),
  packages: resolveBackendUrl(`${apiPrefix}/packages`),
  stripeCheckout: resolveBackendUrl(`${apiPrefix}/stripe/checkout`),
  stripePaymentIntent: resolveBackendUrl(`${apiPrefix}/stripe/payment-intent`),
  stripePaymentConfirm: resolveBackendUrl(`${apiPrefix}/stripe/payment-confirm`),
};

export async function postJson(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Request failed.");
  }

  return result;
}
