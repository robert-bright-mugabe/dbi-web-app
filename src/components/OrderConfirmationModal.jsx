// src/components/OrderConfirmationModal.jsx
import { ProductService } from "../services/ProductService";

function OrderConfirmationModal({ show, setShowOrder, orderData }) {
  const productService = new ProductService();
  if (!show || !orderData) return null;

  const { formData, cart, total } = orderData;
  const orderNumber = "DBI" + Math.floor(Math.random() * 1000000);

  return (
    <div className="cart-modal" style={{ display: "flex" }}>
      <div className="cart-modal-content">
        <span className="cart-modal-close" onClick={() => setShowOrder(false)}>
          &times;
        </span>
        <h3>Order Confirmed!</h3>
        <p>
          Thank you, <strong>{formData.name}</strong>.<br />
          Your order <strong>#{orderNumber}</strong> has been placed.
        </p>
        <ul>
          {cart.map((item) => {
            const product = productService.getProductById(item.id);
            if (!product) return null;
            return (
              <li key={item.id}>
                {product.name} x{item.qty}
              </li>
            );
          })}
        </ul>
        <div className="cart-total">
          <strong>Total Bill:</strong> UGX {total.toLocaleString()}
        </div>
        <p>
          <strong>Delivery Address:</strong>
          <br />
          {formData.address}
        </p>
        <p>Estimated delivery: 2-3 business days.<br />We’ll contact you soon!</p>
      </div>
    </div>
  );
}

export default OrderConfirmationModal;