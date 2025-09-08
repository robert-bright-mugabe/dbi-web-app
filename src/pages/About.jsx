// src/pages/About.jsx
import { Link } from "react-router-dom";
import "./../assets/style.css";

function About() {
  return (
    <main>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Dag and Bragan Industries</h1>
          <p className="about-tagline">Cleaning Made Powerful, Naturally.</p>
        </div>
      </section>

      {/* About Main Section */}
      <section className="about-main">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Dag and Bragan Industries was founded with a simple mission: to make powerful, affordable, and eco-friendly cleaning solutions accessible to everyone. We believe in protecting both your home and the planet, offering products that are safe, effective, and sustainable.
          </p>
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality cleaning products that don’t compromise on sustainability or affordability. We are committed to innovation, transparency, and customer satisfaction.
          </p>
          <h2>Our Vision</h2>
          <p>
            A cleaner, greener future where quality and affordability go hand in hand with environmental responsibility.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Eco-Friendly:</strong> We use plant-based, biodegradable ingredients.</li>
            <li><strong>Quality:</strong> Our products are rigorously tested for effectiveness and safety.</li>
            <li><strong>Affordability:</strong> We believe everyone deserves access to safe cleaning solutions.</li>
            <li><strong>Community:</strong> We support local communities and promote environmental awareness.</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/team-placeholder.jpg" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/team-placeholder.jpg" alt="John Smith" />
            <h3>John Smith</h3>
            <p>Head of Product</p>
          </div>
          <div className="team-member">
            <img src="/images/team-placeholder.jpg" alt="Mary Green" />
            <h3>Mary Green</h3>
            <p>Customer Success</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h4>Are your products safe for children and pets?</h4>
            <p>Yes! All our products are formulated to be safe for families, including children and pets, when used as directed.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer bulk or wholesale orders?</h4>
            <p>Yes, please <Link to="/contact">contact us</Link> for bulk or wholesale inquiries.</p>
          </div>
          <div className="faq-item">
            <h4>Where are your products made?</h4>
            <p>All our products are proudly made locally with carefully sourced ingredients.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;