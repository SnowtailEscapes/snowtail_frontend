import { useEffect } from "react";
import dot from "../../assets/dot.svg";
import dot2 from "../../assets/cross.svg";
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
              <img src={dot} width={5} alt="dot" /> Daily breakfast.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> 2 nights in Hiroshima.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> 3 nights in Osaka.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> 3 nights in Tokyo.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Full-Day Tokyo City Tour by Bus with Lunch.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Mount Fuji and Hakone Day Tour with Lunch (return by bullet train).
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Hiroshima and Miyajima Tour.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Full-Day Kyoto & Nara Tour with Shabu Shabu Lunch.
            </li>
            <li>
              <img src={dot} width={5} alt="dot" /> Airport transfer from Narita International Airport to hotel.
            </li><li>
              <img src={dot} width={5} alt="dot" /> Airport transfer from hotel to Osaka International Airport
            </li>

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
