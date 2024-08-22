import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

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
import large from "../../public/images/Large/australia.webp";
import small from "../../public/images/card/australia.webp"

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
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage
            small={small}
            large={large}
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
