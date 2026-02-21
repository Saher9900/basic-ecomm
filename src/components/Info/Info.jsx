import "./Info.css";

function Info() {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-card">
          <div className="info-media">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              alt="Modern Electronics Store"
              className="info-img"
            />
            <div className="info-media-badge">Since 2010</div>
          </div>
          <div className="info-body">
            <span className="info-eyebrow">Why choose us</span>
            <h2 className="info-title">Leading electronics retailer</h2>
            <p className="info-text">
              Established in 2010, <strong>ElectroMart</strong> is your trusted
              source for the latest in consumer electronics. We offer a wide
              range of products including smartphones, laptops, smart home
              devices, and accessories from top brands.
            </p>
            <p className="info-text">
              With a strong online presence and multiple retail locations, we
              ensure our customers get the best deals and after-sales support.
              Shop with confidence at ElectroMart, where technology meets
              reliability.
            </p>
            <ul className="info-stats">
              <li>
                <span className="info-stat-value">99.9%</span>
                <span className="info-stat-label">Customer satisfaction</span>
              </li>
              <li>
                <span className="info-stat-value">10,000+</span>
                <span className="info-stat-label">Products available</span>
              </li>
              <li>
                <span className="info-stat-value">24/7</span>
                <span className="info-stat-label">Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
