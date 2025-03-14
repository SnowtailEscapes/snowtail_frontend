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
              <img src={dot} width={5} alt="dot" /> Meal Plan: CP (Breakfast included)
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Transfers: Comfortable Sedan Coach
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> All Sightseeing Transfer mentioned above
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> 5 Night stay with breakfast
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Airport Pick & Drop
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
