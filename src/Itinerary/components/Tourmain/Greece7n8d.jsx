import LeftGreece from "../Left/LeftGreece7n8d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftGreece />
        <RightSide
          standard_cut="₹185,500"
          standard_current=" ₹139,699 per person"
          deluxe_cut="₹215,500"
          super_deluxe_cut="₹295,900"
          deluxe_current="₹169,900 per person"
          super_deluxe_current="₹220,500 per person"
        />
      </div>
    </>
  );
}
