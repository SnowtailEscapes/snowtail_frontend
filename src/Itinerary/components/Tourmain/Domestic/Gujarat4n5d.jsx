import LeftRajasthan4n5d from "../../Left/Domestic/Gujarat4n5d.jsx"
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";


export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan4n5d />
        <RightSide
          standard_cut={29400}
          standard_current={20999}

          deluxe_cut={35000}
          deluxe_current={24999}

           super_deluxe_cut={45000}
          super_deluxe_current={31999}
        />
      </div>
    </>
  );
}
