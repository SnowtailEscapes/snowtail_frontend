import React, { useEffect } from "react";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import users from "../../assets/users-solid.svg";
import paw from "../../assets/paw-solid.svg";
import location from "../../assets/map-location-dot-solid.svg";
import PropTypes from "prop-types";

const Common = ({ place , title , location1 , time}) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className={a.left1} data-aos="slide-right">
        <div className={a.left}>
          <h1>{title}</h1>
          <div className={a.bottom}>
            <img
              src="https://cdn.hugeicons.com/icons/location-06-solid-sharp.svg"
              alt="location-06"
              width="20"
              height="20"
            />
            <h2>{location1}</h2>
          </div>
        </div>
        <div className={a.right}>
          <h4>Excellent</h4>
          <h6>4.8/5</h6>
          <p>(146 reviews)</p>
        </div>
      </div>
      <div className={a.left2} >
        <div className={a.four_cards} >
          <div>
            <img
              src="https://cdn.hugeicons.com/icons/clock-01-solid-rounded.svg"
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
              src={paw}
              alt="paw"
              width="30"
              height="30"
             
            />
          </div>
          <div>
            <h5>Tour Type</h5>
            <p>Group tour</p>
          </div>
        </div>

        <div className={a.four_cards} >
          <div>
            <img
              src={users}
              alt="people"
              width="30"
              height="30"
            
            />
          </div>
          <div>
            <h5>Group size</h5>
            <p>50 people</p>
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
    </>
  );
};

Common.propTypes = {
  place: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location1: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,


};

export default Common;
