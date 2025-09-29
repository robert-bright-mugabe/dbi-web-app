import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="links-form">
          <div className="links">
            {/* Navigation Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="footer-socials">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a
                    href="https://instagram.com/brago_clean"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email Address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Branding Section */}
        <div className="footer-brand">
          {/* Replace text logo with image */}
          <img src="./images/brago-logo.png" alt="Brago Logo" className="logo-img" />
          <p>&copy; 2025 Dag and Bragan Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;