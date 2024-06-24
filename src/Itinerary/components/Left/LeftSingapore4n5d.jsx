import { useEffect, lazy, Suspense } from "react";
import banner from "../../../assets/Banner/Singapore_banner.webp";


import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Confirmation = lazy(() => import("../Common/Confirmation.jsx"));
const Cancellation = lazy(() => import("../Common/Cancellation.jsx"));
const SingaporeAccordion = lazy(() =>
  import("../Accordions/AccordionsSingapore4n5d.jsx")
);
const Common = lazy(() => import("../Common/Top.jsx"));
const Map = lazy(() => import("../Common/Map.jsx"));
const Vietnam = lazy(() => import("../Inclusion/Singapore4n5d.jsx"));
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
            place="Singapore"
            title="Singapore Escapes: A Journey through the Vibrant Lion City"
            location1="Singapore"
            time="4N/5D"
          />
        </Suspense>

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Embark on an unforgettable journey to Singapore, where every moment
            is an adventure waiting to be explored. From the captivating
            nocturnal wonders of Night Safari to the futuristic marvels of
            Gardens by the Bay, and the thrilling escapades in Universal
            Studios, this meticulously crafted itinerary promises a whirlwind of
            excitement and discovery. Immerse yourself in the vibrant culture,
            iconic landmarks, and unparalleled beauty of this dynamic
            city-state. Get ready to create timeless memories that will linger
            long after your journey ends.
          </p>
          <div>
            <ul>
              <li>Pick up - Changi International Airport (SIN)</li>
              <li>Drop - Changi International Airport (SIN)</li>
              <li>Country - Singapore</li>
              <li>Duration - 4N/5D</li>
              <li>Best Season - March to October</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <SingaporeAccordion />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Vietnam />
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
