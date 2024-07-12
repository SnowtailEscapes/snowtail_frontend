import LeftThailand from "../Left/LeftSriLanka6n7d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={44500}
          standard_current={38699}
          deluxe_cut={58700}
          super_deluxe_cut={76500}
          deluxe_current={47500}
          super_deluxe_current={59600}
        />
      </div>
    </>
  );
}
