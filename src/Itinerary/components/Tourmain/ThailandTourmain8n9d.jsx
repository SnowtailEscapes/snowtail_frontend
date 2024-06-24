
import LeftThailand from "../Left/LeftThailand8n9d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹69,099"
          standard_current=" ₹59,099 per person"
          deluxe_cut="₹73,899"
          super_deluxe_cut="₹ 81,899"
          deluxe_current="₹63,899 per person"
          super_deluxe_current="₹71,899 per person"
        />
      </div>
    </>
  );
}
