import React, { Suspense } from "react";
import "../styles/Home.css";

const Navbar = React.lazy(() => import("./Navbar"));
const International = React.lazy(() => import("./Cards/International"));
const Domestic = React.lazy(() => import("./Cards/Domestic"));
const Budget = React.lazy(() => import("./Cards/Budget"));
const VisaFree = React.lazy(() => import("./Cards/VisaFree"));
const Escapes = React.lazy(() => import("./Escapes"));
const InfiniteScrolling = React.lazy(() => import("./InfiniteScrolling"));
const Image = React.lazy(() => import("../assets/CardImages/andaman.webp"));
const SearchBox = React.lazy(() => import("../getApi/searchBox"));
import Loading from "./loading";


export default function TopSection() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="home">
          <Navbar />

          <picture>
            <source
              srcSet={`${"https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe"} 1x, ${"https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe"} 2x`}
              media="(max-width: 767px)"
              type="image/webp"
            />
            <source
              srcSet={`${"https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe"} 1x, ${"https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe"} 2x`}
              media="(min-width: 768px) and (max-width: 1023px)"
              type="image/webp"
            />
            <source
              srcSet={`${"https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe"} 1x, ${"https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe"} 2x`}
              media="(min-width: 1024px)"
              type="image/webp"
            />
            <img
              src={Image}
              alt="Place image for tourism"
              className="home-image"
              decoding="async"
              loading="lazy"
            />
          </picture>
          <SearchBox />
        </div>
      </Suspense>
      <Suspense>
        <InfiniteScrolling />
      </Suspense>
      <div className="flex flex-col gap-10 ">
        <Suspense>
          <International />
        </Suspense>
        <Suspense>
          <Domestic />
        </Suspense>
        <Suspense>
          <Escapes />
        </Suspense>
        <Suspense>
          <Budget />
        </Suspense>
        <Suspense>
          <VisaFree />
        </Suspense>
      </div>
    </>
  );
}
