import LeftThailand from "../Left/LeftVietnam5n4d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={44009}
          standard_current={37699}
          deluxe_cut={49999}
          super_deluxe_cut={58900}
          deluxe_current={42699}
          super_deluxe_current={50399}
        />
      </div>
    </>
  );
}
