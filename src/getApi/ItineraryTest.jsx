import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchItinerary } from "../redux/slice/itinerarySlice";

function ItineraryTest() {
  const dispatch = useDispatch();
  const {
    isLoading,
    data: itineraries,
    isError,
  } = useSelector((state) => state.itinerary);

  useEffect(() => {
    dispatch(fetchItinerary());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading itineraries.</p>}
      {Array.isArray(itineraries) && itineraries.length > 0 && (
        <ul className="m-10 flex flex-col gap-3">
          <li
            key={0}
            className="text-center border border-red-400 p-4 flex flex-col gap-3"
          >
            <h3>{itineraries[0].title}</h3>
            <p>{itineraries[0].description1}</p>
            <ul>
              {itineraries[0].description2.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <img src={itineraries[0].large_img} alt={itineraries[0].title} />
            <ul>
              {itineraries[0].activities.map((activity, i) => (
                <li key={i}>
                  <strong>Day {activity.day}: </strong>
                  {activity.activity}
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <strong>Inclusions:</strong>
              </li>
              {itineraries[0].inclusions.map((inclusion, i) => (
                <li key={i}>{inclusion}</li>
              ))}
            </ul>
            <ul>
              <li>
                <strong>Exclusions:</strong>
              </li>
              {itineraries[0].exclusions.map((exclusion, i) => (
                <li key={i}>{exclusion}</li>
              ))}
            </ul>
            <ul>
              <li>
                <strong>Prices:</strong>
              </li>
              <li>3-Star: ${itineraries[0].prices.three_star}</li>
              <li>4-Star: ${itineraries[0].prices.four_star}</li>
              <li>5-Star: ${itineraries[0].prices.five_star}</li>
            </ul>
            <p>
              <strong>Duration:</strong> {itineraries[0].duration}
            </p>
          </li>
        </ul>
      )}
    </>
  );
}

export default ItineraryTest;
