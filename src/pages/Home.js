import React from 'react';
import BeardTrimImage from '../components/BeardTrimImage';
import HotShaveImage from '../components/HotShaveImage';
import ClassicHaircutImage from '../components/ClassicHaircutImage';
import HairTreatmentImage from '../components/HairTreatmentImage';
import { Link } from 'react-router-dom';
import { FaStar, FaClock, FaPhone, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      id: 1,
      name: 'Classic Haircut',
      price: 'R250',
      duration: '30 min',
      description: 'Professional haircut with wash and style',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&w=600&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Beard Trim',
      price: 'R150',
      duration: '20 min',
      description: 'Precise beard shaping and trimming',
      image: '/images/beard-trim.png'
    },
    {
      id: 3,
      name: 'Hot Shave',
      price: 'R350',
      duration: '45 min',
      description: 'Traditional hot towel straight razor shave',
      image: '/images/hot-shave.png'
    },
    {
      id: 4,
      name: 'Hair Treatment',
      price: 'R400',
      duration: '45 min',
      description: 'Revitalizing treatment for strong, healthy hair',
      image: 'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&w=600&h=400&fit=crop'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Marcus Johnson',
      rating: 5,
      text: 'Best salon in the city! The attention to detail is incredible.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'David Chen',
      rating: 5,
      text: 'Professional service and amazing results. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Carlos Rodriguez',
      rating: 5,
      text: 'The stylists here are true artists. My haircut always looks perfect.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar key={index} className={index < rating ? 'star filled' : 'star'} />
    ));
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="fade-in">
                Premium Cuts for the Modern Gentleman
              </h1>
              <p className="fade-in">
                Experience the finest salon services with our expert stylists. 
                From classic cuts to contemporary styles, we deliver excellence in every detail.
              </p>
              <div className="hero-buttons fade-in">
                <Link to="/booking" className="btn btn-primary">
                  Book Appointment
                  <FaArrowRight />
                </Link>
                <Link to="/services" className="btn btn-outline">
                  View Services
                </Link>
              </div>
            </div>
            <div className="hero-image fade-in">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop" 
                alt="Professional barber at work"
                loading="eager"
                decoding="async"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-title">
            <h2>Our Popular Services</h2>
            <p>Experience premium grooming with our signature treatments</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card card">
                {service.name === 'Classic Haircut' ? (
                  <ClassicHaircutImage className="service-thumb" alt={service.name} />
                ) : service.name === 'Beard Trim' ? (
                  <BeardTrimImage className="service-thumb" alt={service.name} />
                ) : service.name === 'Hot Shave' ? (
                  <HotShaveImage className="service-thumb" alt={service.name} />
                ) : service.name === 'Hair Treatment' ? (
                  <HairTreatmentImage className="service-thumb" alt={service.name} />
                ) : (
                  service.image && (
                    <img
                      className="service-thumb"
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      decoding="async"
                    />
                  )
                )}
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <span className="price">{service.price}</span>
                    <span
                      className="duration-badge"
                      title={`Estimated duration: ${service.duration}`}
                      aria-label={`Estimated duration ${service.duration}`}
                    >
                      <FaClock />
                      {service.duration}
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={`/booking?service=${encodeURIComponent(service.name)}`}
                      className="btn btn-primary"
                      aria-label={`Book ${service.name}`}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card card">
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" width="80" height="80" />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <div className="stars">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p>"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Next Great Look?</h2>
            <p>Book your appointment today and experience the ViVa Barbershop difference</p>
            <div className="cta-buttons">
              <Link to="/booking" className="btn btn-primary">
                Book Now
                <FaArrowRight />
              </Link>
              <a href="tel:+27786602500" className="btn btn-outline">
                <FaPhone />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
