import React, { useEffect } from "react";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../styles/about.css";
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import location from "../../assets/location.png";
import clock from "../../assets/clock.svg";
import balloon from "../../assets/balloon.png";
import customise from "../../assets/customisation.svg";
import place2 from "../../assets/place.png";

const Common = ({ place , title , location1 , time , rating , reviews}) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'hehe'}>
      <div className={a.left1} data-aos="slide-right">
        <div className={a.left}>
          <h1>{title}</h1>
          <div className={a.bottom}>
            <img
              src={place2}
              alt="location-06"
              width="30"
              height="30"
            />
            <h2>{location1}</h2>
          </div>
        </div>
        <div className={a.right}>
          <h4>Excellent</h4>
          <h6>{rating}/5</h6>
          <p>({reviews} reviews)</p>
        </div>
      </div>
      <div className={a.left2} >
        <div className={a.four_cards} >
          <div>
            <img
              src={clock}
              alt="clock-01"
              width="30"
              height="30"
            />
          </div>
          <div>
            <h5>Duration</h5>
            <p>{time}</p>
          </div>
        </div>

        <div className={a.four_cards} >
          <div>
            <img
              src={balloon}
              alt="paw"
              width="40"
              height="30"
             
            />
          </div>
          <div>
            <h5>Sight Seeing</h5>
            <p>Included</p>
          </div>
        </div>

        <div className={a.four_cards} >
          <div>
            <img
              src={customise}
              alt="people"
              width="30"
              height="30"
            />
          </div>
          <div>
            <h5>Customization</h5>
            <p>Connect to an expert</p>
          </div>
        </div>

        <div className={a.four_cards} >
          <div>
            <img
              src={location}
              alt="location"
              width="30"
              height="30"
             
            />
          </div>
          <div className="text-wrap">
            <h5>Location</h5>
            <p>{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Common.propTypes = {
  place: PropTypes.string,
  title: PropTypes.string,
  location1: PropTypes.string,
  time: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number
};

export default Common;
