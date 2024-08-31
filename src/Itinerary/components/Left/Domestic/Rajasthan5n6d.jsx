import React, { useEffect } from "react";
import rajasthan from "../../../assets/rajasthan.png";

import Confirmation from "../../Common/Confirmation.jsx";
import Cancellation from "../../Common/Cancellation.jsx";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import RajasthanAccordion from "../../Accordions/Domestic/Rajasthan5n6d.jsx";
import Common from "../../Common/Top.jsx";
import Map from "../../Common/Map.jsx";
import Rajasthan4n5d from "../../Inclusion/Domestic/Rajasthan4n5d.jsx";
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
          place="JAIPUR, UDAIPUR, KUMBHALGARH"
          title="Journey Of majesty"
          location1="RAJASTHAN"
          time="5N/6D"
          rating={4.8}
          reviews={405}
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={rajasthan} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Rajasthan is the jewel in India's crown. Take yourself and your
            loved ones to experience the best of this Imperial state as you
            drive through a varied countryside adorned with palaces, lakes and
            vast stretches of the Great Indian Desert. Taste the essence of rich
            heritage and culture on this tour to the Pink City of Jaipur and the
            City of Lakes - Udaipur. With a vibrant amalgamation of old and new,
            Jaipur retains its old-world charm with the heritage pockets all
            over the city like the Hawa Mahal, Albert Hall Museum, City Palace,
            and the rustic Amer fort that safely guards the city line. As you
            move towards Udaipur witness a brilliant kaleidoscope of narrow
            lanes flanked by bright stalls, gardens, lakes, palaces, and
            temples. Sit leisurely by the rippling lakes and splendid palaces of
            Udaipur with mesmerising views of Aravali in the backdrop.
          </p>
          <div>
            <ul>
              <li>Pick up - Jaipur</li>
              <li>Drop - Jaipur</li>
              <li>Country - Rajasthan</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season - September to March</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <RajasthanAccordion />

        <Rajasthan4n5d />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4930928.876481141!2d68.93366442884484!3d26.660916412844987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1717992385982!5m2!1sen!2sin" />
        <KnowBeforeYouGoDomestic />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
