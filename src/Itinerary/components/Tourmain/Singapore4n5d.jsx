import LeftThailand from "../Left/LeftSingapore4n5d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹51,500"
          standard_current=" ₹44,699 per person"
          deluxe_cut="₹61,500"
          super_deluxe_cut="₹79,900"
          deluxe_current="₹52,909 per person"
          super_deluxe_current="₹64,600 per person"
        />
      </div>
    </>
  );
}
