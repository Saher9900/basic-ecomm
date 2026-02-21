const API_BASE = "http://ecommercedb.runasp.net";

/**
 * Rewrites image URLs to go through our proxy in production so they work on HTTPS (Vercel).
 * In dev (http) we keep original URLs so images load without needing the proxy.
 */
export function proxyImageUrl(url) {
  if (!url || typeof url !== "string") return url;
  const trimmed = url.trim();
  if (!import.meta.env.PROD) return trimmed;
  if (trimmed.startsWith("http:")) {
    return `/api/image?url=${encodeURIComponent(trimmed)}`;
  }
  if (trimmed.startsWith("/")) {
    return `/api/image?url=${encodeURIComponent(API_BASE + trimmed)}`;
  }
  return trimmed;
}
