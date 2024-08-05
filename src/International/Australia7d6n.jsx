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
    <title>Almaty Tour</title>
    <meta
        name="description"
        content="Experience the cultural and natural beauty of Almaty with our exclusive tours. Discover the scenic landscapes of the Almaty Mountains, the vibrant Green Bazaar, the historic Zenkov Cathedral, and the stunning Big Almaty Lake. Book your Almaty tour now for an unforgettable adventure in Kazakhstan!"
    />
    <meta
        name="keywords"
        content="Almaty tour, Almaty Mountains, Green Bazaar, Zenkov Cathedral, Big Almaty Lake, Almaty tourism, Almaty travel, Almaty holiday packages"
    />
</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/r1iqblqgi5qaszmdftqb' large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/g54f4lpdeosyje2fvbqn' />
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
