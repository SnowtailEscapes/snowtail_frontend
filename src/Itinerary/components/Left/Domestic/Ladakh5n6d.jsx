import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/ladakh_banner.webp";


import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../../Accordions/Domestic//Ladakh5n6d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Inclusion from "../../Inclusion/Domestic/Ladakh5n6d.jsx";
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
          place="Ladakh"
          title="Thrilling Leh Ladakh"
          location1="Ladakh"
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
            Snow Capped peaks, clear blue skies, barren mountains with
            meandering rivers, Ladakh is picturesque! It's not only known for
            its scenic beauty but also for some of the most difficult
            treks.Ladakh is home to exotic wildlife including snow leopards,
            Himalayan brown bears, etc. Hemis National Park, Changthang Cold
            Desert Wildlife Sanctuary, Karakoram Wildlife Sanctuary are
            protected wildlife areas of Ladakh.
          </p>
          <div>
            <ul>
              <li>Pick up - Leh airport(IXL)</li>
              <li>Drop - Leh airport(IXL)</li>
              <li>UT - Ladakh</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season - March to July</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Accordion />

        <Inclusion />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148006.5269754906!2d73.74314832019734!3d34.063802801780014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1717997580992!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
