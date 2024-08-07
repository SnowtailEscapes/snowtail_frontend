import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage.jsx";
import { Helmet } from "react-helmet";
import large from "../../public/Domestic/rajasthan1.webp";


// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/RajasthanTourmain.jsx")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

export default function Rajasthan() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Rajasthan Tour</title>
        <meta
          name="description"
          content="Explore the majestic beauty of Rajasthan with our exclusive tours. Discover the rich cultural heritage of Jaipur, the stunning palaces of Udaipur, the vibrant markets of Jodhpur, the golden sands of Jaisalmer, the serene lakes of Pushkar, and the wildlife of Ranthambore. Book your Rajasthan tour now for an unforgettable experience!"
        />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/sajzabk69brdin5l2i9c' large={large} />
          <Navbar />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
