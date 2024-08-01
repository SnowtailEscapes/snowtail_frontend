
import LeftThailand from "../Left/LeftThailand8n9d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={69099}
          standard_current={59099}
          deluxe_cut={73899}
          super_deluxe_cut={81899}
          deluxe_current={63899}
          super_deluxe_current={71899}
        />
      </div>
    </>
  );
}
