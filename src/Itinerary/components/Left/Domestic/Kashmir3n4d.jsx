import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/Kashmir_banner.webp";

import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../../Accordions/Domestic/Kashmir3n4d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Inclusion from "../../Inclusion/Domestic/Kashmir3n4d.jsx";
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
          place="KASHMIR"
          title="Experience Paradise On Earth"
          location1="Kashmir"
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
            The Union Territory of Jammu and Kashmir is a great tourist
            destination. Picturesque and enchanting, Kashmir is cradled high in
            the lofty green Himalayas and hailed all over the world for its
            incredible natural beauty. Surrounded by mountain peaks, lush green
            valleys, glistening lakes, temples and spectacular Mughal-era
            gardens, it has inspired poets through centuries. Kashmir is
            crisscrossed by chinar tree-lined roads and quaint wooden bridges;
            and is home to bustling bazaars, sufi shrines and forts. Add to
            this, the charms of flavourful Kashmiri cuisine and apples and
            walnuts from the lush orchards surrounding it.
          </p>
          <div>
            <ul>
              <li>Pick up - Srinagar airport</li>
              <li>Drop - Srinagar airport</li>
              <li>UT - Jammu & Kashmir</li>
              <li>Duration - 3N/4D</li>
              <li>Best Season - March to June or December to February</li>
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
