import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/SriLanka6n7d")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

import large from "../../public/images/Large/lanka.webp";
import small from "../../public/images/card/lanka.webp";

export default function Singapore6n7d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Sri Lanka Tour</title>
        <meta
          name="description"
          content="Experience the tropical paradise of Sri Lanka with our exclusive tours. Discover the historic sites of Colombo, the lush tea plantations of Nuwara Eliya, the stunning beaches of Mirissa, and the ancient ruins of Sigiriya. Book your Sri Lanka tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Sri Lanka tour, Colombo, Nuwara Eliya, Mirissa, Sigiriya, Sri Lanka tourism, Sri Lanka travel, Sri Lanka holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section
          className={`${a.section} ${a.SriLanka} ${a.mobile} ${a.window}`}
          data-aos="zoom-in"
        >
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
