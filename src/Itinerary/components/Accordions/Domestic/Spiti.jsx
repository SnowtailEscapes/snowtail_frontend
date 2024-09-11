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
  const [day7, setDay7] = useState(false);
  const [day8, setDay8] = useState(false);
  const [day9, setDay9] = useState(false);

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);
  const handleDay6 = () => setDay6(!day6);
  const handleDay7 = () => setDay7(!day7);
  const handleDay8 = () => setDay8(!day8);
  const handleDay9 = () => setDay9(!day9);

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
      day9;    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
    setDay7(!allExpanded);
    setDay8(!allExpanded);
    setDay9(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn btn-md bg-light-shade mb-6" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8 && day9
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
              DELHI to SHIMLA
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
                    Leave Delhi from a pre-decided destination.
                    Reach Shimla. Check-in at the hotel and freshen
                    up.
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
              Chandigarh - Narkanda 
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
                  Meet our representative at a pre-decided location. Visit Shimla & Departure to Narkanda. Experience the journey through magnificent landscapes of Kinnaur valley along the banks of Satluj River
                  </li>
                  <li>
                  Transfer to hotel. Dinner and overnight stay. 
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
              Narkanda - CHITKUL/SANGLA (6.5 hours)
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
                  Wake-up early morning & after breakfast start your journey to CHITKUL/SANGLA. Reach around evening.Dinner and overnight stay
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
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 4</button>
              CHITKUL/SANGLA - KALPA (3.5 hours)
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
                  Wake up early in the morning to experience one of the most beautiful sunrises. Explore the local village of Chitkul. Depart for Kalpa by Noon.
                  </li>
                  <li>
                  Reach Kalpa by evening, check-in to the hotel, dinner and overnight stay. 

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

              KALPA - KAZA (6.5 hours)
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
                  Wake-up early morning & after breakfast start your journey to Spiti Valley. Enter Spiti valley through Sumdo Border. Visit Nako Tabo villages en route to Kaza. Cross the Ka loops 
                  en route to Kaza.
                  </li>
                  <li>Reach Kaza by evening. Check-in to the campsite. Dinner & sleep overnight. </li>
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
              KAZA
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
                  After breakfast, go out to visit Kaza. Visit:- The Chicham Bridge. The highest village in Asia is Komic. Later, drive to Hikkim, To post from the world's highest post office & Laganza. 
                  </li>
                  <li>
                  Back to the hotel. Dinner and overnight stay.  
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

                onClick={handleDay7}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 6</button>
              KAZA - CHANDRATAL (Transit) - SISSU (full day journey)
              </div>
              {day7 ? <p
                onClick={handleDay7}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay7}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Breakfast early morning, check-out of the campsite. Depart for Chandra Taal lake. On the way , take a pit stop for snacks at Losar, the last village of Spiti Valley.
                  </li>
                  <li>
                  Reach Sissu evening & check-in to the camps. Dinner and overnight stay in camps. 
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

                onClick={handleDay8}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 8</button>
              SISSU - MANALI (2.5 hours)
              </div>
              {day8 ? <p
                onClick={handleDay8}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay8}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day8 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, departure for Manali. Reach Manali in evening hours & Solang Valley enroute. Transfer to manali hotel. 
                  </li>
                  <li>
                  Dinner and overnight stay.
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

                onClick={handleDay9}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 9</button>
              MANALI -DELHI
              </div>
              {day9 ? <p
                onClick={handleDay9}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay9}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day9 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast & Check out, departure for Manali Sightseeing. Later drop at Manali bus stop.
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
