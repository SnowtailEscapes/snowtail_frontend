import Left from "../../Left/Domestic/Ladakh5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut="₹42,000"
          standard_current="₹29,999 per person"

          deluxe_cut="₹50,300"
          deluxe_current="₹35,899 per person"

          super_deluxe_cut="₹65,500"
          super_deluxe_current="₹46,799 per person"
        />
      </div>
    </>
  );
}
