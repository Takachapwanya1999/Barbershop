import React from 'react';
import './Blog.css';

const posts = [
  {
    title: 'Top Grooming Tips for Men',
    date: '2025-08-01',
    excerpt: 'Discover the best grooming practices to keep you looking sharp.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=200&fit=crop'
  },
  {
    title: 'Trending Hairstyles in 2025',
    date: '2025-07-15',
    excerpt: 'Check out the latest hairstyle trends for the modern gentleman.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=200&fit=crop'
  }
];

const Blog = () => (
  <div className="blog-page">
    <div className="container">
      <h1>Barbershop Blog</h1>
      <div className="blog-list">
        {posts.map((post, idx) => (
          <div key={idx} className="blog-card card">
            <img src={post.image} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
