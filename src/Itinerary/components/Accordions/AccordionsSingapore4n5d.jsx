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
          {day1 && day2 && day3 && day4 && day5 
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
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay1}
              >
                Arrival & Night Safari Adventure in Evening
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Upon your arrival at Singapore Airport, be greeted by our
                    friendly driver who will whisk you away to your luxurious
                    hotel.
                  </li>
                  <li>
                    After a brief respite, brace yourself for an enchanting
                    evening at the Night Safari.
                  </li>
                  <li>
                    Step into the mysterious world of nocturnal creatures as you
                    embark on immersive trails, witness captivating animal
                    shows, and be mesmerized by the electrifying fire dance
                    performance.
                  </li>
                  <li>
                    After an exhilarating experience, return to your hotel for a
                    well-deserved rest.
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
                Singapore Half Day City Tour | Visit Marina Bay Sands
                Observation Deck & Garden by the Bay
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    The drive will pick you up from your hotel and take you on a
                    half-day city tour of Singapore.
                  </li>
                  <li>
                    Visit some popular attractions like the Art Museum, the
                    iconic Merlion Statue, the grand Marina Floating Bay, the
                    DNA-shaped Helix Bridge, and the Suntec City Mall, famous
                    for its Fountain of Wealth.
                  </li>
                  <li>
                    Lastly, visit the futuristic Garden by the Bay and get
                    fascinated by panoramic views from the Marina Bay Sands
                    Observation Deck.
                  </li>

                  <li>
                    Later, return to your hotel for an overnight stay in
                    Singapore.
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
                Thrills at Universal Studios
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Prepare for a day of non-stop excitement at Universal
                    Studios Singapore.
                  </li>
                  <li>
                    Immerse yourself in the magic of Hollywood, embark on
                    thrilling rides in Sci-Fi City, and journey through ancient
                    Egypt's mysteries.
                  </li>
                  <li>
                    Encounter beloved characters in Madagascar and step into the
                    whimsical world of Far Far Away.
                  </li>
                  <li>
                    With live performances, exhilarating attractions, and
                    endless entertainment options, Universal Studios guarantees
                    a day of fun for all ages.
                  </li>
                  <li>Return to your hotel for a well-deserved rest.</li>
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
                Sentosa Island Extravaganza | Sentosa Cable Car + Wings of Time
                Night Show
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    The driver will pick you up from your hotel in Singapore and
                    drop you at Mt Faber for your cable car ride to Sentosa.
                  </li>
                  <li>
                    Enjoy a one way cable ride to Sentosa Island while taking in
                    the panoramic views of the surroundings.
                  </li>
                  <li>
                    N Before the event in the evening, you can visit famous
                    attraction like Siloso beach & spend some fun time.
                  </li>
                  <li>
                    Then in the evening, visit the Wings of Time to enjoy a fun
                    night show with high tech equipments.
                  </li>
                  <li>Later, get transferred to your hotel in Singapore.</li>
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
                Departure with Cherished Memories
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    As your unforgettable Singapore escapade draws to a close,
                    bid farewell to this vibrant city with a heart full of
                    cherished memories.
                  </li>
                  <li>
                    Check-out from your hotel and board your transfer to
                    Singapore Airport, where your journey back home awaits.
                  </li>
                  <li>
                    Reflect on the myriad experiences and adventures you've
                    encountered during your time in Singapore, knowing that the
                    memories you've created will last a lifetime.
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
