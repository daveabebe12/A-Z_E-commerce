import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__col-title">Company</p>
          <div className="footer__links">
            <a href="#" className="footer__link">
              About us
            </a>
            <a href="#" className="footer__link">
              Careers
            </a>
            <a href="#" className="footer__link">
              Press
            </a>
          </div>
        </div>
        <div>
          <p className="footer__col-title">Support</p>
          <div className="footer__links">
            <a href="#" className="footer__link">
              Help center
            </a>
            <a href="#" className="footer__link">
              Warranty
            </a>
            <a href="#" className="footer__link">
              Returns
            </a>
          </div>
        </div>
        <div>
          <p className="footer__col-title">Legal</p>
          <div className="footer__links">
            <a href="#" className="footer__link">
              Terms
            </a>
            <a href="#" className="footer__link">
              Privacy
            </a>
            <a href="#" className="footer__link">
              Cookie policy
            </a>
          </div>
        </div>

        <div>
          <p className="footer__col-title">Subscribe</p>
          <div className="subscribe-form">
            <p className="subscribe-form__desc">
              Get the latest refurbished tech deals delivered to your inbox.
            </p>
            <input
              className="subscribe-form__input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn-teal" type="button">
              Subscribe
            </button>
            <p className="subscribe-form__legal">
              By subscribing, you agree to receive emails from Reebelo.
            </p>
          </div>
          <button type="button" className="btn-contact">
            Contact us
          </button>
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="footer__copyright">
          © 2026 Reebelo. All rights reserved.
        </span>
        <div className="payment-icons">
          <span className="payment-icon payment-icon--visa">Visa</span>
          <span className="payment-icon payment-icon--mc">MC</span>
          <span className="payment-icon payment-icon--pp">PayPal</span>
          <span className="payment-icon payment-icon--amex">Amex</span>
        </div>
      </div>
    </footer>
  );
}
