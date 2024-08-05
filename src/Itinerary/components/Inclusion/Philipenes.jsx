import { useEffect } from "react";
import dot from "../../assets/dot.svg";
import a from "../../styles/Tourmain.module.css";
import dot2 from "../../assets/cross.svg";
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
            <img src={dot} width={5} alt="dot" /> 7 nights Accommodation.
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Daily Breakfast as mentioned
            with hotels
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Visa Assistance
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Airport Transfers – PVT Basis
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Airport Assistance
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Manila to Puerto Princesa
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Private Underground River Tour
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Puerto Princesa to El Nido by
            Van
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Private Linapacan Island Day
            Trip with Buffet Lunch
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> El Nido to Manila
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Half-Day Shore Excursion Museums
          </li>
        </ul>
        <ul>
          <h4>Exclusions</h4>
          <li>
            <img src={dot2} width={5} alt="dot" /> Cost of Emergency , Covid
            Report , Insurance And Other Covid Related Expenses.
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Any Personal expenses.
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> GST & (TCS - Claimable after
            the tour).
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Any Airfare
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Lunch / Any transfer / Meals
            that are not mentioned in the itinerary
          </li>
          <li>
            <img src={dot2} width={5} alt="dot" /> Anything not mentioned in the
            inclusions list above.
          </li>
        </ul>
      </div>
    </>
  );
}
