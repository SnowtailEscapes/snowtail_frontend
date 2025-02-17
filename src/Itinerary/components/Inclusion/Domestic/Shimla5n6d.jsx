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
              <img src={dot} width={5} alt="dot" /> Transfers: Pvt Shimla Bus Stand Pick up and Manali bus stand drop as per your Bus timings & Comfortable and hygienic vehicle for sightseeing on all days as per the itinerary.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Accommodation: 2N Shimla + 3N Manali
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Meals: 05 Breakfast at selected hotels
            </li>
            <li> 
            <img src={dot} width={5} alt="dot" />Chauffer: Experienced driver to help you explore this beautiful hill stations.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Sightseeing & Activities:-
              <li>
              Shimla:- Christ Church, Jakhoo Temple, Kalibari Temple, Lakkar Bazaar, Kufri, Green Valley, Mini Zoo, Chini Bungalow, Bhimakali Temple.
              </li>
              <li>
              Manali:- Kasol, Manikaran, Hadimba Devi Temple, Club House, Mall Road and Beas river, Vashisht Village & Hot Spring, Jogni Falls, Naggar Castel. 
              </li>
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
              <img src={dot2} width={5} alt="dot" /> Anything not mentioned in the inclusions list above
            </li>
          </ul>
        </div>
    </>
  )
}
