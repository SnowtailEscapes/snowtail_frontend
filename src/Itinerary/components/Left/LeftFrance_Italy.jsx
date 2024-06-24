import { useEffect, lazy, Suspense } from "react";
import banner from "../../../assets/Banner/france_banner.webp";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Confirmation = lazy(() => import("../Common/Confirmation.jsx"));
const Cancellation = lazy(() => import("../Common/Cancellation.jsx"));
const FranceAccordion = lazy(() =>
  import("../Accordions/AccordionsFrance_Italy.jsx")
);
const Common = lazy(() => import("../Common/Top.jsx"));
const Map = lazy(() => import("../Common/Map.jsx"));
const Singapore = lazy(() => import("../Inclusion/France_Italy.jsx"));
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
            place="Paris & Rome"
            title="Experience the Best of Paris & Rome"
            location1="France & Italy"
            time="4N/5D"
          />
        </Suspense>

        <div className={a.left3} data-aos="zoom-in">
          <img src={banner} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Embark on an unforgettable journey through the captivating streets
            of Paris and the timeless beauty of Rome with our exclusive 5-day
            Italy & France Tour Package from India. From the iconic landmarks of
            Paris to the ancient wonders of Rome, immerse yourself in art,
            culture, and culinary delights on this enchanting adventure.
          </p>
          <div>
            <ul>
              <li>Pick up - Paris Charles de Gaulle Airport (CDG)</li>
              <li>Drop - Leonardo da Vinci–Fiumicino Airport (FCO)</li>
              <li>Country - France & Italy</li>
              <li>Duration - 4N/5D</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <FranceAccordion />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Singapore />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7047089.372847816!2d-2.377630735000689!3d44.45089980767583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2sin!4v1717956416303!5m2!1sen!2sin" />
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
