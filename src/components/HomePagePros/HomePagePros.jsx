import "./HomePagePros.css";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FeatContext } from "../../contexts/FeatContext";

function HomePagePros() {
  // Use featured products from FeatContext
  const { getPros, pros, prosLoading } = useContext(FeatContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPros();
  }, []);

  if (prosLoading) {
    return (
      <section className="featured">
        <div className="featured-container">
          <header className="featured-header">
            <div className="h-4 w-32 rounded bg-gray-200 animate-pulse mb-2" />
            <div className="h-8 w-56 rounded bg-gray-200 animate-pulse mb-2" />
            <div className="h-4 w-72 rounded bg-gray-200 animate-pulse" />
          </header>
          <div className="featured-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="featured-card opacity-90">
                <div className="featured-card-image-wrap bg-gray-200 animate-pulse min-h-[200px]" />
                <div className="featured-card-body space-y-2 pt-3">
                  <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-16 rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-20 rounded bg-gray-200 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
          <div className="featured-footer">
            <div className="h-11 w-40 rounded-lg bg-gray-200 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  const gridVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 0.61, 0.36, 1],
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <section className="featured">
      <div className="featured-container">
        <header className="featured-header">
          <span className="featured-eyebrow">Shop by category</span>
          <h2 className="featured-title">Featured products</h2>
          <p className="featured-subtitle">
            Hand-picked tech and electronics for every need.
          </p>
        </header>
        <div className="featured-grid">
          {pros.slice(0, 8).map((pro) => (
            <div
              onClick={() => {
                sessionStorage.setItem('fromHome', 'true');
                navigate(`/products/proDetails/${pro.id}`, { state: { from: 'home' } });
              }}
              key={pro.id}
              className="featured-card"
            >
              <div className="featured-card-image-wrap">
                <img
                  src={pro?.image}
                  alt={pro?.name}
                  className="featured-card-image"
                />
              </div>
              <div className="featured-card-body">
                <h3 className="featured-card-title">{pro?.name}</h3>
                <span className="featured-card-cta">View details</span>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-footer">
          <Link to="/products/" className="featured-btn">
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePagePros;
