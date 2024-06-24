import { useEffect } from "react";
import banner from "../../../assets/Banner/Dubai_banner.webp";

import Confirmation from "../Common/Confirmation.jsx";
import Cancellation from "../Common/Cancellation";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import BaliAccordion from "../Accordions/AccordionsDubai5n6d.jsx";
import Common from "../Common/Top.jsx";
import Map from "../Common/Map.jsx";
import SriLanka from "../Inclusion/Dubai5n6d.jsx";
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
          place="Dubai & Abu Dhabi"
          title="Experience Dubai: A Journey of Luxury and Wonder"
          location1="Dubai"
          time="5N/6D"
        />

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Dubai is a city and emirate in the United Arab Emirates known for
            luxury shopping, ultramodern architecture and a lively nightlife
            scene. Burj Khalifa, an 830m-tall tower, dominates the
            skyscraper-filled skyline. Beautiful beaches, record-breaking
            attractions and experiences like no other – Dubai is the place to be
            in 2024. It's no wonder we are the first city to be named
            Tripadvisor's #1 Top Destination in the World for three years
            running. Let's explore!
          </p>
          <div>
            <ul>
              <li>Pick up - Dubai International Airport (DXB)</li>
              <li>Drop - Dubai International Airport (DXB)</li>
              <li>Country - Dubai</li>
              <li>Duration - 5N/6D</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <BaliAccordion />

        <SriLanka />
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461993.23475102126!2d54.82091899694217!3d25.22607243354853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1717958237019!5m2!1sen!2sin" />
        <KnowBeforeYouGo />

        <Confirmation />

        <Cancellation />
      </div>
    </>
  );
}
