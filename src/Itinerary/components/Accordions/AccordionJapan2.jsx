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
    const allExpanded =
      day1 && day2 && day3 && day4 && day5 && day6;
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
          {day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8 && day9
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
                Arrival in Tokyo | Day at Leisure
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Welcome to Japan! Upon your arrival at Narita International
                    Airport, you'll be transferred to your hotel.
                  </li>
                  <li>
                    Spend the day exploring Tokyo's iconic attractions at your
                    leisure, such as Tsukiji Hoganji Temple, the Samurai
                    Theater, and Yoyogi Park.
                  </li>
                  <li>
                    Don't miss the bustling Shibuya Crossing before returning to
                    your hotel for an overnight stay.
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
                Tokyo Sightseeing Tour by Bus
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Start your day with a pick-up from Matsuya Ginza and explore
                    Tokyo's top sights, including Meiji Jingu, the Imperial
                    Palace, and Senso-Ji Temple.
                  </li>
                  <li>
                    Enjoy panoramic city views from the Skytree observation deck
                    (tickets included). After the tour, return to your hotel on
                    your own for an overnight stay.
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
                Excursion to Mount Fuji and Hakone
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Embark on an exciting excursion to Mount Fuji. Head to
                    Shinjuku Love on your own to board your transfer to Mt.
                    Fuji.
                  </li>
                  <li>
                    Visit the Fuji Subaru Line 5th Station and admire the iconic
                    mountain. Enjoy a thrilling ropeway ride in Hakone and
                    explore the Owakudani Valley. Return to Tokyo by bullet
                    train from Odawara Station.
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
                Arrival in Osaka | Day at Leisure
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    After checking out from your Tokyo hotel, board the
                    Shinkansen bullet train to Osaka.
                  </li>
                  <li>
                    Upon arrival, check in to your hotel and explore attractions
                    like Sumiyoshi Taisha Shrine and Den Den Town at your own
                    pace.
                  </li>
                  <li>
                    Visit the lively Dotonbori district or relax at Spa World
                    before returning to your hotel for an overnight stay.
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
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay5}
              >
                Day Trip to Kyoto and Nara
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Join your transfer from Hearton Hotel Nishiumeda for a
                    full-day tour of Kyoto and Nara. Visit the iconic Fushimi
                    Inari-Taisha Shrine, Kinkaku-ji Temple, and Nijo Castle in
                    Kyoto.
                  </li>
                  <li>
                    In Nara, interact with the friendly deer at Nara Park and
                    visit Todai-ji Temple, home to Japan's largest Buddha
                    statue. Return to Osaka for an overnight stay.
                  </li>
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
                className="collapse-title hover:cursor-pointer"
                onClick={handleDay6}
              >
                Departure Day
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                  Check out of your hotel and transfer to Osaka International Airport for your departure, taking with you unforgettable memories of your Japanese adventure.
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
