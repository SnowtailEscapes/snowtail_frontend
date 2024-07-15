import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const SearchBox = () => {
  const [itineraries, setItineraries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showTypeAnimation, setShowTypeAnimation] = useState(true);
  const [sequence, setSequence] = useState([
    "Search for destinations",
    1000,
    "Search for bali",
    1000,
    "Search for thailand",
    1000,
    "Search for dubai",
    1000,
  ]);

  async function handleSearch(key) {
    if (key.length > 1) {
      try {
        let result = await fetch(
          "http://localhost:5000/api/itineraries/" + key
        );
        result = await result.json();

        if (result.itineraries && Array.isArray(result.itineraries)) {
          setItineraries(result.itineraries);
        } else {
          setItineraries([]);
        }

        console.log(result);
      } catch (error) {
        console.error("Error fetching itineraries:", error);
        setItineraries([]);
      }
    } else {
      setItineraries([]);
    }
  }

  const toggleTypeAnimation = () => {
    setShowTypeAnimation(!showTypeAnimation);
  };

  return (
    <div className="m-10 p-4">
      <label className="input flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          value={searchText}
          onClick={toggleTypeAnimation}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        {showTypeAnimation && (
          <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={50}
            style={{
              textAlign: "left",
              fontSize: "1em",
            }}
            repeat={Infinity}
          />
        )}
      </label>

      <div className=" flex justify-center" style={{zIndex:10}}>
        <div className="bg-gray-300 w-1/2 mt-2">
          {itineraries.length > 0 ? (
            itineraries.map((item) => (
              <div key={item._id} className="border-b-2 p-3 rounded-sm">
                {item.title}
                <br />
                price: {item.prices.three_star}
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;