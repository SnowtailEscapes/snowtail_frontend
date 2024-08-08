import React, { useEffect, useState } from "react";
import GliderCarousel from "./gliderComponent";
import Card from "./Card";

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



  const internationalCards = [
    {
      "Name": "Thailand",
      "title": "Experience Jewels of Thailand",
      "duration": "9 Days & 8 Nights",
      "rating": "4.8/5",
      "cut_price": 69099,
      "curr_price": 59099,
      "save": 10000,
      "direct": "/Thailand9d8n",
      "image":
        "https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/thailand8n9d",
    },
    {
      "Name": "Bali",
      "title": "Enchanting Bali Escape with Gili Island",
      "duration": "8 Days & 7 Nights",
      "rating": "4.8/5",
      "cut_price": 64699,
      "curr_price": 54699,
      "save": 10000,
      "direct": "/Bali8d7n",
      "image":
        "https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/xlknx6r9srnj8hrcv80n",
    },
    {
      "Name": "Singapore",
      "title": "A Journey of Cultural Marvels",
      "duration": "7 Days & 6 Nights",
      "rating": "4.8/5",
      "cut_price": 63900,
      "curr_price": 56699,
      "direct": "/Singapore6n7d",
      "save": 7201,
      "image":
        "https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/dionqfxfgjjefuufkybb",
    },
    {
      "Name": "Dubai",
      "title": "A Journey of Luxury and Wonder",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 69500,
      "curr_price": 58899,
      "save": 10601,
      "direct": "/Dubai5n6d",
      "image":
        "https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/suoctcvh0fvuysxd5tgn",
    },
    {
      "Name": "Almaty",
      "title": "Heart in Mountains",
      "duration": "9 Days & 8 Nights",
      "rating": "4.8/5",
      "cut_price": 41699,
      "curr_price": 34699,
      "save": 7000,
      "direct": "/Almaty",
      "image":
        "https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/dmco3dmhjdvkn0auoaf8",
    },
    {
      "Name": "Australia",
      "title": "Best in Australia",
      "duration": "7 Days & 6 Nights",
      "rating": "4.8/5",
      "cut_price": 41699,
      "curr_price": 34699,
      "save": 7000,
      "direct": "/Australia7d6n",
      "image":
        "https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/r1iqblqgi5qaszmdftqb",
    },
  ];

  return (
<div className="md:pl-20 md:pr-20 pl-4 pt-10">
      <h2 className="march text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
        Popular International Tours
      </h2>
      {isLargeScreen && (
        <>
          <GliderCarousel uniqueId="international" cards={internationalCards} />
        </>
      )}
      {isMobileScreen && (
        <>
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">            
              {internationalCards.map((card, index) => (
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
