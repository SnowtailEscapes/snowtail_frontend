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
        standard_cut={25699}
        standard_current={19999}
        deluxe_cut={28999}
        super_deluxe_cut={33999}
        deluxe_current={21999}
        super_deluxe_current={26999}
      />
    </div>
  );
};

Tourmain.propTypes = {
 itinerary:PropTypes.object.isRequired
};

export default Tourmain;
