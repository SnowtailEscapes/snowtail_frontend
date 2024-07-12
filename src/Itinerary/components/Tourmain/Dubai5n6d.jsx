import LeftDubai from "../Left/LeftDubai5n6d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftDubai />
        <RightSide
          standard_cut={69500}
          standard_current={58899}
          deluxe_cut={77500}
          super_deluxe_cut={94980}
          deluxe_current={68900}
          super_deluxe_current={79999}
        />
      </div>
    </>
  );
}
