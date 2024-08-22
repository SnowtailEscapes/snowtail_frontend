import React, { lazy, Suspense, useEffect } from "react";
import a from "../styles/Images.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import favicon from '../../public/NewLogos/4.svg';

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
import large from "../../public/images/Large/philipenes.webp";
import small from "../../public/images/card/philipenes.webp";

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
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

            </Helmet>


            <Suspense fallback={<div>Loading...</div>}>
                <section
                    className={`${a.Thailand9d8n} ${a.mobile} ${a.window}`}
                    data-aos="zoom-in"
                >
                    <Navbar />
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
