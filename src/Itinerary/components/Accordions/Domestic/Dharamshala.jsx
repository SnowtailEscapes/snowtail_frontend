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
        <button
          className="btn btn-md bg-light-shade mb-6"
          onClick={handleExpandAll}
        >
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
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 1
                </button>
                CHANDIGARH - DALHOUSIE (8 Hours)
              </div>
              {day1 ? (
                <p onClick={handleDay1} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay1} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Early morning, board the vehicle in Chandigarh, depart for
                    Dalhousie. Full day journey. On arrival check in at the
                    hotel. Leisure time. Overnight stay.
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
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 2
                </button>
                DALHOUSIE - KHAJJIAR - DALHOUSIE
              </div>
              {day2 ? (
                <p onClick={handleDay2} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay2} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, drive to Khajjiar. On a visit to Khajjiar, where you can enjoy Horse riding, Paragliding, other adventure activities and enjoy the scenery. Evening return back to the hotel. Overnight stay at Dalhousie hotel.
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
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 3
                </button>
                DALHOUSIE
              </div>
              {day3 ? (
                <p onClick={handleDay3} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay3} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, day for Dalhousie sightseeing. Visit:- Subhash Baoli, Satdhara, Panjpulla and Dalhousie churches. Evening return back to the hotel. Overnight stay at the hotel.
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
                onClick={handleDay4}
              >
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 4
                </button>
                DALHOUSIE - MCLEODGANJ
              </div>
              {day4 ? (
                <p onClick={handleDay4} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay4} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, drive to Mcleodganj. Upon arrival transfer to the hotel. Evening at leisure. Overnight stay at the hotel.
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
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 5
                </button>
                MCLEODGANJ 
              </div>
              {day5 ? (
                <p onClick={handleDay5} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay5} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After having the Breakfast at the Hotel, Go for Mcleodganj local sightseeing, Mcleodganj is a small bazaar filled with Tibetan handicrafts and artefacts.
                  </li>
                  <li>
                  Visit:- Naddi View Point, Dharamsala's main Buddhist temple, Dalai Lama temple, Mall Road, BhagsuNag waterfall & temple, St. John Church and then back to the hotel, Overnight stay at hotel.
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
                <button className="btn btn-sm rounded-3xl bg-main-brand">
                  Day 6
                </button>
                MCLEODGANJ - CHANDIGARH   (8 Hours)
              </div>
              {day6 ? (
                <p onClick={handleDay6} className="hover:cursor-pointer">
                  ▲
                </p>
              ) : (
                <p onClick={handleDay6} className="hover:cursor-pointer">
                  ▼
                </p>
              )}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast check out the hotel and depart for chandigarh. Drop at Hotel/Railway Station.
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
