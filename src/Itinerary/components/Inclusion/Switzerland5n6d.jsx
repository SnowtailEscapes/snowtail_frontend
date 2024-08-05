import { useEffect } from "react";
import dot2 from "../../assets/cross.svg";
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
              <img src={dot} width={5} alt="dot" /> Transfers : Transfers using Swiss Pass from trains or other public transport as per the itinerary.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Accommodation : 5 nights accommodation in a hotel in Zurich.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Meals : Breakfast from Day 2 to Day 6.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Swiss Pass: 5 Days second class continuous Swiss Pass.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Experiences Covered : Excursion to Mount Titlis, Explore Lucerne city, Visit Fifa Football Museum, Excursion to Rhine Falls & Explore Zurich City.
            </li>
            <li>
            <img src={dot} width={5} alt="dot" />Visa assistance: It will be provided (Charges are not included)
            </li>
            {/* <li>
              <img src={dot} width={5} alt="dot" />Guide : Professional driver cum guide to help you explore this beautiful city
            </li> */}

          </ul>
          <ul>
            <h4>Exclusions</h4>
            <li>
              <img src={dot2} width={5} alt="dot" /> Cost of Emergency , Covid Report , Insurance And Other Covid Related Expenses
            </li>
            <li>
              <img src={dot2} width={5} alt="dot" /> Any Personal expenses.
            </li>
            <li>
              <img src={dot2} width={5} alt="dot" /> GST & (TCS - Claimable after the tour)
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
