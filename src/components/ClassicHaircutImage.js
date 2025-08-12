import React, { useState } from 'react';

const ClassicHaircutImage = ({ className, alt }) => {
  const sources = [
    '/images/classic-haircut.png',
    '/images/classic-haircut.jpg',
    'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&w=600&h=400&fit=crop',
  ];
  const [index, setIndex] = useState(0);
  const handleError = () => { if (index < sources.length - 1) setIndex(index + 1); };
  return (
    <img className={className} src={sources[index]} alt={alt} loading="lazy" decoding="async" onError={handleError} />
  );
};

export default ClassicHaircutImage;
