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
 

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);


  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3 && day4;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4  ? "Collapse All" : "Expand All"}
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
                Arrival in SRINAGAR | Welcome to the Kashmir
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrive at Srinagar. Transfer to a hotel upon arrival. Spend
                    the night visiting some local shops near the hotel or just
                    relax in your hotel rooms.
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
                SRINAGAR - GULMARG (Day Excursion, 52 kms)
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, head out to visit Gulmarg. (The drive to
                    Gulmarg is through an enchanting region. Popular avenues and
                    rice fields make for a picturesque setting. The region looks
                    green in spring, emerald in summer, and golden in autumn).
                  </li>
                  <li>
                    Arrival at Gulmarg, enjoy your Gulmarg day trip. Later back
                    to the hotel and overnight stay.
                  </li>
                  <li>
                    Things to do: Skiing, Pony & Horse rides, trekking, Outer
                    Circle Walk, Maharani Temple, Gulmarg Gondola or Leh market
                    for shopping.
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
                SRINAGAR - PAHALGAM (Day Excursion, 90 Kms)
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, head out to visit Pahalgam. (You can even
                    sample a few exotic breads sold by vendors near the road. We
                    switch the national highway at Khanabal and drive through
                    the second largest city of Anantnag. From here the road
                    turns scenic as we drive parallel on the Lidder river
                    flowing from the opposite direction).
                  </li>
                  <li>
                    Things to do: Betab Valley, Mamleshwar Temple, Aru Valley,
                    Chandanwari or Market for shopping.
                  </li>
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
                DEPARTURE
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {
              day4 && <div className="collapse-content">
              <ul>
                <li>
                  Say bye to the heaven on Earth and take a load of memories
                  back as you head to the airport/Jammu railway station to catch
                  your flight/train or go to any other destination in your
                  vehicle.
                </li>
              </ul>
            </div>
            }            
          </div>
        </div>
      </div>
    </div>
  );
}
