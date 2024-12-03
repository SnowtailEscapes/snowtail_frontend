import React, { Suspense, useEffect, useState } from "react";
import "../../styles/International.css";
import Domestic from "../InternationalCards/International";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Mview from "./MobileCards";
import Tablet from "../InternationalCards/tabletView";

import { useSelector } from "react-redux";
import { domesticPackages } from "../../constants/packages";

export default function AllDomestic() {
  const [screenSize, setScreenSize] = useState("large");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

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

  const handleSearch = (event) => {
    setSearchTerm(event?.target?.value)
  };

  useEffect(() => {
    setFilteredTours(
      domesticPackages.filter(
        (tour) =>
          tour.location &&
          (tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || tour.location.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      {screenSize === "large" && (
        <Suspense fallback={<p>loading...</p>}>
          <div className="flex justify-center ">
            <div className="mt-20 md:mt-28 md:p-5 items-center">
              <h1 className="text-center text-[26px] md:text-3xl font-lora font-semibold mb-4 mt-4">Domestic Tour Adventures</h1>
              <div className="flex justify-center mb-4">
                <label className="input input-bordered flex items-center gap-2 md:w-4/5">
                  <input value={searchTerm} onChange={handleSearch} type="text" className="min-w-full text-black1" placeholder="Search" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {filteredTours.map((tour, index) => (
                <Domestic
                  key={index}
                  to={tour.direct}
                  title={tour.title}
                  location={tour.location}
                  price={tour.curr_price}
                  image={tour.image}
                  duration={tour.duration}
                />
              ))}
            </div>
          </div>
        </Suspense>
      )}
      {screenSize === "tablet" && (
        <Suspense fallback={<p>loading...</p>}>
          <div className="flex justify-center ">
            <div className="mt-20 md:mt-28 md:p-5 items-center">
              <h1 className="text-center text-[26px] md:text-3xl font-lora font-semibold mb-4 mt-4">Domestic Tour Adventures</h1>
              <div className="flex justify-center mb-4">
                <label className="input input-bordered flex items-center gap-2 md:w-4/5">
                  <input value={searchTerm} onChange={handleSearch} type="text" className="min-w-full text-black1" placeholder="Search" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {filteredTours.map((tour, index) => (
                <Tablet
                  key={index}
                  to={tour.to}
                  title={tour.title}
                  location={tour.location}
                  price={tour.price}
                  image={tour.image}
                  duration={tour.duration}
                />
              ))}
            </div>
          </div>
        </Suspense>
      )}
      {screenSize === "mobile" && (
        <Suspense fallback={<p>loading...</p>}>
          <div className="flex justify-center mt-20 md:mt-28 md:p-5 p-5 ">
            <div className="w-full md:w-3/4">
              <h1 className="text-center text-[26px] md:text-3xl font-lora font-semibold mb-4 mt-4">Domestic Tour Adventures</h1>
              <div className="flex justify-center mb-4">
                <label className="input input-bordered flex items-center gap-2 md:w-4/5">
                  <input value={searchTerm} onChange={handleSearch} type="text" className="min-w-full text-black1" placeholder="Search" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {filteredTours.map((tour, index) => (
                <Mview
                  key={index}
                  to={tour.to}
                  title={tour.title}
                  location={tour.location}
                  price={tour.price}
                  image={tour.image}
                  duration={tour.duration}
                />
              ))}
            </div>
          </div>
        </Suspense>
      )}

      <Footer />
    </>
  );
}
