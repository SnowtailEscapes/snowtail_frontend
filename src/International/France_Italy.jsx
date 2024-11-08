import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() => import("../Itinerary/components/Tourmain/France_Italy"));
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() => import("../Itinerary/components/ScrollToTop"));


import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";
import large from "../../public/images/Large/france.webp";
import small from "../../public/images/card/France.webp";

export default function Singapore6n7d() {
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>France and Italy Tour</title>
    <meta
        name="description"
        content="Explore the romance and elegance of France with our exclusive tours. Discover the iconic Eiffel Tower in Paris, the stunning lavender fields of Provence, the historic castles of the Loire Valley, and the glamorous beaches of the French Riviera. Book your France tour now for an unforgettable experience!"
    />
    <meta
        name="keywords"
        content="France tour, Paris, Eiffel Tower, Provence, Loire Valley, French Riviera, France tourism, France travel, France holiday packages , Italy tour, Rome, Venice, Florence, Amalfi Coast, Italy tourism, Italy travel, Italy holiday packages"
    />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

</Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <section className={`${a.section} ${a.France}`} data-aos="zoom-in">
        <ItineraryImage small={small} large={large}/>

        </section>
        <Tourmain />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}
