import React, { useEffect } from "react";
import dot from "../../assets/dot.svg";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import dot2 from "../../assets/cross.svg";
import PropTypes from "prop-types";

const Inclusion = ({ data }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className={a.left6} data-aos="zoom-in">
      <h3>Included/Excluded</h3>
      <ul>
        <h4>Inclusions</h4>
        
          <li>
            <img src={dot} width={5} alt="dot" /> Transfers: Pvt Airport/Railway Station Pick up and drop as per your flight timings & Comfortable and hygienic vehicle for sightseeing on all days as per the itinerary.
          </li>

          <li>
            <img src={dot} width={5} alt="dot" /> Accommodation: 1N Jaipur, 2N Jodhpur, 1N Jaisalmer, 1N Sam, 2N Udaipur.
          </li>

          <li>
            <img src={dot} width={5} alt="dot" /> Meals: Breakfast at Selected hotels. 
          </li>
          <li>
            <img src={dot} width={5} alt="dot" /> Guide: Professional driver cum guide to help you explore this beautiful city
          </li>

      </ul>
      <ul>
        <h4>Exclusions</h4>
       
          <li>
            <img src={dot2} width={5} alt="dot" /> Cost of Emergency, Covid Report, Insurance And Other Covid Related Expenses
          </li>

          <li>
            <img src={dot2} width={5} alt="dot" /> Any Personal expenses.
          </li>

          <li>
            <img src={dot2} width={5} alt="dot" /> GST & (TCS - Claimable after the tour)
          </li>

          <li>
            <img src={dot2} width={5} alt="dot" /> Any Airfare/Railway Tickets
          </li>

          <li>
            <img src={dot2} width={5} alt="dot" /> Lunch / Any transfer / Meals that are not mentioned in the itinerary
          </li>

          <li>
            <img src={dot2} width={5} alt="dot" /> Anything not mentioned in the inclusions list above
          </li>    
          
      </ul>
    </div>
  );
};

Inclusion.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Inclusion;
