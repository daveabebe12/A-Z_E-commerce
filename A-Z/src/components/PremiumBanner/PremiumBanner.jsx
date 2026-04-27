import "./PremiumBanner.css";

export default function PremiumBanner({ perks }) {
  return (
    <section className="premium-banner container">
      <div>
        <div className="premium-banner__logo">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        </div>
        <h2 className="premium-banner__title">
          Premium refurbished gear with added confidence
        </h2>
        <div className="trustpilot-inline">
          Trusted by hundreds of happy customers.
        </div>
      </div>

      <div className="perks">
        {perks.map((perk) => (
          <div key={perk.title} className="perk-item">
            <span className="perk-icon">✓</span>
            <span>
              <strong>{perk.title}</strong>
              <div>{perk.detail}</div>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
