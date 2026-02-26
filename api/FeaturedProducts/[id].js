const EXTERNAL_BASE = "http://ecommercedb.runasp.net/api/FeaturedProducts";

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
  const pathParts = url.pathname.split("/").filter(Boolean);
  const id = pathParts[pathParts.length - 1];

  if (!id) {
    return new Response(
      JSON.stringify({ error: "Product ID required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders() },
      }
    );
  }

  try {
    const res = await fetch(`${EXTERNAL_BASE}/${id}`);
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders(),
      },
    });
  } catch (err) {
    console.error("Failed to fetch featured product:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch featured product" }),
      {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders(),
        },
      }
    );
  }
}
