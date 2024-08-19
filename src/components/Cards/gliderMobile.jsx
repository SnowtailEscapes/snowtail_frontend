// MobileGlider.js
import React, { useEffect } from 'react';
import Glider from 'glider-js';
import Card from './Card';

const MobileGlider = ({ car }) => {
  useEffect(() => {
    new Glider(document.querySelector('.glider-mobile'), {
      slidesToShow: 1,
      dots: '#dots-mobile',
      draggable: true,
      arrows: {
        prev: '.glider-prev-mobile',
        next: '.glider-next-mobile',
      },
    });
  }, [car]);

  return (
    <>
      <div className="glider-mobile carousel p-4 pb-0 rounded-box flex flex-nowrap">
        {car.map((card, index) => (
          <Card
            title={card.title}
            duration={card.duration}
            rating={card.rating}
            cut_price={card.cut_price}
            curr_price={card.curr_price}
            save={card.save}
            direct={card.direct}
            image={card.image}
            Name={card.Name}
            key={index}
          />
        ))}
      </div>
      <div id="dots-mobile" className="glider-dots flex justify-center gap-3 mt-4">
        
      </div>
    </>
  );
};

export default MobileGlider;
