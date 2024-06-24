import Left from "../../Left/Domestic/Uttrakhand.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut="₹23,799"
          standard_current="₹16,999 per person"

          deluxe_cut="₹31,299"
          deluxe_current="₹22,299 per person"

          super_deluxe_cut="₹48,999"
          super_deluxe_current="₹34,999 per person"
        />
      </div>
    </>
  );
}
