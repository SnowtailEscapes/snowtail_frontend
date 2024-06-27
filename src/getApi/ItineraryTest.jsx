import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchItinerary } from "../redux/slice/itinerarySlice";

function ItineraryTest() {
  const dispatch = useDispatch();
  const { isLoading, data: itineraries, isError } = useSelector((state) => state.itinerary);

  useEffect(() => {
    dispatch(fetchItinerary());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div>
        <button className="btn btn-secondary" onClick={() => dispatch(fetchItinerary())}>
          Fetch Itinerary Data
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading itineraries.</p>}
      {Array.isArray(itineraries) && itineraries.length > 0 && (
        <ul className="m-10 flex flex-col gap-3">
          <li key={0} className="text-center border border-red-400 p-4 flex flex-col gap-3">
            <h3>{itineraries[0].title}</h3>
            <p>{itineraries[0].description1}</p>
            <p>{itineraries[0].description2}</p>
            <img src={itineraries[0].large_img} alt={itineraries[0].title} />
            <ul>
              {itineraries[0].activities.map((activity, i) => (
                <li key={i}>
                  <strong>Day {activity.day}: </strong>{activity.activity}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </>
  );
}

export default ItineraryTest;
