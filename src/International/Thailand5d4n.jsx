import React, { useEffect, lazy, Suspense, useState } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchItinerary } from "../redux/slice/itinerarySlice";
import { Helmet } from "react-helmet";
import favicon from '../../public/NewLogos/4.svg';

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
import large from "../../public/images/Large/thailand2.webp";
import small from "../../public/images/card/thailand4n5dS.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";

const TestItinerary = () => {
  const [itinerary, setItinerary] = useState({});
  const dispatch = useDispatch();

  const { itinerary: itineraries, isLoading, isError } = useSelector((state) => state.itinerary);

  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
    dispatch(fetchItinerary());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(itineraries) && itineraries.length > 32) {
      const it = itineraries[32]; // Safely accessing the 33rd item
      setItinerary(it);
    } else {
      console.log('Itinerary not found or insufficient itinerary.');
    }
  }, [itineraries]);

  useEffect(() => {
    console.log(itinerary); // Logs the updated itinerary
  }, [itinerary]);

  if(isError){
    console.log("error occured");
  }
  if(isLoading){
    console.log("Loading")
  }

  return (
    <div>
      <Helmet>
        <title>Thailand</title>
        <meta
          name="description"
          content="Discover the vibrant culture and stunning landscapes of Thailand with our exclusive tours. Explore the bustling city of Bangkok, the serene beaches of Phuket, the historic temples of Chiang Mai, and the vibrant nightlife of Pattaya. Book your Thailand tour now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Thailand tour, Bangkok, Phuket, Chiang Mai, Pattaya, Thailand tourism, Thailand travel, Thailand holiday packages"
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <section
          className={`${a.section} ${a.Thailand5d4n} ${a.mobile} ${a.window}`}
          itinerary-aos="zoom-in"
        >
          <Navbar />
          <ItineraryImage small={small} large={large} />
        </section>
        <Tourmain itinerary={itinerary} />
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}

export default TestItinerary;
