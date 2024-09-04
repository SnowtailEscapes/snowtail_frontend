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


  const handleDay1 = () => setDay1(!day1);
  const handleDay2 = () => setDay2(!day2);
  const handleDay3 = () => setDay3(!day3);
  const handleDay4 = () => setDay4(!day4);
  const handleDay5 = () => setDay5(!day5);
  const handleDay6 = () => setDay6(!day6);
  const handleDay7 = () => setDay7(!day7);
  const handleDay8 = () => setDay8(!day8);


  const handleExpandAll = () => {
    const allExpanded =
      day1 &&
      day2 &&
      day3 &&
      day4 &&
      day5 &&
      day6 &&
      day7 &&
      day8;
    setDay1(!allExpanded);
    setDay2(!allExpanded);
    setDay3(!allExpanded);
    setDay4(!allExpanded);
    setDay5(!allExpanded);
    setDay6(!allExpanded);
    setDay7(!allExpanded);
    setDay8(!allExpanded);

  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn btn-md bg-light-shade mb-6" onClick={handleExpandAll}>
          {day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8
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
                Arrival in Bali | Discover Local Delights
              </div>
              {day1 ? <p
                onClick={handleDay1}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay1}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Begin your journey with a warm welcome in Bali. Upon arrival
                    at the Bali International Airport, soak in the tropical
                    allure as our representative escorts you to your hotel.
                  </li>
                  <li>
                    Immerse yourself in the vibrant local markets or simply
                    unwind amidst the natural splendor.
                  </li>

                  <li>Overnight stay in hotel.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay2}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 2</button>

                Ubud Full Day Tour | Witness the Grace of Tegenungan Waterfall
                and Green Vistas of Tegalalang Rice Terrace
              </div>
              {day2 ? <p
                onClick={handleDay2}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay2}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a full-day exploration of Ubud, the cultural heart
                    of Bali. Marvel at the majestic Tegenungan Waterfall and
                    wander through the verdant Tegalalang Rice Terrace.
                  </li>
                  <li>
                    Discover ancient wonders at the Elephant Cave temple and
                    encounter playful monkeys at Ubud Monkey Forest.
                  </li>
                  <li>
                    Delight in traditional craftsmanship at Ubud Palace and Art
                    Market.
                  </li>

                  <li>Return to Kuta for a restful night.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay3}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 3</button>

                Transfer to Seminyak | Sunset Dinner Cruise
              </div>
              {day3 ? <p
                onClick={handleDay3}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay3}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Journey to Seminyak, a coastal paradise renowned for its
                    laid-back vibe. After checking in, indulge in leisurely
                    pursuits or beachside relaxation.
                  </li>
                  <li>
                    In the evening, set sail on a romantic sunset dinner cruise,
                    savoring delectable cuisine and live entertainment against
                    the backdrop of the Bali coastline.
                  </li>
                  <li>Return to the hotel for a tranquil night.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
       
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay4}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 4</button>
                Witness the Beautiful Temples | Tanah Lot and Ulluwatu Temple
                Tour
              </div>
              {day4 ? <p
                onClick={handleDay4}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay4}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a spiritual odyssey to Bali's iconic temples.
                  </li>
                  <li>
                    Visit the majestic Taman Ayun Temple, tranquil Alas Kedaton
                    Monkey Forest, and breathtaking Tanah Lot Temple, famed for
                    its mesmerizing sunset vistas.
                  </li>
                  <li>
                    Explore the pristine shores of Padang Padang Beach before
                    witnessing a mesmerizing Kecak and Fire Dance performance at
                    Uluwatu Temple.
                  </li>
                  <li>Return to your hotel for relaxation.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
          
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay5}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 5</button>

                Transfers to Gili Islands | Island Paradise Beckons Tour
              </div>
              {day5 ? <p
                onClick={handleDay5}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay5}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on a scenic journey to the picturesque Gili Islands,
                    where turquoise waters and sandy beaches await.
                  </li>
                  <li>
                    Check into your island retreat and spend the day at leisure,
                    basking in the island's natural beauty.
                  </li>
                  <li>
                    Whether you choose to unwind on the beach or embark on
                    aquatic adventures, Gili Islands offer the perfect escape.
                  </li>
                  <li>Overnight stay in Gili Islands.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay6}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 6</button>
                Leisure in Gili Islands | Tropical Exploration
              </div>
              {day6 ? <p
                onClick={handleDay6}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay6}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Enjoy a day of leisure in Gili Islands, where possibilities
                    abound. Rent a bike and traverse the island's scenic paths,
                    discovering hidden coves and panoramic vistas.
                  </li>
                  <li>
                    Dive into the crystalline waters for a snorkeling adventure,
                    encountering vibrant coral reefs and marine life.
                  </li>
                  <li>
                    Embrace the laid-back island lifestyle as you soak in the
                    sun-drenched shores.
                  </li>
                  <li>Overnight stay in Gili Islands.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay7}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 7</button>

                Return to Kuta | Farewell to Island Bliss
              </div>
              {day7 ? <p
                onClick={handleDay7}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay7}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day7 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Bid farewell to Gili Islands as you journey back to Kuta for
                    one final day of relaxation.
                  </li>
                  <li>
                    Spend your day at leisure, exploring the bustling markets or
                    simply unwinding by the pool.
                  </li>
                  <li>
                    Reflect on your Bali adventure and cherish the memories
                    created.
                  </li>
                  <li>Overnight stay in Kuta.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accor join">
         
          <div className="collapse collapse-open join-item">
            <div className="flex items-center">
              <div
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay8}
              >
              <button className="btn btn-sm rounded-3xl bg-main-brand">Day 8</button>

                Departure | Fond Farewells
              </div>
              {day8 ? <p
                onClick={handleDay8}
                className="hover:cursor-pointer"
              >▲</p> : <p
                onClick={handleDay8}
                className="hover:cursor-pointer"
              >▼</p>}
            </div>
            {day8 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Savor a final breakfast in paradise before bidding adieu to
                    Bali.
                  </li>
                  <li>
                    Our representative will escort you to the airport for your
                    onward journey, leaving you with cherished memories of your
                    enchanting Bali and Gili Islands escapade.
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
