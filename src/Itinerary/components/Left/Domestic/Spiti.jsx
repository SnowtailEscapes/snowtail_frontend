import React, { useEffect } from "react";
import banner from "../../../../assets/Banner/Andaman_banner.avif";
import "../../../../styles/about.css";
import { useSelector } from "react-redux";


import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GujaratAccordion from "../../Accordions/Domestic/Spiti.jsx";
import Common from "../../Common/Top.jsx";
import Gujarat4n5d from "../../Inclusion/Domestic/Spiti.jsx";

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
          place="Himachal Pradesh"
          title="Spiti Valley Expedition: The Land of Monasteries and Mystique"
          location1="Spiti"
          time="7N/8D"
          rating={4.8}
          reviews={405}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
          Spiti is a high-altitude region of the Himalayas, located in the north-eastern part of the northern Indian state of Himachal Pradesh. The name "Spiti" means "The middle land", i.e. the land between Tibet and India.
          </p>
         
          <div>
            <ul>
              <li>Pick up - Chandihgarh</li>
              <li>Drop - Manali</li>
              <li>Duration - 7N/8D</li>
              <li>Mode of transportation - Innova</li>
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
