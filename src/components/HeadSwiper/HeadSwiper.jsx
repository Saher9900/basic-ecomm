import "./HeadSwiper.css";
import { useContext, useEffect } from "react";
import { CatsContext } from "../../contexts/CatsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

function HeadSwiper() {
  const { getCats, cats, catsLoading } = useContext(CatsContext);
  const navigate = useNavigate()
  useEffect(() => {
    getCats();
  }, []);

  if (catsLoading) {
    return (
      <section className="hero">
        <div className="hero-swiper-wrap">
          <div className="w-full min-h-[60vh] flex items-center justify-center bg-gray-200 animate-pulse">
            <div className="text-center p-8">
              <div className="h-6 w-48 rounded bg-gray-300 animate-pulse mx-auto mb-4" />
              <div className="h-10 w-64 rounded bg-gray-300 animate-pulse mx-auto mb-4" />
              <div className="h-4 w-80 rounded bg-gray-300 animate-pulse mx-auto mb-6" />
              <div className="h-12 w-32 rounded-lg bg-gray-300 animate-pulse mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  <div onClick={() => navigate(`/products/${cat.name}`)} className="hero-cta">
                    Shop {cat.name}
                  </div>
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
