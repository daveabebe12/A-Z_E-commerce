import "./Hero.css";

export default function Hero({
  slides,
  activeSlide,
  onPrev,
  onNext,
  onDotClick,
}) {
  return (
    <section className="hero">
      <div
        className="slides"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <article key={index} className={slide.theme}>
            <div className="slide__text">
              <h1 className="slide__title">{slide.title}</h1>
              <p className="slide__desc">{slide.desc}</p>
              <a href="#" className="btn-primary">
                {slide.button}
              </a>
            </div>
            <div className="slide__img">
              <img src={slide.image} alt={slide.title} />
            </div>
          </article>
        ))}
      </div>

      <button
        className="slider-arrow slider-arrow--prev"
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="slider-arrow slider-arrow--next"
        type="button"
        onClick={onNext}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dot${index === activeSlide ? " active" : ""}`}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
