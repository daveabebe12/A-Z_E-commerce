import { useState } from "react";
import "./Header.css";
import { navItems } from "../data.js";

export default function Header({
  activeCategory,
  onCategoryChange,
  onCartOpen,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="header">
      <div className="header__top container">
        <a href="#" className="logo" aria-label="Reebelo home">
          <span className="logo__icon">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          </span>
          reebelo
        </a>

        <div className="search" role="search">
          <input
            className="search__input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by model, color, brand…"
            autoComplete="off"
            aria-label="Search products"
          />
          <button className="search__btn" type="button" aria-label="Search">
            🔍
          </button>
        </div>

        <div className="header__actions">
          <button type="button" className="header__action">
            <span>⭐</span>
            <span>Saved</span>
          </button>
          <button type="button" className="header__action">
            <span>📍</span>
            <span>Stores</span>
          </button>
          <button
            type="button"
            className="header__action cart-wrapper"
            onClick={onCartOpen}
          >
            <span className="cart-badge">0</span>
            <span>Cart</span>
          </button>
        </div>
      </div>

      <nav className="header__nav">
        <div className="nav__inner container">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className={`nav__link${item === activeCategory ? " active" : ""}`}
              onClick={() => onCategoryChange(item)}
            >
              {item === "All" ? (
                <span className="nav__link--all">
                  <span className="emoji">🛍️</span> All
                </span>
              ) : (
                item
              )}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
