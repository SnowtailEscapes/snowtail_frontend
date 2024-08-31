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
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6 ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <div className="accordians">
        <div className="accor join">
          <h5 className="join-item">Day 1</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title"
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
                    relax in your hotel rooms
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
                className="collapse-title hover:cursor-pointer title"
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
                    rice fields make for a picturesque setting.
                  </li>
                  <li>
                    The region looks green in spring, emerald in summer, and
                    golden in autumn). Arrival at Gulmarg, enjoy your Gulmarg
                    day trip.
                  </li>
                  <li>
                    Later back to the hotel and overnight stay. Things to do:
                    Skiing, Pony & Horse rides, trekking, Outer Circle Walk,
                    Maharani Temple, Gulmarg Gondola or Leh market for shopping.
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
                className="collapse-title hover:cursor-pointer title"
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
                    After breakfast, Head out to visit Pahalgam. (You can even
                    sample a few exotic breads sold by vendors near the road. We
                    switch the national highway at Khanabal and drive through
                    the second largest city of Anantnag. From here the road
                    turns scenic as we drive parallel on the Lidder river
                    flowing from the opposite direction.)
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay4}
              >
                SRINAGAR - SONMARG (80 Kms)
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out the hotel, later depart towards
                    Sonmarg. (Located on Srinagar-Leh highway).
                  </li>
                  <li>
                    Upon arrival transfer to the hotel. Evening for leisure.
                    Market for shopping. Overnight stay.
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay5}
              >
                SONMARG - SRINAGAR
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out the hotel, indulge in Sonmarg
                    sightseeing. Later depart for Srinagar. Upon arrival
                    transfer to the houseboat.
                  </li>
                  <li>
                    Places to visit: Satsar Lake, Zoji-la Pass, Baltal Valley or
                    Nilagrad River.
                  </li>
                  <li>Overnight stay in Srinagar</li>
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay6}
              >
                DEPARTURE
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Say goodbye to the heaven on Earth and take a load of
                    memories back as you head to the airport/Jammu railway
                    station to catch your flight/train or go to any other
                    destination in your vehicle.
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
