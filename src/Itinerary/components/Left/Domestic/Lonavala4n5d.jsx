import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/Andaman_banner.avif";
import "../../../../styles/about.css";
import { useSelector } from "react-redux";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GujaratAccordion from "../../Accordions/Domestic/Lonavala4n5d.jsx";
import Common from "../../Common/Top.jsx";
import Gujarat4n5d from "../../Inclusion/Domestic/Andaman.jsx";

export default function Left() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <>
      <div className={`${a.tour_left} {isDarkMode ? 'dark-mode' : 'hehe'}`}>
        <Common
          place="Mumbai"
          title="Lonavala Unplugged: Experience the Beauty of the Western Ghats"
          location1="Lonavala"
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
            Lonavala is a hill station surrounded by green valleys in western
            India near Mumbai. The Karla Caves and the Bhaja Caves are ancient
            Buddhist shrines carved out of the rock. They feature massive
            pillars and intricate relief sculptures. South of the Bhaja Caves
            sits the imposing Lohagad Fort, with its 4 gates. West of here is
            Bhushi Dam, where water overflows onto a set of steps during the
            rainy season.
          </p>
          <p>
          Imagicaa is a 130-acre theme park in Khopoli, Raigad District, Maharashtra, India. It is owned by Imagicaa World Entertainment Ltd. Imagicaa is listed on the National Stock Exchange and Bombay Stock Exchange. 
          </p>
          <div>
            <ul>
              <li>Pick up - Mumbai Railway Station / Airport</li>
              <li>Drop - Pune Airport </li>
              <li>Duration - 4N/5D</li>
              <li>Best Season - november to february</li>
              <li>Destination for- Couples/Friends/ Family</li>
            </ul>
          </div>
        </div>

        <GujaratAccordion />

        <Gujarat4n5d />
      </div>
    </>
  );
}
