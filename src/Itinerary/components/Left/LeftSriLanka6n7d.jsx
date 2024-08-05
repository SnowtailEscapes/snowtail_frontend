import { useEffect, lazy, Suspense } from "react";
import banner from "../../../assets/Banner/SriLanka_banner.webp";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Confirmation = lazy(() => import("../Common/Confirmation.jsx"));
const Cancellation = lazy(() => import("../Common/Cancellation.jsx"));
const SingaporeAccordion = lazy(() =>
  import("../Accordions/AccordionsSriLanka6n7d.jsx")
);
const Common = lazy(() => import("../Common/Top.jsx"));
const Map = lazy(() => import("../Common/Map.jsx"));
const Srilanka = lazy(() => import("../Inclusion/SriLanka6n7d.jsx"));
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
            place="COLOMBO/KANDY/NUWARA ELIYA/BENTOTA"
            title="Sri Lanka a Jewel Of Indian Ocean"
            location1="Srilanka"
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
            Sri Lanka, historically known as Ceylon and officially the
            Democratic Socialist Republic of Sri Lanka, is an island country in
            South Asia. It lies in the Indian Ocean, southwest of the Bay of
            Bengal, separated from the Indian peninsula by the Gulf of Mannar
            and the Palk Strait. Sri Lanka has numerous tourist attractions with
            areas of natural scenic beauty, primarily including mountainous
            terrains, agricultural landscapes, waterfalls, places with diverse
            climatic conditions, reservoirs (wewas), and rivers.
          </p>
          <div>
            <ul>
              <li>Pick up - Bandaranaike International Airport (CMB)</li>
              <li>Drop - Bandaranaike International Airport (CMB)</li>
              <li>Country - Srilanka</li>
              <li>Duration - 6N/7D</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <SingaporeAccordion />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Srilanka/>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047293.698467318!2d78.06344803498658!3d7.849431825759648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sin!4v1717957488546!5m2!1sen!2sin" />
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
