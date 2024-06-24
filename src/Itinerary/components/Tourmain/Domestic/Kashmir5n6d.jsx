import LeftRajasthan5n6d from "../../Left/Domestic/Kashmir5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan5n6d />
        <RightSide
          standard_cut="₹28,700"
          standard_current="₹26,700 per person"

          deluxe_cut="₹37,300"
          deluxe_current="₹34,500 per person"
          
           super_deluxe_cut="₹68,600"
          super_deluxe_current="₹48,999 per person"
        />
      </div>
    </>
  );
}
