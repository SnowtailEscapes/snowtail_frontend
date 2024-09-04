import "../../styles/accordians.css";
import { useEffect, useState } from "react";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Accordion() {
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
    const allExpanded =
      day1 &&
      day2 &&
      day3 &&
      day4 &&
      day5 &&
      day6;
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
          {day1 &&
          day2 &&
          day3 &&
          day4 &&
          day5 &&
          day6 
            ? "Collapse All"
            : "Expand All"}
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

                Kathmandu - Nagarkot
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
                    Arrival at Tribhuvan International Airport. Meet and greet
                    by our tour representative. Drive to Nagarkot (32 km, 1.5hrs
                    drive). Upon arrival, transfer to your respective hotel and
                    check-in.
                  </li>
                  <li>Overnight stay in Nagarkot.</li>
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

                Nagarkot - Kathmandu
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
                    Enjoy a sunrise view along with a panoramic view of the
                    Himalayas (if weather permits). Breakfast at a hotel. Drive
                    back to Kathmandu en-route visit Bhaktapur Durbar Square.
                    Then, proceed for Kathmandu city sightseeing tour covering
                    Patan Durbar Square & Swayambhunath Stupa.
                  </li>
                  <li>
                    Transfer to hotel and check-in. After freshening up, visit
                    Pashupatinath Temple for evening aarti.
                  </li>
                  <li>Overnight stay in Kathmandu. </li>
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

                Kathmandu - Pokhara
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
                    Drive to Pokhara (210 km, 8-9 hrs. drive) through scenic
                    views on the national highway along Trishuli River. Upon
                    arrival, transfer to the hotel. We suggest you stroll around
                    the lakeside area during the evening. Overnight stay in
                    Pokhara. Note: Road section near Pokhara approx.
                  </li>
                  <li>
                    100 km of road section is under construction and is off road
                    with bumpy ride. So driving for Kathmandu-Pokhara/ vice
                    versa will be affected. And we suggest taking inter
                    connecting flights.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay4}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 4</button>

                Pokhara Sightseeing
              </div>
              {day5 ? <p
                onClick={handleDay1}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay1}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Early morning excursion trip to Sarangkot to view sunrise
                    over the Himalayas (if weather permits). Return back to the
                    hotel for breakfast.
                  </li>
                  <li>
                    Then, a city tour covering Bindabasini Temple, Seti Gorge,
                    Gupteshwor Cave, David’s Fall and with an hour of boating in
                    Fewa Lake till Taal Barahi.
                  </li>
                  <li>Overnight stay in Pokhara</li>
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

                Pokhara - Kathmandu
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
                    Drive back to Kathmandu (8-9 hours’ drive). Upon arrival,
                    transfer to your respective hotel and check-in.
                  </li>
                  <li>
                  Overnight stay in Kathmandu.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay6}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 6</button>

               Departure
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
                  Free time until time of departure. Timely transfer to airport for international departure.
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
