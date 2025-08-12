import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Marcus Johnson',
    rating: 5,
    text: 'Best salon in the city! The attention to detail is incredible.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
  },
  {
    name: 'David Chen',
    rating: 5,
    text: 'Professional service and amazing results. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
  },
  {
    name: 'Carlos Rodriguez',
    rating: 5,
    text: 'The stylists here are true artists. My haircut always looks perfect.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face'
  }
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => (
    <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
  ));
};

const Reviews = () => {
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ViVa Barbershop',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      reviewCount: reviews.length
    },
    review: reviews.map(r => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: r.rating },
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.text
    }))
  };

  return (
    <div className="reviews-page">
      <div className="container">
        <h1>Customer Reviews</h1>
        <div className="reviews-list">
          {reviews.map((review, idx) => (
            <div key={idx} className="review-card card">
              <img src={review.image} alt={review.name} className="review-img" />
              <div className="review-content">
                <h3>{review.name}</h3>
                <div className="stars">{renderStars(review.rating)}</div>
                <p>"{review.text}"</p>
              </div>
            </div>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </div>
  );
};

export default Reviews;
