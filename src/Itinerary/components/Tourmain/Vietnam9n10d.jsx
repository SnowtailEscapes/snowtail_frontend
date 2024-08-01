import LeftThailand from "../Left/LeftVietnam9n10d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={103966}
          standard_current={89699}
          deluxe_cut={135899}
          super_deluxe_cut={155899}
          deluxe_current={99900}
          super_deluxe_current={119500}
        />
      </div>
    </>
  );
}
