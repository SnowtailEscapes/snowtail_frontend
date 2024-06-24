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
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay1}
              >
                Arrival in Port Blair - Unveiling History and Beauty
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Upon your arrival at the Port Blair Airport, our warm
                    hospitality awaits you. Meet our representative holding your
                    personalized "Name Placard" and be whisked away to your
                    hotel.
                  </li>
                  <li>
                    After a refreshing break, embark on a journey through
                    history at the Cellular Jail, followed by a serene stroll
                    along Corbyn’s Cove Beach.
                  </li>
                  <li>
                    As the sun sets, witness the poignant Cellular Jail light &
                    sound show, a tribute to the island's tumultuous past.
                    Return to your hotel for a delightful dinner and a restful
                    overnight stay.
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
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay2}
              >
                Port Blair to Havelock Island - Nature's Playground
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After a sumptuous breakfast, bid adieu to Port Blair as we
                    embark on a scenic ferry ride to the enchanting Havelock
                    Island (Swaraj Dweep).
                  </li>
                  <li>
                    Upon arrival, immerse yourself in the natural wonders of
                    Elephant Beach, where snorkeling unveils the vibrant marine
                    life beneath the crystal-clear waters.
                  </li>
                  <li>
                    Continue your exploration at Radhanagar Beach, renowned for
                    its surreal sunsets and powdery sands. Return to your hotel
                    for a delectable dinner and a blissful overnight stay.
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
                Havelock Island to Neil Island - Secluded Bliss
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Indulge in a hearty breakfast before we set sail to the
                    picturesque Neil Island (Shaheed Dweep). Discover the hidden
                    gems of this tranquil paradise with a captivating 3-point
                    tour.
                  </li>
                  <li>
                    Lounge on the pristine shores of Bharatpur Beach, marvel at
                    the natural beauty of Laxmanpur Beach, and witness the
                    captivating allure of the Natural Bridge.
                  </li>
                  <li>
                    After a day of exploration, retreat to your hotel for a
                    delectable dinner and a peaceful overnight stay.
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
                Neil Island to Port Blair - Offbeat Explorations
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, bid farewell to Neil Island and return to
                    Port Blair. Upon arrival, embark on an offbeat adventure to
                    Chidiyatapu, where lush mangroves and serene beaches await.
                  </li>
                  <li>
                    Ascend Munda Pahar for panoramic views or revel in the
                    tranquility of the sunset point. Engage in a spot of
                    souvenir shopping at the local market, collecting memories
                    to cherish forever.
                  </li>
                  <li>
                    Return to your hotel for a delightful dinner and a restful
                    overnight stay.
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
                DEPARTURE
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Savor a delicious breakfast as you bid farewell to the
                    Andaman Islands, enriched with unforgettable memories.
                    Check-out from your hotel and proceed to the airport, where
                    our team will ensure a seamless transfer according to your
                    flight timings.
                  </li>
                  <li>
                    Depart with a heart full of cherished experiences and a
                    promise to return to this paradise on earth.
                  </li>
                  <li>
                    Experience the magic of Andaman with us - where every moment
                    is a masterpiece painted by nature's hand.
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
