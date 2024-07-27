import React, { useEffect, useState } from "react";
import Card from "./Card";
import andaman from "../../assets/CardImages/andaman.webp";
import Kashmir1 from "../../assets/CardImages/kashmir1.webp";
import Kashmir2 from "../../assets/CardImages/kashmir2.webp";
import ladakh from "../../assets/CardImages/ladakh_card.webp";
import sikkim from "../../assets/CardImages/sikkim_card.webp";
import himachal from "../../assets/CardImages/shimla5n6d.webp";

export default function Domestic() {
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
      <h2 className="march text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
        Popular Domestic Tours
      </h2>
      {isLargeScreen && (
        <>
          <div className="carousel p-10 pb-0  relative w-full">
            <div
              id="Domestic1"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                name="Kashmir"
                title="Adventure Meet Serenity"
                duration="6 Days & 5 Nights"
                rating="4.8/5"
                cut_price="INR 28,700"
                curr_price="₹ 26,700"
                save="SAVE INR 2,000"
                direct="/Kashmir5n6d"
                image={Kashmir1}
              />

              <Card
                name="Kashmir"
                title="Experience Paradise On Earth"
                duration="4 Days & 3 Nights"
                rating="4.8/5"
                image={Kashmir2}
                cut_price="INR 25,900"
                curr_price="₹ 18,499"
                direct="/Kashmir3n4d"
                save="SAVE INR 7,401"
              />

              <Card
                name="Ladakh"
                title="Thrilling Leh Ladakh"
                duration="6 Days & 5 Nights"
                rating="4.8/5"
                cut_price="INR 41,999"
                curr_price="₹ 29,999"
                save="SAVE INR 12,000"
                direct="/Ladakh5n6d"
                image={ladakh}
              />
            </div>
            <div
              id="Domestic2"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                name="Gangtok & Darjeeling"
                title="The Abode of Clouds"
                duration="6 Days & 5 Nights"
                rating="4.8/5"
                cut_price="INR 50,199"
                curr_price="₹ 35,799"
                save="SAVE INR 14,400"
                direct="/Sikkim5n6d"
                image={sikkim}
              />

              <Card
                name="Himachal Pradesh"
                title="Sleep In Natures Lap"
                duration="6 Days & 5 Nights"
                rating="4.8/5"
                cut_price="INR 28,700"
                curr_price="₹ 26,700"
                save="SAVE INR 2,000"
                direct="/Shimla5n6d"
                image={himachal}
              />

              <Card
                name='Andaman'
                title="A Journey to Serenity"
                duration="5 Days & 4 Nights"
                rating="4.8/5"
                cut_price="INR 44,799"
                curr_price="₹ 31,988"
                save="SAVE INR 12,811"
                direct="/Andaman"
                image={andaman}
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#Domestic1" className="btn btn-xs">
              1
            </a>
            <a href="#Domestic2" className="btn btn-xs">
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
              name="Kashmir"
              title="Adventure Meet Serenity"
              duration="6 Days & 5 Nights"
              rating="4.8/5"
              cut_price="INR 28,700"
              curr_price="₹ 26,700"
              save="SAVE INR 2,000"
              direct="/Kashmir5n6d"
              image={Kashmir1}
            />

            <Card
              name="Kashmir"
              title="Experience Paradise On Earth"
              duration="4 Days & 3 Nights"
              rating="4.8/5"
              image={Kashmir2}
              cut_price="INR 25,900"
              curr_price="₹ 18,499"
              direct="/Kashmir3n4d"
              save="SAVE INR 7,401"
            />

            <Card
              name="Ladakh"
              title="Thrilling Leh Ladakh"
              duration="6 Days & 5 Nights"
              rating="4.8/5"
              cut_price="INR 41,999"
              curr_price="₹ 29,999"
              save="SAVE INR 12,000"
              direct="/Ladakh5n6d"
              image={ladakh}
            />

            <Card
              name="Gangtok & Darjeeling"
              title="The Abode of Clouds"
              duration="6 Days & 5 Nights"
              rating="4.8/5"
              cut_price="INR 50,199"
                curr_price="₹ 35,799"
                save="SAVE INR 14,400"
              direct="/Sikkim5n6d"
              image={sikkim}
            />

            <Card
              name="Himachal Pradesh"
              title="Sleep In Natures Lap"
              duration="6 Days & 5 Nights"
              rating="4.8/5"
              cut_price="INR 28,700"
              curr_price="₹ 26,700"
              save="SAVE INR 2,000"
              direct="/Shimla5n6d"
              image={himachal}
            />

            <Card
              name="Andaman"
              title="A Journey to Serenity"
              duration="5 Days & 4 Nights"
              rating="4.8/5"
              cut_price="INR 44,799"
              curr_price="₹ 31,988"
              save="SAVE INR 12,811"
              direct="/Andaman"
              image={andaman}
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
