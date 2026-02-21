import "./HeadSwiper.css";
import { useContext, useEffect } from "react";
import { CatsContext } from "../../contexts/CatsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

function HeadSwiper() {
  const { getCats, cats } = useContext(CatsContext);
  useEffect(() => {
    getCats();
  }, []);
  return (
    <section className="hero">
      <div className="hero-swiper-wrap">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="hero-swiper"
        >
          {cats.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="hero-slide">
                <div className="hero-bg">
                  <img
                    src={cat.image}
                    alt=""
                    className="hero-bg-img"
                    loading="eager"
                  />
                  <div className="hero-overlay" />
                </div>
                <div className="hero-content">
                  <p className="hero-label">{cat.name}</p>
                  <h1 className="hero-title">{cat.name}</h1>
                  <p className="hero-desc">{cat.description}</p>
                  <Link to="/products" className="hero-cta">
                    Shop {cat.name}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default HeadSwiper;
