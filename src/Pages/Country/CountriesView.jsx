import React, { useEffect, useRef, useState } from "react";
import GliderCarousel from "../../components/Cards/gliderComponent";
import Mcard from "../../components/Cards/gliderMobile";
import { countriesList } from "./constants";
import Card from "./Card";
import CardMobile from "./CardMobile";

function CountriesView({ scrollRef }) {
  const [isMobileScreen, setMobileScreen] = useState(window.innerWidth > 0 && window.innerWidth < 600);
  const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 600);

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth > 0 && window.innerWidth < 600);
      setLargeScreen(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isLargeScreen && (
        <div className="md:pl-20 md:pr-20 pl-4 pt-10">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">Explore Countries</h2>
          <GliderCarousel
            uniqueId="international"
            gliderResponsiveOptions={[
              {
                breakpoint: 0, // For smaller screens
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600, // For medium screens
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 1024, // For larger screens
                settings: {
                  slidesToShow: 3, // Show 3 cards
                  slidesToScroll: 3,
                },
              },
            ]}
          >
            {countriesList.map((card, index) => (
              <div
                className="w-full carousel-item flex flex-col relative rounded-2xl mx-2"
                key={index}
                onClick={() => scrollRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                <Card {...card} />
              </div>
            ))}
          </GliderCarousel>
        </div>
      )}
      {isMobileScreen && (
        <div className="text-center pt-10">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">Explore Countries</h2>
          <Mcard uniqueId="international">
            {countriesList.map((card, index) => (
              <div
                key={index}
                onClick={() =>
                  setTimeout(() => {
                    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
                  }, 1000)
                }
              >
                <CardMobile {...card} />
              </div>
            ))}
          </Mcard>
        </div>
      )}
    </>
  );
}

export default CountriesView;
