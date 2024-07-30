import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  {TypeAnimation}  from "react-type-animation"

const SearchBox = () => {
  const [itineraries, setItineraries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showTypeAnimation, setShowTypeAnimation] = useState(true);
  const [sequence] = useState([
    "Search for destinations",
    1000,
    "Search for bali",
    1000,
    "Search for thailand",
    1000,
    "Search for dubai",
    1000,
  ]);
  const navigate = useNavigate();

  const handleSearch = async (key) => {
    if (key.length > 1) {
      try {
        let result = await fetch(
          `${VITE_API_SEARCH}/ + key`
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
  };

  const toggleTypeAnimation = (isVisible) => {
    setShowTypeAnimation(isVisible);
  };

  const handleSearchButtonClick = () => {
    navigate("/search-results", { state: { itineraries, searchText } });
  };

  return (
    <div className="m-6 p-2 flex items-center bg-gray-100 rounded-lg">
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
      <div className="mr-2">
        {showTypeAnimation && (
          <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "0.9em",
              whiteSpace: "nowrap",
              paddingLeft: "1rem",
            }}
            repeat={Infinity}
          />
        )}
      </div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearch(e.target.value);
        }}
        onFocus={() => toggleTypeAnimation(false)}
        onBeforeInput={() => toggleTypeAnimation(false)}
        onBlur={() => toggleTypeAnimation(false)}
        className="py-2 px-3 bg-transparent border-none focus:outline-none flex-1 lg:w-3/4"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded lg:w-1/5 w-1/4"
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
