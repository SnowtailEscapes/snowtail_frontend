import React, { useEffect, useState } from "react";
import Card from "./Card";
import Thailand8n9ds from "../../assets/CardImages/thailand8n9ds.webp";
import bali7n8ds from "../../assets/CardImages/Bali7n8ds.webp";
import singapore6n7ds from "../../assets/CardImages/singapore6n7ds.webp";
import dubai5n6d from "../../assets/CardImages/Dubai5n6dS.webp";
import almaty from "../../assets/CardImages/almaty.jpg";

export default function International() {
  const [isMobileScreen, setMobileScreen] = useState(window.innerWidth > 0 && window.innerWidth < 600);
  const [isTabletScreen, setTabletScreen] = useState(window.innerWidth >= 600 && window.innerWidth < 1000);
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
  return (
    <div className="md:pl-20 md:pr-20 pl-4 pt-10">
      <h2 className="march text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">Popular International Tours</h2>
      {isLargeScreen && (
        <>
          <div className="carousel p-10 pb-0 relative w-full">
            <div
              id="International1"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                name="Thailand"
                title="Experience Jewels of Thailand"
                duration="9 Days & 8 Nights"
                rating="4.8/5"
                cut_price={69099}
                curr_price={59099}
                save={10000}
                direct="/Thailand9d8n"
                image={Thailand8n9ds}
              />

              <Card
                name="Bali"
                title="Enchanting Bali Escape with Gili Island"
                duration="8 Days & 7 Nights"
                rating="4.8/5"
                cut_price={64699}
                curr_price={54699}
                save={10000}
                direct="/Bali8d7n"
                image={bali7n8ds}
              />

              <Card
                name="Singapore"
                title="A Journey of Cultural Marvels"
                duration="7 Days & 6 Nights"
                rating="4.8/5"
                cut_price={63900}
                curr_price={56699}
                direct="/Singapore6n7d"
                save={7201}
                image={singapore6n7ds}
              />
            </div>
            <div
              id="International2"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
             
              <Card
                name="Dubai"
                title="A Journey of Luxury and Wonder"
                duration="6 Days & 5 Nights"
                rating="4.8/5"
                cut_price={69500}
                curr_price={58899}
                save={10601}
                direct="/Dubai5n6d"
                image={dubai5n6d}
              />

              <Card
                name="Almaty"
                title="Heart in Mountains"
                duration="9 Days & 8 Nights"
                rating="4.8/5"
                cut_price={41699}
              curr_price={34699}
              save={7000}
                direct="/Almaty"
                image={almaty}
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#International1" className="btn btn-xs">
              1
            </a>
            <a href="#International2" className="btn btn-xs">
              2
            </a>
          </div>
        </>
      )}
      {
        isMobileScreen || isTabletScreen ? (
          <>
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">
            <Card
              name="Thailand"
              title="Experience Jewels of Thailand"
              duration="9 Days & 8 Nights"
              rating="4.8/5"
              cut_price={69099}
              curr_price={59099}
              save="SAVE ₹10,000"
              direct="/Thailand9d8n"
              image={Thailand8n9ds}
            />

            <Card
              name="Bali"
              title="Enchanting Bali Escape with Gili Island"
              duration="8 Days & 7 Nights"
              rating="4.8/5"
              cut_price={64699}
              curr_price={54699}
              save={10000}
              direct="/Bali8d7n"
              image={bali7n8ds}
            />

            <Card
              name='Singapore'
              title="A Journey of Cultural Marvels"
              duration="7 Days & 6 Nights"
              rating="4.8/5"
              cut_price={63900}
              curr_price={56699}
              direct="/Singapore6n7d"
              save={7201}
              image={singapore6n7ds}
            />

            <Card 
              name="Dubai"
              title="A Journey of Luxury and Wonder"
              duration="6 Days & 5 Nights"
              rating="4.8/5"
              cut_price={69500}
              curr_price={58899}
              save={10601}
              direct="/Dubai5n6d"
              image={dubai5n6d}
            />

            <Card
              name='Almaty'
              title="Heart in Mountains "
              duration="9 Days & 8 Nights"
              rating="4.8/5"
              cut_price={41699}
              curr_price={34699}
              save={7000}
              direct="/Almaty"
              image={almaty}
            />
          </div>
        </>
        ):
        (
          <></>
        )
      }
    </div>
  );
}
