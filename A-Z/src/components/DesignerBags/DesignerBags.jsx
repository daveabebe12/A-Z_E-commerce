import "./DesignerBags.css";
import { designerBagsData } from "./designerBagsData.js";

export default function DesignerBags() {
  return (
    <section className="section container">
      <div className="section__header">
        <h2 className="section__title">Designer Bags</h2>
        <a href="#" className="see-all">
          See all <span className="see-all__arrow">→</span>
        </a>
      </div>

      <div className="carousel-outer">
        <ul className="carousel-track">
          {designerBagsData.map((product) => (
            <li key={product.title} className="product-card">
              <div className="card__badge-row">
                {product.badge && (
                  <span className="badge-flash">
                    <span className="badge-flash__icon">🔥</span>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="card__img-wrap">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card__body">
                <p className="card__title">{product.title}</p>
                <div className="card__price-block">
                  <div className="card__price">
                    <span className="card__price-sup">$</span>
                    {product.price.replace("$", "")}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
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
