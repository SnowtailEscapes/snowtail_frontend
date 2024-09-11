import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/Andaman_banner.avif";
import "../../../../styles/about.css";
import { useSelector } from "react-redux";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GujaratAccordion from "../../Accordions/Domestic/Dharamshala.jsx";
import Common from "../../Common/Top.jsx";
import Gujarat4n5d from "../../Inclusion/Domestic/Dharamshala.jsx";

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
          place="DHARAMSHALA"
          title="Unwind in Dharamshala: Peaceful Getaway in the Mountains"
          location1="DHARAMSHALA"
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
            Mcleodganj is a hill station near Dharamshala, popular among
            trekkers. Located in Kangra district, Mcleodganj's culture is a
            beautiful blend of Tibetan with some British influence. Mcleod Ganj
            is a beautiful town situated near upper Dharamsala. Nestled amidst
            majestic hills and lush greenery, this town is culturally blessed by
            a prominent Tibetan influence owing to the major settlement of
            Tibetans here. Himachal is the throne of a number of
            'mini-Switzerland's and Dalhousie is widely known to be one of them.
            Named after the British Governor-General of India (1848), Lord
            Dalhousie, this place remains a popular summer retreat mainly for
            the charming walks it offers around the pine-sheathed valleys with
            views of distant mountains. There are a few British-era
            architectural sights here worth visiting.
          </p>
          
          <div>
            <ul>
              <li>Pick up - Chandigarh</li>
              <li>Drop - Chandigarh </li>
              <li>State - Himachal</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season -  March to June or December to February</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/Traveller </li>
            </ul>
          </div>
        </div>

        <GujaratAccordion />

        <Gujarat4n5d />
      </div>
    </>
  );
}
