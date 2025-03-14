import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import favicon from '../../public/NewLogos/4.svg';

import Aos from "aos";
import "aos/dist/aos.css";

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";
import large from "../../public/Domestic/gujarat.webp";


// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Gujarat4n5d")
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
        <title>Gujarat Tour</title>
        <meta
          name="description"
          content="Experience the diverse beauty of Gujarat with our exclusive tours. Explore the historic sites of Ahmedabad, the white desert of Kutch, the temples of Somnath, the wildlife of Gir National Park, the beaches of Diu, and the heritage of Vadodara. Book your Gujarat tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Gujarat tour, Ahmedabad, Kutch, Somnath temple, Gir National Park, Diu beaches, Vadodara heritage, Gujarat tourism, Gujarat travel, Gujarat holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/uyfvy28acv8ifdrkxh1w' large={large} />
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
