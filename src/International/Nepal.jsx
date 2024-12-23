import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Nepal")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);
import large from "../../public/images/Large/nepal.webp";
import small from "../../public/images/card/nepal.webp";

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Almaty() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Nepal Tour</title>
    <meta
        name="description"
        content="Discover the natural beauty and cultural heritage of Nepal with our exclusive tours. Explore the historic sites of Kathmandu, the stunning landscapes of Pokhara, the majestic peaks of the Himalayas, and the spiritual ambiance of Lumbini. Book your Nepal tour now for an unforgettable adventure!"
    />
    <meta
        name="keywords"
        content="Nepal tour, Kathmandu, Pokhara, Himalayas, Lumbini, Nepal tourism, Nepal travel, Nepal holiday packages"
    />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small={small} large={large} />
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
