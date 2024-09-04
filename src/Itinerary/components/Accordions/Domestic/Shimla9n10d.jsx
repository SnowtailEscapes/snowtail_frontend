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
  const [day10, setDay10] = useState(false);

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);
  const handleDay6 = () => setDay6(!day6);
  const handleDay7 = () => setDay7(!day7);
  const handleDay8 = () => setDay8(!day8);
  const handleDay9 = () => setDay9(!day9);
  const handleDay10 = () => setDay10(!day10);

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
      day9 &&
      day10;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
    setDay7(!allExpanded);
    setDay8(!allExpanded);
    setDay9(!allExpanded);
    setDay10(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn btn-md bg-light-shade mb-6" onClick={handleExpandAll}>
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
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 1</button>

                Shimla Arrival | Local Sightseeing
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
                    Leave Delhi in the morning from a pre-decided destination.
                    Reach Shimla by afternoon. Check-in at the hotel and freshen
                    up.
                  </li>
                  <li>
                    Get ready to visit Christ Church, Jakhoo Temple, Kalibari
                    Temple, Lakkar Bazaar, and the local market. Return to the
                    hotel by night. Overnight stay at Shimla.
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

                Full Day Trip to Kufri
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
                    Wake up in the morning and get mesmerized by the
                    breathtaking sunrise. After breakfast, visit Kufri, Green
                    Valley, Mini Zoo, Chini Bungalow, White Flower Hall,
                    Bhimakali Temple, Indira Gandhi Tourist Park.
                  </li>
                  <li>
                    Evening free to stroll in the famous shopping place of
                    Shimla town. Overnight at Shimla.
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

                Shimla to Manali
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
                    Wake up in the morning and have breakfast. Check out from
                    the hotel and start your journey towards Manali.
                  </li>
                  <li>
                    Enroute via Kullu and you can try adventure activities. En
                    route, visit Kasol Manikaran. Arrive at Manali by evening
                    and check-in at the hotel.
                  </li>
                  <li>Evening free for leisure. Overnight at Manali.</li>
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

                Manali Local Sightseeing
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
                    n the morning, have a delicious breakfast and energize
                    yourself to see the beautiful Manali. Enjoy the full-day
                    excursion to Local Manali.
                  </li>
                  <li>
                    Local Manali - Hadimba Temple, Vashisht Village, etc. Back
                    at the hotel by evening.
                  </li>
                  <li>Overnight stay in Manali.</li>
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

                Solang Valley & Sissu (Via Atal Tunnel)
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
                    After breakfast, check out the hotel half day for Solang
                    Valley & Sissu via Atal Tunnel (usually in the month of
                    March we find heavy snow around Gulabo).
                  </li>
                  <li>Later back to the hotel. Overnight stay in Manali.</li>
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

                Manali to Dharamshala
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
                    After breakfast, check out the hotel. Drive to Dharamshala.
                    Reach Dharamshala in the evening. On arrival, check in to
                    the hotel for overnight stay.
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

                Dharamshala Local Sightseeing
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
                    After breakfast, today drive for local sightseeing. Visit
                    Dalai Lama in Mcleodganj, St. John Church, Monasteries &
                    Bhagsunath Temple, the oldest temple in Dharamshala &
                    Waterfalls.
                  </li>
                  <li>
                    Also, visit Dal Lake and Natti for an outstanding view of
                    the snow-covered Himalayas. Overnight stay at the hotel.
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

                Dharamshala to Dalhousie
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
                    After breakfast, check out from the hotel and drive to
                    Dalhousie (130 Kilometres). Dalhousie is a popular hill
                    station situated at 2040 meters in the outer slope of the
                    Dhauladhar range of Himachal Pradesh.
                  </li>
                  <li>
                    On arrival, check in to the hotel. Overnight stay at the
                    hotel.
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

                Dalhousie – Khajjiar – Dalhousie
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
                    Post Breakfast, Visit: Panchpula, KalaTop Wildlife
                    Sanctuary, Dian Kund, Khajjiar (Switzerland Of India).
                    Dalhousie has tremendous forest trails overlooking vistas of
                    wooded hills and waterfalls.
                  </li>
                  <li>
                    The spectacular snow-covered Dhauladhar Mountains are also
                    visible from this enchanting town. Overnight stay in
                    Dalhousie.
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

                onClick={handleDay10}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 10</button>
                Departure
              </div>
              {day10 ? <p
                onClick={handleDay10}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay10}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day10 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Today after breakfast check out from the hotel and drive to
                    Delhi by cab. Reach Delhi in the evening.
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
