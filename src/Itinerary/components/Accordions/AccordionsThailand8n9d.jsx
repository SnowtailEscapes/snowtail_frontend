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
    day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8 && day9;
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
          {day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8 && day9 ? "Collapse All" : "Expand All"}
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
                Arrival in Phuket | Welcome to the Pearl Of Andaman
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Upon arrival at Phuket airport, be greeted by our friendly
                    driver who will whisk you away to your hotel.
                  </li>
                  <li>
                    After check-in, the day is yours to explore at leisure.
                    Wander through bustling markets like Chillva Market and
                    Phuket Weekend Night Market, or dive into the vibrant
                    nightlife along Bangla Road.
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
                Excursion to Phi Phi Island & Maya Bay | Marvel at the Cliffs
                and Caves, Sandy Beaches and Turquoise Waters
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a journey to the breathtaking Phi Phi Islands,
                    including a visit to the iconic Maya Bay.
                  </li>
                  <li>
                    Enjoy an early morning transfer to Phuket Boat Lagoon Marina
                    to board a shared speedboat.
                  </li>
                  <li>
                    Explore Maya Bay, made famous by the movie "The Beach," and
                    marvel at its pristine beauty.
                  </li>
                  <li>
                    Visit Loh Samah Bay, Viking Cave, Monkey Beach, and Koh Phi
                    Phi Leh for unforgettable experiences.
                  </li>
                  <li>
                    Indulge in a delicious local lunch with stunning ocean
                    views. Return to Phuket in the evening and unwind at your
                    hotel.
                  </li>
                  <li>
                    Inclusions: Hotel transfers, boat tour, lunch, snorkeling
                    equipment, English-speaking guide.
                  </li>
                  <li>Overnight stay in Phuket</li>
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
                Transfer to Krabi | Gateway to Natural Wonders
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Bid farewell to Phuket as you journey to the picturesque
                    town of Krabi.
                  </li>
                  <li>
                    Spend the day at leisure, perhaps exploring the emerald
                    pools of Thung Teao Forest Natural Park or cruising the
                    crystalline waters surrounding Krabi's islands.
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
                Krabi 4 Island Tour | Witness the most beautiful islands in
                Krabi
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Prepare for a day of island hopping and adventure as you
                    embark on the Krabi 4 Island Tour.
                  </li>
                  <li>
                    After a delicious breakfast, embark on a shared speedboat
                    journey to explore the stunning islands of Krabi. Visit
                    iconic landmarks such as Phranang Cave, Chicken Island, Tup
                    Island, and Poda Island.
                  </li>
                  <li>
                    Indulge in a picnic lunch amidst the natural beauty of these
                    pristine islands.
                  </li>
                  <li>
                    Enjoy snorkeling, swimming, or simply basking in the sun on
                    the white sandy beaches.
                  </li>
                  <li>Return to your hotel in Krabi for a relaxing evening.</li>
                  <li>
                    Inclusions: Hotel transfers, boat tour, lunch, snorkeling
                    equipment, English-speaking guide.
                  </li>
                  <li>Overnight stay in Krabi.</li>
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
                Fly from Krabi to Bangkok | Transfer To Pattaya
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Fly to Bangkok and transfer to the coastal gem of Pattaya.
                  </li>
                  <li>
                    Spend the day at your leisure, exploring vibrant markets
                    like Pattaya Floating Market or relaxing on the golden sands
                    of Jomtien Beach
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
                Coral Island Tour With Lunch - Thrilling Adventures Await
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Enjoy a wholesome breakfast and get ready for a fascinating
                    Coral Island Tour in a shared speedboat.
                  </li>
                  <li>
                    The representative will pick you up from the hotel in a
                    private transfer and take you to the port where you'll board
                    the speedboat. Hop on a speed boat which will take around 45
                    minutes to reach Coral Island.
                  </li>
                  <li>
                    One can indulge in many activities as the Island offers a
                    variety of fun water activities to do and find something
                    you've always wanted to try.
                  </li>
                  <li>
                    Visit the most famous beach Tawaen Beach, where there is a
                    small harbor lined with small tourist shops. Choose from
                    snorkeling, sea walker diving, parasailing, jet-skiing, and
                    many more such activities.
                  </li>
                  <li>
                    Stroll around the white sandy beaches and watch the waves
                    rushing over the boulders. After an adventurous day, head
                    back to the hotel for an overnight stay.
                  </li>
                  <li>Overnight stay in Pattaya.</li>
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
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay7}
              >
                Transfer from Pattaya to Bangkok | City Tour of Bangkok
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After Breakfast, Journey to Bangkok and immerse yourself in
                    the city's rich culture and heritage.
                  </li>
                  <li>
                    Visit the awe-inspiring Mahaputtaram and the Golden Buddha,
                    marveling at their intricate beauty and cultural
                    significance.
                  </li>
                  <li>
                    Explore the renowned Gems Gallery, where exquisite jewelry
                    awaits. Return to the hotel for a relaxing overnight stay.
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
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay8}
              >
                Safari World Tour | Encounter Wildlife
              </div>
              {day8 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day8 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast embark on an unforgettable journey through
                    Safari World, Thailand's premier open zoo and leisure park.
                    Witness majestic wildlife up close, from African savannas to
                    tropical rainforests.
                  </li>
                  <li>
                    Enjoy thrilling animal shows and a jungle cruise before
                    returning to Bangkok for your final night.
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
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay9}
              >
                Departure | Farewell to Thailand
              </div>
              {day9 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day9 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out from the hotel and transfer to
                    Bangkok airport for your return flight home. Depart with a
                    treasure trove of memories from your enchanting journey
                    through Bangkok and Pattaya.
                  </li>
                  <p className="text-orange-400 mt-5">
                    Please note: Transfer timings may vary based on flight
                    schedules or hotel check-out times.
                  </p>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
