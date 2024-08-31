import { useEffect } from "react";
import dot from "../../../assets/dot.svg";
import a from "../../../styles/Tourmain.module.css";
import "../../../styles/animations.css";
import dot2 from "../../../assets/cross.svg";
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
              <img src={dot} width={5} alt="dot" /> Return Transfers for sightseeing & Airport Transfers.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Stay- 5N/6D
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Meals (5 Breakfast).
            </li>
            <li> 
            <img src={dot} width={5} alt="dot" /> Local Sightseeing as per itinerary
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Driver charges, toll tax, parking charges
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
