import LeftRajasthan4n5d from "../../Left/Domestic/Rajasthan4n5d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan4n5d />
        <RightSide
          standard_cut={25300}
          standard_current={19499}

          deluxe_cut={33300}
          deluxe_current={23799}

          super_deluxe_cut={47450}
          super_deluxe_current={33899}
        />
      </div>
    </>
  );
}
