import Left from "../../Left/Domestic/Meghalaya5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut="₹45,999"
          standard_current="₹32,799 per person"

          deluxe_cut="₹54,399"
          deluxe_current="₹38,999 per person"

          super_deluxe_cut="₹65,799"
          super_deluxe_current="₹46,999 per person"
        />
      </div>
    </>
  );
}
