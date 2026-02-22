import { useContext, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { CatsContext } from "../../contexts/CatsContext";
import "./CategoriesSwiper.css";
import "swiper/css";
import "swiper/css/pagination";

const FALLBACK_CATS = [
  { id: 0, name: "Electronics", description: "Explore our range", image: null },
];

function CategoriesSwiper() {
  const { getCats, cats, catsLoading } = useContext(CatsContext);
  const swiperRef = useRef(null);

  useEffect(() => {
    getCats();
  }, []);

  const goPrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperRef.current?.slideNext(), []);

  const list = Array.isArray(cats) && cats.length > 0 ? cats : FALLBACK_CATS;
  const showArrows = list.length > 1;

  if (catsLoading) {
    return (
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="h-6 w-32 rounded bg-slate-700 animate-pulse mx-auto mb-2" />
            <div className="h-10 w-48 rounded bg-slate-700 animate-pulse mx-auto" />
          </div>
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-40 flex-1 min-w-[200px] rounded-2xl bg-slate-800 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-amber-500 text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/30">
            Browse
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Shop by Category</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Explore our range of electronics
          </p>
        </div>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={list.length > 1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="categories-swiper pb-12"
          >
            {list.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Link
                  to={`/products/${encodeURIComponent(cat.name)}`}
                  className="block group rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="aspect-4/3 relative bg-slate-800">
                    {cat.image ? (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-700 text-slate-400 text-4xl">
                        •
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                      {cat.description && (
                        <p className="text-slate-300 text-sm mt-0.5 line-clamp-2">{cat.description}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {showArrows && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800/90 text-white border border-slate-600 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-all"
              >
                <HiChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800/90 text-white border border-slate-600 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-all"
              >
                <HiChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSwiper;
