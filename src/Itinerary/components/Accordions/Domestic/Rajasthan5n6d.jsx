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
                Arrival in Jaipur | Welcome to the Pink City
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrival in Jaipur. Transfer to hotel upon arrival. Check in
                    at the hotel and head off for local sightseeing, overnight
                    stay.
                  </li>
                  <li>
                    Amber fort – The spectacular 16th-century fort built on a
                    hilltop was home to the chivalrous Rajput rulers. The
                    sprawling complex is a UNESCO World Heritage sight.
                  </li>
                  <li>
                    Jai Mahal Palace – A water palace built in the middle of a
                    lake
                  </li>

                  <li>Hawa Mahal facade – You can skip going inside</li>
                  <li>Jantar Mantar – Features world’s largest sundial</li>
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
                PUSHKAR - JODHPUR (Welcome to Blue city)
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out, departure for Jodhpur. Transfer
                    to the hotel. Overnight stay.
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
                JODHPUR
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, You should experience the Blue City
                    Heritage walk which takes you deep into the historical old
                    city.
                  </li>
                  <li>
                    Mehrangarh Fort – Home to many beautiful palaces and
                    courtyards.
                  </li>
                  <li>
                    Jaswant Thada – The elegantly crafted white marble mausoleum
                    displays beautiful Jaali work and opulent domes.
                  </li>
                  <li>
                    After visiting back to the hotel, dinner and Overnight stay.
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
                JODHPUR - JAISALMER (Golden city welcomes you)
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After Breakfast, proceed towards Jaisalmer, transfer to the
                    hotel on arrival. After some time, head out for local
                    sightseeing.
                  </li>
                  <li>
                    Explore Havelis – Patwon ki Haveli, Salim Singh ki Haveli,
                    and Nathmal Ki Haveli.
                  </li>
                  <li>
                    Gadisar Lake reservoir – Artificial reservoir surrounded by
                    temples.
                  </li>
                  <li>
                    Sonar/Jaisalmer Fort – The ‘living fort’ is buzzing with
                    shops, cafes, and Havelis
                  </li>
                  <li>
                    Back to the hotel, rest of the day for leisure. Dinner and
                    overnight stay.
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
                SAM (THAR DESERT)
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, leave for Sam (Thar Desert), a 1-hour
                    drive. It's going to be an adventurous day today in the
                    heart of Thar desert at Sam, Jaisalmer. Experience various
                    fun activities such as dance, music, safari, and more.
                    Dinner and overnight stay.
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
                DEPARTURE
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out from the hotel and start your
                    journey towards Jaipur.
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
