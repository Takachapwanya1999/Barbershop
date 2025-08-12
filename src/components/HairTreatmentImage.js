import React, { useState } from 'react';

const HairTreatmentImage = ({ className, alt }) => {
  const sources = [
    '/images/hair-treatment.png',
    '/images/hair-treatment.jpg',
    'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&w=600&h=400&fit=crop',
  ];
  const [index, setIndex] = useState(0);
  const handleError = () => { if (index < sources.length - 1) setIndex(index + 1); };
  return (
    <img className={className} src={sources[index]} alt={alt} loading="lazy" decoding="async" onError={handleError} />
  );
};

export default HairTreatmentImage;
