import Left from "../../Left/Domestic/Andaman.jsx"
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut="₹44,799"
          standard_current="₹31,988 per person"

          deluxe_cut="₹54,499"
          deluxe_current="₹38,899 per person"

          super_deluxe_cut="₹72,999"          
          super_deluxe_current="₹51,999 per person"
        />
      </div>
    </>
  );
}
