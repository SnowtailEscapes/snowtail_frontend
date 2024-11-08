import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/Dubai5n6d"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));


import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";
import large from "../../public/images/Large/dubai2.webp";
import small from "../../public/images/card/Dubai5n6dS.webp";

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
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section className={`${a.section} ${a.Dubai5n6d}`} data-aos="zoom-in">
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
