import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Singapore_Malaysia")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);
import large from "../../public/images/Large/SM.webp";
import small from "../../public/images/card/SMs.webp";

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Singapore6n7d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Malaysia Tour</title>
        <meta
          name="description"
          content="Experience the diverse beauty of Malaysia with our exclusive tours. Discover the vibrant city of Kuala Lumpur, the pristine beaches of Langkawi, the cultural heritage of Penang, and the lush rainforests of Borneo. Book your Malaysia tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Malaysia tour, Kuala Lumpur, Langkawi, Penang, Borneo, Malaysia tourism, Malaysia travel, Malaysia holiday packages.Singapore tour, Marina Bay Sands, Gardens by the Bay, Chinatown, Universal Studios, Singapore tourism, Singapore travel, Singapore holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section className={`${a.section} ${a.SM}`} data-aos="zoom-in">
          <ItineraryImage small={small} large={large} />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
