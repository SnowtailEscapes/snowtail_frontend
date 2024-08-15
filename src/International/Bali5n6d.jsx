import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Bali5n6d")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);


import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";
import large from "../../public/images/Large/bali2.webp";
import small from "../../public/images/card/bali2.webp"

export default function Bali6d5n() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Bali Tour</title>
    <meta
        name="description"
        content="Experience the tropical paradise of Bali with our exclusive tours. Relax on the pristine beaches of Kuta, explore the cultural heart of Ubud, visit the stunning temples of Tanah Lot and Uluwatu, and enjoy the vibrant nightlife of Seminyak. Book your Bali tour now for an unforgettable getaway!"
    />
    <meta
        name="keywords"
        content="Bali tour, Kuta, Ubud, Tanah Lot, Uluwatu, Seminyak, Bali tourism, Bali travel, Bali holiday packages"
    />
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
