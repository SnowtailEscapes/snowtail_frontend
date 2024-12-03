import React, { useEffect, useMemo, useState } from "react";
import International from "./International";
import Navbar from "../Navbar";
import "../../styles/International.css";
import Footer from "../Footer";
import InternationalTablet from "./tabletView";
import TabletView from "../Cards/cardMobile";
import Mview from "../DomesticCards/MobileCards";
import { internationalPackages } from "../../constants/packages";

// Import your images here

export default function AllInternational() {
  const [screenSize, setScreenSize] = useState("large");
  const [searchQuery, setSearchQuery] = useState(""); // Add search state
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1100) {
        setScreenSize("tablet");
      } else {
        setScreenSize("large");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const filtered = internationalPackages.filter(
      (tour) =>
        tour.location &&
        (tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || tour.location.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredTours(filtered);
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      {screenSize === "mobile" && (
        <>
          <div className="flex justify-center mt-20 md:mt-28 md:p-5 p-5">
            <div className="w-full md:w-3/4">
              <h1 className="text-[26px] md:text-3xl font-lora font-semibold text-center mb-4 mt-4">International Tour Adventures</h1>

              <div className="flex justify-center mb-4">
                <label className="input input-bordered flex items-center gap-2 md:w-4/5">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    className="min-w-full text-black1"
                    placeholder="Search"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {filteredTours.map((tour) => (
                <Mview
                  key={tour.to}
                  to={tour.to}
                  title={tour.title}
                  price={tour.price}
                  location={tour.location}
                  duration={tour.duration}
                  image={tour.image}
                />
              ))}
            </div>
          </div>
        </>
      )}
      {screenSize === "large" && (
        <>
          <div className="flex justify-center">
            <div className="mt-20 md:mt-28 md:p-5">
              <h1 className="text-[26px] md:text-3xl font-lora font-semibold text-center mb-4">International Tour Adventures</h1>

              <div className="flex justify-center mb-4">
                <label className="input input-bordered flex items-center gap-2 md:w-4/5">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    className="min-w-full text-black1"
                    placeholder="Search"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {filteredTours.map((tour) => (
                <International
                  key={tour.direct}
                  to={tour.direct}
                  title={tour.title}
                  price={tour.curr_price}
                  location={tour.location}
                  duration={tour.duration}
                  image={tour.image}
                />
              ))}
            </div>
          </div>
        </>
      )}
      {screenSize === "tablet" && (
        <>
          <div className="flex mt-32 justify-center">
            <div className="w-full max-w-screen-md">
              {" "}
              {/* Added width constraints */}
              <h1 className="text-[26px] md:text-3xl font-lora font-semibold text-center mb-4">International Tour Adventures</h1>
              <div className="flex justify-center mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    className="min-w-full text-black1"
                    placeholder="Search"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                {filteredTours.map((tour) => (
                  <InternationalTablet
                    key={tour.to}
                    to={tour.to}
                    title={tour.title}
                    price={tour.price}
                    location={tour.location}
                    duration={tour.duration}
                    image={tour.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
