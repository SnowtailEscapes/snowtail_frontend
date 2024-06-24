import LeftRajasthan4n5d from "../../Left/Domestic/Rajasthan4n5d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan4n5d />
        <RightSide
          standard_cut="₹25,300"
          standard_current="19,499 per person"

          deluxe_cut="₹33,300"
          deluxe_current="₹23,799 per person"

          super_deluxe_cut="₹47,450"
          super_deluxe_current="₹33,899 per person"
        />
      </div>
    </>
  );
}
