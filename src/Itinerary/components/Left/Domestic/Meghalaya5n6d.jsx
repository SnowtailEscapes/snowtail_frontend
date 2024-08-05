import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/meghalaya_banner.webp";


import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../../Accordions/Domestic/Meghalaya5n6d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Inclusion from "../../Inclusion/Domestic/Meghalaya5n6d.jsx";
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
          place="Meghalaya"
          title="Meghalaya - Discover The Magic"
          location1="Meghalaya"
          time="5N/6D"
          rating={4.8}
          reviews={405}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Meghalaya (Abode of Clouds in Sanskrit) is one of the seven
            North-Eastern states of India. Famous for its high rainfall,
            subtropical forests and biodiversity, it is abutted by Assam in the
            north and east and by Bangladesh in the south. The River Brahmaputra
            (or Luit as called locally) forms the border in the west.
          </p>
          <div>
            <ul>
              <li>Pick up - Guwahati Railway Station / Guwahati Airport(GAU)</li>
              <li>Drop -  Guwahati Railway Station / Guwahati Airport(GAU)</li>
              <li>STATE - Meghalaya</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season - October to April</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Accordion />

        <Inclusion />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803173.3437697932!2d86.58251458453967!3d27.809854155313793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0xa4c4b857c39b5a04!2sSikkim!5e0!3m2!1sen!2sin!4v1717998466373!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
