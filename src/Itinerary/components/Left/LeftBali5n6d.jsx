import React, { useEffect } from "react";
import banner from "../../../assets/Banner/Bali_banner.webp";


import Confirmation from "../Common/Confirmation.jsx";
import Cancellation from "../Common/Cancellation.jsx";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import BaliAccordion from "../Accordions/AccordionsBali5n6d.jsx";
import Common from "../Common/Top.jsx";
import Map from "../Common/Map.jsx";
import Bali from "../Inclusion/Bali5n6d.jsx";
import KnowBeforeYouGo from "../Common/Know_Before_you_go.jsx";

export default function Left() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className={a.tour_left}>
        <Common
          place="Ubud & Kuta"
          title="Luxurious 6-Day Bali Honeymoon Escape: Kuta and Ubud Delights"
          location1="Bali"
          time="5N/6D"
          rating={3.5}
        reviews={250}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Embark on an unforgettable journey to Bali, the island of Gods,
            where every moment is drenched in romance and adventure. Experience
            the perfect blend of luxury, tranquility, and excitement as you
            explore the enchanting landscapes of Kuta and Ubud. From pristine
            beaches to majestic waterfalls, from thrilling water sports to
            serene temple visits, this 6-day honeymoon tour promises to create
            cherished memories that will last a lifetime.
          </p>
          <div>
            <ul>
              <li>Pick up - Ngurah Rai International Airport</li>
              <li>Drop - Ngurah Rai International Airport</li>
              <li>Country - Indonesia</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season - March to October</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <BaliAccordion />

        <Bali />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d708592.495143186!2d114.81272358787932!3d-8.451433779793806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1717923805383!5m2!1sen!2sin" />
        <KnowBeforeYouGo />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
