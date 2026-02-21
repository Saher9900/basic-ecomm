import "./Products.css";
import { useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
      <div>
        {/* Skeleton: category tabs */}
        <div className="flex flex-row gap-4 py-4 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-11 w-24 rounded-lg bg-gray-200 animate-pulse"
            />
          ))}
        </div>
        {/* Skeleton: product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow border border-gray-100 flex flex-col items-center p-4"
            >
              <div className="w-full h-48 rounded-lg bg-gray-200 animate-pulse mb-4" />
              <div className="w-3/4 h-5 rounded bg-gray-200 animate-pulse mb-2" />
              <div className="mt-auto h-10 w-28 rounded-lg bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* categories as routes */}
      <div className="flex flex-row gap-4 py-4 justify-center">
        {cats.map((cat) => (
          <Link
            to={`/products/${encodeURIComponent(cat.name)}`}
            className={`px-4 py-2 rounded-lg border shadow hover:bg-blue-100 transition no-underline ${chosenCat === cat.name ? "bg-blue-500 text-white" : "bg-white text-gray-900"}`}
            key={cat.id}
          >
            <h1 className="text-lg font-semibold">{cat.name}</h1>
          </Link>
        ))}
      </div>
      {/* products based on category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {pros.filter((pro) => {
          return pro.categoryName?.toLowerCase() === chosenCat?.toLowerCase();
        }).map((pro) => (
          <div
            key={pro.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 border border-gray-100 hover:border-blue-400 group"
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 mb-4">
              <img
                src={pro.image}
                alt={pro.name}
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{pro.name}</h2>
            {/* Add more product info here if available, e.g. price, description, etc. */}
            <button
              type="button"
              onClick={() => navigate(`/products/proDetails/${pro.id}`)}
              className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200 font-semibold cursor-pointer"
            >
              View Details
            </button>
            <a
              href={`https://wa.me/201282236170?text=Hello, I want to ask about ${pro.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Order on WhatsApp
            </a>

          </div>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
}

export default Products;
