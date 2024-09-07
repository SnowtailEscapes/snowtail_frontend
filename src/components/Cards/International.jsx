import React, { useEffect, useRef, useState } from "react";
import GliderCarousel from "./gliderComponent";
import Mcard from "./gliderMobile";

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


  const internationalCards = [
    {
      "id": 0,
      "Name": "Thailand",
      "title": "Experience Jewels of Thailand",
      "duration": "9 Days & 8 Nights",
      "rating": "4.8/5",
      "cut_price": 69099,
      "curr_price": 59099,
      "save": 10000,
      "direct": "/Thailand9d8n",
      "image":
        "https://snowtailescapes.com/images/card/thailand8n9ds.webp",
    },
    {
      "id": 1,
      "Name": "Bali",
      "title": "Enchanting Bali Escape with Gili Island",
      "duration": "8 Days & 7 Nights",
      "rating": "4.8/5",
      "cut_price": 64699,
      "curr_price": 54699,
      "save": 10000,
      "direct": "/Bali8d7n",
      "image":
        "https://snowtailescapes.com/images/card/Bali7n8ds.webp",
    },
    {
      "id": 2,
      "Name": "Singapore",
      "title": "A Journey of Cultural Marvels",
      "duration": "7 Days & 6 Nights",
      "rating": "4.8/5",
      "cut_price": 63900,
      "curr_price": 56699,
      "direct": "/Singapore6n7d",
      "save": 7201,
      "image":
        "https://snowtailescapes.com/images/card/singapore6n7ds.webp",
    },
    {
      "id": 3,
      "Name": "Dubai",
      "title": "A Journey of Luxury and Wonder",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 69500,
      "curr_price": 58899,
      "save": 10601,
      "direct": "/Dubai5n6d",
      "image":
        "https://snowtailescapes.com/images/card/Dubai5n6dS.webp",
    },
    {
      "id": 4,
      "Name": "Almaty",
      "title": "Heart in Mountains",
      "duration": "9 Days & 8 Nights",
      "rating": "4.8/5",
      "cut_price": 41699,
      "curr_price": 34699,
      "save": 7000,
      "direct": "/Almaty",
      "image":
        "https://snowtailescapes.com/images/card/almaty.webp",
    },
    {
      "id": 5,
      "Name": "Australia",
      "title": "Best in Australia",
      "duration": "7 Days & 6 Nights",
      "rating": "4.8/5",
      "cut_price": 41699,
      "curr_price": 34699,
      "save": 7000,
      "direct": "/Australia7d6n",
      "image": "https://snowtailescapes.com/images/card/australia.webp",
    },
  ];

  return (
    <>
      {
        isLargeScreen && (
          <div className="md:pl-20 md:pr-20 pl-4 pt-10">
            <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <GliderCarousel uniqueId="international" cards={internationalCards} />
          </div>
        )
      }
      {
        isTabletScreen && (
          <div className="md:pl-20 md:pr-20 pl-4 pt-10">
            <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <GliderCarousel uniqueId="international" cards={internationalCards} />
          </div>
        )
      }
      {
        isMobileScreen && (
          <div className="text-center pt-10">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <Mcard cards={internationalCards} uniqueId="international" />
          </div>
        )
      }
    </>

  );
}
