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

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);
  const handleDay6 = () => setDay6(!day6);
  const handleDay7 = () => setDay7(!day7);

  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3 && day4 && day5 && day6 && day7;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
    setDay7(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6 && day7
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
                Arrival in Kuala Lumpur | Welcome to the Capital City Of
                Malaysia
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrive at Kuala Lumpur International Airport and breeze
                    through immigration with ease.
                  </li>
                  <li>
                    Meet our representative for a seamless transfer to your
                    hotel. Check-in and unwind, soaking in the vibrant energy of
                    Kuala Lumpur. Explore the city's charming streets and iconic
                    landmarks at your leisure.
                  </li>
                  <li>Overnight stay in Kuala Lumpur.</li>
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
                Kuala Lumpur City Tour | Marvels from Skyscrapers to Historic
                Squares
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Indulge in a delicious breakfast before embarking on a
                    captivating city tour. Marvel at the juxtaposition of old
                    and new as you visit Kuala Lumpur's highlights.
                  </li>
                  <li>
                    Ascend the Petronas Twin Towers for unparalleled views of
                    the city skyline. Immerse yourself in the vibrant ambiance
                    of Chinatown and Merdeka Square.
                  </li>
                  <li>
                    Explore the serene beauty of Lake Gardens and the majestic
                    National Mosque. Return to your hotel for a relaxing evening
                    in Kuala Lumpur.
                  </li>
                  <li>Overnight stay in Kuala Lumpur.</li>
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
                Genting Highlands Excursion & Batu Caves | Fly to Penang
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, depart for an exhilarating day trip to
                    Genting Highlands. En route, visit the iconic Batu Caves, a
                    testament to Malaysia's rich cultural heritage.
                  </li>
                  <li>
                    Ascend to the summit of Genting Highlands via the longest
                    gondola lifts in Southeast Asia.
                  </li>
                  <li>
                    Experience thrilling rides and attractions amidst
                    breathtaking mountain vistas.
                  </li>
                  <li>
                    Later, board your flight to Penang, where our representative
                    will greet you. Check-in to your hotel and unwind in
                    Penang's welcoming embrace.
                  </li>
                  <li>Overnight stay in Penang.</li>
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
                Penang City Tour | Heritage Treasures & Natural Wonders
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Start your day with a hearty breakfast before embarking on a
                    journey through Penang's highlights. Ascend Penang Hill via
                    the historic funicular railway for panoramic views.
                  </li>
                  <li>
                    Discover the cultural splendor of Kek Lok Si Temple, South
                    East Asia's largest Buddhist temple.
                  </li>
                  <li>
                    Stroll through the lush Botanical Gardens and explore George
                    Town's historic landmarks. Immerse yourself in Penang's
                    diverse tapestry of cultures and flavors.
                  </li>
                  <li>
                    Return to your hotel for a tranquil evening in Penang.
                    Overnight stay in Penang.
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
                Flight to Langkawi | Leisurely Exploration
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out from your hotel and transfer to
                    Penang Airport for your flight to Langkawi.
                  </li>
                  <li>
                    Upon arrival, our representative will escort you to your
                    hotel for check-in.
                  </li>
                  <li>
                    Spend the day at leisure, unwinding on Langkawi's pristine
                    beaches or exploring its attractions.
                  </li>
                  <li>
                    Indulge in local cuisine, shop for souvenirs, or simply
                    relax and rejuvenate.
                  </li>
                  <li>Overnight stay in Langkawi.</li>
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
                Island Hopping Adventure | Explore Langkawi's Natural Splendor
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Savor a delicious breakfast before embarking on an island
                    hopping adventure. Hop aboard a shared boat and set off to
                    explore Langkawi's picturesque islands.
                  </li>
                  <li>
                    Visit Dayang Bunting Island, home to the mystical Lake of
                    the Pregnant Maiden. Witness eagles soar at Pulau Singa
                    Besar and bask in the beauty of Beras Basah Island.
                  </li>
                  <li>
                    Swim in turquoise waters, soak up the sun, and create
                    unforgettable memories. Return to your hotel, where the
                    evening is yours to enjoy at leisure.
                  </li>
                  <li>Overnight stay in Langkawi.</li>
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
                Departure | Farewell to Malaysia
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>

            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Enjoy a leisurely breakfast before checking out from your
                    hotel. Our representative will transfer you to Langkawi
                    Airport for your departure.
                  </li>
                  <li>
                    Bid farewell to Malaysia, taking with you cherished memories
                    of your Malaysian marvels adventure.
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
