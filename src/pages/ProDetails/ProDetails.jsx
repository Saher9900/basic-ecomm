import "./ProDetails.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { proxyImageUrl } from "../../utils/imageUrl.js";

function ProDetails() {
  const [pro, setPro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const apiURL = "/api/products";

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    axios
      .get(`${apiURL}/${id}`)
      .then(({ data }) => {
        if (!cancelled) {
          setPro({
            ...data,
            image: proxyImageUrl(data?.image),
          });
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Failed to load product");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="prodetails prodetails--loading">
        <div className="prodetails__container">
          <div className="prodetails__skeleton prodetails__skeleton-image" />
          <div className="prodetails__skeleton-body">
            <div className="prodetails__skeleton prodetails__skeleton-line short" />
            <div className="prodetails__skeleton prodetails__skeleton-line long" />
            <div className="prodetails__skeleton prodetails__skeleton-line price" />
            <div className="prodetails__skeleton prodetails__skeleton-line" />
            <div className="prodetails__skeleton prodetails__skeleton-line" />
            <div className="prodetails__skeleton prodetails__skeleton-line" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !pro) {
    return (
      <div className="prodetails prodetails--error">
        <div className="prodetails__container prodetails__container--narrow">
          <p className="prodetails__error-text">
            {error || "Product not found."}
          </p>
          <Link to="/products" className="prodetails__back">
            ← Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="prodetails">
      <div className="prodetails__container">
        <Link to="/products" className="prodetails__back prodetails__back--above">
          ← Back to products
        </Link>

        <article className="prodetails__card">
          <div className="prodetails__gallery">
            <div className="prodetails__image-wrap">
              <img
                src={pro.image}
                alt={pro.name}
                className="prodetails__image"
              />
            </div>
          </div>

          <div className="prodetails__body">
            <span className="prodetails__category">{pro.categoryName}</span>
            <h1 className="prodetails__name">{pro.name}</h1>
            <p className="prodetails__price">
              {typeof pro.price === "number"
                ? `$${pro.price.toFixed(2)}`
                : pro.price ?? "—"}
            </p>
            <p className="prodetails__description">
              {pro.description || "No description available."}
            </p>
            <a
              href={`https://wa.me/201282236170?text=Hello, I want to order ${pro.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="prodetails__cta"
            >
              Order on WhatsApp
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default ProDetails;
