import LeftThailand from "../Left/LeftBali7n8d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹64,699"
          standard_current=" ₹54,699 per person"
          deluxe_cut="₹69,699"
          super_deluxe_cut="₹78,999"
          deluxe_current="₹59,699 per person"
          super_deluxe_current="₹68,999 per person"
        />
      </div>
    </>
  );
}
