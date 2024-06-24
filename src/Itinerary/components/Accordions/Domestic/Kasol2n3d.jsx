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


  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);


  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);

  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 ? "Collapse All" : "Expand All"}
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
                Kasol - Chalal - Kasol
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Reach Kasol & Check into the Camp. Enjoy the Welcome drink.
                    Freshen up, self-exploration of Kasol, Riverside walk.
                  </li>
                  <li>
                    Go and explore Chalal village crossing the famous Kasol
                    bridge to see the beauty in Parvati Valle.
                  </li>
                  <li>
                    Camping under stars followed by dinner and sleep in camps
                    alongside Parvati river.
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
                Kasol - Barshaini - Kheerganga
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Wake up early in the morning. After having breakfast, depart
                    for Barshaini. Arrive at Barshaini, start your trek to
                    Kheerganga.
                  </li>
                  <li>
                    Enjoy your walk in the heart of beautiful Parvati Valley.
                    Camping under stars followed by dinner and sleep.
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
                Kheerganga - Barshaini - Manikaran - Kasol - Delhi
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Wake up early in the morning and have breakfast. Trek back
                    to Barshaini and visit Manikaran Gurudwara Sahib.
                  </li>
                  <li>
                    You can explore the Kasol market before we start our journey
                    back home, with beautiful lifetime memories.
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
