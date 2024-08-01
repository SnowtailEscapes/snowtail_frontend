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
            <img src={dot} width={5} alt="dot" /> 3 nights stay in Melbourne
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> 3 nights stay in Sydney
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Sydney Explorer Pass - Choice
            of 2 and ticket
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Melbourne Cricket Ground
            Tickets and ticket
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Phillip Island Penguin Parade
            Tour on a Shared basis and ticket
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Great Ocean Road Tour from
            Melbourne on a Shared basis and ticket
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Sydney Opera House Guided Tour
            and ticket
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Blue Mountains Day Tour from
            Sydney on a Shared basis
          </li>
          <li>
            <img src={dot} width={5} alt="dot" />
            Airport transfer from Melbourne International Airport to Deluxe
            Hotel
          </li>
          <li>
            <img src={dot} width={5} alt="dot" />
            Airport transfer from Sydney Kingsford Smith International Airport
            to Deluxe Hotel
          </li>{" "}
          <li>
            <img src={dot} width={5} alt="dot" />
            Airport transfer from Melbourne International Airport to Deluxe
            Hotel
          </li>
        </ul>
        <ul>
          <h4>Exclusions</h4>
          <li>
            <img src={dot} width={5} alt="dot" /> Cost of Emergency , Covid
            Report , Insurance And Other Covid Related Expenses
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Any Personal expenses.
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> GST & (TCS - Claimable after
            the tour)
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Any Airfare
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Lunch / Any transfer / Meals
            that are not mentioned in the itinerary
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Anything not mentioned in the
            inclusions list above
          </li>
        </ul>
      </div>
    </>
  );
}
