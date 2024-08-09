import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/Vietnam5n4d"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));


import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Vietnam4n5d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Vietnam Tour</title>
    <meta
        name="description"
        content="Explore the rich cultural heritage and breathtaking landscapes of Vietnam with our exclusive tours. Discover the historic sites of Hanoi, the stunning Halong Bay, the ancient town of Hoi An, and the bustling city of Ho Chi Minh. Book your Vietnam tour now for an unforgettable adventure!"
    />
    <meta
        name="keywords"
        content="Vietnam tour, Hanoi, Halong Bay, Hoi An, Ho Chi Minh, Vietnam tourism, Vietnam travel, Vietnam holiday packages"
    />
</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={`${a.Vietnam4n5d} ${a.mobile} ${a.window}`} data-aos="zoom-in">
          <Navbar />
          <ItineraryImage small='https://snowtailescapes.com/images/card/vietnam4n5ds.webp' large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/km2p7ynbnkxpzxzevjnw' />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
