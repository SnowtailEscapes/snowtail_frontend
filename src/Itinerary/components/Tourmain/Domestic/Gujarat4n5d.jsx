import LeftRajasthan4n5d from "../../Left/Domestic/Gujarat4n5d.jsx"
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";


export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan4n5d />
        <RightSide
          standard_cut="₹29,400"
          standard_current="₹20,999 per person"

          deluxe_cut="₹35,000"
          deluxe_current="₹24,999 per person"

           super_deluxe_cut="₹45,000"
          super_deluxe_current="₹31,999 per person"
        />
      </div>
    </>
  );
}
