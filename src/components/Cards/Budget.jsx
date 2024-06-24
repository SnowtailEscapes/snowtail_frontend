import React, { useEffect, useState } from "react";
import Card from "./Card";
import thailand4n5dS from "../../assets/CardImages/thailand4n5dS.webp";
import thailand5n6ds from "../../assets/CardImages/thailand5n6ds.webp";
import Kasol from "../../assets/CardImages/kasol.avif";
import uttrakhand from "../../assets/CardImages/uttrakhand_card.webp";
import gujarat from "../../assets/CardImages/gujarat1.webp";
import manali from "../../assets/CardImages/manali.webp";

export default function Budget() {
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

  return (
    <div className="md:pl-20 md:pr-20 pl-4 pt-10">
      <h2 className=" md:text-3xl text-2xl font-extrabold">Budget Tours</h2>
      {isLargeScreen && (
        <>
          <div className="carousel p-10 pb-0 rounded-box relative w-full">
            <div
              id="Budget1"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                title="Kasol | Land of Creamy Flavors"
                duration="3 Days and 2 Nights"
                rating="4.8/5"
                cut_price="INR 15,399"
                curr_price="₹ 10,999"
                save="SAVE INR 4,400"
                direct="/Kasol2n3d"
                image={Kasol}
              />

              <Card
                title="Mussoorie & Rishikesh |  A Journey to the Queen of Hills"
                duration="4 Days and 3 Nights"
                rating="4.8/5"
                cut_price="INR 22,399"
                curr_price="₹ 15,999"
                save="SAVE INR 6,400"
                direct="/Uttrakhand"
                image={uttrakhand}
              />
              <Card
                title="Manali | A Himalayan Heaven"
                duration="4 Days and 3 Nights"
                rating="4.8/5"
                cut_price="INR 69,099"
                curr_price="₹ 59,099"
                save="SAVE INR 10,000"
                direct="/Manali3n4d"
                image={manali}
              />
            </div>

            <div
              id="Budget2"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                title="Gujarat | Monument of Pride"
                duration="4 Days and 3 Nights"
                rating="4.8/5"
                cut_price="INR 23,199"
                curr_price="₹ 16,499"
                save="SAVE INR 6,700"
                direct="/Gujarat3n4d"
                image={gujarat}
              />
              <Card
                title="Bangkok & Pattaya | A Vibrant Thai Adventure"
                duration="5 Days and 4 Nights"
                rating="4.8/5"
                cut_price="INR 25,699"
                curr_price="₹ 19,999"
                save="SAVE INR 5,700"
                direct="/Thailand5d4n"
                image={thailand4n5dS}
              />
              <Card
                title="Phuket & Krabi | Experience Best of Southern Thailand"
                duration="6 Days and 5 Nights"
                rating="4.8/5"
                cut_price="INR 36,999"
                curr_price="₹ 29,999"
                save="SAVE INR 7,000"
                direct="/Thailand6d5n"
                image={thailand5n6ds}
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#Budget1" className="btn btn-xs">
              1
            </a>
            <a href="#Budget2" className="btn btn-xs">
              2
            </a>
          </div>
        </>
      )}
      {isMobileScreen || isTabletScreen ? (
        <>
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">
            <Card
              title="Kasol | Land of Creamy Flavors"
              duration="3 Days and 2 Nights"
              rating="4.8/5"
              cut_price="INR 15,399"
              curr_price="₹ 10,999"
              save="SAVE INR 4,400"
              direct="/Kasol2n3d"
              image={Kasol}
            />

            <Card
              title="Mussoorie & Rishikesh |  A Journey to the Queen of Hills"
              duration="4 Days and 3 Nights"
              rating="4.8/5"
              cut_price="INR 22,399"
              curr_price="₹ 15,999"
              save="SAVE INR 6,400"
              direct="/Uttrakhand"
              image={uttrakhand}
            />

            <Card
              title="Manali | A Himalayan Heaven"
              duration="4 Days and 3 Nights"
              rating="4.8/5"
              cut_price="INR 69,099"
              curr_price="₹ 59,099"
              save="SAVE INR 10,000"
              direct="/Manali3n4d"
              image={manali}
            />

            <Card
              title="Gujarat | Monument of Pride"
              duration="4 Days and 3 Nights"
              rating="4.8/5"
              cut_price="INR 23,199"
              curr_price="₹ 16,499"
              save="SAVE INR 6,700"
              direct="/Gujarat3n4d"
              image={gujarat}
            />

            <Card
              title="Bangkok & Pattaya | A Vibrant Thai Adventure"
              duration="5 Days and 4 Nights"
              rating="4.8/5"
              cut_price="INR 25,699"
              curr_price="₹ 19,999"
              save="SAVE INR 5,700"
              direct="/Thailand5d4n"
              image={thailand4n5dS}
            />

            <Card
              title="Phuket & Krabi | Experience Best of Southern Thailand"
              duration="6 Days and 5 Nights"
              rating="4.8/5"
              cut_price="INR 36,999"
              curr_price="₹ 29,999"
              save="SAVE INR 7,000"
              direct="/Thailand6d5n"
              image={thailand5n6ds}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
