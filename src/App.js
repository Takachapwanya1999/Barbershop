import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Staff from './pages/Staff';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Promotions from './pages/Promotions';
import Reviews from './pages/Reviews';
import GiftCards from './pages/GiftCards';
import './App.css';
import StickyActionsBar from './components/StickyActionsBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/privacy" element={<div className="container"><h1>Privacy Policy</h1><p>Coming soon.</p></div>} />
            <Route path="/terms" element={<div className="container"><h1>Terms of Service</h1><p>Coming soon.</p></div>} />
          </Routes>
        </main>
        <Footer />
  <StickyActionsBar />
      </div>
    </Router>
  );
}

export default App;
