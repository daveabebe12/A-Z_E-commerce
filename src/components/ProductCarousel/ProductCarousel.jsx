import "./ProductCarousel.css";

export default function ProductCarousel({
  items,
  filters,
  activeFilter,
  onFilterChange,
}) {
  return (
    <section className="section container">
      <div className="section__header">
        <h2 className="section__title">Top refurbished deals</h2>
        <a className="see-all" href="#">
          See all
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="filter-pills">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`pill${filter === activeFilter ? " active" : ""}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper">
        <div className="carousel">
          {items.map((product) => (
            <article key={product.title} className="product-card">
              <span className="product-card__badge">{product.badge}</span>
              <div className="product-card__img-wrap">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{product.title}</h3>
                <div className="product-card__pricing">
                  <div className="product-card__was">
                    <s>{product.was}</s>
                  </div>
                  <div className="product-card__price-row">
                    <span className="product-card__price">{product.price}</span>
                    <span className="discount-badge">{product.discount}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button
          className="carousel-continue-btn"
          type="button"
          aria-label="Continue"
        >
          ›
        </button>
      </div>
    </section>
  );
}
