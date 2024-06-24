import LeftThailand from "../Left/LeftSriLanka6n7d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹44,500"
          standard_current=" ₹38,699 per person"
          deluxe_cut="₹58,700"
          super_deluxe_cut="₹76,500"
          deluxe_current="₹47,500 per person"
          super_deluxe_current="₹59,600 per person"
        />
      </div>
    </>
  );
}
