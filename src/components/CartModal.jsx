// src/components/CartModal.jsx
import { CartService } from "../services/CartService";
import { ProductService } from "../services/ProductService";

function CartModal({ show, setShowCart, setShowCheckout, setCartCount }) {
  const cartService = new CartService();
  const productService = new ProductService();
  const cart = cartService.getCart();
  const products = productService.getProducts();

  if (!show) return null;

  const handleQuantityChange = (id, action) => {
    const product = productService.getProductById(id);
    cartService.updateQuantity(id, action, product?.stock || 0);
    setCartCount(cartService.getCartCount());
  };

  const handleRemove = (id) => {
    cartService.removeFromCart(id);
    setCartCount(cartService.getCartCount());
  };

  const total = cart.reduce((sum, item) => {
    const product = productService.getProductById(item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  return (
    <div className="cart-modal" style={{ display: "flex" }}>
      <div className="cart-modal-content">
        <span className="cart-modal-close" onClick={() => setShowCart(false)}>
          &times;
        </span>
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => {
                const product = productService.getProductById(item.id);
                if (!product) return null;
                const subtotal = product.price * item.qty;
                return (
                  <div key={item.id} className="cart-item">
                    <span>{product.name}</span>
                    <span>UGX {product.price.toLocaleString()}</span>
                    <div className="cart-qty">
                      <button
                        className="cart-qty-btn"
                        data-action="decrease"
                        data-id={item.id}
                        onClick={() => handleQuantityChange(item.id, "decrease")}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="cart-qty-btn"
                        data-action="increase"
                        data-id={item.id}
                        onClick={() => handleQuantityChange(item.id, "increase")}
                      >
                        +
                      </button>
                    </div>
                    <span>UGX {subtotal.toLocaleString()}</span>
                    <button
                      className="cart-remove-btn"
                      data-id={item.id}
                      onClick={() => handleRemove(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="cart-total">
              <strong>Total:</strong> UGX {total.toLocaleString()}
            </div>
            <button
              className="btn primary cart-checkout-btn"
              onClick={() => {
                setShowCart(false);
                setShowCheckout(true);
              }}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;