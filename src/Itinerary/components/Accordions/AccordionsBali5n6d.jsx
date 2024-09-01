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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay1}
              >
                Arrival in Bali | Welcome to the Island of Gods
              </div>
              {day1 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day1 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Upon arrival at Bali airport, complete immigration and visa
                    processes Transfer to your luxurious hotel/villa/resort in
                    Ubud and check-in Relax and unwind, soaking in the beauty of
                    your surroundings
                  </li>

                  <li>Overnight stay in Ubud.</li>
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
                Explore the gems of Central Bali | Kintamani Village |
                Tegenungan Waterfalls | Coffee Plantations | Bali Swing
              </div>
              {day2 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day2 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Enjoy a delicious breakfast at the hotel before starting
                    your day Visit Kintamani Village for stunning views of Mount
                    Batur and Lake Batur.
                  </li>
                  <li>
                    Explore the lush coffee plantations and learn about the
                    famous Luwak coffee
                  </li>
                  <li>
                    Refresh yourself with a dip in the Tegenungan Waterfalls
                    Admire the beauty of Tegalalang Rice Terraces and swing over
                    the lush landscapes
                  </li>

                  <li>
                    Return to your accommodation for an overnight stay in Ubud.
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
                Transfer to Kuta | Water Sports Adventure & Uluwatu Sunset Tour
              </div>
              {day3 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day3 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Wake up with a delicious breakfast and get ready to check
                    out from the hotel The representative will pick you up from
                    the hotel in private transfers and transfer you to South
                    Bali Arrive in Kuta and proceed with the check-in
                    formalities
                  </li>
                  <li>
                    Take a rest for a while and then get ready to experience the
                    day by indulging in thrilling water sports at Tanjung Benoa
                    beach which is right next to the Tanjung Benoa Harbor.
                  </li>
                  <li>
                    Satiate the adventure soul in you by having an adrenaline
                    rush while parasailing, jet skiing, and taking a dip in the
                    water while on a banana boat ride.{" "}
                  </li>
                  <li>
                    Visit the stunning Padang Padang Beach and explore the
                    Uluwatu Temple Witness a mesmerizing sunset over the Indian
                    Ocean
                  </li>
                  <li>Return to your hotel for overnight stay in Kuta</li>
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
                Excursion to Nusa Penida by Shared Speedboat | A day filled with
                adventure and breathtaking views
              </div>
              {day4 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day4 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Wake up in the morning, have a hearty breakfast in the
                    hotel, and get ready for the most exciting day in Bali. Get
                    ready and board your transfer to the Sanur Harbor, from
                    where you will be taking a shared speedboat to reach Nusa
                    Penida island.
                  </li>
                  <li>
                    Start your Nusa Penida tour by hiking through a precarious
                    and narrow trail down a mountain onto the shoreline to reach
                    the famous Kelingking Beach.
                  </li>
                  <li>
                    Next, visit the Angel’s Billabong which is a beautiful
                    natural rock pool that opens straight to the ocean and can
                    be accessed easily by climbing down a few steps.
                  </li>
                  <li>
                    Just close to the Angel’s Billabong is the Broken Bay which
                    is actually a large rock archway from where you can marvel
                    at the ocean as it flows in and out of a natural bowl
                    surrounded by towering cliffs.
                  </li>
                  <li>
                    In the afternoon, take a stopover for lunch and treat your
                    taste buds to traditional Balinese cuisine.
                  </li>
                  <li>
                    Conclude your day excursion to Nusa Penida by snorkelling in
                    the crystal clear blue waters to discover the majestic
                    marine life of the region.{" "}
                  </li>
                  <li>
                    Later, board your boat back to the main island of Bali.
                    Return back to the hotel for an overnight stay in Kuta
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay5}
              >
                Leisure Day
              </div>
              {day5 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day5 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Relax and rejuvenate with a Balinese massage Explore nearby
                    cafes and markets for souvenirs Opt for a sunset cruise to
                    enhance your romantic experience (additional cost).
                  </li>
                  <li>Overnight stay in Kuta.</li>
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
               className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"                onClick={handleDay6}
              >
                Departure | Cherish Happy Memories
              </div>
              {day6 ? <p>▲</p> : <p>▼</p>}
            </div>
            {day6 && (
              <div className="collapse-content">
                <ul>
                  <li>
                    Enjoy a delicious breakfast at the hotel before checking out
                    Transfer to Denpasar Airport for your onward journey,
                    carrying with you cherished memories of your Bali honeymoon
                    getaway.
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
