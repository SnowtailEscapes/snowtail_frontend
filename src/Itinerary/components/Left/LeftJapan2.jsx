import { useEffect, lazy, Suspense } from "react";
import banner from "../../../assets/Banner/Vietnam_banner.webp";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Confirmation = lazy(() => import("../Common/Confirmation.jsx"));
const Cancellation = lazy(() => import("../Common/Cancellation.jsx"));
const Accordion = lazy(() => import("../Accordions/AccordionJapan2.jsx"));
const Common = lazy(() => import("../Common/Top.jsx"));
const Map = lazy(() => import("../Common/Map.jsx"));
const Vietnam = lazy(() => import("../Inclusion/Japan2.jsx"));
const KnowBeforeYouGo = lazy(() => import("../Common/Know_Before_you_go"));

export default function Left() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className={a.tour_left}>
        <Suspense fallback={<div>Loading...</div>}>
          <Common
            place="Kyoto"
            title="Discover the Wonders of Japan: A Cultural and Scenic Adventure"
            location1="Japan"
            time="5N/6D"
            rating={4.8}
            reviews={405}
          />
        </Suspense>

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="japan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
          Japan is a land of timeless beauty, rich history, and vibrant culture. Immerse yourself in its stunning cherry blossoms, majestic castles, and architectural marvels. Enjoy breathtaking views of Mount Fuji and Lake Ashi on the Hakone Ropeway, visit the awe-inspiring Great Buddha Hall at Todaiji, marvel at the golden splendor of Kinkaku-ji in Kyoto, and experience the futuristic allure of Odaiba District. This journey promises an unforgettable experience filled with scenic vistas and cultural treasures.
          </p>
          <div>
            <ul>
              <li>Pick up - Tokyo Airport</li>
              <li>Drop - Osaka Airport</li>
              <li>Country - Japan</li>
              <li>Duration - 5N/6D</li>
              <li>Best Season - Spring (March to May) and Fall (September to November)</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller/Bullet Train</li>
            </ul>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Accordion />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Vietnam />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424555.4152032218!2d134.9677490803636!3d35.31376343399649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sin!4v1722551111111!5m2!1sen!2sin" />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <KnowBeforeYouGo />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Confirmation />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Cancellation />
        </Suspense>
      </div>
    </>
  );
}
