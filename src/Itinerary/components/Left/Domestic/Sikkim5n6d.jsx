import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/sikkim_banner.webp";


import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../../Accordions/Domestic/Sikkim5n6d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Inclusion from "../../Inclusion/Domestic/Sikkim5n6d.jsx";
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
          place="Sikkim & Darjeeling"
          title="Gangtok & Darjeeling The Abode of Clouds"
          location1="Sikkim"
          time="5N/6D"
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Gangtok is the capital of the mountainous northern Indian state of
            Sikkim. Established as a Buddhist pilgrimage site in the 1840s, the
            city became capital of an independent monarchy after British rule
            ended, but joined India in 1975. Today, it remains a Tibetan
            Buddhist center and a base for hikers organising permits and
            transport for treks through Sikkim’s Himalayan mountain ranges.
            Darjeeling is a town in India's West Bengal state, in the Himalayan
            foothills. Once a summer resort for the British Raj elite, it
            remains the terminus of the narrow-gauge Darjeeling Himalayan
            Railway, or “Toy Train,” completed in 1881. It's famed for the
            distinctive black tea grown on plantations that dot its surrounding
            slopes. Its backdrop is Mt. Kanchenjunga, among the world’s highest
            peaks.
          </p>
          <div>
            <ul>
              <li>Pick up - New Jalpaiguri(NJP) / Bagdogra Airport(IXB)</li>
              <li>Drop - New Jalpaiguri(NJP) / Bagdogra Airport(IXB)</li>
              <li>STATE - Sikkim</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season - March to June and October to December</li>
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
