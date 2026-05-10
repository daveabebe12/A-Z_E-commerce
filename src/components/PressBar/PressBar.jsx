import "./PressBar.css";

export default function PressBar({ logos }) {
  return (
    <section className="press-bar">
      <p className="press-bar__title">As featured in</p>
      <div className="press-logos container">
        {logos.map((logo) => (
          <span
            key={logo.label}
            className={`press-logo ${logo.modifier || ""}`.trim()}
          >
            {logo.label}
          </span>
        ))}
      </div>
    </section>
  );
}
