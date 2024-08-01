import LeftRajasthan5n6d from "../../Left/Domestic/Kashmir5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan5n6d />
        <RightSide
          standard_cut={28700}
          standard_current={26700}

          deluxe_cut={37300}
          deluxe_current={34500}
          
           super_deluxe_cut={68600}
          super_deluxe_current={48999}
        />
      </div>
    </>
  );
}
