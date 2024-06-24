import React from "react";
import LeftThailand from "../Left/LeftSwitzerland5n6d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹127,500"
          standard_current=" ₹97,999 per person"
          deluxe_cut="₹155,500"
          super_deluxe_cut="₹199,500"
          deluxe_current="₹119,900 per person"
          super_deluxe_current="₹149,500 per person"
        />
      </div>
    </>
  );
}
