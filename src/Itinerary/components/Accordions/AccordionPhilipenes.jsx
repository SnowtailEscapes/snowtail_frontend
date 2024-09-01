import React, { useState } from "react";
import "../../styles/accordians.css";
import { useEffect } from "react";
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
          {day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8 ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <div className="accordians">
        <div className="accor join">
          <h5 className="join-item">Day 1</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay1}
              >
                Arrival in Manila
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Upon arrival at Manila Airport, our representative will greet you with a placard and assist with your transfer to the hotel. 
                  </li>
                  <li>
                  Check-in and relax for the remainder of the day, soaking in the vibrant city atmosphere.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay2}
              >
                Manila to Puerto Princesa
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, transfer to the airport for your flight to Puerto Princesa. On arrival, our representative will escort you to your hotel.
                  </li>
                  <li>
                  Check-in and enjoy the rest of your day at leisure, exploring the local surroundings.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay3}
              >
                Private Underground River Tour
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Experience an exclusive tour of the famed underground river. This semi-private tour includes private land and motorboat transfers, and a shared subterranean river tour by rowing boat
                  </li>
                  <li>
                  Marvel at the dramatic rock formations within the cave, with lunch, guide services, and entrance fees all included.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay4}
              >
                Journey from Puerto Princesa to El Nido
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, check out and proceed to El Nido by van. Enjoy the scenic journey and arrive with delightful memories of Puerto Princesa.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay5}
              >
                Private Linapacan Island Day Trip with Buffet Lunch
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Set off on a thrilling adventure to El Nido’s hidden beaches and serene shrines. Dive into crystal-clear waters teeming with vibrant marine life or unwind on pristine sands
                  </li>
                  <li>
                  This day trip promises an intimate experience with nature’s untouched beauty, complemented by a delicious buffet lunch.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay6}
              >
                El Nido to Manila
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Following breakfast, transfer to the airport for your flight back to Manila.
                  </li>
                  <li>
                  Upon arrival, our representative will guide you to your hotel for check-in. Enjoy the rest of the day exploring Manila at your own pace.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay7}
              >
                Half-Day Shore Excursion - Museums
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Delve into Manila’s rich arts and culture scene with a half-day shore excursion. Visit the National Art Gallery and the Ayala Museum, where you’ll gain insight into the Philippines' artistic heritage. 
                  </li>
                  <li>
                  This tour includes round-trip transportation from the port, entrance fees, and informative commentary from your guide.

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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay8}
              >
                Departure
              </div>
              {day8 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day8 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  After breakfast, check out from your hotel and transfer to the airport for your flight home, carrying with you unforgettable memories of the Philippines.
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
