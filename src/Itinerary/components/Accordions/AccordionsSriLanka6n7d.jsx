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
    const allExpanded =
      day1 &&
      day2 &&
      day3 &&
      day4 &&
      day5 &&
      day6 &&
      day7;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
    setDay7(!allExpanded);

  }

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn btn-md bg-light-shade mb-6" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 
            ? "Collapse All"
            : "Expand All"}
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
                Arrival in Colombo | Transfer to Enchanting Kandy
              </div>
              {day1 ? <p
                onClick={handleDay1}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay1}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {
              day1 && <div className="collapse-content">
              <ul>
                <li>
                  Welcome to the tropical paradise of Sri Lanka! Upon your
                  arrival at Colombo Airport, our friendly representative will
                  greet you and assist you in boarding your comfortable vehicle.
                </li>
                <li>
                  Embark on a picturesque journey towards the cultural heart of
                  Sri Lanka, Kandy. En route, immerse yourself in the wonders of
                  Pinnawala Elephant Orphanage and the captivating Spice
                  Gardens.
                </li>
                <li>
                  As the day unfolds, transfer to your hotel for a delightful
                  dinner and a restful overnight stay. Don't miss the chance to
                  witness the mesmerizing Kandy Culture Show, a vibrant
                  celebration of Sri Lankan heritage.
                </li>
              </ul>
            </div>
            }
            
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
          <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay2}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 2</button>

               Explore the Charms of Kandy
              </div>
              {day2 ? <p
                onClick={handleDay2}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay2}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
           {
            day2 && <div className="collapse-content">
              <ul>
                <li>
                  After a sumptuous breakfast, embark on a journey through the
                  rich tapestry of Kandy. Visit the sacred Dalada Maligawa, also
                  known as the Temple of the Tooth, a symbol of Buddhist
                  spirituality and cultural splendor.
                </li>
                <li>
                  Delight your senses with a stroll through the Royal Botanical
                  Garden, where exotic flora and fauna await.
                </li>
                <li>
                  The evening is yours to indulge in leisurely pursuits, soaking
                  in the tranquil ambiance of this ancient city.
                </li>
                <li>Overnight stay in Kandy.</li>
              </ul>
            </div>
           }
            
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
          <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay3}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 3</button>

              Journey to Scenic Nuwara Eliya
              </div>
              {day3 ? <p
                onClick={handleDay3}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay3}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
           {
            day3 &&  <div className="collapse-content">
              <ul>
                <li>
                  Begin your day with a delectable breakfast before bidding
                  farewell to Kandy and setting off for the breathtaking
                  landscapes of Nuwara Eliya.
                </li>
                <li>
                  Along the way, pay homage at the Hanuman Temple, a place
                  steeped in myth and legend.
                </li>
                <li>
                  Upon arrival, check into your hotel and freshen up before
                  venturing out to marvel at the majestic Ramboda Falls and
                  delve into the art of tea-making at a local Tea Factory.
                </li>
                <li>
                  Return to your hotel for a flavorful dinner and a peaceful
                  overnight stay.
                </li>
              </ul>
            </div>
           }
            
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
          <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay4}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 4</button>

               Discover Nuwara Eliya's Mystique
              </div>
              {day4 ? <p
                onClick={handleDay4}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay4}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
           {
            day4 && <div className="collapse-content">
              <ul>
                <li>
                  Awaken your senses with a delightful breakfast before
                  embarking on a half-day excursion to the serene Seetha Amman
                  Temple, a site shrouded in myth and mystery.
                </li>
                <li>
                  Spend the rest of the day at your leisure, soaking in the
                  serene ambiance of Nuwara Eliya.
                </li>
                <li>
                  Indulge in a delicious dinner and unwind with a restful
                  night's sleep at your hotel.
                </li>
              </ul>
            </div>
           }
            
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
          <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay5}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 5</button>

               Tranquil Retreat in Bentota
              </div>
              {day5 ? <p
                onClick={handleDay5}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay5}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
           
            {
              day5 && <div className="collapse-content">
              <ul>
                <li>
                  After breakfast, check out from your hotel and embark on a
                  scenic journey to the coastal haven of Bentota.
                </li>
                <li>
                  Upon arrival, check into your hotel and refresh yourself
                  before exploring the natural wonders of Madu River Journey and
                  the conservation efforts at Kosgoda Sea Turtle Hatchery.
                </li>
                <li>
                  Unwind on the golden shores of Bentota Beach before retiring
                  for the night with a delectable dinner and a comfortable
                  overnight stay.
                </li>
              </ul>
            </div>
            }
            
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
          <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay6}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 6</button>

               Explore Vibrant Colombo
              </div>
              {day6 ? <p
                onClick={handleDay6}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay6}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
           {
            day6 && <div className="collapse-content">
              <ul>
                <li>
                Savor a delicious breakfast before departing for the vibrant metropolis of Colombo. 
                </li>
                <li>
                Upon arrival, check into your hotel and set out to explore the city's captivating blend of colonial heritage and modern allure.
                </li>
                <li>
                Upon arrival, check into your hotel and set out to explore the city's captivating blend of colonial heritage and modern allure.
                </li>
                <li>
                Discover the architectural marvels of the Dutch and British eras as you explore Colombo Fort and its surrounding landmarks. 
                </li>
                <li>
                The evening is yours to enjoy at leisure, perhaps indulging in some shopping or sampling local delicacies.
                </li>
                <li>
                Return to your hotel for a flavorful dinner and a restful overnight stay.
                </li>
              </ul>
            </div>
           }
            
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
          <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay7}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 7</button>

               Departure from Colombo
              </div>
              {day7 ? <p
                onClick={handleDay7}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay7}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {
              day7 && <div className="collapse-content">
              <ul>
                <li>
                After a final breakfast in paradise, bid farewell to the enchanting island of Sri Lanka as you depart for Colombo Airport, filled with cherished memories of your unforgettable journey.
                </li>
              </ul>
            </div>
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
  }
