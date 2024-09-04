import "../../../styles/accordians.css";
import { useEffect, useState } from "react";

import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
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
        <button className="btn btn-md bg-light-shade mb-6" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6
            ? "Collapse All"
            : "Expand All"}
        </button>
      </div>
      <div className="accordians">
        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"

                onClick={handleDay1}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 1</button>

                Arrival in LEH | Welcome to the Land of Lamas
              </div>
              {day1 ? <p
                onClick={handleDay1}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay1}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrive at Leh. Transfer to hotel upon arrival. The place is
                    at an altitude of 14000m above sea level, so an entire day
                    is required to just acclimatize to the weather and steady
                    your heads.
                  </li>
                  <li>
                    Spend the night visiting some local shops nearby the city of
                    Leh or just relax in your hotel rooms.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"

                onClick={handleDay2}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 2</button>

                LEH Sightseeing
              </div>
              {day2 ? <p
                onClick={handleDay2}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay2}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, head out to the city of Leh for some
                    sightseeing at places in close vicinity.
                  </li>
                  <li>
                    PLACES TO VISIT: Shey, Thiksey monasteries, Sindhu Ghat,
                    Druk Padma Karpo, Shanti Stupa & Leh market for shopping.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"

                onClick={handleDay3}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 3</button>

                LEH - NUBRA VALLEY
              </div>
              {day3 ? <p
                onClick={handleDay3}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay3}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out the hotel. Head to Nubra Valley
                    from Leh, which is a tough yet majestic five-hour journey
                    through the Khardung-La, one the highest motorable roads in
                    the world.
                  </li>
                  <li>Overnight stay at the hotel.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"

                onClick={handleDay4}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 4</button>

                NUBRA to LEH City
              </div>
              {day4 ? <p
                onClick={handleDay4}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay4}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After spending the night in Nubra Valley, head to Leh again.
                    En route, visit the Diskit Monastery and the barren expanse
                    of Hunder Sand Dunes for yet another camel safari if you
                    wish.
                  </li>
                  <li>
                    Reach Leh in the evening and spend some leisure time at your
                    hotel.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"

                onClick={handleDay5}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 5</button>

                LEH to PANGONG TSO
              </div>
              {day5 ? <p
                onClick={handleDay5}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay5}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Head to Pangong Lake from Leh early morning. This too is an
                    enduring 5-hour journey by road. The journey will be through
                    the Changla Pass.
                  </li>
                  <li>
                    Arriving at the lakeside, get mesmerised by the enchanting
                    beauty of the lake and its backdrop. Spend the night in the
                    tents near the lake and enjoy a bonfire with your friends.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"

                onClick={handleDay6}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 6</button>

                DEPARTURE
              </div>
              {day6 ? <p
                onClick={handleDay6}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay6}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>

            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Say bye to the heaven on Earth and take a load of memories
                    back as you head to the airport to catch your flight or go
                    to any other destination in your vehicle.
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
