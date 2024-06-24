import Left from "../../Left/Domestic/Shimla5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut="₹28,700"
          standard_current="₹26,700 per person"

          deluxe_cut="₹37,300"
          deluxe_current="₹34,500 per person"

          super_deluxe_cut="₹55,999"
          super_deluxe_current="₹39,999 per person"
        />
      </div>
    </>
  );
}
