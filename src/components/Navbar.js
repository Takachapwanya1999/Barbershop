import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Booking', path: '/booking' },
    { name: 'Staff', path: '/staff' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand" onClick={closeMenu} aria-label="Home">
            <div className="logo">
              <h3>ViVa Barbershop</h3>
            </div>
          </Link>

          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`} role="menubar">
            {navLinks.map((link) => (
              <li key={link.name} role="none">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={0}
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="navbar-toggle" onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
