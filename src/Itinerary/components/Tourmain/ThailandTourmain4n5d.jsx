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
        standard_cut={25699}
        standard_current={`${itinerary.prices.three_star}`}
        deluxe_cut={28999}
        super_deluxe_cut={33999}
        deluxe_current={`${itinerary.prices.four_star}`}
        super_deluxe_current={`${itinerary.prices.five_star}`}
      />
    </div>
  );
};

Tourmain.propTypes = {
 itinerary:PropTypes.number.isRequired
};

export default Tourmain;
