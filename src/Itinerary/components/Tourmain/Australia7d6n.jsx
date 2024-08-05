import Left from "../Left/LeftAustralia7d6n.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut={124572}
          standard_current={88980}
          deluxe_cut={149772}
          super_deluxe_cut={205506}
          deluxe_current={106980}
          super_deluxe_current={146790}
        />
      </div>
    </>
  );
}
