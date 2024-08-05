import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Large from "../assets/LargeImages/uttrakhand.webp";

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage.jsx";
import { Helmet } from "react-helmet";
// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Uttrakhand")
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
        <title>Uttarakhand Tour</title>
        <meta
          name="description"
          content="Experience the serene beauty of Uttarakhand with our exclusive tours. Visit the spiritual sites of Rishikesh and Haridwar, the scenic hill station of Nainital, the majestic mountains of Mussoorie, and the wildlife of Jim Corbett National Park. Book your Uttarakhand tour now for a rejuvenating journey!"
        />
        <meta
          name="keywords"
          content="Uttarakhand tour, Rishikesh, Haridwar, Nainital, Mussoorie, Jim Corbett National Park, Uttarakhand tourism, Uttarakhand travel, Uttarakhand holiday packages"
        />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/ytd5dytykzlpy6orblbl' large={Large} />
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
