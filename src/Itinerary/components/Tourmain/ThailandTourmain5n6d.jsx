import React from "react";
import LeftThailand from "../Left/LeftThailand5n6d.jsx";
import RightSide from "../Common/RightSide.jsx"
import a from "../../styles/Tourmain.module.css";


export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide 
          standard_cut="₹36,999"
  standard_current=" ₹29,999 per person"
  deluxe_cut="₹39,999"
  super_deluxe_cut="₹45,999"
  deluxe_current="₹32,999 per person"
  super_deluxe_current="₹37,999 per person"
        />
      </div>
    </>
  );
}
