// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProductService } from "../services/ProductService";
import { CartService } from "../services/CartService";

function Home({ setCartCount }) {
  const productService = new ProductService();
  const cartService = new CartService();
  const products = productService.getProducts();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Handle Add to Cart
  const handleAddToCart = (productId, stock) => {
    cartService.addToCart(productId, stock);
    setCartCount(cartService.getCartCount());
  };

  // Handle Newsletter Form Submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${newsletterEmail}!`);
    setNewsletterEmail("");
  };

  return (
    <main>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Dag and Bragan Industries</h1>
          <p className="tagline">Cleaning Made Powerful, Naturally.</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn primary">
              Shop Now
            </Link>
            <Link to="/about" className="btn secondary">
              Learn More
            </Link>
          </div>
        </div>
      </header>

      {/* Product Showcase Section */}
      <section className="product-showcase" id="products">
        <h2>Our Eco-Friendly Products</h2>
        <div className="products">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button
                className="btn primary add-to-cart"
                disabled={product.stock === 0}
                onClick={() => handleAddToCart(product.id, product.stock)}
              >
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
        <div className="more-products">
          <Link to="/products" className="btn primary">
            More Products
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us" id="about-us">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            <strong>Dag and Bragan Industries</strong> is dedicated to making powerful cleaning accessible to
            everyone—naturally. Our mission is to deliver affordable, high-quality cleaning solutions that don’t
            compromise on sustainability. We believe in protecting your home and the planet, offering products that are
            safe, effective, and eco-friendly. Join us in our vision for a cleaner, greener future where quality and
            affordability go hand in hand with environmental responsibility.
          </p>
          <div className="more-about">
            <Link to="/about" className="btn primary">
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-button">
            <Link to="/contact" className="btn primary">
              Contact Us
            </Link>
          </div>
          <div className="contact-info">
            <h3>Dag and Bragan Industries</h3>
            <p>
              <strong>Phone:</strong> +256 780656440
            </p>
            <p>
              <strong>Email:</strong> info@dagandbragan.com
            </p>
            <p>
              <strong>Location:</strong> Plot 280 Kyalema Road, Kampala, Uganda
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            id="newsletter-email"
            name="newsletter-email"
            placeholder="Enter your email address"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn primary">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}

export default Home;