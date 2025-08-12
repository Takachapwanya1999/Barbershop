
import React from 'react';
import BeardTrimImage from '../components/BeardTrimImage';
import HotShaveImage from '../components/HotShaveImage';
import ClassicHaircutImage from '../components/ClassicHaircutImage';
import HairTreatmentImage from '../components/HairTreatmentImage';
import './Services.css';

const services = [
  {
    name: 'Classic Haircut',
    price: 'R250',
    description: 'Professional haircut with wash and style.',
    image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&w=400&h=300&fit=crop'
  },
  {
    name: 'Beard Trim',
    price: 'R150',
    description: 'Precise beard shaping and trimming.',
  image: '/images/beard-trim.png'
  },
  {
    name: 'Hot Shave',
    price: 'R350',
    description: 'Traditional hot towel straight razor shave.',
    image: 'https://images.pexels.com/photos/3992878/pexels-photo-3992878.jpeg?auto=compress&w=400&h=300&fit=crop'
  },
  {
    name: 'Hair Treatment',
    price: 'R400',
    description: 'Revitalizing hair treatment for healthy hair.',
    image: 'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&w=400&h=300&fit=crop'
  }
];

const Services = () => (
  <div className="services-page">
    <div className="container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card card">
            {service.name === 'Classic Haircut' ? (
              <ClassicHaircutImage className="service-img" alt={service.name} />
            ) : service.name === 'Beard Trim' ? (
              <BeardTrimImage className="service-img" alt={service.name} />
            ) : service.name === 'Hot Shave' ? (
              <HotShaveImage className="service-img" alt={service.name} />
            ) : service.name === 'Hair Treatment' ? (
              <HairTreatmentImage className="service-img" alt={service.name} />
            ) : (
              <img src={service.image} alt={service.name} className="service-img" />
            )}
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className="price">{service.price}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
