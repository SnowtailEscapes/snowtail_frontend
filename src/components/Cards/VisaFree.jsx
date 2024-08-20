import React, { useEffect, useRef, useState } from "react";
import GliderCarousel from "./gliderComponent";
import Mobile from "./gliderMobile";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function International() {

  const [isMobileScreen, setMobileScreen] = useState(
    window.innerWidth > 0 && window.innerWidth < 600
  );
  const [isTabletScreen, setTabletScreen] = useState(
    window.innerWidth >= 600 && window.innerWidth < 1000
  );
  const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth > 0 && window.innerWidth < 600);
      setTabletScreen(window.innerWidth >= 600 && window.innerWidth < 1000);
      setLargeScreen(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const freeCards = [
    {
      id: 0,
      "title": "Wonders of Nepal: The Heart of the Himalayas",
      "Name": "Nepal",
      "duration": "4 Days & 3 Nights",
      "rating": "4.8/5",
      "cut_price": 39500,
      "curr_price": 33999,
      "save": 5501,
      "direct": "/Nepal",
      "image": "https://snowtailescapes.com/images/card/nepal.webp"
    },
    {
      id: 1,
      "title": "Malaysian Marvels - Kuala Lumpur, Penang & Langkawi Escape",
      "Name": "Malaysia",
      "duration": "7 Days & 6 Nights",
      "rating": "4.8/5",
      "cut_price": 39500,
      "curr_price": 33999,
      "save": 5501,
      "direct": "/Malaysia",
      "image": "https://snowtailescapes.com/images/card/Malaysia.webp"
    },
    {
      id: 2,
      "title": "Experience Jewels of Thailand",
      "Name": "Thailand",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 36999,
      "curr_price": 29999,
      "save": 7000,
      "direct": "/Thailand6d5n",
      "image": "https://snowtailescapes.com/images/card/thailand5n6ds.webp"
    },
    {
      id: 3,
      "title": "Almaty: A Fusion of History, Culture, and Natural Splendor",
      "Name": "Almaty",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 41699,
      "curr_price": 34699,
      "save": 7000,
      "direct": "/Almaty",
      "image": "https://snowtailescapes.com/images/card/almaty.webp"
    },
    {
      id: 4,
      "title": "Jewel Of Indian Ocean",
      "Name": "Sri Lanka",
      "duration": "7 Days & 6 Nights",
      "rating": "4.8/5",
      "cut_price": 44500,
      "curr_price": 38699,
      "save": 5801,
      "direct": "/SriLanka6n7d",
      "image": "https://snowtailescapes.com/images/card/lanka.webp"
    }
  ]

  return (
    <div className="md:pl-20 md:pr-20 pl-4 pt-10">
      <h2 className="font-lora md:mb-3 text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
        Visa Free Tours
        {/* {
          isMobileScreen && (
          <p className="text-[4px] font-lora">(swipe right to see more..)</p>
          )
        } */}
      </h2>
      {isLargeScreen && (
        <>
          <GliderCarousel uniqueId="free" cards={freeCards} />
        </>
      )}
      {isMobileScreen && (
        <>
          {/* <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">
            {freeCards.map((card, index) => (
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
          </div> */}
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">
            {freeCards.map((card) => (
              <Card {...card} key={card.id} />
            ))}
          </div>
          <div className="flex w-full justify-center gap-2">
            <button onClick={handlePrev} className="btn btn-xs">Prev</button>
            <button onClick={handleNext} className="btn btn-xs">Next</button>
          </div>
        </>
      )}
    </div>
  );
}
