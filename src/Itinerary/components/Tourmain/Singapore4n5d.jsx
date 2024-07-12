import LeftThailand from "../Left/LeftSingapore4n5d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={51500}
          standard_current={44699}
          deluxe_cut={61500}
          super_deluxe_cut={79900}
          deluxe_current={52909}
          super_deluxe_current={64600}
        />
      </div>
    </>
  );
}
