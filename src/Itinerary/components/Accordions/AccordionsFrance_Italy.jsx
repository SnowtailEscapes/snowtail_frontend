import { useEffect, useState } from "react";
import "../../styles/accordians.css";

import Aos from "aos";
import "aos/dist/aos.css";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";

export default function RajasthanAccordion() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const [day1, setDay1] = useState(false);
  const [day2, setDay2] = useState(false);
  const [day3, setDay3] = useState(false);
  const [day4, setDay4] = useState(false);
  const [day5, setDay5] = useState(false);
  const [day6, setDay6] = useState(false);

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);
  const handleDay6 = () => setDay6(!day6);

  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3 && day4 && day5 && day6;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6
            ? "Collapse All"
            : "Expand All"}
        </button>
      </div>
      <div className="accordians">
        <div className="accor join">
          <h5 className="join-item">Day 1</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay1}
              >
                Arrival in Paris
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Upon arrival at Paris Charles de Gaulle Airport, our
                    friendly local representative will greet you and transfer
                    you to your luxurious hotel.
                  </li>
                  <li>
                    Spend the evening leisurely strolling through the charming
                    streets of Paris, embracing its bohemian allure.
                  </li>
                  <li>Overnight stay in Paris.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 2</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay2}
              >
                Full Day City Tour of Paris
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Start your day with a delightful breakfast before embarking
                    on a full day city tour of Paris.
                  </li>
                  <li>
                    Explore renowned attractions such as Notre Dame Cathedral,
                    the Palace of Versailles, and the world-famous Louvre
                    Museum.
                  </li>
                  <li>
                    Cruise along the serene Seine River and marvel at the
                    breathtaking views of the city.
                  </li>
                  <li>
                    Cap off your day with a visit to the iconic Eiffel Tower.
                  </li>
                  <li> Overnight stay in Paris.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 3</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay3}
              >
                Fly from Paris to Rome
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Bid farewell to Paris as you catch a flight to Rome, the
                    eternal city. Upon arrival at Leonardo da Vinci–Fiumicino
                    Airport, you'll be escorted to your hotel.
                  </li>
                  <li>
                    Spend the day at your leisure, exploring the vibrant streets
                    of Rome or indulging in a delectable food tour.
                  </li>
                  <li>Overnight stay in Rome.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 4</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay4}
              >
                Full Day City Tour of Rome
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Fuel up with a delicious breakfast before embarking on a
                    full day tour of Rome's iconic landmarks.
                  </li>
                  <li>
                    Visit the historic sites of Piazza Navona, the Roman Forum,
                    the Colosseum, and more, immersing yourself in the rich
                    history of the city.
                  </li>
                  <li>
                    Conclude your day with a visit to the majestic Pantheon.
                  </li>
                  <li>Overnight stay in Rome.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 5</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay4}
              >
                Departure | Farewell With Fond Memories
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Savor your final breakfast in Rome before heading to the
                    airport for your departure flight.
                  </li>
                  <li>
                    Depart with cherished memories of your unforgettable journey
                    through Italy and France.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
