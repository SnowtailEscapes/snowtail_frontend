import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Switzerland5n6d")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);


import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";
import large from "../../public/images/Large/swit.webp";
import small from "../../public/images/card/swit.webp";


export default function Switzerland5n6d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Switzerland Tour</title>
        <meta
          name="description"
          content="Discover the breathtaking beauty of Switzerland with our exclusive tours. Explore the picturesque city of Zurich, the serene lakes of Lucerne, the stunning alpine scenery of Interlaken, and the charming villages of Zermatt. Book your Switzerland tour now for an unforgettable adventure in the heart of Europe!"
        />
        <meta
          name="keywords"
          content="Switzerland tour, Zurich, Lucerne, Interlaken, Zermatt, Switzerland tourism, Switzerland travel, Switzerland holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section
          className={`${a.section} ${a.Switzerland} ${a.mobile} ${a.window}`}
          data-aos="zoom-in"
        >
          <ItineraryImage
            small={small}
            large={large}
          />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
