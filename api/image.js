const ALLOWED_ORIGINS = ["http://ecommercedb.runasp.net", "https://ecommercedb.runasp.net"];

function isAllowedUrl(url) {
  try {
    const parsed = new URL(url);
    const origin = `${parsed.protocol}//${parsed.host}`;
    return ALLOWED_ORIGINS.some((o) => origin === o || url.startsWith(o + "/"));
  } catch {
    return false;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url || !isAllowedUrl(url)) {
    return new Response(JSON.stringify({ error: "Invalid or disallowed image URL" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const res = await fetch(url, { headers: { Accept: "image/*" } });
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Image not found" }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }
    const contentType = res.headers.get("Content-Type") || "image/jpeg";
    const buffer = await res.arrayBuffer();
    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch image" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
}
