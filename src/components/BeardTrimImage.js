import React, { useState } from 'react';

const BeardTrimImage = ({ className, alt }) => {
  const sources = [
    '/images/beard-trim.png',
    '/images/beard-trim.jpg',
    'https://images.pexels.com/photos/1707826/pexels-photo-1707826.jpeg?auto=compress&w=600&h=400&fit=crop',
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

export default BeardTrimImage;
