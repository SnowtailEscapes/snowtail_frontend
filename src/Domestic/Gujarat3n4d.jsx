import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Large from "../assets/LargeImages/gujarat2.webp";
import Small from "../assets/CardImages/gujarat1.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Gujarat3n4d")
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
        <title>Gujarat Tour</title>
        <meta
          name="description"
          content="Experience the diverse beauty of Gujarat with our exclusive tours. Explore the historic sites of Ahmedabad, the white desert of Kutch, the temples of Somnath, the wildlife of Gir National Park, the beaches of Diu, and the heritage of Vadodara. Book your Gujarat tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Gujarat tour, Ahmedabad, Kutch, Somnath temple, Gir National Park, Diu beaches, Vadodara heritage, Gujarat tourism, Gujarat travel, Gujarat holiday packages"
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
