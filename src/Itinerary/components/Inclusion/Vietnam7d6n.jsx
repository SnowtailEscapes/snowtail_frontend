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
              <img src={dot} width={5} alt="dot" /> Transfers : Airport Pick up and drop as per your flight timings + Intercity Transfers on SIC basis in a comfortable and hygienic vehicle.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Accommodation : 2 nights in Hanoi, 1 night on Halong Cruise & 3 nights in Ho Chi Minh city.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Meals : Breakfast from Day 2 to Day 7 and lunch+dinner on Cruise
            </li>
            <li>
              <img src={dot} width={5} alt="dot" />Sightseeing : Water puppet show ticket, Cycle tour in Hanoi Old Quarter, Boat ride to Tam Coc Caves, Halong Bay Cruise, Guided Tour to Cu Chi Tunnels & Mekong Delta Boat Ride
            </li>
            <li>
              <img src={dot} width={5} alt="dot" />Visa assistance: It will be provided (Charges are not included)
            </li>
            <li>
              <img src={dot} width={5} alt="dot" />Guide : Professional driver cum guide to help you explore this beautiful city
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
