import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="header-root">
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="top-bar-text">
            We ship everywhere in Egypt. any inquiries? contact us at 01289746238
          </span>
          <span className="top-bar-accent">ElectroMart</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="main-nav">
        <div className="nav-inner">
          <Link to="/" className="logo" onClick={() => setMobileOpen(false)}>
            <span className="logo-icon">⚡</span>
            <span className="logo-text">ElectroMart</span>
          </Link>

          <ul className="nav-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav-link ${isActive(to) ? "nav-link-active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <Link
              to="/products"
              className="nav-cart"
              aria-label="View products"
            >
              <HiOutlineShoppingBag className="w-6 h-6" />
            </Link>
            <button
              type="button"
              className="nav-mobile-btn"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <HiOutlineX className="w-7 h-7" />
              ) : (
                <HiOutlineMenuAlt3 className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`mobile-menu ${mobileOpen ? "mobile-menu-open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <ul className="mobile-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`mobile-link ${isActive(to) ? "mobile-link-active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
