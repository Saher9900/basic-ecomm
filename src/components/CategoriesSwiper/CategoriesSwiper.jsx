import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CatsContext } from "../../contexts/CatsContext";
import "./CategoriesSwiper.css";
import { motion } from "motion/react"

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
  }, []);

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

  const MotionLink = motion(Link);

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
          className="grid gap-4 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[190px]"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {first && (
            <MotionLink
              to={`/products/${encodeURIComponent(first.name)}`}
              className="group relative md:row-span-2 md:col-span-2 rounded-2xl overflow-hidden bg-emerald-500 text-white flex items-stretch"
              variants={cardVariants}
            >
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="uppercase text-xs tracking-[0.2em] mb-2 opacity-80">
                    Fresh &amp; organic
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 line-clamp-2">
                    {first.name}
                  </h3>
                  {first.description && (
                    <p className="text-sm sm:text-base max-w-md opacity-90 line-clamp-3">
                      {first.description}
                    </p>
                  )}
                </div>
                <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-white text-emerald-600 px-4 py-2 text-sm font-semibold shadow-sm group-hover:bg-slate-100 transition">
                  Shop now
                </button>
              </div>
              {first.image && (
                <div className="relative hidden sm:block w-40 sm:w-52 md:w-64 overflow-hidden">
                  <img
                    src={first.image}
                    alt={first.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </MotionLink>
          )}

          {second && (
            <MotionLink
              to={`/products/${encodeURIComponent(second.name)}`}
              className="group relative rounded-2xl overflow-hidden bg-teal-500 text-white flex items-stretch"
              variants={cardVariants}
            >
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-1 line-clamp-2">
                    {second.name}
                  </h3>
                  {second.description && (
                    <p className="text-xs opacity-90 line-clamp-2">
                      {second.description}
                    </p>
                  )}
                </div>
              </div>
              {second.image && (
                <div className="relative w-24 overflow-hidden hidden sm:block">
                  <img
                    src={second.image}
                    alt={second.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </MotionLink>
          )}

          {third && (
            <MotionLink
              to={`/products/${encodeURIComponent(third.name)}`}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 text-white flex items-center p-4"
              variants={cardVariants}
            >
              {third.image && (
                <div className="mr-4 h-16 w-16 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={third.image}
                    alt={third.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-base font-semibold line-clamp-2">
                  {third.name}
                </h3>
              </div>
            </MotionLink>
          )}

          {fourth && (
            <MotionLink
              to={`/products/${encodeURIComponent(fourth.name)}`}
              className="group relative rounded-2xl overflow-hidden bg-amber-400 text-slate-900 flex items-stretch"
              variants={cardVariants}
            >
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold mb-1 line-clamp-2">
                    {fourth.name}
                  </h3>
                  {fourth.description && (
                    <p className="text-xs opacity-90 line-clamp-2">
                      {fourth.description}
                    </p>
                  )}
                </div>
              </div>
            </MotionLink>
          )}

          {fifth && (
            <MotionLink
              to={`/products/${encodeURIComponent(fifth.name)}`}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 text-white flex items-center justify-between px-4"
              variants={cardVariants}
            >
              <div className="py-4">
                <h3 className="text-base font-semibold line-clamp-1">
                  {fifth.name}
                </h3>
                <p className="text-xs text-slate-300">
                  Shop now and save more.
                </p>
              </div>
              {fifth.image && (
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src={fifth.image}
                    alt={fifth.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </MotionLink>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default CategoriesSwiper;
