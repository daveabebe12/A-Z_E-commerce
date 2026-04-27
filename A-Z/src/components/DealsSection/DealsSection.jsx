import "./DealsSection.css";

export default function DealsSection({ items }) {
  return (
    <div className="deals-wrapper">
      <aside className="deals-card">
        <div className="deals-card__badge">Flash sale</div>
        <p className="deals-card__label">Limited-time deals</p>
        <div className="timer" aria-label="Sale countdown">
          <div className="timer__seg">08</div>
          <div className="timer__colon">:</div>
          <div className="timer__seg">24</div>
          <div className="timer__colon">:</div>
          <div className="timer__seg">59</div>
        </div>
        <a href="#" className="btn-outline-white">
          Shop the sale
        </a>
      </aside>

      <div className="carousel-wrapper">
        <div className="carousel">
          {items.map((item) => (
            <article key={item.title} className="product-card">
              <span className="product-card__badge">{item.label}</span>
              <div className="product-card__img-wrap">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{item.title}</h3>
                <p className="product-card__was">{item.description}</p>
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
    </div>
  );
}
