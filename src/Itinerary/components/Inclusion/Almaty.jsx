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
              <img src={dot} width={5} alt="dot" /> 04 Nights’ Accommodation in Almaty
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Daily Buffet Breakfast in the hotel
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Almaty city tour
            </li>
            <li>
              <img src={dot} width={5} alt="dot" />Meadows and Shymbulak tour with Cable Car tickets included
            </li>
            <li>
              <img src={dot} width={5} alt="dot" />Visit to Charyn Canyon and Kolsai Lake
            </li>

            <li>
              <img src={dot} width={5} alt="dot" />2x bottles of 500 ml water per pax per day
            </li>
            <li>
              <img src={dot} width={5} alt="dot" />Return Airport transfers on Private Basis
            </li>
            <li>
              <img src={dot} width={5} alt="dot" />All Tours & Transfers on SIC
            </li>
            <li>
              <img src={dot} width={5} alt="dot" />Professional English speaking guide during tours
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
