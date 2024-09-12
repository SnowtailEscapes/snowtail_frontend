import React from "react";
import "../styles/Home.css";

import Navbar from "./Navbar";
import International from "./Cards/International";
import Domestic from "./Cards/Domestic";
import Budget from "./Cards/Budget";
import VisaFree from "./Cards/VisaFree";
import Escapes from "./Escapes";
import InfiniteScrolling from "./InfiniteScrolling";
import SearchBox from "../getApi/searchBox";
import home from "../../public/images/card/home.webp";
import { useSelector } from "react-redux";
import ItineraryImage from "../Itinerary/components/Common/ItineraryImage";

export default function TopSection() {

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <>
      <div className={`home ${isDarkMode ? 'bg-none' : ''}`}>
        <Navbar />
        <div className={`home-image-container ${isDarkMode ? 'dark-image' : ''}`}>
          <ItineraryImage small={home} large={home}/> 
          {
            !isDarkMode && <div className="overlay"></div>
          }
          {
            isDarkMode && <div className="overlay2"></div>
          }
        </div>
        <SearchBox />
      </div>

      <InfiniteScrolling />
      <div className="flex flex-col gap-10 ">
        <International />

        <Domestic />

        <Escapes />

        <Budget />

        <VisaFree />
      </div>
    </>
  );
}
