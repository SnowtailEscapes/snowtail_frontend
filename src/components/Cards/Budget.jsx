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


  const budgetCards = [
    {
      "Name": "Kasol",
      "title": "Land of Creamy Flavors",
      "duration": "3 Days & 2 Nights",
      "rating": "4.8/5",
      "cut_price": 15399,
      "curr_price": 10999,
      "save": 4400,
      "direct": "/Kasol2n3d",
      "image": "https://snowtailescapes.com/images/card/kasol.webp"
    },
    {
      "Name": "Mussoorie & Rishikesh",
      "title": "A Journey to the Queen of Hills",
      "duration": "4 Days & 3 Nights",
      "rating": "4.8/5",
      "cut_price": 22399,
      "curr_price": 15999,
      "save": 6400,
      "direct": "/Uttrakhand",
      "image": "https://snowtailescapes.com/images/card/masoorie.webp"
    },
    {
      "Name": "Manali",
      "title": "A Himalayan Heaven",
      "duration": "4 Days & 3 Nights",
      "rating": "4.8/5",
      "cut_price": 22399,
      "curr_price": 15999,
      "save": 6400,
      "direct": "/Manali3n4d",
      "image": "https://snowtailescapes.com/images/card/manali.webp"
    },
    {
      "Name": "Gujarat",
      "title": "Monument of Pride",
      "duration": "4 Days & 3 Nights",
      "rating": "4.8/5",
      "cut_price": 23199,
      "curr_price": 16499,
      "save": 6700,
      "direct": "/Gujarat3n4d",
      "image": "https://snowtailescapes.com/images/card/gujarat1.webp"
    },
    {
      "Name": "Bangkok & Pattaya",
      "title": "A Vibrant Thai Adventure",
      "duration": "5 Days & 4 Nights",
      "rating": "4.8/5",
      "cut_price": 25699,
      "curr_price": 19999,
      "save": 5700,
      "direct": "/Thailand5d4n",
      "image": "https://snowtailescapes.com/images/card/thailand4n5dS.webp"
    },
    {
      "Name": "Phuket & Krabi",
      "title": "Experience Best of Southern Thailand",
      "duration": "6 Days & 5 Nights",
      "rating": "4.8/5",
      "cut_price": 36999,
      "curr_price": 29999,
      "save": 7000,
      "direct": "/Thailand6d5n",
      "image": "https://snowtailescapes.com/images/card/thailand5n6ds.webp"
    }
  ]
  
  return (
    <div className="md:pl-20 md:pr-20 pl-4 pt-10">
      <h2 className="font-lora md:mb-3 text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
        Popular Budget Tours
      </h2>
      {isLargeScreen && (
        <>
          <GliderCarousel uniqueId="budget" cards={budgetCards} />
        </>
      )}
      {isMobileScreen && (
        <>
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">            
              {budgetCards.map((card, index) => (
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
