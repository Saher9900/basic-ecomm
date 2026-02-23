import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { SearchContext } from "../../contexts/SearchContext";
import { BsSearch } from "react-icons/bs";

function Header() {
  // search logic
  const { input, setInput, getProsFromSearch, result } =
    useContext(SearchContext);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (input.trim() !== "") {
      getProsFromSearch(input);
    }
  }, [input, getProsFromSearch]);

  useEffect(() => {
    if (!isSearchOpen) return;

    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
        setInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen, setInput]);

  // end of search
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="header-root">
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="top-bar-text">
            We ship everywhere in Egypt. any inquiries? contact us at
            01289746238
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
            {/* search */}
            <div
              ref={searchContainerRef}
              className={`nav-search ${isSearchOpen ? "nav-search-open" : ""}`}
            >
              <button
                type="button"
                className="nav-search-toggle"
                aria-label={isSearchOpen ? "Close search" : "Open search"}
                onClick={() =>
                  setIsSearchOpen((prev) => {
                    const next = !prev;
                    if (!next) {
                      setInput("");
                    }
                    return next;
                  })
                }
              >
                <BsSearch className="nav-search-icon" />
              </button>

              <div className="nav-search-panel">
                <div className="nav-search-panel-header">
                  <input
                    ref={searchInputRef}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search products..."
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className="nav-search-input"
                  />
                  <button
                    type="button"
                    className="nav-search-close"
                    onClick={() => {
                      setInput("");
                      setIsSearchOpen(false);
                    }}
                  >
                    ×
                  </button>
                </div>

                {input.trim() !== "" && (
                  <div className="nav-search-results">
                    {result.length > 0 ? (
                      <ul>
                        {result.map((pro) => (
                          <li key={pro.id}>
                            <Link
                              to={`/products/proDetails/${pro.id}`}
                              className="nav-search-result-item"
                              onClick={() => {
                                setIsSearchOpen(false);
                                setInput("");
                              }}
                            >
                              <span className="nav-search-result-name">
                                {pro.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="nav-search-empty">
                        No products found for "{input}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* end search */}
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
