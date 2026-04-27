import "./CartDrawer.css";

export default function CartDrawer({ open, onClose, cartCount }) {
  return (
    <>
      <div className={`overlay${open ? " open" : ""}`} onClick={onClose}></div>
      <aside
        className={`cart-drawer${open ? " open" : ""}`}
        aria-label="Shopping cart"
      >
        <div className="cart-drawer__header">
          <span className="cart-drawer__title">
            Your Cart (<span>{cartCount}</span>)
          </span>
          <button
            className="cart-drawer__close"
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>
        <div className="cart-drawer__body">
          <div className="cart-empty">
            <div className="cart-empty__icon">🛒</div>
            <p>Your cart is empty</p>
            <p style={{ fontSize: ".85rem", marginTop: 6 }}>
              Add some refurbished deals!
            </p>
          </div>
        </div>
        <div className="cart-drawer__footer">
          <button className="btn-checkout">Proceed to Checkout</button>
        </div>
      </aside>
    </>
  );
}
