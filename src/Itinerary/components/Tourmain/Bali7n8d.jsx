import LeftThailand from "../Left/LeftBali7n8d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={64699}
          standard_current={54699}
          deluxe_cut={69699}
          super_deluxe_cut={78999}
          deluxe_current={59699}
          super_deluxe_current={68999}
        />
      </div>
    </>
  );
}
