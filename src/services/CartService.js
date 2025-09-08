// src/services/CartService.js
export class CartService {
  constructor() {
    this.cart = this.loadCart();
  }

  loadCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  addToCart(productId, stock) {
    const item = this.cart.find((i) => i.id === productId);
    if (item) {
      if (item.qty < stock) item.qty += 1;
    } else {
      this.cart.push({ id: productId, qty: 1 });
    }
    this.saveCart();
  }

  updateQuantity(productId, action, stock) {
    const item = this.cart.find((i) => i.id === productId);
    if (!item) return;
    if (action === "increase" && item.qty < stock) item.qty += 1;
    if (action === "decrease" && item.qty > 1) item.qty -= 1;
    this.saveCart();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter((i) => i.id !== productId);
    this.saveCart();
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }
}