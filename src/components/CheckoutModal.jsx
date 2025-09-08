// src/components/CheckoutModal.jsx
import { useState } from "react";
import { CartService } from "../services/CartService";
import { ProductService } from "../services/ProductService";
import { EmailService } from "../services/EmailService";

function CheckoutModal({
  show,
  setShowCheckout,
  setShowOrder,
  setOrderData,
  setCartCount,
}) {
  const cartService = new CartService();
  const productService = new ProductService();
  const emailService = new EmailService();
  const cart = cartService.getCart();
  const products = productService.getProducts();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  if (!show || cart.length === 0) return null;

  const total = cart.reduce((sum, item) => {
    const product = productService.getProductById(item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailService.sendOrderEmail(formData, cart, products);
      setOrderData({ formData, cart, total });
      cartService.clearCart();
      setCartCount(0);
      setShowCheckout(false);
      setShowOrder(true);
      alert("Order placed successfully!");
    } catch (error) {
      alert("Order placed, but failed to send email.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="cart-modal" style={{ display: "flex" }}>
      <div className="cart-modal-content">
        <span
          className="cart-modal-close"
          onClick={() => setShowCheckout(false)}
        >
          &times;
        </span>
        <h3>Checkout</h3>
        <ul className="checkout-items">
          {cart.map((item) => {
            const product = productService.getProductById(item.id);
            if (!product) return null;
            const subtotal = product.price * item.qty;
            return (
              <li key={item.id}>
                {product.name} x{item.qty} - UGX {subtotal.toLocaleString()}
              </li>
            );
          })}
        </ul>
        <div className="cart-total">
          <strong>Total:</strong> UGX {total.toLocaleString()}
        </div>
        <form id="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn primary">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;