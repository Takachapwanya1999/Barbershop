import React from 'react';
import './Promotions.css';

const promotions = [
  {
    title: 'Summer Special',
    description: 'Get 20% off all haircuts this August!',
    valid: 'Valid until August 31, 2025'
  },
  {
    title: 'Loyalty Program',
    description: 'Earn points with every visit and redeem for free services.',
    valid: 'Ongoing'
  }
];

const Promotions = () => (
  <div className="promotions-page">
    <div className="container">
      <h1>Special Offers & Promotions</h1>
      <div className="promotions-list">
        {promotions.map((promo, idx) => (
          <div key={idx} className="promotion-card card">
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            <span className="valid">{promo.valid}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Promotions;
