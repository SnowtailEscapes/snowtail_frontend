import LeftRajasthan5n6d from "../../Left/Domestic/Rajasthan5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan5n6d />
        <RightSide
          standard_cut={36300}
          standard_current={25899}

          deluxe_cut={42600}
          deluxe_current={30999}

          super_deluxe_cut={54600}
          super_deluxe_current={38999}
        />
      </div>
    </>
  );
}
