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

  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);

  const handleExpandAll = () => {
    const allExpanded = day1 && day2 && day3 && day4;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 ? "Collapse All" : "Expand All"}
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
                Arrival in Mussoorie
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a picturesque journey to Mussoorie, the jewel of
                    Uttarakhand. Upon arrival, settle into your cozy hotel and
                    immerse yourself in the tranquility of the surroundings.
                  </li>
                  <li>
                    Spend the day at leisure, strolling through the quaint
                    streets or indulging in some local shopping delights.
                  </li>
                  <li>Overnight stay in hotel.</li>
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
                Mussoorie Exploration
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After a delicious breakfast, set out to explore the
                    enchanting hill station of Mussoorie. Begin your day with a
                    visit to Lal Tibba, the highest point offering panoramic
                    views of the Himalayan range.
                  </li>
                  <li>
                    Delight in the charm of Gun Hill and the serene Municipal
                    Gardens. Capture timeless moments at the iconic Kempty Falls
                    before returning to your hotel for a restful night's sleep.
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay3}
              >
                Mussoorie to Rishikesh
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Bid adieu to the serene landscapes of Mussoorie as you
                    embark on a journey to Rishikesh, the gateway to
                    spirituality. En route, explore the scenic wonders of
                    Dehradun, including the mystical Robbers Cave and the
                    rejuvenating Sahastradhara.
                  </li>
                  <li>
                    Upon reaching Rishikesh, visit the iconic landmarks of Ram
                    Jhula, Laxman Jhula, and Bharat Mandir, soaking in the
                    divine aura of the holy city.
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
                className="collapse-title hover:cursor-pointer title"
                onClick={handleDay4}
              >
                DEPARTURE
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After a hearty breakfast, prepare for departure from
                    Rishikesh, carrying memories of a lifetime.
                  </li>
                  <li>
                    Before bidding farewell, embark on an exhilarating river
                    rafting adventure to add a thrilling finale to your journey.
                    Depart for Haridwar with hearts full of cherished
                    experiences, ready to embrace the next adventure life has in
                    store.
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
