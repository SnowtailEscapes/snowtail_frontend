import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";



import Aos from "aos";
import "aos/dist/aos.css";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";

import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/Domestic/Ladakh5n6d"));
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
    <title>Ladakh Tour</title>
    <meta
        name="description"
        content="Explore the breathtaking landscapes of Ladakh with our exclusive tours. Discover the serene Pangong Lake, the stunning Nubra Valley, the ancient monasteries of Hemis and Thiksey, and the vibrant culture of Leh. Book your Ladakh tour now for an unforgettable adventure in the Himalayas!"
    />
    <meta
        name="keywords"
        content="Ladakh tour, Pangong Lake, Nubra Valley, Hemis Monastery, Thiksey Monastery, Leh, Ladakh tourism, Ladakh travel, Ladakh holiday packages"
    />
</Helmet>
      <Suspense fallback={<div>Loading...</div>}>
      <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/vbqfi1hyv63r0w845akt' large={''} />
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
