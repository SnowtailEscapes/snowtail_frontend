import { useEffect } from "react";
import dot from "../../../assets/dot.svg";
import dot2 from "../../../assets/cross.svg";
import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import Aos from "aos";
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
              <img src={dot} width={5} alt="dot" /> 05 Nights Accommodations at specified Hotels on Double Sharing.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Breakfast  Included.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> All Transport Services as per the itinerary by Innova.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Driver Allowances, Fuel, Parking, Toll Tax.
            </li>
            <li>
            <img src={dot} width={5} alt="dot" /> Vehicle is not on a sharing basis.
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
              <img src={dot2} width={5} alt="dot" /> GST 
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
