import React, { useEffect, useMemo, useRef, useState } from "react";
import GliderCarousel from "./gliderComponent";
import Mcard from "./gliderMobile";
import { internationalPackages } from "../../constants/packages";

export default function International() {

  const [isMobileScreen, setMobileScreen] = useState(
    window.innerWidth > 0 && window.innerWidth < 600
  );
  const [isTabletScreen, setTabletScreen] = useState(
    window.innerWidth >= 600 && window.innerWidth < 1000
  );
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
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const internationalCardsData = useMemo(()=>{
    const filtered = internationalPackages.filter((el)=>el.home)
    if(filtered.length){
      return filtered.sort((a,b)=> a.home - b.home )
    }
    return []
  })

  return (
    <>
      {
        isLargeScreen && (
          <div className="md:pl-20 md:pr-20 pl-4 pt-10">
            <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <GliderCarousel uniqueId="international" cards={internationalCardsData} />
          </div>
        )
      }
      {
        isTabletScreen && (
          <div className="md:pl-20 md:pr-20 pl-4 pt-10">
            <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <GliderCarousel uniqueId="international" cards={internationalCardsData} />
          </div>
        )
      }
      {
        isMobileScreen && (
          <div className="text-center pt-10">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">
              Popular International Tours
            </h2>
            <Mcard cards={internationalCardsData} uniqueId="international" />
          </div>
        )
      }
    </>

  );
}
