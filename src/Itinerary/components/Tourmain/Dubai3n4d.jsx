import LeftDubai from "../Left/LeftDubai3n4d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftDubai />
        <RightSide
          standard_cut={32500}
          standard_current={25899}
          deluxe_cut={39500}
          super_deluxe_cut={48500}
          deluxe_current={29700}
          super_deluxe_current={38500}
        />
      </div>
    </>
  );
}
