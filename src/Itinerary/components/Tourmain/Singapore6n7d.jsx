import LeftThailand from "../Left/LeftSingapore6n7d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹68,500"
          standard_current=" ₹59,699 per person"
          deluxe_cut="₹80,599"
          super_deluxe_cut="₹111,500"
          deluxe_current="₹69,999 per person"
          super_deluxe_current="₹88,300 per person"
        />
      </div>
    </>
  );
}
