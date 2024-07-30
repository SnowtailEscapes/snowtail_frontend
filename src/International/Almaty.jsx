import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
  import("../Itinerary/components/Tourmain/Almaty")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
  import("../Itinerary/components/ScrollToTop")
);

// Import images
import Large from "../assets/LargeImages/almaty.avif";
import Small from "../assets/CardImages/almaty.jpg";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";
import { useDispatch , useSelector } from "react-redux";
import { fetchItinerary } from "../redux/slice/itinerarySlice";

export default function Almaty() {
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
    dispatch(fetchItinerary());
  }, [dispatch]);

  const { data: itineraries, isLoading, isError } = useSelector((state) => state.itinerary);

  // Assuming itineraries is an array and we're taking the first item
  const itinerary = Array.isArray(itineraries) && itineraries.length > 0 ? itineraries[0] : null;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !itinerary || !itinerary.prices) {
    return <p>Error loading itineraries.</p>;
  }

  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
    <Helmet>
    <title>Almaty Tour</title>
    <meta
        name="description"
        content="Experience the cultural and natural beauty of Almaty with our exclusive tours. Discover the scenic landscapes of the Almaty Mountains, the vibrant Green Bazaar, the historic Zenkov Cathedral, and the stunning Big Almaty Lake. Book your Almaty tour now for an unforgettable adventure in Kazakhstan!"
    />
    <meta
        name="keywords"
        content="Almaty tour, Almaty Mountains, Green Bazaar, Zenkov Cathedral, Big Almaty Lake, Almaty tourism, Almaty travel, Almaty holiday packages"
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
