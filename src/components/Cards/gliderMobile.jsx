import React, { useEffect, useRef } from "react";
import Glider from "glider-js";
import "glider-js/glider.min.css";
import MobileCard from "./cardMobile";

export default function GliderCarousel({ uniqueId, cards, children }) {
  const gliderRef = useRef(null);

  // Initialize Glider.js
  useEffect(() => {
    if (gliderRef.current) {
      new Glider(gliderRef.current, {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: `#dots-${uniqueId}`,
      });
    }
  }, [uniqueId]);
  return (
    <>
      <div className="glider-container">
        <div className="glider flex flex-col" ref={gliderRef}>
          {children ? (
            children
          ) : (
            <>
              {cards.map((card, index) => (
                <MobileCard key={index} {...card} />
              ))}
            </>
          )}
        </div>
        <div id={`dots-${uniqueId}`} className="glider-dots mt-8 text-center"></div>
      </div>
    </>
  );
}
