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

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);

  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3 && day4 && day5 ;
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay1}
              >
                Arrival in Bangkok & Transfer to Pattaya - Dive into the
                Nightlife Capital
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrive at Bangkok airport, where our representative will
                    greet you and transfer you to Pattaya, approximately 147 km
                    from Bangkok. Marvel at the countryside scenery during the
                    journey. Upon arrival, check-in at the hotel and spend the
                    day exploring Pattaya's vibrant streets. Overnight stay in
                    Pattaya.
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
                Coral Island Tour With Lunch - Thrilling Adventures Await
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Enjoy a wholesome breakfast and get ready for a fascinating
                    Coral Island Tour in a shared speedboat. The representative
                    will pick you up from the hotel in a private transfer and
                    take you to the port where you'll board the speedboat.
                  </li>
                  <li>
                    {" "}
                    Hop on a speed boat which will take around 45 minutes to
                    reach Coral Island.{" "}
                  </li>
                  <li>
                    One can indulge in many activities as the Island offers a
                    variety of fun water activities to do and find something
                    you've always wanted to try.{" "}
                  </li>
                  <li>
                    Visit the most famous beach Tawaen Beach, where there is a
                    small harbor lined with small tourist shops.{" "}
                  </li>
                  <li>
                    Choose from snorkeling, sea walker diving, parasailing,
                    jet-skiing, and many more such activities. Stroll around the
                    white sandy beaches and watch the waves rushing over the
                    boulders.{" "}
                  </li>
                  <li>
                    After an adventurous day, head back to the hotel for an
                    overnight stay. Overnight stay in Pattaya.
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
                Transfer from Pattaya to Bangkok - Welcome to the City of Angels
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Indulge in a hearty breakfast before departing for Bangkok,
                    a journey of approximately 3 hours through scenic
                    countryside.
                  </li>
                  <li>
                    After check-in, take the evening to leisurely explore the
                    city's enchanting streets, bustling markets, and delightful
                    cafes.
                  </li>
                  <li>
                    Immerse yourself in the mesmerizing beauty of Bangkok at
                    night. Overnight stay in Bangkok.
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
                City Tour of Bangkok - Unveiling the Charms of the City.
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After a delicious breakfast, embark on a captivating city
                    tour of Bangkok. Visit the awe-inspiring Mahaputtaram and
                    the Golden Buddha, marveling at their intricate beauty and
                    cultural significance.
                  </li>
                  <li>
                    Gadisar Lake reservoir – Artificial reservoir surrounded by
                    temples
                  </li>
                  <li>
                    Explore the renowned Gems Gallery, where exquisite jewelry
                    awaits.
                  </li>
                  <li>Return to the hotel for a relaxing overnight stay.</li>
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
                Departure - Cherish Memories Forever
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out from the hotel and transfer to
                    Bangkok airport for your return flight home. Depart with a
                    treasure trove of memories from your enchanting journey
                    through Bangkok and Pattaya.
                  </li>
                  <p className="text-orange-400">
                    Please note: Transfer timings from Pattaya to Bangkok
                    airport will be arranged according to flight schedules or
                    standard hotel check-out times.
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
