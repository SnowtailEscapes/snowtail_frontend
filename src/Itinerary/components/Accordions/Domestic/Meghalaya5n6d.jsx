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
                Arrival in North East | Guwahati to Shillong (4 hrs drive)
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrival at Guwahati Station / Guwahati Airport. Head towards
                    Shillong. Transfer to hotel upon arrival. Overnight Stay in
                    Shillong.
                  </li>
                  <li>Umiam Lake & Police Bazaar.</li>
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
                Shillong to Cherrapunji. (3 hours)
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, Transfer to Cherrapunji. Transfer to hotel
                    upon arrival. Stay in Cherrapunji.
                  </li>
                  <li>
                    PLACES TO VISIT: Mawkdok Valley, Nohkalikai Falls & Wei
                    Sawdong Waterfall.
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
                Cherrapunji to Double Decker Bridge (1 hour drive)* or Hike
                Duration - 6-7 hours
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, head out to visit Cherrapunji (Forest
                    visit). Stay in Cherrapunji.
                  </li>
                  <li>
                    Places to visit : Single Decker Living Root Bridge, Double
                    Decker Root Bridge & Mawsmai Caves
                  </li>
                  <p className="text-orange-400 mt-2 mb-2">OR</p>
                  <li>
                    Cherrapunji local excursion After breakfast, visit local
                    sightseeing in Cherrapunji. Overnight stay in Cherrapunj
                  </li>
                  <li>
                    Places to visit : Mawsmai caves Arwah caves Garden of caves
                    Wakhaba Waterfall Seven sister Waterfall
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
                Cherrapunji to Dawki (3 hours Drive)
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out the hotel. Board your vehicle and
                    head towards Dawki. Riverside Camping. (Near Dawki)
                  </li>
                  <li>
                    Places to visit : Cleanest Village Mawlynnong & Dawki River.
                  </li>
                  <li className="text-orange-400">
                    Note: ALPINE TENTS OR DOME TENTS AS PER AVAILABILITY
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
                Dawki To Shillong (4 hours Drive)
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, transfer to Shillong. Transfer to hotel
                    upon arrival. Overnight Stay in Shillong.
                  </li>
                  <li>
                    Places to visit : Krang Suri Waterfall & Cleanest River
                    Umngot.
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
                Shillong - Guwahati. (4 hours)
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out the hotel. Transfer to hotel upon
                    arrival. Evening for Shopping at Police Bazar. Evening Drop
                    at Guwahati Airport/Railway station.
                  </li>
                  <li>Places to visit : Don Bosco Museum or Wards Lake</li>
                  <li className="text-orange-400">
                    Note: Book evening flights/Train Tickets.
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
