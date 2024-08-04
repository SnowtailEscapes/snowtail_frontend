import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Japan.jsx")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

// Import images
import Vietnam9n10dLarge from "../assets/LargeImages/vietnam9n10dB.webp";
import Vietnam9n10dSmall from "../assets/CardImages/vietnam9n10ds.webp";
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
        <title>Vietnam Tour</title>
        <meta
          name="description"
          content="Explore the rich cultural heritage and breathtaking landscapes of Vietnam with our exclusive tours. Discover the historic sites of Hanoi, the stunning Halong Bay, the ancient town of Hoi An, and the bustling city of Ho Chi Minh. Book your Vietnam tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Vietnam tour, Hanoi, Halong Bay, Hoi An, Ho Chi Minh, Vietnam tourism, Vietnam travel, Vietnam holiday packages"
        />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section
          className={`${a.Vietnam9n10d} ${a.mobile} ${a.window}`}
          data-aos="zoom-in"
        >
          <Navbar />
          <ItineraryImage small='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/sdjswz0cdnggtozkooq3' large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/wtjljprxslnhkbi4mvnt' />
        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
