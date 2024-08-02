import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/Singapore4n5d"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));

// Import images
import Singapore4n5dLarge from "../assets/LargeImages/singapore6n7dB.webp";
import Singapore4n5dSmall from "../assets/CardImages/singapore4n5ds.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Singapore4n5d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Singapore Tour</title>
    <meta
        name="description"
        content="Experience the vibrant city of Singapore with our exclusive tours. Explore the iconic Marina Bay Sands, the lush Gardens by the Bay, the bustling Chinatown, and the thrilling Universal Studios. Book your Singapore tour now for an unforgettable urban adventure!"
    />
    <meta
        name="keywords"
        content="Singapore tour, Marina Bay Sands, Gardens by the Bay, Chinatown, Universal Studios, Singapore tourism, Singapore travel, Singapore holiday packages"
    />
    
</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section className={`${a.section} ${a.Singapore4n5d}`} data-aos="zoom-in">
        <ItineraryImage small='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/dicuyywnzshvd48cqssh' large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/jlvzholzkmxa3zj5ydow' />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
