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
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6
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
                Arrival in Dubai (Dhow Cruise Creek)
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Welcome to Dubai, where luxury meets adventure! Upon your
                    arrival at Dubai Airport, our friendly representative will
                    greet you with a personalized "Name Placard" and escort you
                    to your hotel.
                  </li>
                  <li>
                    After freshening up, immerse yourself in the enchanting
                    ambiance of Dubai with an evening Dhow Cruise at the Marina
                    or Creek.
                  </li>
                  <li>
                    Indulge in a sumptuous barbecue dinner amidst the glittering
                    skyline, accompanied by captivating entertainment including
                    traditional music and mesmerizing belly dancing. It's the
                    perfect start to your Dubai escapade.
                  </li>

                  <li> Overnight stay in Dubai.</li>
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
                Dubai (City Tour)
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After a delicious breakfast, embark on a comprehensive city
                    tour of Dubai, where ancient traditions blend seamlessly
                    with modern marvels.
                  </li>
                  <li>
                    Visit the majestic Grand Mosque and explore the vibrant
                    Meena Bazaar, a paradise for shopaholics. Spend the
                    afternoon at the iconic Global Village, a cultural
                    extravaganza showcasing the diversity of the world.
                  </li>
                  <li>
                    Return to your hotel for a relaxing overnight stay, filled
                    with memories of Dubai's allure.
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
                Abu Dhabi (City Tour & Ferrari World)
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Today, journey to the dynamic capital of the UAE, Abu Dhabi,
                    nestled on an island in the Arabian Gulf. Discover the
                    architectural splendor of the Sheikh Zayed Grand Mosque,
                    adorned with intricate white marble domes.
                  </li>
                  <li>
                    Then, brace yourself for an adrenaline-pumping adventure at
                    Ferrari World, home to thrilling rides and attractions
                    inspired by the legendary Italian automotive brand.
                  </li>
                  <li>
                    After an exhilarating day, return to Dubai for a peaceful
                    overnight stay.
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
                Dubai (Desert Safari)
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on an unforgettable desert safari adventure, where
                    the golden sands of Dubai's desert await your exploration.
                    Feel the thrill of dune bashing in a rugged jeep, try your
                    hand at sand skiing, and enjoy a serene camel ride as the
                    sun sets over the horizon.
                  </li>
                  <li>
                    Immerse yourself in traditional Arabian hospitality with
                    henna painting, aromatic Arabic coffee, and a delectable
                    barbecue dinner under the starlit sky.
                  </li>
                  <li>
                    Return to your hotel for a night of relaxation and
                    reflection.
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
                Departure | Take a plethora of memories with you
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    As your exhilarating journey in Dubai comes to an end, we
                    bid you farewell with cherished memories.
                  </li>
                  <li>
                    Our representative will ensure a smooth transfer to Dubai
                    Airport for your onward journey. Depart with a heart full of
                    unforgettable experiences and the promise of returning to
                    Dubai, a city where dreams come to life.
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
