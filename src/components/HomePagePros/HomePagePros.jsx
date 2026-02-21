import "./HomePagePros.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProsContext } from "../../contexts/ProsContext";
import { useNavigate } from "react-router-dom";

function HomePagePros() {
  const { getPros, pros } = useContext(ProsContext);
  const navigate = useNavigate()

  useEffect(() => {
    getPros();
  }, []);

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
              onClick={() => navigate(`/products/proDetails/${pro.id}`)}
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
                {pro?.price != null && (
                  <span className="featured-card-price">${pro.price}</span>
                )}
                <span className="featured-card-cta">View details</span>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-footer">
          <Link to='/products/' className="featured-btn">
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePagePros;
