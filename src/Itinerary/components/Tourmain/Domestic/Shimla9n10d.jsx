import Left from "../../Left/Domestic/Shimla9n10d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut="₹64,399"
          standard_current="₹45,999 per person"

          deluxe_cut="₹83,999"
           deluxe_current="₹58,999 per person"

          super_deluxe_cut="₹111,999"
          super_deluxe_current="₹78,999 per person"
        />
      </div>
    </>
  );
}
