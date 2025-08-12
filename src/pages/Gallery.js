import React from 'react';
import BeardTrimImage from '../components/BeardTrimImage';
import HotShaveImage from '../components/HotShaveImage';
import ClassicHaircutImage from '../components/ClassicHaircutImage';
import HairTreatmentImage from '../components/HairTreatmentImage';
import './Gallery.css';

const galleryItems = [
  {
    style: 'Classic Haircut',
    before: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=400&h=400&fit=crop',
    after: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&w=400&h=400&fit=crop',
    caption: 'A fresh classic cut for a sharp, clean look.'
  },
  {
    style: 'Beard Trim',
  before: '/images/beard-trim.png',
  after: '/images/beard-trim.png',
    caption: 'From rugged to refined with a professional beard trim.'
  },
  {
    style: 'Hot Shave',
    before: 'https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg?auto=compress&w=400&h=400&fit=crop',
    after: '/images/hot-shave.png',
    caption: 'A smooth finish after a relaxing hot shave.'
  },
  {
    style: 'Hair Treatment',
    before: 'https://images.pexels.com/photos/3992877/pexels-photo-3992877.jpeg?auto=compress&w=400&h=400&fit=crop',
    after: 'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&w=400&h=400&fit=crop',
    caption: 'Revitalized hair with our nourishing treatment.'
  }
];

const Gallery = () => (
  <div className="gallery-page">
    <div className="container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="gallery-card card">
            <h3>{item.style}</h3>
            <div className="gallery-images-row">
              <div className="gallery-image-block">
                <span>Before</span>
                {item.style === 'Beard Trim' ? (
                  <BeardTrimImage className="gallery-img" alt={`${item.style} before`} />
                ) : (
                  <img src={item.before} alt={`${item.style} before`} className="gallery-img" />
                )}
              </div>
              <div className="gallery-image-block">
                <span>After</span>
                {item.style === 'Beard Trim' ? (
                  <BeardTrimImage className="gallery-img" alt={`${item.style} after`} />
                ) : item.style === 'Hot Shave' ? (
                  <HotShaveImage className="gallery-img" alt={`${item.style} after`} />
                ) : item.style === 'Classic Haircut' ? (
                  <ClassicHaircutImage className="gallery-img" alt={`${item.style} after`} />
                ) : item.style === 'Hair Treatment' ? (
                  <HairTreatmentImage className="gallery-img" alt={`${item.style} after`} />
                ) : (
                  <img src={item.after} alt={`${item.style} after`} className="gallery-img" />
                )}
              </div>
            </div>
            <p className="gallery-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
