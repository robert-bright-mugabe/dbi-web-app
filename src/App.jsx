// src/App.jsx
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import CartModal from "./components/CartModal";
import CheckoutModal from "./components/CheckoutModal";
import OrderConfirmationModal from "./components/OrderConfirmationModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { CartService } from "./services/CartService";
import "./assets/style.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [cartCount, setCartCount] = useState(new CartService().getCartCount());
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <ScrollToTop />
      <Navbar cartCount={cartCount} setShowCart={setShowCart} />
      <Routes>
        <Route path="/" element={<Home setCartCount={setCartCount} />} />
        <Route path="/products" element={<Products setCartCount={setCartCount} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <CartModal
        show={showCart}
        setShowCart={setShowCart}
        setShowCheckout={setShowCheckout}
        setCartCount={setCartCount}
      />
      <CheckoutModal
        show={showCheckout}
        setShowCheckout={setShowCheckout}
        setShowOrder={setShowOrder}
        setOrderData={setOrderData}
        setCartCount={setCartCount}
      />
      <OrderConfirmationModal
        show={showOrder}
        setShowOrder={setShowOrder}
        orderData={orderData}
      />
      <Footer />
    </Router>
  );
}

export default App;