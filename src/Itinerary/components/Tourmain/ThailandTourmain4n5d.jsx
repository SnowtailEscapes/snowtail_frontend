import React from "react";
import PropTypes from "prop-types";
import LeftThailand from "../Left/Left.jsx";
import a from "../../styles/Tourmain.module.css";
import RightSide from "../Common/RightSide.jsx";

const Tourmain = ({ itinerary }) => {
  return (
    <div className={a.tourmain}>
      <LeftThailand itinerary={itinerary} />
      <RightSide
        standard_cut={`${itinerary.cutprices.three_star}`}
        standard_current={`${itinerary.prices.three_star}`}
        deluxe_cut={`${itinerary.cutprices.four_star}`}
        super_deluxe_cut={`${itinerary.cutprices.five_star}`}
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
