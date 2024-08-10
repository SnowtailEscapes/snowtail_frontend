import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const SearchBox = () => {
  const [itineraries, setItineraries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showTypeAnimation, setShowTypeAnimation] = useState(true);
  const navigate = useNavigate();

  // Set the animation sequence
  const sequence = [
    'Search for locations',
    1000,
    'Search for Bali',
    1000,
    'Search for Thailand',
    1000,
    'Search for Dubai',
    1000,
  ];

  // Function to fetch itineraries
  const handleSearch = async (key) => {
    if (key.length > 1) {
      try {
        const response = await fetch(`${import.meta.env.VITE_SEARCH}${key}`);
        const result = await response.json();

        if (result.itineraries && Array.isArray(result.itineraries)) {
          setItineraries(result.itineraries);
        } else {
          setItineraries([]);
        }
        console.log(result);
      } catch (error) {
        console.error('Error fetching itineraries:', error);
        setItineraries([]);
      }
    } else {
      setItineraries([]);
    }
  };

  // Search on input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    handleSearch(value);
  };

  // Navigate to search results page
  const handleSearchButtonClick = () => {
    navigate('/search-results', { state: { itineraries, searchText } });
  };

  // Handle animation visibility
  const handleFocus = () => setShowTypeAnimation(false);
  const handleBlur = () => setShowTypeAnimation(false);

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex items-center bg-gray-100 rounded-lg p-2 lg:w-1/2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5 text-gray-500 mr-2"
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
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                paddingLeft: '1rem',
              }}
              repeat={Infinity}
            />
          )}
        </div>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="py-2 px-3 bg-transparent border-none flex-1 w-full"
          placeholder="Search..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
