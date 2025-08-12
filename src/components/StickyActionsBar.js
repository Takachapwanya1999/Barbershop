import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';
import './StickyActionsBar.css';

const phoneDisplay = '+27 78 660 2500';
const phoneHref = 'tel:+27786602500';
const mapsHref = 'https://www.google.com/maps/search/?api=1&query=123+Main+Street+Downtown+City';
const waHref = 'https://wa.me/27786602500?text=Hi%20ViVa%20Barbershop%2C%20I%27d%20like%20to%20book.';

const StickyActionsBar = () => {
  return (
    <div className="sticky-actions" role="navigation" aria-label="Quick actions">
      <Link to="/booking" className="action" aria-label="Book Now">
        <FaCalendarCheck />
        <span>Book</span>
      </Link>
      <a href={phoneHref} className="action" aria-label={`Call ${phoneDisplay}`}>
        <FaPhone />
        <span>Call</span>
      </a>
      <a href={mapsHref} target="_blank" rel="noreferrer" className="action" aria-label="Get Directions">
        <FaMapMarkerAlt />
        <span>Directions</span>
      </a>
      <a href={waHref} target="_blank" rel="noreferrer" className="action" aria-label="WhatsApp">
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default StickyActionsBar;
