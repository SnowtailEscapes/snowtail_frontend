import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const Tourmain = lazy(() =>
    import("../Itinerary/components/Tourmain/TourmainPhilipenes")
);
const Contact2 = lazy(() => import("../components/Contact2"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollToTopButton = lazy(() =>
    import("../Itinerary/components/ScrollToTop")
);

import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";
import { Helmet } from "react-helmet";

export default function Philipenes() {
    useEffect(() => {
        Aos.init({
            duration: 1300,
        });
    }, []);

    return (
        <div>
            <Helmet>
                <title>Philippines Tour</title>
                <meta
                    name="description"
                    content="Experience the stunning beauty and rich culture of the Philippines with our exclusive tours. Discover the pristine beaches of Boracay, the historic city of Manila, the breathtaking landscapes of Palawan, and the vibrant festivals of Cebu. Book your Philippines tour now for an unforgettable adventure!"
                />
                <meta
                    name="keywords"
                    content="Philippines tour, Boracay, Manila, Palawan, Cebu, Philippines tourism, Philippines travel, Philippines holiday packages"
                />
            </Helmet>


            <Suspense fallback={<div>Loading...</div>}>
                <section
                    className={`${a.Thailand9d8n} ${a.mobile} ${a.window}`}
                    data-aos="zoom-in"
                >
                    <Navbar />
                    <ItineraryImage small='https://snowtailescapes.com/images/card/philipenes.webp' large='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/thailand' />
                </section>
                <Tourmain />
                <Contact2 />
                <Footer />
                <ScrollToTopButton />
            </Suspense>
        </div>
    );
}
