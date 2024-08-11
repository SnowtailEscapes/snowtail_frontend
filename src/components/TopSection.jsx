import React, { Suspense } from "react";
import "../styles/Home.css";

const Navbar = React.lazy(() => import("./Navbar"));
const International = React.lazy(() => import("./Cards/International"));
const Domestic = React.lazy(() => import("./Cards/Domestic"));
const Budget = React.lazy(() => import("./Cards/Budget"));
const VisaFree = React.lazy(() => import("./Cards/VisaFree"));
const Escapes = React.lazy(() => import("./Escapes"));
const InfiniteScrolling = React.lazy(() => import("./InfiniteScrolling"));
const SearchBox = React.lazy(() => import("../getApi/searchBox"));

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
