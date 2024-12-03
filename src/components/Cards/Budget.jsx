import React, { useEffect, useMemo, useRef, useState } from "react";
import GliderCarousel from "./gliderComponent";
import Mcard from "./gliderMobile";
import { domesticPackages, internationalPackages } from "../../constants/packages";

export default function Budget() {
  const [isMobileScreen, setMobileScreen] = useState(window.innerWidth > 0 && window.innerWidth < 600);
  const [isTabletScreen, setTabletScreen] = useState(window.innerWidth >= 600 && window.innerWidth < 1000);
  const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth > 0 && window.innerWidth < 600);
      setTabletScreen(window.innerWidth >= 600 && window.innerWidth < 1000);
      setLargeScreen(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const budgetCards = useMemo(() => {
    const filtered1 = internationalPackages.filter((el) => el.budget);
    const filtered2 = domesticPackages.filter((el) => el.budget);

    if (filtered1.length || filtered2) {
      return [...filtered1, ...filtered2].sort((a, b) => a.budget - b.budget);
    }
    return [];
  });

  return (
    <>
      {isLargeScreen && (
        <div className="md:pl-20 md:pr-20 pl-4 pt-10">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">Popular Budget Tours</h2>
          <GliderCarousel uniqueId="budget" cards={budgetCards} />
        </div>
      )}
      {isTabletScreen && (
        <div className="md:pl-20 md:pr-20 pl-4 pt-10">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">Popular Budget Tours</h2>
          <GliderCarousel uniqueId="budget" cards={budgetCards} />
        </div>
      )}
      {isMobileScreen && (
        <div className="text-center pt-10">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">Popular Budget Tours</h2>
          <Mcard cards={budgetCards} uniqueId="budget" />
        </div>
      )}
    </>
  );
}
