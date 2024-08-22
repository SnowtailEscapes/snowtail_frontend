import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import favicon from '../../public/NewLogos/4.svg';

import Aos from "aos";
import "aos/dist/aos.css";
import large from "../../public/Domestic/rajasthan2.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage.jsx";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/Domestic/Rajasthan4n5d"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));

export default function Rajasthan() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Rajasthan Tour</title>
    <meta
        name="description"
        content="Explore the majestic beauty of Rajasthan with our exclusive tours. Discover the rich cultural heritage of Jaipur, the stunning palaces of Udaipur, the vibrant markets of Jodhpur, the golden sands of Jaisalmer, the serene lakes of Pushkar, and the wildlife of Ranthambore. Book your Rajasthan tour now for an unforgettable experience!"
    />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

</Helmet>
      <Suspense fallback={<div>Loading...</div>}>
      <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://snowtailescapes.com/images/card/rj2.webp' large={large} />
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
