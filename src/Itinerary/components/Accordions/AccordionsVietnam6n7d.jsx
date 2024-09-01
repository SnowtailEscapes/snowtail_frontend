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
          {day1 && day2 && day3 && day4 && day5 && day6 && day7? "Collapse All" : "Expand All"}
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
                Arrival in Hanoi | Explore the Charms of the Old Quarters
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Upon arrival in Hanoi, be greeted by our friendly
                    representative and transfer to your hotel.
                  </li>

                  <li>
                    After check-in, embark on an enchanting cycle tour through
                    the vibrant streets of the Old Quarter. Experience the
                    bustling local life and immerse yourself in the rich culture
                    of Hanoi.
                  </li>
                  <li>
                    Conclude the day with a traditional water puppet show, a
                    captivating art form dating back to the 11th century.{" "}
                  </li>
                  <li>Overnight stay in Hanoi.</li>
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay3}
              >
                Day Excursion to Ninh Binh Province | Discover the "Halong Bay
                on Land"
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Enjoy breakfast before embarking on a journey to Ninh Binh
                    Province, renowned for its natural beauty.
                  </li>
                  <li>
                    Visit Hoa Lu, an ancient capital of Vietnam, and explore its
                    historic temples. Embark on a scenic boat ride through Tam
                    Coc, often referred to as "Halong Bay on Land."
                  </li>
                  <li>
                    Marvel at the limestone caves and picturesque landscapes
                    along the Ngo Dong River.
                  </li>

                  <li>Return to Hanoi for overnight stay.</li>
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
                Hanoi to Halong Bay | Cruise Amidst Surreal Archipelagos
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Depart for Halong Bay, a UNESCO World Heritage Site known
                    for its stunning limestone karsts.
                  </li>
                  <li>
                    Embark on a traditional junk boat and cruise through the
                    emerald waters of Halong Bay.
                  </li>
                  <li>
                    Explore hidden caves, pristine beaches, and floating
                    villages nestled amidst breathtaking scenery.
                  </li>
                  <li>
                    Indulge in Vietnamese cooking demonstrations and enjoy
                    leisure activities onboard.
                  </li>
                  <li>Overnight stay on the cruise in Halong Bay.</li>
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
                Halong Bay to Hanoi | Flight to Ho Chi Minh City
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Witness the sunrise with a Tai Chi lesson on the sundeck
                    before enjoying a delightful brunch.
                  </li>
                  <li>
                    Continue exploring Halong Bay's enchanting landscapes before
                    returning to Hanoi.
                  </li>
                  <li>
                    Transfer to the airport for your flight to Ho Chi Minh City,
                    the vibrant cultural hub of Vietnam.
                  </li>
                  <li>
                    Check-in to your hotel and unwind for the evening. Overnight
                    stay in Ho Chi Minh City.
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
                Explore Cu Chi Tunnels & Ho Chi Minh City
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a fascinating excursion to the Cu Chi Tunnels, a
                    remarkable relic of the Vietnam War.
                  </li>
                  <li>
                    Discover the intricate network of underground tunnels and
                    learn about Vietnam's wartime history.
                  </li>
                  <li>
                    Explore Ho Chi Minh City with visits to iconic landmarks
                    such as the War Remnants Museum and Notre Dame Cathedral.
                  </li>
                  <li>
                    Enjoy leisure time to shop, dine, and explore the city's
                    bustling streets.
                  </li>
                  <li>Overnight stay in Ho Chi Minh City.</li>
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
                Mekong Delta Tour | Experience Rural Vietnam
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a scenic journey to the Mekong Delta, known as the
                    "Rice Bowl" of Vietnam.
                  </li>
                  <li>
                    Cruise along the Mekong River and explore its picturesque
                    tributaries and floating markets.
                  </li>
                  <li>
                    Visit local villages, enjoy traditional music performances,
                    and savor authentic Vietnamese cuisine.
                  </li>
                  <li>
                    Explore the Vinh Trang Pagoda, a magnificent Buddhist temple
                    nestled amidst lush surroundings.
                  </li>
                  <li>Return to Ho Chi Minh City for overnight stay.</li>
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
                Departure | Farewell to Vietnam
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out from the hotel and transfer to
                    the airport for your departure flight.
                  </li>
                  <li>
                    Bid farewell to Vietnam with cherished memories of your
                    unforgettable journey.
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
