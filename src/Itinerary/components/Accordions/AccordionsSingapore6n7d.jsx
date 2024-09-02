import "../../styles/accordians.css";
import { useEffect } from "react";

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
                Arrival & Night Safari Adventure
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {
              day1 &&  <div className="collapse-content">
              <ul>
                <li>
                  Begin your enchanting journey with a seamless transfer from
                  the airport to your lavish hotel.
                </li>
                <li>
                  After a brief respite, brace yourself for an enchanting
                  evening at the Night Safari.Immerse yourself in the mystical
                  ambiance of the world's first nocturnal Singapore Zoo during
                  an exhilarating Night Safari.
                </li>
                <li>
                  Witness exotic wildlife in their natural habitat under the
                  cloak of darkness, creating memories to cherish for a
                  lifetime.
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
                Half Day City Tour of Singapore And Sentosa

              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {
              day2 && <div className="collapse-content">
              <ul>
                <li>
                  Explore the vibrant tapestry of Singapore's cityscape on a
                  captivating half-day tour, visiting iconic landmarks such as
                  the Art Museum, Marina Bay, and more.
                </li>
                <li>
                  Marvel at the architectural marvels of Suntec City and the
                  Helix Bridge while soaking in the panoramic views from Marina
                  Bay Sands.
                </li>
                <li>
                  Embark on a scenic cable car ride to Sentosa Island, where
                  adventure awaits with attractions like Madame Tussauds and
                  thrilling rides.
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay3}
              >
                Universal Studios Adventure

              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
           {
            day3 && <div className="collapse-content">
              <ul>
                <li>
                  Prepare for an adrenaline-pumping day at Universal Studios,
                  Singapore's premier theme park boasting immersive experiences
                  based on blockbuster movies.
                </li>
                <li>
                  Enjoy heart-pounding rides, captivating shows, and
                  interactions with beloved characters from your favorite films,
                  creating unforgettable moments.
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
                Transfer to Genting Dream Cruise | Sail leisurely in open waters
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
           {
            day4 && <div className="collapse-content">
              <ul>
                <li>
                  Indulge in a delectable breakfast before boarding the
                  luxurious Genting Dream cruise, where luxury meets adventure.
                </li>
                <li>
                  Set sail across azure blue waters, relishing in the opulent
                  amenities and world-class entertainment options aboard the
                  cruise.
                </li>
                <li>
                  Witness a breathtaking sunset over the horizon, followed by a
                  plethora of shows, activities, and culinary delights to
                  elevate your cruising experience.
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
                Leisure Day on Cruise
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {
              day5 && <div className="collapse-content">
              <ul>
                <li>
                  Enjoy a leisurely day onboard the Genting Dream cruise,
                  partaking in a myriad of activities including spa treatments,
                  waterslides, and sportsplex adventures.
                </li>
                <li>
                  Experience the vibrant nightlife at the Zouk nightclub and
                  theater, offering lively performances and entertainment
                  options for every taste.
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
                 Singapore Arrival & Gardens by the Bay Exploration
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {
              day6 && <div className="collapse-content">
              <ul>
                <li>
                  After breakfast, conclude your cruise and transfer to your
                  pre-booked hotel.
                </li>
                <li>
                  Explore the enchanting Gardens by the Bay, featuring stunning
                  gardens, Supertrees, flower domes, and the awe-inspiring cloud
                  forest.
                </li>
                <li>
                  Then the driver will drop you back at your hotel for a restful
                  overnight stay in Singapore
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
                 Departure from Singapore | Leave with Cheerful Memories
              </div>
              {day7 ? <p>▲</p> : <p>▼</p>}
            </div>
           {
            day7 && <div className="collapse-content">
              <ul>
                <li>
                Pack your bags and check-out from your hotel in Singapore. 
                </li>
                <li>
                The driver will pick you up from the hotel and take you to the Singapore airport from where your exhilarating 7-day tour will come to an end.
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
