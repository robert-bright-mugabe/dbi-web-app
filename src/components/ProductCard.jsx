// src/components/ProductCard.jsx
import { CartService } from "../services/CartService";

function ProductCard({ product, setCartCount }) {
  const cartService = new CartService();

  const handleAddToCart = () => {
    cartService.addToCart(product.id, product.stock);
    setCartCount(cartService.getCartCount());
  };

  return (
    <div className="product-card" data-id={product.id}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-price">UGX {product.price.toLocaleString()}</div>
      <button
        className="btn primary add-to-cart"
        data-id={product.id}
        disabled={product.stock === 0}
        onClick={handleAddToCart}
      >
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;