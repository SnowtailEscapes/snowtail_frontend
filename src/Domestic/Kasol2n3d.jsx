import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import favicon from '../../public/NewLogos/4.svg';

import Aos from "aos";
import "aos/dist/aos.css";


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

import large from "../../public/Domestic/himachal.webp";


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
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>



      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small="https://res.cloudinary.com/dxfact9vg/image/upload/v1739189712/kasol_njbjwz.webp" large={large} />
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
