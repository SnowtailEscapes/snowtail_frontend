import "../../styles/accordians.css";
import { useEffect, useState } from "react";

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
      day9;
    setDay1(!allExpanded);
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
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 &&
          day2 &&
          day3 &&
          day4 &&
          day5 &&
          day6 &&
          day7 &&
          day8 &&
          day9 
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay1}
              >
                Arrival in Tokyo | Day at Leisure
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Welcome to Japan! Arrive at Narita International Airport and
                    transfer to your hotel. Spend your first day at leisure,
                    exploring attractions like Tsukiji Hoganji Temple, the
                    Samurai Theater, Yoyogi Park, and the bustling Shibuya
                    Crossing. Return to your hotel for an overnight stay.
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
                Tokyo Sightseeing Tour
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Start your day at Matsuya Ginza for a full day of sightseeing. Visit the famous Meiji Jingu Shrine, the Imperial Palace, and Senso-Ji Temple. 
                  </li>
                  <li>
                  Enjoy panoramic city views from the Skytree observation deck. Return to your hotel for an overnight stay..
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
                Excursion to Mount Fuji and Hakone
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Travel to Mount Fuji via Shinjuku Love. Explore the Mt. Fuji Subaru Line 5th Station and enjoy a ropeway ride in Hakone. 
                  </li>
                  <li>
                  Visit the stunning Owakudani Valley before heading back to Tokyo via bullet train.
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
                Arrival in Hiroshima | Day at Leisure
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Board a bullet train to Hiroshima and check into your hotel.
                  </li>
                  <li>
                  Spend the day exploring Shukkeien Garden, Hiroshima Castle, and Mitaki-dera Temple at your leisure.
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
                Hiroshima and Miyajima Sightseeing Tour
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Join a guided tour of Hiroshima and Miyajima. Visit the Peace Memorial Park, Itsukushima Shrine, the Atomic Bomb Dome, and the Hiroshima Peace Memorial Museum. Return to your hotel for an overnight stay.
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay6}
              >
                Arrival in Osaka | Day at Leisure
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Travel to Osaka by Shinkansen bullet train and check into your hotel. Explore attractions like the Osaka Museum of Housing and Living, Osaka Science Museum, and Den Den Town.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 7</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay7}
              >
                Day Trip to Kyoto and Nara
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Embark on a day trip to Kyoto and Nara. Visit the iconic Kinkakuji Temple, Todaiji Temple, Nijo Castle, Nara Park, and the Arashiyama District. Return to your hotel in Osaka for an overnight stay.
                  </li>
                 
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay8}
              >
                Day at Leisure in Osaka
              </div>
              {day8 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day8 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Spend your day exploring Osaka at your own pace. Visit Osaka Castle, the Tempozan Giant Ferris Wheel, Den Den Town, Osaka Tenmangu, and Namba Yasaka Shrine.
                  </li>
                  <li>
                  Return to your hotel for an overnight stay.
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 9</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay9}
              >
                Departure Day
              </div>
              {day9 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day9 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Check out of your hotel and transfer to Osaka International Airport for your departure, concluding your unforgettable journey through Japan.
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
