import React, { useEffect, lazy, Suspense } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchItinerary } from "../redux/slice/itinerarySlice";
import { Helmet } from "react-helmet";

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
import Thailand5d4nLarge from "../assets/LargeImages/thailand4n5db.webp";
import Thailand5d4nSmall from "../assets/CardImages/thailand4n5dS.webp";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";

const TestItinerary = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
    dispatch(fetchItinerary());
  }, [dispatch]);

  const { data: itineraries, isLoading, isError } = useSelector((state) => state.itinerary);

  // Assuming itineraries is an array and we're taking the first item
  const itinerary = Array.isArray(itineraries) && itineraries.length > 0 ? itineraries[33] : null;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !itinerary || !itinerary.prices) {
    return <p>Error loading itineraries.</p>;
  }

  return (
    <div>
      <Helmet>
        <title>{itinerary.place}</title>
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
          <ItineraryImage small={Thailand5d4nSmall} large={Thailand5d4nLarge} />
        </section>
        <Tourmain itinerary={itinerary}/>
        <Contact2 />
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
}

export default TestItinerary;
