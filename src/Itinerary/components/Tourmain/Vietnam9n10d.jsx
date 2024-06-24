import LeftThailand from "../Left/LeftVietnam9n10d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut="₹103,966"
          standard_current="₹89,699  per person"
          deluxe_cut="₹135,899"
          super_deluxe_cut="₹155,899"
          deluxe_current="₹99,900 per person"
          super_deluxe_current="₹119,500 per person"
        />
      </div>
    </>
  );
}
