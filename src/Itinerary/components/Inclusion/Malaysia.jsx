import { useEffect } from "react";
import dot from "../../assets/dot.svg";
import a from "../../styles/Tourmain.module.css";
import dot2 from "../../assets/cross.svg";
import "../../styles/animations.css";2
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
              <img src={dot} width={5} alt="dot" /> Transfers : Pvt Airport Pick up and drop as per your flight timings & Comfortable and hygienic vehicle for sightseeing on all days as per the itinerary on SIC basis
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Accommodation : Accommodation for 03 nights at Singapore Hotel & 03 nights at Kuala Lumpur Hotel.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Meals : Breakfast from Day 2 to Day 7
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Sightseeing :Singapore half day City Tour, Sentosa Island Trip (Cable Car Ride), Half Day City Tour in Kuala Lumpur, Sunway Lagoon Tour, Day trip to Genting and Visit Batu Caves & Awana SkyWay Cable Car Ride
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
