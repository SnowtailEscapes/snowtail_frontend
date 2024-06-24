import LeftRajasthan4n5d from "../../Left/Domestic/Gujarat3n4d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan4n5d />
        <RightSide
          standard_cut="₹23,199"
          standard_current="₹16,499 per person"

          deluxe_cut="₹28,000"
          deluxe_current="₹19,999 per person"

          super_deluxe_cut="₹40,200"          
          super_deluxe_current="₹28,699 per person"
        />
      </div>
    </>
  );
}
