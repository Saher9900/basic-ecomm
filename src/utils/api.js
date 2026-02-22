/**
 * In dev, Vite proxies /api to the backend. In production (e.g. Vercel),
 * there is no proxy, so we must call the real API origin.
 */
const PROD_API_ORIGIN =
  import.meta.env.VITE_API_URL || "http://ecommercedb.runasp.net";

export function getApiBase() {
  return import.meta.env.PROD ? PROD_API_ORIGIN : "";
}
