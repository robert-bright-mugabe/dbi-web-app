// src/pages/Contact.jsx
import { useState } from "react";
import { EmailService } from "../services/EmailService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailService = new EmailService();
    emailService
      .sendEmail(formData)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <main>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit" className="btn primary">
              Send Message
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>
          <div className="contact-info">
            <h3>Dag and Bragan Industries</h3>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> info@dagbragan.com
            </p>
            <p>
              <strong>Location:</strong> 123 Greenway Blvd, Eco City, USA
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;