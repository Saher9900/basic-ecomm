const EXTERNAL_API = "http://ecommercedb.runasp.net/api/Products/search";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") || "";

  try {
    const res = await fetch(
      `${EXTERNAL_API}?name=${encodeURIComponent(name)}`,
    );
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders(),
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to search products" }), {
      status: 502,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders(),
      },
    });
  }
}

