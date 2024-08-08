import React, { useEffect, useRef } from "react";
import Glider from "glider-js";
import "glider-js/glider.min.css";
import Card from "./Card"; // Adjust the import as needed

export default function GliderCarousel({ uniqueId, cards }) {
  const gliderRef = useRef(null);

  // Initialize Glider.js
  useEffect(() => {
    if (gliderRef.current) {
      new Glider(gliderRef.current, {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: `#dots-${uniqueId}`,
        arrows: {
          prev: `#glider-prev-${uniqueId}`,
          next: `#glider-next-${uniqueId}`,
        },
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              itemWidth: 300, // Adjust as needed
              duration: 0.25,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              itemWidth: 350, // Adjust as needed
              duration: 0.25,
            },
          },
          {
            // Default settings for screens 1100px and above
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              itemWidth: 400, // Adjust as needed
              duration: 0.25,
            },
          },
        ],
      });
    }
  }, [uniqueId]);

  return (
    <div className="glider-contain flex">
      <button
        id={`glider-prev-${uniqueId}`}
        aria-label="Previous"
        className="glider-prev"
      >
        «
      </button>
      <div className="glider" ref={gliderRef}>
        {cards.map((card, index) => (
          <div className="w-full carousel-item flex flex-col relative rounded-2xl mx-2" key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
      <button
        id={`glider-next-${uniqueId}`}
        aria-label="Next"
        className="glider-next"
      >
        »
      </button>
    </div>
  );
}
