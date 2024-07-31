import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Malaysia")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

// Import images
import MalaysiaLarge from "../assets/LargeImages/MalaysiaB.webp";
import MalaysiaSmall from "../assets/CardImages/MalaysiaS.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Singapore6n7d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Malaysia Tour</title>
        <meta
          name="description"
          content="Experience the diverse beauty of Malaysia with our exclusive tours. Discover the vibrant city of Kuala Lumpur, the pristine beaches of Langkawi, the cultural heritage of Penang, and the lush rainforests of Borneo. Book your Malaysia tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Malaysia tour, Kuala Lumpur, Langkawi, Penang, Borneo, Malaysia tourism, Malaysia travel, Malaysia holiday packages"
        />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section className={`${a.section} ${a.Malaysia}`} data-aos="zoom-in">
          <ItineraryImage small={MalaysiaSmall} large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/vcubnuaegraa1petumnu' />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
