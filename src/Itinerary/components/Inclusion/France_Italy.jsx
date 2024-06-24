import { useEffect } from "react";
import dot from "../../assets/dot.svg";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
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
              <img src={dot} width={5} alt="dot" /> Transfers : Airport Pick up and drop as per your flight timings.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Accommodation :Accommodation : 2 nights in Paris & 2 night in Rome.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Meals : Breakfast from Day 2 to Day 5
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Sightseeing : Full Day City Tour of Paris & Full Day City Tour of Rome
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Visa assistance: It will be provided (Charges are not included)
            </li>
          </ul>
          <ul>
            <h4>Exclusions</h4>
            <li>
              <img src={dot} width={5} alt="dot" /> Cost of Emergency , Covid Report , Insurance And Other Covid Related Expenses
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Any Personal expenses.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> GST & (TCS - Claimable after the tour)
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Any Airfare
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Lunch / Any transfer / Meals that are not mentioned in the itinerary
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Anything not mentioned in the inclusions list above
            </li>
          </ul>
        </div>
    </>
  )
}
