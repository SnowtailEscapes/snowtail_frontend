import "../styles/Home.css";

import Navbar from "./Navbar";
import International from "./Cards/International";
import Domestic from "./Cards/Domestic";
import Budget from "./Cards/Budget";
import VisaFree from "./Cards/VisaFree";
import Escapes from "./Escapes";
import InfiniteScrolling from "./InfiniteScrolling";
import Image from "../assets/CardImages/andaman.webp";
import SearchBox from "../getApi/searchBox";

export default function TopSection() {
  return (
    <>
      <div className="home">
        <Navbar />
        <picture>
          <source
            srcSet={`${'https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe'} 1x, ${'https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe'} 2x`}
            media="(max-width: 767px)"
            type="image/webp"
          />
          <source
            srcSet={`${'https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe'} 1x, ${'https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe'} 2x`}
            media="(min-width: 768px) and (max-width: 1023px)"
            type="image/webp"
          />
          <source
            srcSet={`${'https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe'} 1x, ${'https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/large/hnso83ririyohsr7ayxe'} 2x`}
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
      <SearchBox/>
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
