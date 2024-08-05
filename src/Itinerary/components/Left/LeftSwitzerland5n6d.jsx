import React, { useEffect } from "react";
import banner from "../../../assets/Banner/Switzerland_banner.webp";

import Confirmation from "../Common/Confirmation.jsx";
import Cancellation from "../Common/Cancellation";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ThailandAccordion from "../Accordions/AccordionsSwitzerland5n6d.jsx";
import Common from "../Common/Top.jsx";
import Map from "../Common/Map.jsx";
import Inclusion from "../Common/Inclusion.jsx";
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
          place="Zurich"
          title="Swiss Splendor: A Glimpse of Switzerland Escape"
          location1="Switzerland"
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
            There's a place that strings a distant chord of fascination within,
            a place that came straight out of an artist’s imagination,
            Switzerland is indeed a land of bountiful beauty. The snow-covered
            Swiss Alps and the scenic lakes amidst the mountainous backdrops are
            something that would captivate your inner being. The city of Zurich,
            famed for being Europe’s largest financial centre, is the gateway to
            the fantasy land of white-washed mountains and snowy escapades. When
            you venture out for Mount Titlis on Rotair, you will step into the
            world of Narnia to which Lucy opened the wardrobe door. Your
            astonishment doesn’t cease here, wait till you discover Lucerne, a
            city graced with medieval architecture, snuggled on the edge of Lake
            Lucerne amidst a snow-capped mountain.
          </p>
          <div>
            <ul>
              <li>Pick up - Zurich Airport (ZRH)</li>
              <li>Drop - Zurich Airport (ZRH)</li>
              <li>Country - Switzerland</li>
              <li>Duration - 5N/6D</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <ThailandAccordion />

        <Inclusion />

        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840026.2850829337!2d5.825423314210931!3d46.83227272481184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2sin!4v1717948478801!5m2!1sen!2sin"/>
        <KnowBeforeYouGo />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
