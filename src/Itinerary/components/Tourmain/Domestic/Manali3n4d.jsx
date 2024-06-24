import Left from "../../Left/Domestic/Manali3n4d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut="₹22,399"
          standard_current="₹15,999 per person"

          deluxe_cut="₹28,699"
           deluxe_current="₹20,399 per person"

          super_deluxe_cut="₹41,999"
          super_deluxe_current="₹29,999 per person"
        />
      </div>
    </>
  );
}
