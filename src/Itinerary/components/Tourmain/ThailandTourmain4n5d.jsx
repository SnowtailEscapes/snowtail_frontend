import React from "react";
import PropTypes from "prop-types";
import LeftThailand from "../Left/LeftThailand4n5d.jsx";
import a from "../../styles/Tourmain.module.css";
import RightSide from "../Common/RightSide.jsx";

const Tourmain = ({ itinerary }) => {
  return (
    <div className={a.tourmain}>
      <LeftThailand itinerary={itinerary} />
      <RightSide
        standard_cut="₹25,699"
        standard_current={`₹${itinerary.prices.three_star} per person`}
        deluxe_cut="₹28,999"
        super_deluxe_cut="₹33,999"
        deluxe_current={`₹${itinerary.prices.four_star} per person`}
        super_deluxe_current={`₹${itinerary.prices.five_star} per person`}
      />
    </div>
  );
};

Tourmain.propTypes = {
 itinerary:PropTypes.object.isRequired
};

export default Tourmain;
