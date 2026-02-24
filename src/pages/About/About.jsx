import "./About.css";
import { motion } from "motion/react";

function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUpChild = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <div className="about-root min-h-screen">
      <motion.section
        className="about-hero"
        variants={sectionVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="about-hero-inner" variants={fadeUpChild}>
          <p className="about-kicker">About ElectroMart</p>
          <h1 className="about-title">
            A modern way to shop tech in Egypt.
          </h1>
          <p className="about-subtitle">
            We blend curated products, honest pricing, and WhatsApp-first
            support to make buying electronics simple, transparent, and
            enjoyable.
          </p>

          <motion.div className="about-stats" variants={fadeUpChild}>
            <div className="about-stat">
              <span className="about-stat-number">5k+</span>
              <span className="about-stat-label">Orders delivered</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">4.8★</span>
              <span className="about-stat-label">Customer rating</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">24h</span>
              <span className="about-stat-label">Average response time</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="about-content"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="about-layout">
          <motion.div
            className="about-column about-column-main"
            variants={fadeUpChild}
          >
            <div className="about-card">
              <h2>Who we are</h2>
              <p>
                We&apos;re a small, focused team obsessed with consumer
                electronics. From flagship phones to everyday chargers, we hand
                pick products that deliver real value, not just marketing buzz.
              </p>
              <p>
                We work fully online and WhatsApp-first, so you can browse,
                ask, and order from wherever you are — with a human on the
                other side, not a robot.
              </p>
            </div>

            <div className="about-card about-timeline">
              <h2>How we got here</h2>
              <div className="about-timeline-item">
                <span className="about-timeline-year">2021</span>
                <p>
                  Started as a small Instagram page helping friends and family
                  get reliable phones and accessories.
                </p>
              </div>
              <div className="about-timeline-item">
                <span className="about-timeline-year">2022</span>
                <p>
                  Launched ElectroMart as a dedicated online store with curated,
                  verified products and nationwide shipping.
                </p>
              </div>
              <div className="about-timeline-item">
                <span className="about-timeline-year">Today</span>
                <p>
                  We continue to grow with repeat customers, word-of-mouth
                  recommendations, and a commitment to better service.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-column about-column-side"
            variants={fadeUpChild}
          >
            <div className="about-card about-values">
              <h2>What we believe in</h2>
              <ul className="about-list">
                <li>
                  <span className="about-list-label">Honest pricing</span>
                  <span className="about-list-text">
                    Transparent prices with frequent offers and bundles that
                    actually make sense.
                  </span>
                </li>
                <li>
                  <span className="about-list-label">Curated selection</span>
                  <span className="about-list-text">
                    We test and review products before listing them, cutting out
                    low-quality options.
                  </span>
                </li>
                <li>
                  <span className="about-list-label">Real support</span>
                  <span className="about-list-text">
                    Fast replies on WhatsApp, clear follow-up on every order,
                    and honest advice — even if it means suggesting a cheaper
                    option.
                  </span>
                </li>
              </ul>
            </div>

            <div className="about-card about-highlight">
              <h2>Serving customers across Egypt</h2>
              <p>
                We ship nationwide with reliable packaging and tracking on every
                order. Whether you&apos;re in Cairo, Alexandria, or beyond, we
                aim to make getting new tech as simple as sending a message.
              </p>
              <p>
                Have a question before you buy? Visit our{" "}
                <a href="/contact" className="about-link">
                  contact page
                </a>{" "}
                and reach out — we&apos;re happy to help you choose the right
                device.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-cta"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="about-cta-inner">
          <h2>Ready to upgrade your tech?</h2>
          <p>
            Explore our latest phones, accessories, and gadgets — or message us
            directly if you need a recommendation.
          </p>
          <div className="about-cta-actions">
            <a href="/products" className="about-cta-primary">
              Browse products
            </a>
            <a href="/contact" className="about-cta-secondary">
              Talk to us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;