import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

import Large from "../assets/LargeImages/k3.avif";
import Small from "../assets/CardImages/kashmir2.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Kashmir5n6d")
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
        <title>Kashmir Tour</title>
        <meta
          name="description"
          content="Discover the enchanting beauty of Kashmir with our exclusive tours. Enjoy the serene Dal Lake in Srinagar, the stunning landscapes of Gulmarg, the picturesque valleys of Pahalgam, and the majestic mountains of Sonmarg. Book your Kashmir tour now for a heavenly experience!"
        />
        <meta
          name="keywords"
          content="Kashmir tour, Srinagar, Dal Lake, Gulmarg, Pahalgam, Sonmarg, Kashmir tourism, Kashmir travel, Kashmir holiday packages"
        />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small={Small} large={Large} />
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
