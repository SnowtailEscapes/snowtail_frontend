import LeftThailand from "../Left/LeftSingapore_Malaysia.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹63,900"
          standard_current=" ₹56,699 per person"
          deluxe_cut="₹76,500"
          super_deluxe_cut="₹89,800"
          deluxe_current="₹64,599 per person"
          super_deluxe_current="₹78,900 per person"
        />
      </div>
    </>
  );
}
