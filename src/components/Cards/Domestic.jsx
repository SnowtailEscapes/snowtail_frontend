import React, { useEffect, useRef, useState } from "react";
import GliderCarousel from "./gliderComponent";
import Mcard from "./gliderMobile";


export default function Domestic() {
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


  const domesticCards = [
    { 
      "id":0,
      "Name": "Kashmir",
      "title": "Adventure Meet Serenity",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 28700,
      "curr_price": 26700,
      "save": 2000,
      "direct": "/Kashmir5n6d",
      "image":
        "https://snowtailescapes.com/images/card/kashmir1.webp",
    },
    { 
      "id":1,
      "Name": "Kashmir",
      "title": "Experience Paradise On Earth",
      "duration": "4 Days & 3 Nights",
      "rating": "4.8/5",
      "cut_price": 25900,
      "curr_price": 18499,
      "save": 7401,
      "direct": "/Kashmir3n4d",
      "image":
        "https://snowtailescapes.com/images/card/kashmir2.webp",
    },
    { 
      "id":2,
      "Name": "Ladakh",
      "title": "Thrilling Leh Ladakh",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 41999,
      "curr_price": 29999,
      "save": 12000,
      "direct": "/Ladakh5n6d",
      "image":
        "https://snowtailescapes.com/images/card/ladakh.webp",
    },
    { 
      "id":3,
      "Name": "Gangtok & Darjeeling",
      "title": "The Abode of Clouds",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 50199,
      "curr_price": 35799,
      "save": 14400,
      "direct": "/Sikkim5n6d",
      "image":
        "https://snowtailescapes.com/images/card/sikkim.webp",
    },
    { 
      "id":4,
      "Name": "Himachal Pradesh",
      "title": "Sleep In Natures Lap",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 28700,
      "curr_price": 26700,
      "save": 2000,
      "direct": "/Shimla5n6d",
      "image":
        "https://snowtailescapes.com/images/card/shimla5n6d.webp",
    },
    {  
      "id":5,
      "Name": "Andaman",
      "title": "A Journey to Serenity",
      "duration": "5 Days & 4 Nights",
      "rating": "4.8/5",
      "cut_price": 44799,
      "curr_price": 31988,
      "save": 12811,
      "direct": "/Andaman",
      "image":
        "https://snowtailescapes.com/images/card/andaman.webp",
    },
  ];

  return (
    <>
    {
        isLargeScreen && (
          <div className="md:pl-20 md:pr-20 pl-4 pt-10">
            <h2 className="font-lora md:mb-3 text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <GliderCarousel uniqueId="domestic" cards={domesticCards} />
          </div>
        )
      }
      {
        isTabletScreen && (
          <div className="md:pl-20 md:pr-20 pl-4 pt-10">
            <h2 className="font-lora md:mb-3 text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <GliderCarousel uniqueId="domestic" cards={domesticCards} />
          </div>
        )
      }
      {
        isMobileScreen && (
          <div className="text-center pt-10">
          <h2 className="font-lora md:mb-3 text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <Mcard cards={domesticCards} uniqueId="domestic" />
          </div>
        )
      }
  </>
  );
}
