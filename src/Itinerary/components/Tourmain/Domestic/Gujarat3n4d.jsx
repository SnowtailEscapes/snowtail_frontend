import LeftRajasthan4n5d from "../../Left/Domestic/Gujarat3n4d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan4n5d />
        <RightSide
          standard_cut={23199}
          standard_current={16499}

          deluxe_cut={28000}
          deluxe_current={19999}

          super_deluxe_cut={40200}          
          super_deluxe_current={28699}
        />
      </div>
    </>
  );
}
