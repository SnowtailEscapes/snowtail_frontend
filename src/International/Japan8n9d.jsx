import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar.jsx"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Japan.jsx")
);
const Contact2 = lazy(() => import("../components/Contact2.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop.jsx")
);

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage.jsx";
import { Helmet } from "react-helmet";

export default function Japan() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Japan Tour</title>
        <meta
          name="description"
          content="Experience the unique blend of traditional and modern culture in Japan with our exclusive tours. Discover the historic temples of Kyoto, the bustling streets of Tokyo, the natural beauty of Mount Fuji, and the cultural heritage of Osaka. Book your Japan tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Japan tour, Tokyo, Kyoto, Mount Fuji, Osaka, Japan tourism, Japan travel, Japan holiday packages"
        />
      </Helmet>


      <Suspense fallback={<div>Loading...</div>}>
        <section
          className={`${a.Vietnam9n10d} ${a.mobile} ${a.window}`}
          data-aos="zoom-in"
        >
          <Navbar />
          <ItineraryImage small='https://snowtailescapes.com/images/card/japan1.webp' large='https://snowtailescapes.com/images/Large/japan1.webp' />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
