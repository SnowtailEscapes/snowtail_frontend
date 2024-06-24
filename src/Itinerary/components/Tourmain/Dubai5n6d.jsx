import LeftDubai from "../Left/LeftDubai5n6d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftDubai />
        <RightSide
          standard_cut="₹69,500"
          standard_current=" ₹58,899 per person"
          deluxe_cut="₹77,500"
          super_deluxe_cut="₹94,980"
          deluxe_current="₹68,900 per person"
          super_deluxe_current="₹79,999 per person"
        />
      </div>
    </>
  );
}
