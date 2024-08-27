import React, { useEffect } from "react";
import banner from "../../../assets/Banner/Almaty_banner.webp";

import Confirmation from "../Common/Confirmation.jsx";
import Cancellation from "../Common/Cancellation.jsx";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../Accordions/AccordionsAlmaty.jsx";
import Common from "../Common/Top.jsx";
import Map from "../Common/Map.jsx";
import Inclusion from "../Inclusion/Almaty.jsx";
import KnowBeforeYouGoDomestic from "../Common/Know_Before_you_go.jsx";

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
          place="Kazakhstan"
          title="Almaty : A Central Asian Gem"
          location1="Almaty"
          time="4N/5D"
          rating={4.2}
        reviews={168}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Almaty, Kazakhstan's largest metropolis, is set in the foothills of
            the Trans-Ili Alatau mountains. It served as the country's capital
            until 1997 and remains Kazakhstan's trading and cultural hub.
            Landmarks include the Central State Museum, displaying thousands of
            historic Kazakh artefacts. In the centre is Panfilov Park, home to
            the bright-yellow towers of Zenkov Cathedral, a tsarist-era Russian
            Orthodox church.
          </p>
          <div>
            <ul>
              <li>Pick up - Almaty Airport</li>
              <li>Drop - Almaty Airport</li>
              <li>Country - Kazakhstan</li>
              <li>Duration - 4N/5D</li>
              <li>Best Season - november to february</li>
              <li>Destination for- Couples/Friends/ Family</li>
            </ul>
          </div>
        </div>

        <Accordion />

        <Inclusion />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313778.801566026!2d76.29670694584436!3d43.264848526687274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2sAlmaty%2C%20Kazakhstan!5e1!3m2!1sen!2sin!4v1718791437284!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
