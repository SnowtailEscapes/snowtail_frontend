import LeftGreece from "../Left/LeftGreece7n8d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftGreece />
        <RightSide
          standard_cut={185500}
          standard_current={139699}
          deluxe_cut={215500}
          super_deluxe_cut={295900}
          deluxe_current={169900}
          super_deluxe_current={220500}
        />
      </div>
    </>
  );
}
