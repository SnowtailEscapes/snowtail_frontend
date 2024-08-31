import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/Gujarat_banner.webp";

import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import RajasthanAccordion from "../../Accordions/Domestic/Gujarat3n4d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Gujarat3n4d from "../../Inclusion/Domestic/Gujarat3n4d.jsx";
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
          place="Vadodara"
          title="Monument of pride"
          location1="GUJARAT"
          time="3N/4D"
          rating={4.8}
          reviews={405}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Vadodara is a census town in Narmada district in the Indian state of
            Gujarat. The town is best known as the location of the Statue of
            Unity, the tallest statue in the world. The town is also home to the
            Ekta Nagar railway station.
          </p>
          <div>
            <ul>
              <li>Pick up - Vadodara</li>
              <li>Drop - Gujarat</li>
              <li>Duration - 3N/4D</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <RajasthanAccordion />

        <Gujarat3n4d />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745364.6428356115!2d67.09185781841748!3d23.54750838340713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1717994779994!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
