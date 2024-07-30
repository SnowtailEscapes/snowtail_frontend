import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/ThailandTourmain5n6d"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));

// Import images
import Thailand5n6dLarge from "../assets/LargeImages/thailand5n6db.webp";
import Thailand5n6dSmall from "../assets/CardImages/thailand5n6ds.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Thailand5n6d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Thailand Tour</title>
    <meta
        name="description"
        content="Discover the vibrant culture and stunning landscapes of Thailand with our exclusive tours. Explore the bustling city of Bangkok, the serene beaches of Phuket, the historic temples of Chiang Mai, and the vibrant nightlife of Pattaya. Book your Thailand tour now for an unforgettable adventure!"
    />
    <meta
        name="keywords"
        content="Thailand tour, Bangkok, Phuket, Chiang Mai, Pattaya, Thailand tourism, Thailand travel, Thailand holiday packages"
    />
</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={`${a.Thailand6d5n} ${a.mobile} ${a.window}`} data-aos="zoom-in">
          <Navbar />
          <ItineraryImage small={Thailand5n6dSmall} large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/thailand5n6d' />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
