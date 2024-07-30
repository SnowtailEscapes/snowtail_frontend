import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/ThailandTourmain4n5d")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

// Import images
import test from "../assets/LargeImages/pataya.jpg";
import Thailand5d4nLarge from "../assets/LargeImages/thailand4n5db.webp";
import Thailand5d4nSmall from "../assets/CardImages/thailand4n5dS.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Thailand5d4n() {
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
        <section
          className={`${a.section} ${a.Thailand5d4n} ${a.mobile} ${a.window}`}
          data-aos="zoom-in"
        >
          <Navbar />
          <ItineraryImage small={Thailand5d4nSmall} large={test} />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
