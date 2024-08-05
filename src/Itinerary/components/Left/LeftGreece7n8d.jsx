import React, { useEffect } from "react";
import banner from "../../../assets/Banner/Greece_banner.webp";


import Confirmation from "../Common/Confirmation.jsx";
import Cancellation from "../Common/Cancellation";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GreeceAccordion from "../Accordions/AccordionGreece7n8d.jsx";
import Common from "../Common/Top.jsx";
import Map from "../Common/Map.jsx";
import Greece from "../Inclusion/Greece7n8d.jsx";
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
          place="Athens/Mykonos/Santorini"
          title="Greece Odyssey: An 8-Day Escape"
          location1="Greece"
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
            Embark on an unforgettable journey through the ancient wonders and
            picturesque landscapes of Greece. From the iconic Acropolis in
            Athens to the breathtaking sunsets of Santorini, immerse yourself in
            the rich history and natural beauty of this Mediterranean gem. Join
            us on this escapade and discover the jewels of Greece
          </p>
          <div>
            <ul>
              <li>Pick up - Athens International Airport (ATH)</li>
              <li>Drop - Athens International Airport </li>
              <li>Country - Greece</li>
              <li>Duration - 7N/8D</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <GreeceAccordion />

        <Greece />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602730.4116510306!2d17.047169676321055!3d40.06419771818628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b4ac711716c63%3A0x363a1775dc9a2d1d!2sGreece!5e0!3m2!1sen!2sin!4v1717956632093!5m2!1sen!2sin" />
        <KnowBeforeYouGo />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
