
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchItineraries = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(`/api/itinerary/${search}`);
        setResults(response.data.itineraries);
      } catch (err) {
        console.error('Error searching itineraries:', err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (search.trim() !== "") {
      fetchItineraries();
    } else {
      setResults([]);
    }
  }, [search]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(`/api/itineraries/${search}`);
      setResults(response.data);
    } catch (err) {
      console.error('Error searching itineraries:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="flex justify-center text-center m-5 p-5 gap-5">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for destination"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button type="submit" className="btn btn-accent">
          Search
        </button>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading itineraries.</p>}
      {results.length > 0 ? (
        <div className="itinerary-list">
          {results.map((itinerary, index) => (
            <h2 key={index}>{itinerary.title}</h2>
          ))}
        </div>
      ) : (
        search && !isLoading && !isError && <p>No itineraries match your search.</p>
      )}
    </>
  );
}
