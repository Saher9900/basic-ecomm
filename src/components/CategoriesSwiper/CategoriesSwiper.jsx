import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { CatsContext } from "../../contexts/CatsContext";
import "./CategoriesSwiper.css";
import { motion } from "motion/react"

const MotionLink = motion(Link);

const FALLBACK_CATS = [
  {
    id: 0,
    name: "Fresh Organic",
    description: "Explore our freshest categories.",
    image: null,
  },
];

function CategoriesSwiper() {
  const { getCats, cats, catsLoading } = useContext(CatsContext);

  useEffect(() => {
    getCats();
  }, [getCats]);

  const list =
    Array.isArray(cats) && cats.length > 0
      ? cats.slice(-5).reverse()
      : FALLBACK_CATS;

  if (catsLoading) {
    return (
      <section
        id="categories-section"
        className="py-16 sm:py-24 bg-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="h-5 w-32 rounded bg-slate-800 animate-pulse mx-auto mb-2" />
            <div className="h-8 w-56 rounded bg-slate-800 animate-pulse mx-auto mb-3" />
            <div className="h-4 w-72 rounded bg-slate-800 animate-pulse mx-auto" />
          </div>
          <div className="grid gap-4 md:grid-cols-3 auto-rows-[160px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-slate-800/80 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const [first, second, third, fourth, fifth] = list;


  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="categories-section" className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-amber-500 text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/30">
            New arrivals
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Just added categories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Discover the latest categories our team has added to the store.
          </p>
        </div>

        <motion.div
          className="grid gap-4 grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px]"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {first && (
            <MotionLink
              to={`/products/${encodeURIComponent(first.name)}`}
              className="group relative rounded-2xl overflow-hidden flex items-stretch"
              variants={cardVariants}
            >
              <div className="absolute inset-0">
                {first.image ? (
                  <img
                    src={first.image}
                    alt={first.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-linear-to-br from-slate-700 to-slate-800" />
                )}
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="relative z-10 flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {first.name}
                  </h3>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg bg-amber-500 text-white px-4 py-2 text-sm font-semibold hover:bg-amber-400 transition">
                  CHECK IT NOW
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </MotionLink>
          )}

          {second && (
            <MotionLink
              to={`/products/${encodeURIComponent(second.name)}`}
              className="group relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden flex items-stretch"
              variants={cardVariants}
            >
              <div className="absolute inset-0">
                {second.image ? (
                  <img
                    src={second.image}
                    alt={second.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-linear-to-br from-amber-600 to-orange-600" />
                )}
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="relative z-10 flex-1 p-8 flex flex-col justify-between">
                <div>
                  <p className="uppercase text-xs tracking-[0.2em] mb-2 text-amber-400 font-semibold">
                    Featured
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {second.name}
                  </h3>
                  {second.description && (
                    <p className="text-sm sm:text-base max-w-md text-white/90">
                      {second.description}
                    </p>
                  )}
                </div>
                <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-amber-500 text-white px-6 py-3 text-sm font-semibold hover:bg-amber-400 transition">
                  CHECK IT NOW
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </MotionLink>
          )}

          {third && (
            <MotionLink
              to={`/products/${encodeURIComponent(third.name)}`}
              className="group relative rounded-2xl overflow-hidden flex items-stretch"
              variants={cardVariants}
            >
              <div className="absolute inset-0">
                {third.image ? (
                  <img
                    src={third.image}
                    alt={third.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-linear-to-br from-red-600 to-pink-600" />
                )}
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="relative z-10 flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {third.name}
                  </h3>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg bg-amber-500 text-white px-4 py-2 text-sm font-semibold hover:bg-amber-400 transition">
                  CHECK IT NOW
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </MotionLink>
          )}

          {fourth && (
            <MotionLink
              to={`/products/${encodeURIComponent(fourth.name)}`}
              className="group relative rounded-2xl overflow-hidden flex items-stretch"
              variants={cardVariants}
            >
              <div className="absolute inset-0">
                {fourth.image ? (
                  <img
                    src={fourth.image}
                    alt={fourth.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-linear-to-br from-blue-600 to-cyan-600" />
                )}
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="relative z-10 flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {fourth.name}
                  </h3>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg bg-amber-500 text-white px-4 py-2 text-sm font-semibold hover:bg-amber-400 transition">
                  CHECK IT NOW
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </MotionLink>
          )}

          {fifth && (
            <MotionLink
              to={`/products/${encodeURIComponent(fifth.name)}`}
              className="group relative rounded-2xl overflow-hidden flex items-stretch md:col-start-3"
              variants={cardVariants}
            >
              <div className="absolute inset-0">
                {fifth.image ? (
                  <img
                    src={fifth.image}
                    alt={fifth.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-linear-to-br from-purple-600 to-indigo-600" />
                )}
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="relative z-10 flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {fifth.name}
                  </h3>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg bg-amber-500 text-white px-4 py-2 text-sm font-semibold hover:bg-amber-400 transition">
                  CHECK IT NOW
                  <HiArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </MotionLink>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default CategoriesSwiper;
