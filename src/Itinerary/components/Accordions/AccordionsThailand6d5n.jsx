import React, { useState } from "react";
import "../../styles/accordians.css";
import { useEffect } from "react";
import dot from "../../assets/dot.svg";
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
          {day1 && day2 && day3 && day4 && day5 ? "Collapse All" : "Expand All"}
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

                Arrival in Phuket | Transfer to Krabi | A beautiful town lies
                along the coast of Southern Thailand
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
                    Welcome to Southern Thailand! Upon your arrival at Phuket
                    Airport, our friendly representative will greet you and
                    whisk you away to the picturesque town of Krabi.
                  </li>
                  <li>
                    Enjoy a scenic 2-hour drive to Krabi, soaking in the
                    breathtaking coastal views along the way. Check-in to your
                    hotel and unwind before embarking on your Krabi adventure
                  </li>
                  <li>
                    Optional activities include exploring Krabi Town, relaxing
                    at Emerald Pool in Thung Teao Forest Natural Park, or
                    renting a boat to explore the nearby islands.
                  </li>
                  <li>Overnight stay in Krabi.</li>
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
                Krabi 4 Island Tour | Witness the most beautiful islands in
                Krabi
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
                    Prepare for a day of island hopping and adventure as you
                    embark on the Krabi 4 Island Tour. After a delicious
                    breakfast, embark on a shared speedboat journey to explore
                    the stunning islands of Krabi.
                  </li>
                  <li>
                    Visit iconic landmarks such as Phranang Cave, Chicken
                    Island, Tup Island, and Poda Island. Indulge in a picnic
                    lunch amidst the natural beauty of these pristine islands.
                  </li>
                  <li>
                    Enjoy snorkeling, swimming, or simply basking in the sun on
                    the white sandy beaches. Return to your hotel in Krabi for a
                    relaxing evening.
                  </li>
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
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay3}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 3</button>

                Transfer to Phuket from Krabi | Welcome to the Pearl of Andaman
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
                    Bid farewell to Krabi as you journey to the vibrant island
                    of Phuket. After breakfast, embark on a private transfer to
                    Phuket, marveling at the scenic landscapes along the way.
                  </li>
                  <li>
                    Check-in to your hotel in Phuket and spend the rest of the
                    day at leisure. Explore the bustling streets, indulge in
                    local cuisine, or simply relax on the beach.
                  </li>
                  <li>Overnight stay in Phuket.</li>
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

                Excursion to Phi Phi Island & Maya Bay | Marvel at the Cliffs
                and Caves, Sandy Beaches and Turquoise Waters
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
                    Embark on a journey to the breathtaking Phi Phi Islands,
                    including a visit to the iconic Maya Bay. Enjoy an early
                    morning transfer to Phuket Boat Lagoon Marina to board a
                    shared speedboat.
                  </li>
                  <li>
                    Explore Maya Bay, made famous by the movie "The Beach," and
                    marvel at its pristine beauty. Visit Loh Samah Bay, Viking
                    Cave, Monkey Beach, and Koh Phi Phi Leh for unforgettable
                    experiences.
                  </li>
                  <li>
                    Indulge in a delicious local lunch with stunning ocean
                    views. Return to Phuket in the evening and unwind at your
                    hotel.
                  </li>
                  <li>
                    {" "}
                    Inclusions: Hotel transfers, boat tour, lunch, snorkeling
                    equipment, English-speaking guide.
                  </li>
                  <li>Overnight stay in Phuket.</li>
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

                Half Day City Tour of Phuket | Marvel at the old world charm of
                Phuket Town
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
                    Discover the rich cultural heritage and scenic beauty of
                    Phuket with a half-day city tour. Explore popular
                    attractions such as Karon View Point, Big Buddha, and Wat
                    Chalong Temple.
                  </li>
                  <li>
                    Wander through the charming streets of Phuket Old Town and
                    immerse yourself in its Sino-Portuguese architecture.
                    Experience the vibrant atmosphere of Phuket Weekend Market
                    and sample local delicacies. Enjoy the evening at leisure,
                    perhaps with a relaxing massage or a stroll along the beach
                  </li>
                  <li>Overnight stay in Phuket.</li>
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

                Departure | Take a plethora of memories with you
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
                    Say goodbye to Thailand with cherished memories as you
                    depart from Phuket International Airport. Enjoy a final
                    breakfast at your hotel before transferring to the airport
                    for your onward journey. Depart with a bag full of
                    unforgettable experiences and memories to last a lifetime.
                  </li>
                  <p className="text-orange-400 mt-1">
                    Note: Transfer timings from Krabi to Phuket will be
                    coordinated based on flight timings or standard hotel
                    check-out times.
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
