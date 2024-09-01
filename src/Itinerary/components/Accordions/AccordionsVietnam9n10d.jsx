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
  const handleDay10 = () => setDay10(!day9);

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
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 &&
          day2 &&
          day3 &&
          day4 &&
          day5 &&
          day6 &&
          day7 &&
          day8 &&
          day9 &&
          day10
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay1}
              >
                Arrival in Hanoi - Welcome to the Land of Ascending Dragon
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Upon arrival at Hanoi Airport, you'll be greeted by our
                    friendly driver who will transfer you to your hotel.
                  </li>

                  <li>
                    Take some time to settle in before venturing out to explore
                    the vibrant city.
                  </li>
                  <li>
                    Visit iconic landmarks such as Hoan Kiem Lake and Ngoc Son
                    Temple, soaking in the rich history and culture of Hanoi.
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
                Excursion to Ninh Binh - Discover Limestone Caves and Ancient
                Temples
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a day trip to Ninh Binh, where you'll explore the
                    ancient capital of Hao Lu and its fascinating temples.
                  </li>
                  <li>
                    Cruise along the serene waters of Tam Coc, admiring the
                    limestone karsts and lush rice fields.
                  </li>
                  <li>
                    Cycle through picturesque villages to Bich Dong Pagoda,
                    immersing yourself in the natural beauty of the Vietnamese
                    countryside.
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
                Hanoi to Halong Bay - Overnight Cruise Adventure
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Set sail for the majestic Halong Bay, a UNESCO World
                    Heritage Site renowned for its emerald waters and towering
                    limestone islands.
                  </li>
                  <li>
                    Board a luxury cruise and embark on a journey through this
                    natural wonderland.
                  </li>
                  <li>
                    Swim, kayak, and indulge in a cooking class onboard before
                    spending the night surrounded by breathtaking scenery.
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
                Halong Bay to Da Nang via Hanoi - Explore the Surprising Caves
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Start your day with a Tai Chi lesson on the cruise deck
                    before visiting the awe-inspiring Surprise Caves.
                  </li>
                  <li>
                    Afterward, return to Hanoi and catch a flight to Da Nang,
                    where you'll continue your adventure
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
                Ba Na Hill Day Tour - Walk Among the Clouds
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Venture to the scenic Ba Na Hills and marvel at the iconic
                    Golden Hand Bridge, a must-visit spot for Instagram
                    enthusiasts.
                  </li>
                  <li>
                    Explore the enchanting gardens of Le Jardin D’Amour and
                    visit Linh Ung Pagoda before enjoying free time at Fantasy
                    Park.
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
                Da Nang to Phu Quoc - Journey to Paradise
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Relax on the pristine beaches of Da Nang before catching a
                    flight to the idyllic island of Phu Quoc.
                  </li>
                  <li>
                    Spend the evening unwinding at your beachfront resort,
                    taking in the stunning sunset over the turquoise waters.
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
                Day at Leisure in Phu Quoc - Island Paradise Exploration
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Savor a day of relaxation and adventure on the tropical
                    island of Phu Quoc.
                  </li>
                  <li>
                    Discover hidden waterfalls, explore historic sites, and
                    snorkel among vibrant coral reefs.
                  </li>
                  <li>
                    Wrap up your day with a visit to the bustling night market
                    for a taste of local cuisine and souvenirs.
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
                Phu Quoc to Ho Chi Minh | Spend a Day at Leisure
              </div>
              {day8 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day8 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Post-check out from your hotel, spend the rest of the
                    afternoon at leisure. You can take an extraordinary cable
                    car ride to Hon Thom Island, witness the fishing village's
                    charm, and experience fishing activities.
                  </li>
                  <li>
                    Later, in the evening, meet the driver at the entrance.
                  </li>
                  <li>
                    The driver will drop you at the Phu Quoc airport for your
                    flight to Ho Chi Minh City.
                  </li>
                  <li>
                    Reach Ho Chi Minh City and get transferred to the hotel for
                    an overnight stay.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay9}
              >
                Mekong Delta Tour - Immersion in Vietnamese Village Life
              </div>
              {day9 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day9 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    The driver will pick you up from the hotel and take you to
                    My Tho, the floating market city of Vietnam.
                  </li>
                  <li>
                    Begin your tour by visiting the Vinh Trang Pagoda, followed
                    by a boat ride along the village. You will stop by the
                    Tortoise Islet to have lunch before continuing your ride
                    towards An Khanh.
                  </li>
                  <li>
                    Experience rural life in Vietnam as you cruise on a
                    hand-rowed sampan and listen to Southern Vietnamese folk
                    music.
                  </li>
                  <li>
                    Later, get transferred to Ho Chi Minh City for an overnight
                    stay.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          <h5 className="join-item">Day 10</h5>
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay10}
              >
                Departure - Farewell to Vietnam
              </div>
              {day10 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day10 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Pack your bags and check out from your hotel in Ho Chi Minh
                    City.
                  </li>
                  <li>
                    The driver will pick you up and drop you off at Ho Chi Minh
                    City Airport to board your flight back home.
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
