import { useContext, useEffect } from "react";
import { motion } from "motion/react";
import AchContext from "../../contexts/AchContext";

import "./Info.css";

function Info() {
  const { getAch, ach, achLoading } = useContext(AchContext);

  useEffect(() => {
    getAch();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 0.61, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const mediaVariants = {
    hidden: { opacity: 0, x: -18 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const bodyVariants = {
    hidden: { opacity: 0, x: 18 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="info-section"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="info-container">
        {achLoading ? (
          <div className="info-card">
            <div className="w-full animate-pulse flex flex-col gap-4">
              <div className="info-media">
                <div className="info-img bg-gray-200 rounded-xl" />
                <div className="info-media-badge bg-gray-200 text-transparent">
                  Loading
                </div>
              </div>
              <div className="info-body space-y-3">
                <span className="info-eyebrow block h-4 w-24 bg-gray-200 rounded" />
                <div className="h-6 w-3/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-11/12 bg-gray-200 rounded" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="info-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div className="info-media" variants={mediaVariants}>
              {ach[0]?.image ? (
                <img
                  src={ach[0].image}
                  alt={ach[0]?.title ?? "Modern Electronics Store"}
                  className="info-img"
                />
              ) : (
                <div className="info-img bg-gray-200 rounded-xl" aria-hidden />
              )}
              <div className="info-media-badge">Since 2010</div>
            </motion.div>
            <motion.div className="info-body" variants={bodyVariants}>
              <span className="info-eyebrow">Why choose us</span>
              <h2 className="info-title">{ach[0]?.title}</h2>
              <p className="info-text">{ach[0]?.description}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Info;
