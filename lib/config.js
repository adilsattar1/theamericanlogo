export const LARAVEL_API_BASE_URL = process.env.NEXT_PUBLIC_LARAVEL_API_BASE_URL || "";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.theamericanlogo.com";
export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

export function resolveBackendUrl(path) {
  const base = LARAVEL_API_BASE_URL.replace(/\/$/, "");
  if (!base) {
    return path;
  }
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}
