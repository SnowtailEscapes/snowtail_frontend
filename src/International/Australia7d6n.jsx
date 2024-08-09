import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Australia7d6n")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Australia() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Australia Tour</title>
        <meta
          name="description"
          content="Explore the diverse landscapes and vibrant cities of Australia with our exclusive tours. Discover the iconic Sydney Opera House, the Great Barrier Reef, the stunning Outback, and the cultural hub of Melbourne. Book your Australia tour now for an unforgettable adventure down under!"
        />
        <meta
          name="keywords"
          content="Australia tour, Sydney Opera House, Great Barrier Reef, Outback, Melbourne, Australia tourism, Australia travel, Australia holiday packages"
        />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage
            small="https://snowtailescapes.com/images/card/australia.webp"
            large="https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/g54f4lpdeosyje2fvbqn"
          />
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
