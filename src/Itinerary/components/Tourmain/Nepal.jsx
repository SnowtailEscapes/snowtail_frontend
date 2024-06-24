import LeftThailand from "../Left/LeftNepal.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹39,500"
          standard_current=" ₹33,999 per person"
          deluxe_cut="₹49,500"
          super_deluxe_cut="₹69,300"
          deluxe_current="₹40,999 per person"
          super_deluxe_current="₹52,500 per person"
        />
      </div>
    </>
  );
}
