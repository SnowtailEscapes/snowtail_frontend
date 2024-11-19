import { useEffect } from "react";
import dot from "../../../assets/dot.svg";
import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
import dot2 from "../../../assets/cross.svg";
import "aos/dist/aos.css";


export default function Inclusion() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className={a.left6} data-aos="zoom-in">
        <h3>Included/Excluded</h3>
        <ul>
          <h4>Inclusions</h4>
          <li>
            <img src={dot} width={5} alt="dot" /> Transfers: Pvt Airport/Railway Station Pick up and drop as per your flight timings & Comfortable and hygienic vehicle for sightseeing on all days as per the itinerary.
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Accommodation: 2N Shillong,  2N Cherrapunji & 1N Camp.
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Meals: 5 Breakfast at selected hotels
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Chauffer: Experienced driver to help you explore this beautiful city.
          </li>
          <li>
          <img src={dot} width={5} alt="dot" /> Sightseeing & Activities:- (without ticket) <br></br>
            Shillong :- Krang Suri Waterfall & Cleanest River Umngot.<br></br>
            Cherrapunji :- Mawkdok Valley, Nohkalikai Falls & Wei Sawdong Waterfall<br></br>
            Guwahati :- Don Bosco Museum or Wards Lake & Local Market.<br></br>
            Other :- Single Decker Living Root Bridge, Double Decker Root Bridge, Dwaki River, Cleanest Village Mawlynnong & Mawsmai Caves.
          </li>
        </ul>
        <ul>
          <h4>Exclusions</h4>
          <li>
            <img src={dot2} width={5} alt="dot" /> Tax
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Any Personal expenses like Tips, laundry, entry to monuments/ monasteries, Telephone bills etc.
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Insurance
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> GST is Applicable.
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Any Airfare
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Lunch / Any transfer / Meals that are not mentioned in the itinerary
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Nathula Permit and Taxi
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Anything not mentioned in the inclusions list above
          </li>
        </ul>
        <p className="text-orange-400 mt-3">
          NOTE: We keep our itinerary & route map flexible as it totally depends on the local and weather conditions
        </p>
      </div>
    </>
  )
}
