import React, { useEffect, useRef } from 'react';
import Glider from 'glider-js';
import Card from './Card';

const MobileGlider = ({ car }) => {
  const gliderRef = useRef(null);

  useEffect(() => {
    const gliderInstance = new Glider(gliderRef.current, {
      slidesToShow: 1,  // Show one card at a time
      dots: '#dots-mobile',  // Enable dots for scrollability
      draggable: true,  // Allow dragging
      arrows: {
        prev: '.glider-prev-mobile',  // Previous arrow
        next: '.glider-next-mobile',  // Next arrow
      },
    });

    return () => {
      gliderInstance.destroy();  // Cleanup when component unmounts
    };
  }, [car]);

  return (
    <div className="mobile-glider-container">
      <div ref={gliderRef} className="glider-mobile p-4 rounded-box flex flex-nowrap">
        {car.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </div>

      <div id="dots-mobile" className="glider-dots mt-4"></div>  {/* Dots for navigation */}
    </div>
  );
};

export default MobileGlider;
