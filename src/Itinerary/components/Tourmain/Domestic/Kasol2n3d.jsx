import Left from "../../Left/Domestic/Kasol2n3d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut={15399}
          standard_current={10999}

          deluxe_cut={20999}
          deluxe_current={14999}

          super_deluxe_cut={29399}
          super_deluxe_current={20899}
        />
      </div>
    </>
  );
}
