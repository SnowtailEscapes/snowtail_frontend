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
              <img src={dot} width={5} alt="dot" /> Transfers : Airport pick up and drop as per your flight timings and round trip transfers on a ferry from Athens to Mykonos to Santorini.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Accommodation : 7 nights accommodation in Athens, Mykonos and Santorini.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Meals : Breakfast from Day 2 to Day 8
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Experiences Covered: Panoramic city tour of Athens city centre, Photo Stop at the Panathinaikon Stadium, Guided tour of Acropolis (Propylae the gateway, Temple of Athena Nike, Parthenon, Erechtheion with its Porch of Maidens), Guided tour of the Acropolis Museum, Set sail for an active volcano of Santorini and walk to the summit of the crater, Swim in the Hot Springs, Experience the isolated Thirassia island & View the stunning cliffs at Oia and its unique Sunset.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Visa assistance: It will be provided (Charges are not included)
            </li>
            <li>
            <img src={dot} width={5} alt="dot" /> Ticket : Economy Class Normal Ferry ticket from Athens and Mykonos and from Mykonos to Santorini.
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
