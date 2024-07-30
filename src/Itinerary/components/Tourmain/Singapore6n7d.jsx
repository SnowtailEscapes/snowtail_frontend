import LeftThailand from "../Left/LeftSingapore6n7d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={68500}
          standard_current={59699}
          deluxe_cut={80599}
          super_deluxe_cut={111500}
          deluxe_current={69999}
          super_deluxe_current={88300}
        />
      </div>
    </>
  );
}
