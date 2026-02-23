import "./Products.css";
import { useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { CatsContext } from "../../contexts/CatsContext.jsx";
import { ProsContext } from "../../contexts/ProsContext.jsx";

function Products() {
  const { category: categoryParam } = useParams();
  const navigate = useNavigate();
  const { getCats, cats, catsLoading } = useContext(CatsContext);
  const { getPros, pros, prosLoading } = useContext(ProsContext);
  const loading = catsLoading || prosLoading;

  // Redirect /products to first category so URL always reflects selection
  useEffect(() => {
    if (cats.length && !categoryParam) {
      navigate(`/products/${encodeURIComponent(cats[0].name)}`, {
        replace: true,
      });
    }
  }, [cats, categoryParam, navigate]);

  // Use category from URL, or first category, or "phones" as fallback
  const chosenCat =
    categoryParam &&
      cats.some((c) => c.name.toLowerCase() === categoryParam.toLowerCase())
      ? cats.find((c) => c.name.toLowerCase() === categoryParam.toLowerCase())
        ?.name
      : cats.length
        ? cats[0].name
        : "phones";

  useEffect(() => {
    getCats();
    getPros();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="mb-6 sm:mb-8">
            <div className="h-4 w-28 rounded bg-slate-800 animate-pulse mb-3" />
            <div className="h-8 w-48 rounded bg-slate-800 animate-pulse" />
          </div>

          <div className="flex flex-row gap-3 sm:gap-4 py-2 sm:py-3 overflow-x-auto no-scrollbar">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-9 sm:h-10 w-24 sm:w-28 rounded-full bg-slate-800 animate-pulse"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mt-6 sm:mt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col animate-pulse"
              >
                <div className="w-full h-40 sm:h-44 rounded-xl bg-slate-800 mb-4" />
                <div className="w-3/4 h-4 rounded bg-slate-800 mb-2" />
                <div className="w-1/2 h-4 rounded bg-slate-800 mb-4" />
                <div className="mt-auto flex gap-3">
                  <div className="h-9 flex-1 rounded-lg bg-slate-800" />
                  <div className="h-9 flex-1 rounded-lg bg-slate-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const filteredPros = pros.filter((pro) => {
    return pro.categoryName?.toLowerCase() === chosenCat?.toLowerCase();
  });

  return (
    <section className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <p className="inline-flex items-center text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-2">
            Our products
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Choose your next device
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
                Browse our curated electronics by category. Tap a product to see full details
                or order instantly via WhatsApp.
              </p>
            </div>
            {filteredPros.length > 0 && (
              <div className="text-xs sm:text-sm text-slate-400">
                Showing{" "}
                <span className="font-semibold text-slate-100">
                  {filteredPros.length}
                </span>{" "}
                items in{" "}
                <span className="font-semibold text-amber-400">
                  {chosenCat}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Category tabs */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-row gap-2.5 sm:gap-3 py-2 overflow-x-auto no-scrollbar">
            {cats.map((cat) => {
              const isActive = chosenCat === cat.name;
              return (
                <Link
                  key={cat.id}
                  to={`/products/${encodeURIComponent(cat.name)}`}
                  className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium no-underline transition-all duration-150 ${
                    isActive
                      ? "bg-amber-500 text-slate-900 border-amber-400 shadow-lg shadow-amber-500/30"
                      : "bg-slate-900/60 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-slate-500"
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Products grid */}
        {filteredPros.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            No products found for this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredPros.map((pro) => (
              <article
                key={pro.id}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 hover:bg-slate-900 hover:border-amber-500/60 transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => navigate(`/products/proDetails/${pro.id}`)}
                  className="w-full text-left"
                >
                  <div className="w-full h-44 sm:h-48 flex items-center justify-center overflow-hidden rounded-t-2xl bg-slate-900">
                    <img
                      src={pro.image}
                      alt={pro.name}
                      className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="px-4 pt-4 pb-3">
                    {pro.categoryName && (
                      <p className="text-[11px] uppercase tracking-[0.18em] text-amber-400 mb-1">
                        {pro.categoryName}
                      </p>
                    )}
                    <h2 className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                      {pro.name}
                    </h2>
                  </div>
                </button>

                <div className="mt-auto px-4 pb-4 pt-1 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => navigate(`/products/proDetails/${pro.id}`)}
                    className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-lg bg-amber-500 text-slate-900 text-sm font-semibold hover:bg-amber-400 transition-colors"
                  >
                    <HiOutlineShoppingBag className="w-4 h-4" />
                    View details
                  </button>
                  <a
                    href={`https://wa.me/201282236170?text=Hello, I want to ask about ${pro.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-lg border border-emerald-500/70 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/10 transition-colors"
                  >
                    <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
                    Order on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
