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
        <button className="btn btn-md bg-light-shade mb-6" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 ? "Collapse All" : "Expand All"}
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
                Arrival in Hanoi | Welcome to the Land of Ascending Dragon
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
                    Upon arrival at Hanoi Airport, our friendly driver will
                    greet you and whisk you away to your hotel.
                  </li>

                  <li>
                    Take the rest of the day to immerse yourself in the
                    enchanting ambiance of Hanoi.
                  </li>
                  <li>
                    Explore the iconic Hoan Kiem Lake, visit the Ngoc Son
                    Temple, or marvel at the grandeur of St. Joseph's Cathedral.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay2}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 2</button>

                Excursion to Ninh Binh | Explore Ancient Temples and Mystical
                Caves
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
                    Embark on a journey to Ninh Binh, where ancient history and
                    natural wonders await.
                  </li>
                  <li>
                    Discover the historic capital of Vietnam, Hao Lu, and its
                    majestic temples of the Le and Dinh Dynasties.
                  </li>
                  <li>
                    Cruise along the tranquil waters of Tam Coc, also known as
                    "Halong Bay on Land," and be mesmerized by its limestone
                    caves and lush landscapes.
                  </li>

                  <li>
                    Cycle through quaint villages to Bich Dong Pagoda before
                    returning to Hanoi for a well-deserved rest.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay3}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 3</button>

                Departure From Hanoi | Farewell With Fond Memories
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
                    As your adventure draws to a close, our driver will escort
                    you to the airport for your departure.
                  </li>
                  <li>
                    Take a rest forBid adieu to Vietnam with cherished memories
                    of its rich culture, warm hospitality, and breathtaking
                    landscapes.
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

                Halong Bay to Hanoi | Discover Hidden Caves and Historical
                Landmarks
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
                    Awake to the serenity of Halong Bay and join a Tai Chi
                    session on deck as the morning unfolds.
                  </li>
                  <li>
                    Explore the stunning Surprise Caves, marveling at their
                    intricate formations and natural splendor.
                  </li>
                  <li>
                    Return to Hanoi and enjoy leisure time exploring the city's
                    iconic landmarks, such as Ho Chi Minh's Mausoleum and the
                    Temple of Literature.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay5}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 5</button>

                Departure From Hanoi | Farewell With Fond Memories
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
                    As your adventure draws to a close, our driver will escort
                    you to the airport for your departure.
                  </li>
                  <li>
                    Bid adieu to Vietnam with cherished memories of its rich
                    culture, warm hospitality, and breathtaking landscapes.
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
                Departure | Cherish Happy Memories
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
                    Enjoy a delicious breakfast at the hotel before checking out
                    Transfer to Denpasar Airport for your onward journey,
                    carrying with you cherished memories of your Bali honeymoon
                    getaway.
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
