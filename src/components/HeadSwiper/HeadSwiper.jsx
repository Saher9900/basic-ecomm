import "./HeadSwiper.css";
import { useContext, useEffect, useRef, useCallback } from "react";
import { CatsContext } from "../../contexts/CatsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/pagination";

function HeadSwiper() {
  const { getCats, cats, catsLoading } = useContext(CatsContext);
  const navigate = useNavigate();
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    getCats();
  }, []);

  const goPrev = useCallback(() => swiperInstanceRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperInstanceRef.current?.slideNext(), []);

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

  const slides = Array.isArray(cats) && cats.length > 0
    ? cats
    : [{ id: 0, name: "Electronics", description: "Discover our collection.", image: null }];
  const showArrows = slides.length > 1;

  return (
    <section className="hero">
      <div className="hero-swiper-wrap relative">
        <Swiper
          onSwiper={(swiper) => { swiperInstanceRef.current = swiper; }}
          spaceBetween={0}
          slidesPerView={1}
          loop={slides.length > 1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="hero-swiper"
        >
          {slides.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="hero-slide">
                <div className="hero-bg">
                  {cat.image && (
                    <img
                      src={cat.image}
                      alt=""
                      className="hero-bg-img"
                      loading="eager"
                    />
                  )}
                  <div className="hero-overlay" />
                </div>
                <div className="hero-content">
                  <p className="hero-label">{cat.name}</p>
                  <h1 className="hero-title">{cat.name}</h1>
                  <p className="hero-desc">{cat.description || "Explore our collection."}</p>
                  <div
                    onClick={() => navigate(cat.id ? `/products/${cat.name}` : "/products")}
                    className="hero-cta"
                    role="button"
                  >
                    Shop {cat.name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showArrows && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-100 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-amber-500 hover:text-slate-900 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-100 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-amber-500 hover:text-slate-900 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default HeadSwiper;
