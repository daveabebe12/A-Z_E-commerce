import "./TrustBar.css";

export default function TrustBar() {
  return (
    <section className="trust-bar container">
      <div className="trust-bar__left">
        <div className="trust-item">
          <span>✔️</span>
          <span>12,000+ verified reviews</span>
        </div>
        <div className="trust-item">
          <span>✔️</span>
          <span>Fast dispatch from certified partners</span>
        </div>
      </div>
      <div className="trust-bar__right">
        <div className="stars">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star half">★</span>
        </div>
        <span className="tp-logo">Trusted by shoppers worldwide</span>
      </div>
    </section>
  );
}
