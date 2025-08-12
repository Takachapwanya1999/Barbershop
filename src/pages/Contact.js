import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
  <h1>Contact ViVa Barbershop</h1>
        <ContactForm />
        <div className="map-section">
          <h2>Our Location</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0000000000005!2d28.047305315443!3d-26.2041029834276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9509e6e6e6e6e6%3A0x6e6e6e6e6e6e6e6e!2s123%20Main%20Street%2C%20Downtown%20City!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return submitted ? (
    <p className="contact-thankyou">Thank you for reaching out! We'll get back to you soon.</p>
  ) : (
    <form className="contact-form" aria-label="Contact Form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange}></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};
export default Contact;
