import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import favicon from '../../public/NewLogos/4.svg';

import Aos from "aos";
import "aos/dist/aos.css";
import large from "../../public/Domestic/meghalaya.webp";


import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Meghalaya5n6d")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

export default function Meghalaya() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Meghalaya Tour</title>
        <meta
          name="description"
          content="Discover the natural wonders of Meghalaya with our exclusive tours. Explore the living root bridges of Cherrapunji, the crystal-clear waters of Dawki, the scenic beauty of Shillong, and the lush green valleys of Mawsynram. Book your Meghalaya tour now for an unforgettable experience in the Abode of Clouds!"
        />
        <meta
          name="keywords"
          content="Meghalaya tour, Cherrapunji, living root bridges, Dawki, Shillong, Mawsynram, Meghalaya tourism, Meghalaya travel, Meghalaya holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://snowtailescapes.com/images/card/meghalaya.webp' large={large} />
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
