
import LeftRajasthan from "../Left/LeftRajasthan.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function RajasthanTourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan />
        <RightSide
          standard_cut="₹ 48,150"
          standard_current="₹ 34,399 /Per person"

          deluxe_cut="₹ 55,998"
          deluxe_current="₹ 39,999 /Per person"

          super_deluxe_cut="₹73,900"
          super_deluxe_current="₹ 52,799/Per person"
        />
      </div>
    </>
  );
}
