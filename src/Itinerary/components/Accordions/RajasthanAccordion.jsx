import React, { useState } from "react";
import { useEffect } from "react";

import "../../styles/accordians.css";

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

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);
  const handleDay6 = () => setDay6(!day6);
  const handleDay7 = () => setDay7(!day7);
  const handleDay8 = () => setDay8(!day8);

  const handleExpandAll = () => {
    const allExpanded =
      day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
    setDay7(!allExpanded);
    setDay8(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8
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
                Arrival in Jaipur | Welcome to Pink city
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <h4>Place to visit: </h4>
                <ul>
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
                Pushkar Jodhpur | Welcome to Blue city
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out, departure for Jodhpur (via
                    Pushkar). Have lunch in Pushkar and then head towards
                    Jodhpur. Transfer to the hotel. Overnight stay.
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
                Jodhpur
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <p>
                  After breakfast, You should experience the Blue City Heritage
                  walk which takes you deep into the historical old city.
                </p>
                <h4>Place to visit: </h4>
                <ul>
                  <li>
                    Mehrangarh Fort – Home to many beautiful palaces and
                    courtyards.
                  </li>
                  <li>
                    Jaswant Thada – The elegantly crafted white marble mausoleum
                    displays beautiful Jaali work and opulent domes.
                  </li>
                  <li>
                    Mandore garden - The natural charm of the garden makes it
                    truly alluring.
                  </li>
                  <p>
                    After visiting back to the hotel, dinner and Overnight stay.
                  </p>
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
                Jodhpur - Jaisalmer (Golden city welcomes you)
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <p>
                  After Breakfast, proceed towards Jaisalmer, transfer to the
                  hotel on arrival. After some time, head out for local
                  sightseeing.
                </p>
                <h4>Place to visit: </h4>
                <ul>
                  <li>
                    Sonar/Jaisalmer Fort – The ‘living fort’ is buzzing with
                    shops, cafes, and Havelis.
                  </li>
                  <li>
                    Gadisar Lake reservoir – Artificial reservoir surrounded by
                    temples
                  </li>
                  <li>
                    Explore Havelis – Patwon ki Haveli, Salim Singh ki Haveli,
                    and Nathmal Ki Haveli
                  </li>
                  <p>
                    Back to the hotel , rest of the day for leisure. Dinner and
                    overnight stay.
                  </p>
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
                SAM - Thar Desert
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <p>
                  After breakfast, leave for Sam-(Thar Desert) 1hr drive. It's
                  going to be an adventurous day today in the heart of thar
                  desert Sam, Jaisalmer. The desert where many fun activities
                  will be conducted for you as in dance, music, safari and many
                  more. Dinner and Stay overnight.
                </p>
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
                Udaipur - City of Romance
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <p>
                  Leave for Udaipur today. Full day journey, hotel Check-in on
                  arrival, freshen up and enjoy your stay after such a long
                  journey.
                </p>
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
                Udaipur
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <p>After breakfast, head out to visit this romantic city.</p>
                <h4>Place to visit: </h4>
                <ul>
                  <li>
                    City Palace – a massive complex of 11 palaces, courtyards,
                    art galleries, and sprawling gardens built by various
                    Warrior Kings.
                  </li>
                  <li>
                    Lake Pichola – Take a boat ride and watch the golden sunset.
                    (If you are in the mood to splurge, stay at the Lake Palace
                    Hotel)
                  </li>
                  <li>Monsoon palace – A beautiful palace built on a hill .</li>
                  <li>Sahiliyo ki badi.</li>
                  <p>
                    Reach back to the hotel, enjoy your dinner and relax tonight
                  </p>
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
                Udaipur to Jaipur
              </div>
              {day8 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day8 && (
              <div className="collapse-content">
                <p>After Breakfast, check out the Hotel. Departure</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
