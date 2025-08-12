import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>ViVa Barbershop</h3>
              <p>Premium grooming services for the modern gentleman. Experience excellence in every cut.</p>
            </div>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/booking">Book Appointment</Link></li>
              <li><Link to="/gift-cards">Gift Cards</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Classic Haircut</li>
              <li>Premium Haircut</li>
              <li>Beard Trim</li>
              <li>Hot Shave</li>
              <li>Hair Treatment</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>123 Main Street, Downtown City</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+27 78 660 2500</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>eddiessalon@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaClock />
                <span>Mon-Sun: 7:30AM-8:00PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <NewsletterForm />
        </div>

        <div className="footer-social-feed">
          <h4>Follow Us on Instagram</h4>
          <iframe
            title="Instagram Feed"
            src="https://www.instagram.com/p/CuKjK1wM1wA/embed"
            width="320"
            height="400"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            style={{ border: 'none', overflow: 'hidden' }}
          ></iframe>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} ViVa Barbershop. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const NewsletterForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return submitted ? (
    <p className="newsletter-thankyou">Thank you for subscribing!</p>
  ) : (
    <form className="newsletter-form" aria-label="Newsletter Signup" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email address"
        aria-label="Email address"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};
export default Footer;
