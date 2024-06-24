import Left from "../../Left/Domestic/Kasol2n3d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut="₹15,399"
          standard_current="₹10,999 per person"

          deluxe_cut="₹20,999"
          deluxe_current="₹14,999 per person"

          super_deluxe_cut="₹29,399"
          super_deluxe_current="₹20,899 per person"
        />
      </div>
    </>
  );
}
