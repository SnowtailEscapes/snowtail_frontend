import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import favicon from "../../public/NewLogos/4.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";
import { useSelector } from "react-redux";

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";
import large from "../../public/Domestic/andaman.webp";
import Map from "../Itinerary/components/Common/Map";
import KnowBeforeYouGoDomestic from "../Itinerary/components/Common/Know_Before_you_go_domestic";
import Confirmation from "../Itinerary/components/Common/Confirmation";
import Cancellation from "../Itinerary/components/Common/Cancellation";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Domestic/Spiti.jsx")
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
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={isDarkMode ? "dark-mode" : "hehe"}>
      <Helmet>
        <title>Spiti Valley Tour</title>
        <meta
          name="description"
          content="Explore the untouched beauty of Spiti Valley with our exclusive tours. Discover the ancient monasteries, picturesque villages, rugged mountains, and unique landscapes of this cold desert. Book your Spiti Valley tour now for an unforgettable Himalayan adventure!"
        />
        <meta
          name="keywords"
          content="Spiti Valley tour, Spiti tourism, Spiti travel, cold desert, Spiti holiday packages, monasteries, rugged mountains, Himalayan adventure"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage
            small="https://snowtailescapes.com/images/card/andaman.webp"
            large={large}
          />
          <Navbar />
        </section>
        <Tourmain />
        <div className="md:p-8 md:pt-0">
          <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672121.3018320061!2d77.16251953677128!3d32.283755480738336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3906b02628a3f95b%3A0xe4f5cd853a66f03a!2sSpiti%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1726078203006!5m2!1sen!2sin" />
          <KnowBeforeYouGoDomestic />

          <Confirmation />

          <Cancellation />
        </div>

        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
