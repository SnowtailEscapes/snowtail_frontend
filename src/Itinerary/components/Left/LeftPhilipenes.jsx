import React, { useEffect } from "react";

import banner from "../../../assets/Banner/Thailand_banner.webp";


import Confirmation from "../Common/Confirmation.jsx";
import Cancellation from "../Common/Cancellation";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ThailandAccordion from "../Accordions/AccordionPhilipenes.jsx";
import Common from "../Common/Top.jsx";
import Map from "../Common/Map.jsx";
import Inclusion from "../Inclusion/Philipenes.jsx";
import KnowBeforeYouGo from "../Common/Know_Before_you_go";

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
          place="Manila"
          title="Discover the Wonders of the Philippines"
          location1="Philippines"
          time="7N/8D"
          rating={4.8}
          reviews={405}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
          Embark on an unforgettable journey to the Philippines, a Southeast Asian paradise comprising over 7,000 islands. Located in the western Pacific Ocean, this archipelago offers a blend of vibrant cities and serene natural beauty. The capital, Manila, along with the populous Quezon City, lies on the island of Luzon, while the second largest island, Mindanao, beckons in the southeast.
          </p>
          <div>
            <ul>
              <li>Pick up - Manila Airport</li>
              <li>Drop - Manila Airport</li>
              <li>Country - Philippines</li>
              <li>Duration - 7N/8D</li>
              <li>Best Season - December to April </li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <ThailandAccordion />

        <Inclusion />

        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16012996.416251173!2d111.91872999512385!3d11.521487375577241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sPhilippines!5e0!3m2!1sen!2sin!4v1734724556411!5m2!1sen!2sin" />
        <KnowBeforeYouGo/>

        <Confirmation />
        <Cancellation />
      </div>
    </>
  );
}
