import LeftThailand from "../Left/LeftVietnam6n7d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹44,009"
          standard_current=" ₹37,699  per person"
          deluxe_cut="₹49,999"
          super_deluxe_cut="₹58,900"
          deluxe_current="₹42,699 per person"
          super_deluxe_current="₹50,399 per person"
        />
      </div>
    </>
  );
}
