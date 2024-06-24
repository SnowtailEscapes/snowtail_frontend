import "../../styles/accordians.css";
import { useEffect, useState } from "react";

import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Accordion() {
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
                ARRIVAL ALMATY
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Arrival at Almaty airport. Meet your guide in the arrival
                    hall holding a placard and transfer to the hotel for
                    immediate check in. Evening at Leisure.
                  </li>
                  <li>Enjoy night life by yourself. Overnight stay.</li>
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
                ALMATY CITY TOUR
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, head out for sightseeing. This tour
                    provides you the best opportunity to see the beautiful
                    mountain surroundings of Almaty city.
                  </li>
                  <li>
                    You will know more about the history and development of the
                    southern capital of Kazakhstan and see its major
                    attractions: Palace of President, Republic Square and
                    Monument of Independence, and Astana Square, Panfilov Park,
                    Abai Square and Palace of Republic, Presidential Park, Later
                    visit Ziloni Bazar.
                  </li>
                  <li>Evening at leisure.Back to the hotel, overnight stay.</li>
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
                CHARYN CANYON & KOLSAI LAKE
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, we will set off for Oi-Qaragay and follow
                    the new Silk Road of our days – the Khorgos-Almaty highway.
                  </li>
                  <li>
                    Proceed for Charyn Canyon tourThe canyon formation is along
                    the banks of the fast flowing Charyn River in a northern
                    flow stretch of about 80 kilometres, which is a tributary of
                    the
                  </li>
                  <li>
                    Proceed for Charyn Canyon tour. The canyon formation is
                    along the banks of the fast flowing Charyn River in a
                    northern flow stretch of about 80 kilometres, which is a
                    tributary of the Ile River; the river has a total length of
                    393 kilometres. The river rises from the Tian Shan Mountains
                    that is spread over the arid semi-desert to the east of
                    Almaty. In parts, it attains a depth of 150 to 300 metres.
                  </li>
                  <li>
                    The geological formation of the canyon is of sedimentary red
                    sandstone which has been subject to the "atmogenic process"
                    of water and wind erosion resulting in "weird and colourful
                    formations" in the form of sculptures.
                  </li>
                  <p className="text-color1">
                    Note: Packed Lunch will be served
                  </p>
                  <li>
                    Proceed to Kolsai Lakes. It’s a group of three picturesque
                    alpine lakes located in the Almaty region of Kazakhstan,
                    near the border with Kyrgyzstan. The lakes are part of the
                    Kolsai-Kolderi National Park, which covers an area of about
                    16,800 hectares. Drop back to Hotel. Overnight stay.
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
                MEADOWS & SHYMBULAK TOUR
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    This tour provides you the best opportunity to see the
                    beautiful mountain surroundings of Almaty city.The first
                    stop of the tour awaits you in the Meadow Gorge, where in
                    the wonderful mountains of Trans-Ili Ala-Tau the largest
                    high mountain skating rink in the world is located as well
                    as the huge dam, protecting the city from destructive
                    mudflows formed on the tops of the western Tien Shan.
                  </li>
                  <li>
                    Next destination is Chimbulak ski resortC (Cable Car Fee
                    Included), located at an altitude of 2230 meters above sea
                    level. It is very popular for its mild climate, large
                    quantity of sunny days and snow through the winter and
                    remarkable scenery of mountain ranges. · Transfer to Hotel.
                    Overnight stay.
                  </li>
                  <p className="text-color1">
                    Important: please take an actual passport (not a copy) for
                    hiking, cause the border line with Kyrgyzstan is located
                    around 10 km from second Kolsai lake and there can be
                    accidental document checks by border line soldiers.
                  </p>
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
                KOK-TOBE Hill & GOODBYE ALMATY
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After breakfast, check out the hotel. Transfer to KOK-TOBE
                    Hill(2 way cable car). Later transfer to Almaty Airport.
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
