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
    <div className="w-full max-w-6xl mx-auto mt-4 rounded-xl overflow-hidden shadow-lg">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="h-72 md:h-96"
      >
        {cats.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gray-100">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-auto h-full max-h-72 md:max-h-96 mx-auto brightness-75"
                style={{ objectFit: "contain" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-2">
                  {cat.name}
                </h2>
                <p className="text-lg md:text-2xl text-white drop-shadow max-w-2xl mx-auto bg-black/40 rounded px-4 py-2">
                  {cat.description}
                </p>
                <Link
                  to="/products"
                  className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 text-lg md:text-xl border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  style={{ textDecoration: 'none' }}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeadSwiper;
