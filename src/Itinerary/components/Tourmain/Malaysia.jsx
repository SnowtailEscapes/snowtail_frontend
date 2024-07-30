import LeftThailand from "../Left/LeftMalaysia.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={39500}
          standard_current={33999}
          deluxe_cut={49500}
          super_deluxe_cut={69300}
          deluxe_current={40999}
          super_deluxe_current={52500}
        />
      </div>
    </>
  );
}
