import React, { useEffect, useState } from "react";
import google from "../assets/google.webp";
import star from "../assets/star.webp";
import trip from "../assets/trip.webp";
import visa from "../assets/visa.webp";
import time from "../assets/time.webp";
import Infinite from "./Infinite";

export default function InfiniteScrolling() {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="h-auto p-3 bg-black flex justify-center">
            <div className="flex justify-between w-full max-w-screen-lg flex-row gap-3 md:gap-1 items-center">


                {windowWidth < 767 ? (
                    <>
                        <Infinite />
                    </>
                ) : (
                    <>
                    <Infinite />
                        {/* <div className="flex items-center text-white gap-1">
                            <img src={google} width={30} alt="Google" />
                            <p className="font-bold">4.6</p>
                            <img src={star} width={20} alt="Star" />
                            <p className="font-bold">rated</p>
                        </div>

                        <div className="flex items-center text-white gap-1">
                            <img src={trip} width={30} alt="Trip" />
                            <p className="font-bold">100% Customized Trips</p>
                        </div>

                        <div className="flex items-center text-white gap-1">
                            <img src={visa} width={30} alt="Visa" />
                            <p className="font-bold">90% Visa Success Rate</p>
                        </div>

                        <div className="flex items-center text-white gap-1">
                            <img src={time} width={30} alt="Time" />
                            <p className="font-bold">24x7 Coverage</p>
                        </div> */}
                    </>
                )}
            </div>
        </div>
    );
}
