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
          {day1 && day2 && day3 && day4 
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
                Arrival in Dubai | Experience the Magic of Dhow Cruise Creek
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Welcome to Dubai! Upon arrival at Dubai Airport, be greeted
                    by our friendly representative holding your personalized
                    "Name Placard" to assist you to your hotel. Freshen up and
                    immerse yourself in the mesmerizing charm of Dubai with an
                    enchanting Dhow Cruise Creek experience in the evening
                  </li>
                  <li>
                    Glide along the historic Dubai Creek aboard a traditional
                    wooden Dhow, marveling at the breathtaking skyline of Dubai
                    Marina and JBR.
                  </li>
                  <li>
                    Indulge in a delectable buffet barbecue dinner amidst the
                    captivating lights of the city, accompanied by live
                    entertainment including music and enchanting belly dancing.
                    An unforgettable introduction to Dubai awaits you.
                  </li>

                  <li>Overnight stay in Dubai.</li>
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
                Explore Dubai's Highlights | City Tour & Desert Safari Adventure
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After a hearty breakfast, embark on a half-day City Tour,
                    exploring iconic landmarks such as the majestic Grand Mosque
                    and the vibrant Meena Bazaar, where you can immerse yourself
                    in the bustling atmosphere of Dubai's markets.
                  </li>
                  <li>
                    Following lunch, brace yourself for an exhilarating Desert
                    Safari adventure. Experience the thrill of dune bashing,
                    camel riding, and sandboarding amidst the golden sands of
                    the Dubai desert.
                  </li>
                  <li>
                    As the sun sets, savor a delicious dinner under the starlit
                    sky at the desert camp, complete with cultural performances.
                    Return to the hotel for a well-deserved rest.
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
                Explore Dubai's Highlights | City Tour & Desert Safari Adventure
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Start your day with a sumptuous breakfast before embarking
                    on a full day of exploration. Visit the picturesque Miracle
                    Garden, adorned with a myriad of colorful blooms, offering a
                    feast for the senses.
                  </li>
                  <li>
                    Then, ascend to the 124th floor of the iconic Burj Khalifa
                    (Non-prime time) for awe-inspiring panoramic views of the
                    city skyline and beyond. Enjoy leisure time at the renowned
                    Jumeirah Beach, soaking up the sun and sea breeze.
                  </li>
                  <li>
                    In the evening, head to the bustling Dubai Mall to witness
                    the mesmerizing Fountain Show. After a day filled with
                    adventures, return to your hotel for a relaxing overnight
                    stay.
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
                Farewell to Dubai | Departure to Bharat
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After a delicious breakfast, bid farewell to Dubai as you
                    check out from your hotel. Our team will ensure a seamless
                    transfer to the airport according to your flight timings,
                    marking the end of your unforgettable Dubai experience.
                  </li>
                  <li>
                    Take with you cherished memories and the promise of
                    returning to this captivating city.
                  </li>
                  <li>Safe travels back to Bharat!</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
