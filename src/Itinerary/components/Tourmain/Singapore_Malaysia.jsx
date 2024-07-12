import LeftThailand from "../Left/LeftSingapore_Malaysia.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={63900}
          standard_current={56699}
          deluxe_cut={76500}
          super_deluxe_cut={89800}
          deluxe_current={64599}
          super_deluxe_current={78900}
        />
      </div>
    </>
  );
}
