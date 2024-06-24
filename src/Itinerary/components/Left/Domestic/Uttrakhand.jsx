import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/uttrakhand_banner.webp";


import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../../Accordions/Domestic/Uttrakhand.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Inclusion from "../../Inclusion/Domestic/Uttrakhand.jsx";
import KnowBeforeYouGoDomestic from "../../Common/Know_Before_you_go_domestic.jsx";

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
          place="Mussoorie & Rishikesh"
          title="Mussoorie & Rishikesh: A Journey to the Queen of Hills"
          location1="Uttarakhand"
          time="3N/4D"
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Nestled in the heart of Uttarakhand, Mussoorie stands tall as the
            "Queen of Hills", boasting breathtaking vistas and serene natural
            beauty. From its majestic snow-capped peaks to verdant forests
            teeming with life, Mussoorie offers a sanctuary for the soul amidst
            nature's bounty. Explore the tranquil retreats of Dhanaulti and
            Kanatal, and immerse yourself in the spiritual aura of Surkanda
            temple.
          </p>
          <div>
            <ul>
              <li>Pick up - Haridwar / Dehradun</li>
              <li>Drop - Haridwar / Dehradun</li>
              <li>STATE - Uttarakhand</li>
              <li>Duration - 3N/4D</li>
              <li>Best Season - April to August or October to February</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Accordion />

        <Inclusion />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103401.5147813885!2d76.3209976147134!3d30.13471888595164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909dcc202279c09%3A0x7c43b63689cc005!2sUttarakhand!5e0!3m2!1sen!2sin!4v1718017933278!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
