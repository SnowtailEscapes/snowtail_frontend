import LeftThailand from "../Left/LeftBali5n6d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹41,699"
          standard_current=" ₹34,699  per person"
          deluxe_cut="₹45,699"
          super_deluxe_cut="₹49,699"
          deluxe_current="₹38,699 per person"
          super_deluxe_current="₹43,699 per person"
        />
      </div>
    </>
  );
}
