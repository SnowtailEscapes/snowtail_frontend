import React, { useEffect } from "react";

import banner from "../../../assets/Banner/Thailand_banner.webp";


import Confirmation from "../Common/Confirmation.jsx";
import Cancellation from "../Common/Cancellation";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ThailandAccordion from "../Accordions/AccordionsThailand8n9d.jsx";
import Common from "../Common/Top.jsx";
import Map from "../Common/Map.jsx";
import Inclusion from "../Inclusion/Thailand8n9d.jsx";
import KnowBeforeYouGo from "../Common/Know_Before_you_go";

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
          place="Phuket/Krabi/Pattaya/Bangkok"
          title="Experience Jewels of Thailand"
          location1="Thailand"
          time="8N/9D"
          rating={4.8}
          reviews={405}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Embark on an unforgettable journey through the vibrant tapestry of
            Thailand, where every moment promises a new adventure. From the
            sun-kissed shores of Railay to the timeless allure of ancient
            relics, Thailand beckons with its enchanting blend of culture,
            cuisine, and captivating landscapes. Immerse yourself in the
            pulsating rhythm of its nightlife, savor the tantalizing flavors of
            Chiang Mai, and feel the adrenaline rush of unique water sports.
            Whether you're exploring the architectural marvels of Wat Pho and
            Wat Phra Kaew, unwinding on the pristine beaches of Phuket, or
            embarking on an exhilarating excursion to Phi Phi Island, this tour
            is crafted to delight every sense and create cherished memories in
            this tropical paradise.
          </p>
          <div>
            <ul>
              <li>Pick up - Phuket Airport</li>
              <li>Drop - Bangkok Airport</li>
              <li>Country - Thailand</li>
              <li>Duration - 8N/9D</li>
              <li>Best Season - September to March</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <ThailandAccordion />

        <Inclusion />

        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873184.119188394!2d95.72919870811018!3d13.761432089506735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sin!4v1717781350838!5m2!1sen!2sin" />
        <KnowBeforeYouGo/>

        <Confirmation />
        <Cancellation />
      </div>
    </>
  );
}
