import LeftRajasthan5n6d from "../../Left/Domestic/Rajasthan5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan5n6d />
        <RightSide
          standard_cut="₹36,300"
          standard_current="₹25,899 per person"

          deluxe_cut="₹42,600"
          deluxe_current="₹30,999 per person"

          super_deluxe_cut="₹54,600"
          super_deluxe_current="₹38,999 per person"
        />
      </div>
    </>
  );
}
