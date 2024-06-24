import React from "react";
import LeftThailand from "../Left/LeftThailand4n5d.jsx";
import a from "../../styles/Tourmain.module.css";
import RightSide from "../Common/RightSide.jsx";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹25,699"
          standard_current="₹19,999 per person"
          deluxe_cut="₹28,999"
          super_deluxe_cut="₹33,999"
          deluxe_current="₹21,999 per person"
          super_deluxe_current="₹26,999 per person"
        />
      </div>
    </>
  );
}
