import Left from "../../Left/Domestic/Kashmir3n4d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";



export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut="₹25,900"
          standard_current="18,499 per person"

          deluxe_cut="₹36,000"
          deluxe_current="₹25,699 per person"

          super_deluxe_cut="₹56,000"
          super_deluxe_current="₹39,999 per person"
        />
      </div>
    </>
  );
}
