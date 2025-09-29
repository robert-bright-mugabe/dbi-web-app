// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar({ cartCount, setShowCart }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Replace text logo with image */}
        <Link to="/" className="nav-logo">
          <img
            src="./images/brago-logo.png"
            alt="Brago Logo"
            className="logo-img"
          />
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleNav}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleNav}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleNav}>
              Blog
            </Link>
          </li>
          <li>
            <button className="cart-link" onClick={() => setShowCart(true)}>
              🛒 <span id="cart-count">{cartCount}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;