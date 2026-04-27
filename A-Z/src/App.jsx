import { useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import CartDrawer from "./components/CartDrawer/CartDrawer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import TrustBar from "./components/TrustBar/TrustBar.jsx";
import CategoriesGrid from "./components/CategoriesGrid/CategoriesGrid.jsx";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel.jsx";
import DealsSection from "./components/DealsSection/DealsSection.jsx";
import PremiumBanner from "./components/PremiumBanner/PremiumBanner.jsx";
import PressBar from "./components/PressBar/PressBar.jsx";
import Home from "./components/Home/Home.jsx";
import Gaming from "./components/Gaming/Gaming.jsx";
import DesignerBags from "./components/DesignerBags/DesignerBags.jsx";
import Sports from "./components/Sports/Sports.jsx";
import Tools from "./components/Tools/Tools.jsx";
import Fashion from "./components/Fashion/Fashion.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {
  categories,
  productFilters,
  products,
  slides,
  dealItems,
  perks,
  pressLogos,
} from "./components/data.js";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredProducts = useMemo(
    () =>
      activeFilter === "All"
        ? products
        : products.filter((product) => product.category === activeFilter),
    [activeFilter],
  );

  const handlePrevSlide = () =>
    setActiveSlide((current) => (current + slides.length - 1) % slides.length);
  const handleNextSlide = () =>
    setActiveSlide((current) => (current + 1) % slides.length);

  return (
    <div className="App">
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onCartOpen={() => setCartOpen(true)}
      />

      <main>
        <Hero
          slides={slides}
          activeSlide={activeSlide}
          onPrev={handlePrevSlide}
          onNext={handleNextSlide}
          onDotClick={setActiveSlide}
        />

        <TrustBar />

        <section className="section container">
          <div className="section__header">
            <h2 className="section__title">Browse by category</h2>
            <a className="see-all" href="#">
              Explore all
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <CategoriesGrid categories={categories} />
        </section>

        <ProductCarousel
          items={filteredProducts}
          filters={productFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <section className="section container">
          <div className="section__header">
            <h2 className="section__title">Daily deals</h2>
            <a className="see-all" href="#">
              See full sale
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <DealsSection items={dealItems} />
        </section>

        <PremiumBanner perks={perks} />
        <Home />
        <Gaming />
        <DesignerBags />
        <Sports />
        <Tools />
        <Fashion />
        <PressBar logos={pressLogos} />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartCount={0}
      />
    </div>
  );
}

export default App;
