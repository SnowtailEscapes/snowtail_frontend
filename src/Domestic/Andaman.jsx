import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Large from "../assets/LargeImages/Andaman.avif";
import Small from "../assets/CardImages/andaman.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Andaman")
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
        <title>Andaman Tour</title>
        <meta
          name="description"
          content="Explore the tropical paradise of the Andaman Islands with our exclusive tours. Discover the pristine beaches of Havelock, the historical landmarks of Port Blair, the vibrant coral reefs of Neil Island, and the adventure sports of Baratang. Book your Andaman tour now for an island getaway!"
        />
        <meta
          name="keywords"
          content="Andaman tour, Havelock Island, Port Blair, Neil Island, Baratang, Andaman tourism, Andaman travel, Andaman holiday packages"
        />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small={Small} large={Large} />
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
