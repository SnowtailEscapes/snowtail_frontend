import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/shimla_banner.webp";

import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../../Accordions/Domestic/Shimla9n10d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Inclusion from "../../Inclusion/Domestic/Shimla9n10d.jsx";
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
          place="Shimla/Manali/Dharamshala/Dalhousie"
          title="Instagrammable Himachal"
          location1="Himachal Pradesh"
          time="9N/10D"
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Himachal Pradesh is a northern Indian state in the Himalayas. It's
            home to scenic mountain towns and resorts such as Dalhousie. Host to
            the Dalai Lama, Himachal Pradesh has a strong Tibetan presence. This
            is reflected in its Buddhist temples and monasteries, as well as its
            vibrant Tibetan New Year celebrations. The region is also well known
            for its trekking, climbing and skiing areas.
          </p>
          <div>
            <ul>
              <li>Pick up -  Delhi</li>
              <li>Drop -  Delhi</li>
              <li>State - Himachal Pradesh</li>
              <li>Duration - 9N/10D</li>
              <li>Best Season - March to August</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Accordion />

        <Inclusion />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54659.50425495141!2d77.10855171195576!3d31.103644200778653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1718003611508!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
