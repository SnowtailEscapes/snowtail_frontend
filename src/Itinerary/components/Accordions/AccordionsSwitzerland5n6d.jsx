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
          {day1 && day2 && day3 && day4 && day5 && day6 ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <div className="accordians">
        <div className="accor join">
        
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay1}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 1</button>
                Arrival in Zurich | Gateway to Swiss Grandeur
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrive at Zurich Airport and breeze through immigration with
                    ease. Transfer to your pre-booked hotel using convenient
                    public transportation with the Swiss Pass.
                  </li>
                  <li>
                    Spend the day leisurely exploring Zurich's charming streets
                    and vibrant markets.
                  </li>
                  <li>Overnight stay in Zurich.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay2}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 2</button>

                Mount Titlis Adventure & Lucerne Marvels
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Indulge in a hearty breakfast before embarking on a
                    breathtaking journey to Mount Titlis.
                  </li>
                  <li>
                    Experience the Rotair, the world's first revolving cable
                    car, offering panoramic views of snow-draped peaks and
                    thrilling snow activities.
                  </li>
                  <li>
                    Later, explore the medieval charm of Lucerne, home to iconic
                    landmarks like Kapellbrucke and the Lion Monument
                  </li>
                  <li>Return to Zurich for overnight stay.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay3}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 3</button>

                Leisure Day in Zurich
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Wake up to Zurich's beauty and relish a delightful
                    breakfast. Spend the day at your leisure, either unwinding
                    at the hotel or discovering hidden gems in the city.
                  </li>
                  <li>Overnight stay in Zurich.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay4}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 4</button>

                Rhine Falls Marvel & Nature's Grandeur
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Start your day with a scrumptious breakfast before heading
                    to Rhine Falls, Nature's masterpiece.
                  </li>
                  <li>
                    Marvel at the cascading waters and feel the adrenaline rush
                    as you explore viewpoints like Belvedere and Kanzeli.
                  </li>
                  <li>
                    Opt for thrilling boat rides or embark on scenic hikes for
                    an immersive experience.
                  </li>
                  <li>Return to Zurich for overnight stay.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
      
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay5}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 5</button>

                Discover Zurich's cultural treasures after breakfast, including
                the Swiss National Museum and the iconic Zurich Opera House.
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Shop along the exclusive Bahnhofstrasse and delve into the
                    world of football at the FIFA Museum.
                  </li>
                  <li>Return to your hotel for overnight stay.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay6}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 6</button>

                Departure | Cherish Happy Memories
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Savor a delectable breakfast before bidding adieu to Zurich.
                    Depart with cherished memories of Switzerland's enchanting
                    beauty.
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
