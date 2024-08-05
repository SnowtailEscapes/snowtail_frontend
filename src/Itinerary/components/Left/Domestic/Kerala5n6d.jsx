import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/Kerala_banner.webp";

import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "../../Accordions/Domestic/Kerala5n6d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Inclusion from "../../Inclusion/Domestic/Kerala5n6d.jsx";
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
          place="Kerala"
          title="Experience God’s Own Country"
          location1="Kerala"
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
            Kerala, a state on India's tropical Malabar Coast, has nearly 600km
            of Arabian Sea shoreline. It's known for its palm-lined beaches and
            backwaters, a network of canals. Inland are the Western Ghats,
            mountains whose slopes support tea, coffee and spice plantations as
            well as wildlife. National parks like Eravikulam and Periyar, plus
            Wayanad and other sanctuaries, are home to elephants, langur monkeys
            and tigers.
          </p>
          <div>
            <ul>
              <li>Pick up - TRIVANDRUM</li>
              <li>Drop -  KOCHI</li>
              <li>STATE - Kerala</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season - March to June and October to December</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Accordion />

        <Inclusion />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481777.5254166853!2d74.6639910970605!3d9.808934131487549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1718000302692!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
