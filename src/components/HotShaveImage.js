import React, { useState } from 'react';

const HotShaveImage = ({ className, alt }) => {
  const sources = [
    '/images/hot-shave.png',
    '/images/hot-shave.jpg',
    'https://images.pexels.com/photos/3992878/pexels-photo-3992878.jpeg?auto=compress&w=600&h=400&fit=crop',
  ];
  const [index, setIndex] = useState(0);

  const handleError = () => {
    if (index < sources.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <img
      className={className}
      src={sources[index]}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
};

export default HotShaveImage;
