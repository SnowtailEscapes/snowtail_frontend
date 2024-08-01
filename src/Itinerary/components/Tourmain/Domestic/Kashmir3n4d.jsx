import Left from "../../Left/Domestic/Kashmir3n4d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";



export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut={25900}
          standard_current={18499}

          deluxe_cut={36000}
          deluxe_current={25699}

          super_deluxe_cut={56000}
          super_deluxe_current={39999}
        />
      </div>
    </>
  );
}
