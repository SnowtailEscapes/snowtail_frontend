import Left from "../../Left/Domestic/Kerala5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut="₹31,499"
          standard_current="₹25,499 per person"

          deluxe_cut="₹36,499"
          deluxe_current="₹29,499 per person"

          super_deluxe_cut="₹55,999"
          super_deluxe_current="₹39,999 per person"
        />
      </div>
    </>
  );
}
