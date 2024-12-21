import React, { lazy, Suspense, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";

import Aos from "aos";
import "aos/dist/aos.css";

import a from "../../styles/Images.module.css";
import tourcss from "./styles/Tourmain.module.css";
import { ToursData } from "../../constants/pageData";
import { Navigate, useLocation, useParams } from "react-router-dom";
import ItineraryImage from "../../Itinerary/components/Common/ItineraryImage";
import TourRight from "./TourRight.jsx";

const Navbar = lazy(() => import("../../components/Navbar"));
const TourLeft = lazy(() => import("./TourLeft.jsx"));
const Contact2 = lazy(() => import("../../components/Contact2"));
const Footer = lazy(() => import("../../components/Footer"));

function PackageDetails() {
  const { packageName } = useParams();

  const packageData = useMemo(() => {
    if (!packageName) return;
    return ToursData.find((page) => page.id === packageName);
  }, [packageName]);

  if (!packageData) {
    return <Navigate to="/404" />;
  }

  useEffect(() => {
    Aos.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      {packageData.helmet && (
        <Helmet>
          <title>{packageData.helmet.title}</title>
          <meta name="description" content={packageData.helmet.description} />
          <link rel="icon" type="image/png" href={packageData.helmet.icon} sizes="16x16" />
        </Helmet>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <section className={a.section} data-aos="zoom-in">
          <ItineraryImage small={packageData.itineraryImage.small} large={packageData.itineraryImage.large} />
          <Navbar />
        </section>
        <div className={tourcss.tourmain}>
          <TourLeft data={packageData.tourData.leftSide} />
          <TourRight data={packageData.tourData.rightSide} />
        </div>
        <Contact2 />
        <Footer />
      </Suspense>
    </div>
  );
}

export default PackageDetails;
