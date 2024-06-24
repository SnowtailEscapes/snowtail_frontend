import LeftDubai from "../Left/LeftDubai3n4d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftDubai />
        <RightSide
          standard_cut="₹32,500"
          standard_current=" ₹25,899 per person"
          deluxe_cut="₹39,500"
          super_deluxe_cut="₹48,500"
          deluxe_current="₹29,700 per person"
          super_deluxe_current="₹38,500 per person"
        />
      </div>
    </>
  );
}
