import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import large from "../../public/Domestic/kerala.webp";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Kerala5n6d")
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
        <title>Kerala Tour</title>
        <meta
          name="description"
          content="Experience the natural beauty of Kerala with our exclusive tours. Enjoy the serene backwaters of Alleppey, the lush greenery of Munnar, the vibrant culture of Kochi, and the pristine beaches of Kovalam. Book your Kerala tour now for a memorable getaway!"
        />
        <meta
          name="keywords"
          content="Kerala tour, Alleppey backwaters, Munnar, Kochi, Kovalam, Kerala tourism, Kerala travel, Kerala holiday packages"
        />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small='https://snowtailescapes.com/images/card/kerala.webp' large={large} />
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
