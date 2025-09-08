// src/services/EmailService.js
import emailjs from "@emailjs/browser";

export class EmailService {
  constructor() {
    emailjs.init("B69DilXFMdTl_nv2D");
   this.SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxUL12NvLgtuXWkB3D9MXKoDtCJ1SvNVKN4V3dZVrJckXji8MEcGmmPI6OxbEGI_sOM/exec";
  }

  async sendOrderEmail(formData, cart, products) {
    const total = cart.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
    const items = cart
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        return product ? `${product.name} x${item.qty}` : "";
      })
      .join(", ");

    try {
      await emailjs.send("service_5hzh70v", "template_7vuwogu", {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_address: formData.address,
        order_items: items,
        order_total: total.toLocaleString(),
        order_date: new Date().toLocaleString(),
      });

      await fetch("https://sheetdb.io/api/v1/mw5m4u6j60pgj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Address: formData.address,
            Items: items,
            Total: total,
            Date: new Date().toLocaleString(),
          }],
        }),
      });

      await fetch(this.SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            items: items,
            total: total,
          },
        }),
      });

      return true;
    } catch (error) {
      console.error("Email/Skills error:", error);
      throw error;
    }
  }

  async sendContactEmail(name, email, message) {
    try {
      await emailjs.send("service_5hzh70v", "template_7bbt6ke", {
        name,
        email,
        message,
      });
      return true;
    } catch (error) {
      console.error("Contact email error:", error);
      throw error;
    }
  }
}