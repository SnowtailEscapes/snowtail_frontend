import React, { useEffect } from "react";

import rajasthan from "../../assets/rajasthan.png";
import banner from "../../../assets/Banner/Thailand_banner.webp";

import Map from "../Common/Map";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ThailandAccordion from "../Accordions/AccordionsThailand4n5d";
import Common from "../Common/Top";
import Inclusion from "../Common/Inclusion";
import Confirmation from "../Common/Confirmation";
import Cancellation from "../Common/Cancellation";
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
          place="Bangkok & Pattaya"
          title="Explore Bangkok & Pattaya: A Vibrant Thai Adventure"
          location1="Thailand"
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Discover the dynamic allure of Bangkok, Thailand's capital, and
            Pattaya, the lively party hub. Bangkok, also known as Krung Thep or
            the 'City of Angels,' boasts a rich tapestry of history and culture,
            from glittering shrines to bustling street markets. Meanwhile,
            Pattaya offers endless fun with its vibrant nightlife and scenic
            beaches, making it an ideal destination for those seeking excitement
            and relaxation.
          </p>
          <div>
            <ul>
              <li>Pick up - Bangkok Airport</li>
              <li>Drop - Bangkok Airport</li>
              <li>Country - Thailand</li>
              <li>Duration - 4N/5D</li>
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
