import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/Andaman_banner.avif";


import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GujaratAccordion from "../../Accordions/Domestic/Andaman.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Gujarat4n5d from "../../Inclusion/Domestic/Andaman.jsx";
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
          place="ANDAMAN & NICOBAR"
          title="Discover Andaman: A Journey to Serenity"
          location1="ANDAMAN & NICOBAR"
          time="4N/5D"
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
          Welcome to the Andaman Islands, an oasis of tranquility nestled in the azure waters of the Bay of Bengal. With its pristine white-sand beaches, lush tropical rainforests, and vibrant coral reefs teeming with marine life, Andaman offers an unparalleled escape into nature's embrace. Explore the rich cultural tapestry woven by the indigenous Andaman Islanders, adding depth to your journey of discovery.
          </p>
          <div>
            <ul>
              <li>Pick up -  Port Blair</li>
              <li>Drop -  Port Blair</li>
              <li>Duration - 4N/5D</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <GujaratAccordion />

        <Gujarat4n5d />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745364.6428356115!2d67.09185781841748!3d23.54750838340713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1717994779994!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
