import React, { useState } from "react";

const SearchBox = () => {
  const [itineraries, setItineraries] = useState([]);

  async function handleSearch(key) {
    if (key.length > 1) {
      try {
        let result = await fetch("http://localhost:5000/api/itineraries/" + key);
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

  return (
    <div>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      {itineraries.length > 0 ? (
        itineraries.map((item) => (
          <div key={item._id}>
            {item.title}
          </div>
        ))
      ) : (
        <p>No itineraries found</p>
      )}
    </div>
  );
};

export default SearchBox;
