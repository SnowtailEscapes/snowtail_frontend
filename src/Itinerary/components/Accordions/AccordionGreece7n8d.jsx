import "../../styles/accordians.css";
import { useEffect, useState } from "react";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
  const [day7, setDay7] = useState(false);
  const [day8, setDay8] = useState(false);
  const [day9, setDay9] = useState(false);
  const [day10, setDay10] = useState(false);

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);
  const handleDay6 = () => setDay6(!day6);
  const handleDay7 = () => setDay7(!day7);
  const handleDay8 = () => setDay8(!day8);
  const handleDay9 = () => setDay9(!day9);
  const handleDay10 = () => setDay10(!day10);

  const handleExpandAll = () => {
    const allExpanded =
      day1 &&
      day2 &&
      day3 &&
      day4 &&
      day5 &&
      day6 &&
      day7 &&
      day8 &&
      day9 &&
      day10;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
    setDay7(!allExpanded);
    setDay8(!allExpanded);
    setDay9(!allExpanded);
    setDay10(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 &&
          day2 &&
          day3 &&
          day4 &&
          day5 &&
          day6 &&
          day7 &&
          day8 &&
          day9 &&
          day10
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
                Welcome to Greece! Arrival in Athens
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrive in Athens, the cradle of civilization, and transfer
                    to your hotel. Enjoy the rest of the day at leisure,
                    exploring the vibrant streets of Athens on your own.
                  </li>
                  <li>
                    Optional Athens By Night Tour available (additional cost).
                  </li>
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
                City Tour with Acropolis Museum | Wander at the UNESCO Heritage
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a guided tour of Athens, visiting iconic landmarks
                    such as the Acropolis, Panathenaic Stadium, and the
                    Acropolis Museum.
                  </li>
                  <li>
                    Explore the rich history and architecture of this ancient
                    city before returning to your hotel for leisure time.
                  </li>
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
                Discover Stunning Mykonos | Proceed from Athens to Mykonos (via
                ferry)
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Say goodbye to Athens as you board a ferry to the
                    cosmopolitan island of Mykonos.
                  </li>
                  <li>
                    Known for its vibrant nightlife and picturesque beaches,
                    Mykonos welcomes you with its charming ambiance.
                  </li>
                  <li>Spend the day exploring the island at your own pace.</li>
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
                Witness the Surreal Beauty of Mykonos | Tour of Delos (Optional)
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Relax and unwind on the golden beaches of Mykonos or opt for
                    a tour of the nearby island of Delos, a UNESCO World
                    Heritage Site steeped in mythology and history.
                  </li>
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
                onClick={handleDay5}
              >
                Discover Santorini | Head out from Mykonos to Santorini (via
                ferry)
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Journey from Mykonos to the enchanting island of Santorini,
                    famous for its stunning caldera views and whitewashed
                    buildings.
                  </li>
                  <li>
                    Upon arrival, soak in the beauty of Santorini and enjoy
                    leisure time to explore.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 6</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay6}
              >
                Explore Santorini | Full-Day Volcano Tour, Hot Springs,
                Thirassia, and Oia Sunset
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a full-day excursion to explore the volcanic
                    wonders of Santorini, including a visit to the active
                    volcano, hot springs, and the charming village of Oia
                  </li>
                  <li>
                    Witness one of the world's most breathtaking sunsets before
                    returning to your hotel.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 7</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay7}
              >
                Head back to Athens from Santorini (via Ferry)
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Bid farewell to Santorini as you board a ferry back to
                    Athens.
                  </li>
                  <li>
                    Enjoy your final evening in Greece at leisure, reminiscing
                    about your unforgettable journey through this ancient land.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 8</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay8}
              >
                Departure | End of Experience
              </div>
              {day8 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day8 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Savor a delicious breakfast before transferring to Athens
                    airport for your departure flight.
                  </li>
                  <li>
                    Depart with cherished memories of your Greek Odyssey and the
                    timeless treasures you've discovered.
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
