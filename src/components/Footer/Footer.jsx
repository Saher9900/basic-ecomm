import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">⚡ ElectroMart</span>
          <p className="footer-tagline">
            Your trusted source for the latest in consumer electronics. Quality,
            service, and innovation since 2010.
          </p>
        </div>
        <div className="footer-links-block">
          <h3 className="footer-heading">Quick links</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/products" className="footer-link">Products</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">info@electromart.example</p>
          <p className="footer-text">+20 123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} ElectroMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
