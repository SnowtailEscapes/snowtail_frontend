import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/Himachal_banner.webp";


import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../../Accordions/Domestic/Kasol2n3d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Inclusion from "../../Inclusion/Domestic/Kasol2n3d.jsx";
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
          place=" Kasol"
          title="Land of Creamy Flavours"
          location1=" Kasol"
          time="2N/3D"
          rating={4.8}
          reviews={405}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Kasol is a hamlet in the Kullu district of the Indian state of
            Himachal Pradesh. It is situated in Parvati Valley, on the banks of
            the Parvati River between Bhuntar and Manikaran. It is located 30 km
            from Bhuntar, 3.5 km from Manikaran and 36 km from Kullu town, the
            district headquarters
          </p>
          <div>
            <ul>
              <li>Pick up - Delhi</li>
              <li>Drop - Delhi</li>
              <li>STATE - Himachal Pradesh</li>
              <li>Duration - 2N/3D</li>
              <li>Best Season - March to August or October to February</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Accordion />

        <Inclusion />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.1754997605562!2d77.31002389018708!3d32.0103594401084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045c4474aa31e9%3A0xf112d2e32b47949d!2sKasol%2C%20Himachal%20Pradesh%20175105!5e0!3m2!1sen!2sin!4v1718015046372!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
