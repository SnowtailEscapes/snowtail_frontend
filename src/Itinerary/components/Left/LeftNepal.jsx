import { useEffect, lazy, Suspense } from "react";
import banner from "../../../assets/Banner/Nepal_banner.webp";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Confirmation = lazy(() => import("../Common/Confirmation.jsx"));
const Cancellation = lazy(() => import("../Common/Cancellation.jsx"));
const Accordion = lazy(() =>
  import("../Accordions/AccordionNepal.jsx")
);
const Common = lazy(() => import("../Common/Top.jsx"));
const Map = lazy(() => import("../Common/Map.jsx"));
const Singapore = lazy(() => import("../Inclusion/Nepal.jsx"));
const KnowBeforeYouGo = lazy(() => import("../Common/Know_Before_you_go.jsx"));

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
            place="Kathmandu"
            title="Malaysian Marvels - Kuala Lumpur, Penang & Langkawi Escape"
            location1="Nepal"
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
            Nepal is a mesmerizing landlocked gem in South Asia, cradled between
            the towering giants of China and India. This enchanting country is a
            dream destination for adventurers, offering the majestic Himalayas,
            crowned by the legendary Mount Everest, the highest peak on Earth.
            Immerse yourself in Nepal's vibrant cultural tapestry, where every
            corner bursts with colorful traditions, languages, and festive
            celebrations. Trek through its lush landscapes, encounter diverse
            wildlife, and soak in the serene beauty that makes Nepal a paradise
            for nature lovers and thrill-seekers alike. Your unforgettable
            adventure awaits in the heart of the Himalayas!
          </p>
          <div>
            <ul>
              <li>Pick up - Kathmandu AIRPORT </li>
              <li>Drop - Kathmandu AIRPORT </li>
              <li>Country - Nepal</li>
              <li>Duration - 5N/6D</li>
              <li>Destination for - Couples/Friends/ Family </li>
              <li>Mode of transportation - Air Conditioned Car </li>
            </ul>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Accordion />
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
