import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/Greece7n8d"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));

// Import images
import Greece7n8dLarge from "../assets/LargeImages/Greece7n8dB.webp";
import Greece7n8dSmall from "../assets/CardImages/Greece7n8dS.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Bali6d5n() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Greece Tour</title>
    <meta
        name="description"
        content="Discover the ancient history and stunning islands of Greece with our exclusive tours. Explore the historic ruins of Athens, the beautiful beaches of Mykonos, the picturesque villages of Santorini, and the rich culture of Crete. Book your Greece tour now for an unforgettable Mediterranean adventure!"
    />
    <meta
        name="keywords"
        content="Greece tour, Athens, Mykonos, Santorini, Crete, Greece tourism, Greece travel, Greece holiday packages"
    />
</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section className={`${a.section} ${a.Greece}`} data-aos="zoom-in">
        <ItineraryImage small={Greece7n8dSmall} large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/m4lblg0y7suywzhsnlhl' />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
