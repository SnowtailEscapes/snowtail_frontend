import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Large from "../assets/LargeImages/k3.avif";
import Small from "../assets/CardImages/kasol.avif";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Kasol2n3d")
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
        <title>Himachal Pradesh Tour</title>
        <meta
          name="description"
          content="Explore the scenic beauty of Himachal Pradesh with our exclusive tours. Visit the charming hill stations of Shimla and Manali, the tranquil valleys of Kullu, the spiritual sites of Dharamshala, and the picturesque landscapes of Dalhousie. Book your Himachal Pradesh tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Himachal Pradesh tour, Shimla, Manali, Kullu, Dharamshala, Dalhousie, Himachal tourism, Himachal travel, Himachal holiday packages"
        />
        <meta
          name="description"
          content="Experience the charming hill station of Shimla with our exclusive tours. Enjoy the scenic views from The Ridge, visit the historic Christ Church, stroll down Mall Road, and explore the lush greenery of Kufri. Book your Shimla tour now for a refreshing mountain getaway!"
        />
        <meta
          name="keywords"
          content="Shimla tour, The Ridge, Christ Church, Mall Road, Kufri, Shimla tourism, Shimla travel, Shimla holiday packages"
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
