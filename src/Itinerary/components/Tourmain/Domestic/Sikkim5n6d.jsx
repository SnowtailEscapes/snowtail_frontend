import Left from "../../Left/Domestic/Sikkim5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut="₹50,199"
          standard_current="₹35,799 per person"

          deluxe_cut="₹57,999"
          deluxe_current="₹41,299 per person"

          super_deluxe_cut="₹64,399"
          super_deluxe_current="₹45,999 per person"
        />
      </div>
    </>
  );
}
