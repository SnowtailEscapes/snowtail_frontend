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

export default function TopSection() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="home-image-container">
          <img
            src={home}
            alt="Place image for tourism"
            className="home-image"
          />
          <div className="overlay"></div>
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
