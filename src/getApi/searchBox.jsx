import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import '../styles/Home.css';

const SearchBox = () => {
  const [itineraries, setItineraries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showTypeAnimation, setShowTypeAnimation] = useState(true);
  const [sequence] = useState([
    "Search for locations",
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
      try {
        let result = await fetch(`${import.meta.env.VITE_SEARCH}/` + key);
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
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const toggleTypeAnimation = (isVisible) => {
    setShowTypeAnimation(isVisible);
  };

  const handleSearchButtonClick = () => {
    navigate("/search-results", { state: { itineraries, searchText } });
  };

  return (
    <div className="flex justify-end flex-col p-5 home-text">
    <h1 className="text-3xl md:text-4xl font-extrabold text-wrap text-white1 font-lora w-4/5 md:w-2/5">Experience the Travel with Snowtail Escapes</h1>
    <div className="p-2 m-3 ml-0 bg-gray-100 rounded-3xl lg:w-1/2 w-full flex justify-center items-center">
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
              fontSize: {
                sm: "0.5rem",
                md: "0.6rem",
                lg: "0.9rem"
              },
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
        className="py-2 px-3 bg-transparent border-none focus:outline-none flex-1 w-full"
      />
      <button
        className="bg-main-brand march text-white px-4 py-2 ml-2 rounded-3xl min-w-auto max-w-auto"
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
    </div>
    <p className="text-white1 text-sm md:text-lg font-light w-5/6">Your Luxurious Journey Awaits — Pack Your Bags, and We’ll Handle the Rest!</p>
  </div>
  );
};

export default SearchBox;