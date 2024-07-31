import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/Dubai3n4d"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));

// Import images
import Dubai3n4dLarge from "../assets/LargeImages/dubai3n4d.webp";
import Dubai3n4dSmall from "../assets/CardImages/Dubai3n4dS.webp";
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
    <title>Dubai Tour</title>
    <meta
        name="description"
        content="Experience the luxury and modernity of Dubai with our exclusive tours. Explore the iconic Burj Khalifa, the stunning Palm Jumeirah, the vibrant Dubai Marina, and the thrilling desert safaris. Book your Dubai tour now for an unforgettable adventure in the UAE!"
    />
    <meta
        name="keywords"
        content="Dubai tour, Burj Khalifa, Palm Jumeirah, Dubai Marina, desert safari, Dubai tourism, Dubai travel, Dubai holiday packages"
    />
</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section className={`${a.section} ${a.Dubai3n4d}`} data-aos="zoom-in">
        <ItineraryImage small={Dubai3n4dSmall} large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/w4oh38wxebt4wcskawgr' />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
