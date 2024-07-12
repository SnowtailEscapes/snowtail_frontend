import LeftThailand from "../Left/LeftFrance_Italy.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={99999}
          standard_current={85699}
          deluxe_cut={135500}
          super_deluxe_cut={198500}
          deluxe_current={99999}
          super_deluxe_current={149500}
        />
      </div>
    </>
  );
}
