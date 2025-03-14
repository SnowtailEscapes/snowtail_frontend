import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import large from "../../public/Domestic/himachal.webp";

import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Manali3n4d")
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
        <title>Manali Tour</title>
        <meta
          name="description"
          content="Experience the enchanting beauty of Manali with our exclusive tours. Explore the scenic Solang Valley, the historic Hadimba Temple, the picturesque Rohtang Pass, and the vibrant local markets. Book your Manali tour now for an unforgettable adventure in the Himalayas!"
        />
        <meta
          name="keywords"
          content="Manali tour, Solang Valley, Hadimba Temple, Rohtang Pass, Manali markets, Manali tourism, Manali travel, Manali holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://snowtailescapes.com/images/card/manali.webp' large={large} />
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
