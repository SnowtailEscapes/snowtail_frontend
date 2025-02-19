import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import favicon from '../../public/NewLogos/4.svg';

import Aos from "aos";
import "aos/dist/aos.css";
import large from "../../public/Domestic/sikkim.webp";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Sikkim5n6d")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);


import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Rajasthan() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Sikkim Tour</title>
        <meta
          name="description"
          content="Discover the pristine beauty of Sikkim with our exclusive tours. Explore the vibrant capital Gangtok, the serene Tsomgo Lake, the stunning landscapes of Pelling, and the spiritual charm of Rumtek Monastery. Book your Sikkim tour now for an unforgettable experience!"
        />
        <meta
          name="keywords"
          content="Sikkim tour, Gangtok, Tsomgo Lake, Pelling, Rumtek Monastery, Sikkim tourism, Sikkim travel, Sikkim holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://snowtailescapes.com/images/card/sikkim.web' large={large} />
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
