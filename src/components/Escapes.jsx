import React from "react";
import "../styles/escapes.css";

export default function Escapes() {
  return (
    <div className="flex justify-center">
      <div className="escapes">
        <div className="flex flex-col justify-start md:p-20 md:w-4/5 p-3 gap-4">
          <h4 className="font-semibold">Find your best travel expert</h4>
          <h1 className="text-4xl font-bold">
            Prepare yourself and let’s enjoy the beauty of the world
          </h1>
          <p className="text-md text-white">
            Get Ready to Embrace the World's Wonders
            <br />
            Experience the thrill of exploring the most beautiful destinations.
            Join us for an unforgettable adventure!
          </p>
          <div className="stats bg-opacity-20 ">
            <div className="stat md:place-items-center place-items-left">
              <div className="stat-title">Partners</div>
              <div className="stat-value">1200+</div>
              {/* <div className="stat-desc">From January 1st to February 1st</div> */}
            </div>

            <div className="stat md:place-items-center place-items-left">
              <div className="stat-title">Destinations</div>
              <div className="stat-value text-secondary">20+</div>
              {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
            </div>

            <div className="stat md:place-items-center place-items-left">
              <div className="stat-title">Happiness</div>
              <div className="stat-value">96%</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
