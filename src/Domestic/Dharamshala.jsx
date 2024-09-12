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
  import("../Itinerary/components/Tourmain/Domestic/Dharamshala")
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
        <title>Dharamshala Tour</title>
        <meta
          name="description"
          content="Explore the serene beauty of Dharamshala with our exclusive tours. Discover the Tibetan culture, visit the Dalai Lama's temple, explore lush tea gardens, and enjoy breathtaking views of the Himalayas. Book your Dharamshala tour now for a peaceful mountain retreat!"
        />
        <meta
          name="keywords"
          content="Dharamshala tour, Dharamshala tourism, Dharamshala travel, Tibetan culture, Dalai Lama Temple, tea gardens, Himalayas, Dharamshala holiday packages"
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
          <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34919.27415471184!2d76.28161547762909!3d32.22164295421069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b50df65bd7311%3A0x3e08bdb100c6dc10!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1726076176452!5m2!1sen!2sin" />
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
