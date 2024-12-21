import React, { useEffect } from "react";
import banner from "../../../assets/Banner/Thailand_banner.webp";


import Confirmation from "../Common/Confirmation.jsx";
import Cancellation from "../Common/Cancellation.jsx";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ThailandAccordion from "../Accordions/AccordionsThailand5d4n.jsx";
import Common from "../Common/Top.jsx";
import Map from "../Common/Map.jsx";
import ThailandInclusion4n5d from "../Inclusion/Thailand4n5d.jsx";
import KnowBeforeYouGo from "../Common/Know_Before_you_go.jsx";


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
          place="BANGKOK & PATTAYA"
          title="Explore Bangkok & Pattaya: A Vibrant Thai Adventure"
          location1="Thailand"
          time="5N/4D"
          rating={4.8}
          reviews={405}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Banner/yluv3lm8seiggyzhsi3s' alt="thailand" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Discover the breathtaking beauty of Southern Thailand with our
            meticulously crafted tour, blending the allure of Phuket's vibrant
            beaches with the pristine charm of Krabi's stunning landscapes.
            Immerse yourself in a journey filled with adventure, relaxation, and
            cultural exploration, as we unveil the treasures of these two iconic
            destinations.Phuket, fondly known as the Pearl of the Andaman,
            beckons travelers with its azure waters, powdery beaches, and
            endless adventures. Meanwhile, Krabi boasts emerald blue seas,
            towering limestone cliffs, and exhilarating activities for
            thrill-seekers. Embark on a thrilling escapade through Thailand's
            most captivating locales, where each moment is a new discovery.
          </p>
          <div>
            <ul>
              <li>Pick up - Phuket Airport</li>
              <li>Drop - Phuket Airport</li>
              <li>Country - Thailand</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season - September to March</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <ThailandAccordion />

        <ThailandInclusion4n5d />

        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873184.119188394!2d95.72919870811018!3d13.761432089506735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sin!4v1717781350838!5m2!1sen!2sin" />
        <KnowBeforeYouGo/>

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
