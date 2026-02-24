import "./HeadSwiper.css";
import { useContext, useEffect, useRef, useCallback } from "react";
import AchContext from "../../contexts/AchContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/pagination";

function HeadSwiper() {
  const { getAch, ach, achLoading } = useContext(AchContext);
  const navigate = useNavigate();
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    getAch();
  }, []);

  const goPrev = useCallback(() => swiperInstanceRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperInstanceRef.current?.slideNext(), []);

  if (achLoading) {
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

  const slides = Array.isArray(ach) && ach.length > 1
    ? ach.slice(1)
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
          {slides.map((ach) => (
            <SwiperSlide key={ach.id}>
              <div className="hero-slide">
                <div className="hero-bg">
                  {ach.image && (
                    <img
                      src={ach.image}
                      alt=""
                      className="hero-bg-img"
                      loading="eager"
                    />
                  )}
                  <div className="hero-overlay" />
                </div>
                <div className="hero-content">
                  <p className="hero-label">{ach.name}{ach.id}</p>
                  <h1 className="hero-title">{ach.name}</h1>
                  <p className="hero-desc">{ach.description || "Explore our collection."}</p>
                  <a
                    href="#categories-section"
                    className="hero-cta"
                    role="button"
                  >
                    Check Our Categories
                  </a>
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
