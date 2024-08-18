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

export default function TopSection() {
  return (
    <>
      <div className="home">
        <Navbar />
        <picture>
          <img
            src="https://snowtailescapes.com/images/Large/france.webp"
            alt="Place image for tourism"
            className="home-image"
          />
        </picture>
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
