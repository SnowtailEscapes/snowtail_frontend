import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/ThailandTourmain8n9d")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

import large from "../../public/images/Large/thailand3.webp";
import small from "../../public/images/card/thailand8n9ds.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Thailand8n9d() {
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
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section
          className={`${a.Thailand9d8n} ${a.mobile} ${a.window}`}
          data-aos="zoom-in"
        >
          <Navbar />
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
