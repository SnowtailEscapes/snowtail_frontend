import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItineraryDisplay() {
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/itineraries')
      .then(response => {
        setItinerary(response.data.itinerary);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (itinerary.length === 0) return <p>No itinerary available</p>;

  return (
    <div>
      {itinerary.map(item => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p><strong>Location:</strong> {item.location}</p>
          <p><strong>Duration:</strong> {item.duration}</p>
          <img src={item.large_img} alt={item.title} />
          <p>{item.description1}</p>
          <ul>
            {item.description2.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <h3>Activities:</h3>
          <ul>
            {item.activities.map(activity => (
              <li key={activity._id}>
                <strong>Day {activity.day}:</strong> {activity.activity}
              </li>
            ))}
          </ul>
          <h3>Prices:</h3>
          <ul>
            <li>3-Star: ${item.prices.three_star}</li>
            <li>4-Star: ${item.prices.four_star}</li>
            <li>5-Star: ${item.prices.five_star}</li>
          </ul>
          <h3>Inclusions:</h3>
          <ul>
            {item.inclusions.map((inc, index) => (
              <li key={index}>{inc}</li>
            ))}
          </ul>
          <h3>Exclusions:</h3>
          <ul>
            {item.exclusions.map((exc, index) => (
              <li key={index}>{exc}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ItineraryDisplay;
