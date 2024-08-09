import React, { useEffect, useState } from "react";
import GliderCarousel from "./gliderComponent";
import Card from "./Card";

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

  const domesticCards = [
    {
      Name: "Kashmir",
      title: "Adventure Meet Serenity",
      duration: "6 Days & 5 Nights",
      rating: "4.8/5",
      cut_price: 28700,
      curr_price: 26700,
      save: 2000,
      direct: "/Kashmir5n6d",
      image:
        "https://snowtailescapes.com/images/card/kashmir1.webp",
    },
    {
      Name: "Kashmir",
      title: "Experience Paradise On Earth",
      duration: "4 Days & 3 Nights",
      rating: "4.8/5",
      cut_price: 25900,
      curr_price: 18499,
      save: "SAVE INR 7,401",
      direct: "/Kashmir3n4d",
      image:
        "https://snowtailescapes.com/images/card/kashmir2.webp",
    },
    {
      Name: "Ladakh",
      title: "Thrilling Leh Ladakh",
      duration: "6 Days & 5 Nights",
      rating: "4.8/5",
      cut_price: 41999,
      curr_price: 29999,
      save: 12000,
      direct: "/Ladakh5n6d",
      image:
        "https://snowtailescapes.com/images/card/ladakh.webp",
    },
    {
      Name: "Gangtok & Darjeeling",
      title: "The Abode of Clouds",
      duration: "6 Days & 5 Nights",
      rating: "4.8/5",
      cut_price: 50199,
      curr_price: 35799,
      save: 14400,
      direct: "/Sikkim5n6d",
      image:
        "https://snowtailescapes.com/images/card/sikkim.webp",
    },
    {
      Name: "Himachal Pradesh",
      title: "Sleep In Natures Lap",
      duration: "6 Days & 5 Nights",
      rating: "4.8/5",
      cut_price: 28700,
      curr_price: 26700,
      save: 2000,
      direct: "/Shimla5n6d",
      image:
        "https://snowtailescapes.com/images/card/shimla5n6d.webp",
    },
    {
      Name: "Andaman",
      title: "A Journey to Serenity",
      duration: "5 Days & 4 Nights",
      rating: "4.8/5",
      cut_price: 44799,
      curr_price: 31988,
      save: 12811,
      direct: "/Andaman",
      image:
        "https://snowtailescapes.com/images/card/andaman.webp",
    },
  ];

  return (
    <div className="md:pl-20 md:pr-20 pl-4 pt-10">
      <h2 className="march text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
        Popular Domestic Tours
      </h2>
      {isLargeScreen && (
        <>
          <GliderCarousel uniqueId="domestic" cards={domesticCards} />
        </>
      )}
      {isMobileScreen && (
        <>
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">            
              {domesticCards.map((card, index) => (
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
        </>
      )}
    </div>
  );
}
