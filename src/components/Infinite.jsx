import "../styles/Infinite.css";
import google from "../assets/google.webp";
import star from "../assets/star.webp";
import trip from "../assets/trip.webp";
import visa from "../assets/visa.webp";
import time from "../assets/time.webp";

export default function Infinite() {
  return (
    <>
      <div className="wrapper">
        <div className="item item1">
          <div className="flex items-center text-white gap-1 text-nowrap">
            <img src={google} width={30} alt="Google" />
            <p className="font-bold text-nowrap">4.6</p>
            <img src={star} width={20} alt="Star" />
            <p className="font-bold ">rated</p>
          </div>
        </div>
        <div className="item item2">
          <div className="flex items-center text-white gap-1 text-nowrap"  >
            <img src={trip} width={30} alt="Trip" />
            <p className="font-bold text-nowrap">100% Customized Trips</p>
          </div>
        </div>
        <div className="item item3">
          <div className="flex items-center text-white gap-1 text-nowrap">
            <img src={visa} width={30} alt="Visa" />
            <p className="font-bold text-nowrap">90% Visa Success Rate</p>
          </div>
        </div>
        <div className="item item4">
          <div className="flex items-center text-white gap-1 text-nowrap">
            <img src={time} width={30} alt="Time" />
            <p className="font-bold text-nowrap">24x7 Coverage</p>
          </div>
        </div>
      </div>
    </>
  );
}
