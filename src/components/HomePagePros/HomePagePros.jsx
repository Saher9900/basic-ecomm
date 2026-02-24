import "./HomePagePros.css";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FeatContext } from "../../contexts/FeatContext";
import { motion } from "motion/react";

function HomePagePros() {
  // Use featured products from FeatContext
  const { getPros, pros, prosLoading } = useContext(FeatContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPros();
  }, []);

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
        <motion.div
          className="featured-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pros.slice(0, 8).map((pro) => (
            <motion.div
              onClick={() => {
                sessionStorage.setItem('fromHome', 'true');
                navigate(`/products/proDetails/${pro.id}`, { state: { from: 'home' } });
              }}
              key={pro.id}
              className="featured-card"
              variants={cardVariants}
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
            </motion.div>
          ))}
        </motion.div>
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
