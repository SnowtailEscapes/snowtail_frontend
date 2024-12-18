import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Almaty")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

// Import images
import large from "../../public/images/Large/almaty.webp";
import small from "../../public/images/card/almaty.webp"

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
    <title>Almaty Tour</title>
    <meta
        name="description"
        content="Experience the cultural and natural beauty of Almaty with our exclusive tours. Discover the scenic landscapes of the Almaty Mountains, the vibrant Green Bazaar, the historic Zenkov Cathedral, and the stunning Big Almaty Lake. Book your Almaty tour now for an unforgettable adventure in Kazakhstan!"
    />
    <meta
        name="keywords"
        content="Almaty tour, Almaty Mountains, Green Bazaar, Zenkov Cathedral, Big Almaty Lake, Almaty tourism, Almaty travel, Almaty holiday packages"
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
