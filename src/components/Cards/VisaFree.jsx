import React, { useEffect, useState } from "react";
import Card from "./Card";
import Malaysias from "../../assets/CardImages/MalaysiaS.webp";
import Thailand5n6ds from "../../assets/CardImages/thailand5n6ds.webp";
import SriLanka from "../../assets/CardImages/SriLankaS.webp";
import almaty from "../../assets/CardImages/almaty.jpg";
import nepal from "../../assets/CardImages/nepalS.webp";

export default function VisaFree() {
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
      <h2 className="text-black1 font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
        Visa Free Countries from India
      </h2>
      {isLargeScreen && (
        <>
          <div className="carousel p-10 pb-0  relative w-full">
            <div
              id="VisaFree1"
              className="carousel-item w-full flex justify-center md:gap-5 ml-14"
            >
              <Card
                name="Nepal"
                duration="4 Days & 3 Nights"
                rating="4.8/5"
                cut_price="INR 39,500"
                curr_price="₹ 33,999"
                save="SAVE INR 5,501"
                direct="/Nepal"
                image={nepal}
              />

              <Card
                name="Malaysia"
                duration="7 Days & 6 Nights"
                rating="4.8/5"
                cut_price="INR 39,500"
                curr_price="₹ 33,999"
                save="SAVE INR 5,501"
                direct="/Malaysia"
                image={Malaysias}
              />

              <Card
                name="Thailand"
                duration="6 Days & 5 Nights"
                rating="4.8/5"
                cut_price="INR 36,999"
                curr_price="₹ 29,999"
                save="SAVE INR 7,000"
                direct="/Thailand6d5n"
                image={Thailand5n6ds}
              />
            </div>
            <div
              id="VisaFree2"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                name="Almaty "
                duration="6 Days & 5 Nights"
                rating="4.8/5"
                cut_price="INR 41,699"
              curr_price="₹ 34,699"
              save="SAVE INR 7,000"
                direct="/Almaty"
                image={almaty}
              />

              <Card
                name="Sri Lanka | Jewel Of Indian Ocean"
                duration="7 Days & 6 Nights"
                rating="4.8/5"
                cut_price="INR 44,500"
                curr_price="₹ 38,699"
                save="SAVE INR 5,801"
                direct="/SriLanka6n7d"
                image={SriLanka}
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#VisaFree1" className="btn btn-xs">
              1
            </a>
            <a href="#VisaFree2" className="btn btn-xs">
              2
            </a>
          </div>
        </>
      )}
      {
        isMobileScreen || isTabletScreen ? (
          <>
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">
            {/* <Card
          name="Bhutan"
          duration="6 Days and 5 Nights"
          rating="4.8/5"
          cut_price="INR 69,099"
          curr_price="₹ 59,099"
          save="SAVE INR 10,000"
          direct="/Bhutan"
        /> */}

            <Card
              name="Nepal"
              duration="4 Days & 3 Nights"
              rating="4.8/5"
              cut_price="INR 39,500"
                curr_price="₹ 33,999"
                save="SAVE INR 5,501"
              direct="/Nepal"
              image={nepal}
            />

            <Card
              name="Malaysia"
              duration="7 Days & 6 Nights"
              rating="4.8/5"
              cut_price="INR 39,500"
              curr_price="₹ 33,999"
              save="SAVE INR 5,501"
              direct="/Malaysia"
              image={Malaysias}
            />

            <Card
              name="Thailand"
              duration="6 Days & 5 Nights"
              rating="4.8/5"
              cut_price="INR 36,999"
              curr_price="₹ 29,999"
              save="SAVE INR 7,000"
              direct="/Thailand6d5n"
              image={Thailand5n6ds}
            />

            <Card
              name="Almaty "
              duration="6 Days & 5 Nights"
              rating="4.8/5"
              cut_price="INR 41,699"
              curr_price="₹ 34,699"
              save="SAVE INR 7,000"
              direct="/Almaty"
              image={almaty}
            />

            <Card
              name="Sri Lanka | Jewel Of Indian Ocean"
              duration="7 Days & 6 Nights"
              rating="4.8/5"
              cut_price="INR 44,500"
              curr_price="₹ 38,699"
              save="SAVE INR 5,801"
              direct="/SriLanka6n7d"
              image={SriLanka}
            />

            {/* <Card
          name="Qatar"
          duration="7 Days and 6 Nights"
          rating="4.8/5"
          cut_price="INR 69,099"
          curr_price="₹ 59,099"
          save="SAVE INR 10,000"
          direct="/Qatar"
        /> */}
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
