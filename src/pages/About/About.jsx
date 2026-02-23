import "./About.css";

function About() {
  return (
    <div className="about-root min-h-screen">
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="about-kicker">About ElectroMart</p>
          <h1 className="about-title">
            A modern way to shop tech in Egypt.
          </h1>
          <p className="about-subtitle">
            We blend curated products, honest pricing, and WhatsApp-first
            support to make buying electronics simple, transparent, and
            enjoyable.
          </p>

          <div className="about-stats">
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
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-layout">
          <div className="about-column about-column-main">
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
          </div>

          <div className="about-column about-column-side">
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
          </div>
        </div>
      </section>

      <section className="about-cta">
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
      </section>
    </div>
  );
}

export default About;