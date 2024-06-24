import LeftThailand from "../Left/LeftFrance_Italy.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹99,999"
          standard_current=" ₹85,699 per person"
          deluxe_cut="₹135,500"
          super_deluxe_cut="₹198,500"
          deluxe_current="₹99,999 per person"
          super_deluxe_current="₹149,500 per person"
        />
      </div>
    </>
  );
}
