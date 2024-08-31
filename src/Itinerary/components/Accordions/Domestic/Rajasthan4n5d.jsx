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

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);

  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3 && day4 && day5;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 ? "Collapse All" : "Expand All"}
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
                Arrival in Jaipur
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay2}
              >
                Jaipur - Udaipur (Via Chittorgarh)
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Check-out after breakfast and we’ll start our journey
                    towards Udaipur. Visit Chittorgarh Fort en-route. Later,
                    departure for Udaipur. Upon arrival check in the hotel and
                    freshen up.
                  </li>
                  <li>
                    In the evening take a boat tour over the picturesque Lake
                    Pichola (at your own cost).
                  </li>
                  <li>
                    Return back to the hotel for dinner. Overnight stay at
                    Udaipur.
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
                Udaipur Sightseeing
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>After breakfast, start for the Udaipur city tour.</li>
                  <li>
                    Places to Visit in Udaipur: Fateh Sagar Lake, Maharana
                    Pratap Memorial, and take a photo stop at Nehru Garden.
                    Visit Sehelion-KI-Bari - Queen’s resort for their friends,
                    Sukhadia Circle (Drive Pass), Bhartiya Lok Kala Museum - a
                    museum of folk and art, it displays a rich collection of
                    folk dresses, ornaments, puppets, masks, dolls.
                  </li>
                  <li>
                    City Palace – The largest palace complex of Rajasthan.
                  </li>
                  <li>
                    Return back to the hotel for dinner. Overnight stay at
                    Udaipur.
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
                Kumbhalgarh
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After Breakfast, leave for Kumbhalgarh. Transfer to the
                    hotel on arrival, Check in and freshen up. Head out to visit
                    the mighty fort of Kumbhalgarh.
                  </li>
                  <li>
                    Back to Hotel, time for leisure. Dinner and overnight stay.
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
                Jaipur Transfer
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, Checkout from the hotel and start your
                    journey towards Jaipur
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
