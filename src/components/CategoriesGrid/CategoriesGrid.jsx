import "./CategoriesGrid.css";

export default function CategoriesGrid({ categories }) {
  return (
    <div className="categories-grid-wrapper">
      <div className="categories-grid">
        {categories.map((category) => (
          <button key={category.label} type="button" className="category-card">
            <span className="category-card__img">
              <span className="category-card__placeholder">
                {category.emoji}
              </span>
            </span>
            <span className="category-card__label">{category.label}</span>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="categories-continue-btn"
        aria-label="Continue"
      >
        ›
      </button>
    </div>
  );
}
