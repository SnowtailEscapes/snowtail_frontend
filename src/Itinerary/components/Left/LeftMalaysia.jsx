import { useEffect, lazy, Suspense } from "react";
import banner from "../../../assets/Banner/Malaysia_banner.webp";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Confirmation = lazy(() => import("../Common/Confirmation.jsx"));
const Cancellation = lazy(() => import("../Common/Cancellation.jsx"));
const MalaysiaAccordion = lazy(() =>
  import("../Accordions/AccordionsMalaysia.jsx")
);
const Common = lazy(() => import("../Common/Top.jsx"));
const Map = lazy(() => import("../Common/Map.jsx"));
const Singapore = lazy(() => import("../Inclusion/Malaysia.jsx"));
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
            place="Kuala Lumpur/Penang/Langkawi"
            title="Malaysian Marvels - Kuala Lumpur, Penang & Langkawi Escape"
            location1=" Malaysia"
            time="6N/7D"
            rating={4.8}
          reviews={405}
          />
        </Suspense>

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
          Embark on an unforgettable journey through Malaysia's diverse tapestry, where vibrant cultures, breathtaking landscapes, and architectural wonders await. From the bustling streets of Kuala Lumpur to the tranquil shores of Langkawi, immerse yourself in the rich tapestry of Malaysia's beauty and heritage. With its tagline "Malaysia Truly Asia," this tour promises an authentic and enriching holiday experience, where every moment is a vibrant celebration of Asia's cultural mosaic.
          </p>
          <div>
            <ul>
              <li>Pick up - Kuala Lumpur International Airport (KUL)</li>
              <li>Drop - Langkawi International Airport (LGK)</li>
              <li>Country - Malaysia</li>
              <li>Duration - 6N/7D</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <MalaysiaAccordion />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Singapore />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191838.52367478667!2d103.67146920745962!3d1.3598103203236274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sin!4v1717934305712!5m2!1sen!2sin" />
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
