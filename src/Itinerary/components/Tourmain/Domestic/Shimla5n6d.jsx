import Left from "../../Left/Domestic/Shimla5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut={28700}
          standard_current={26700}

          deluxe_cut={37300}
          deluxe_current={34500}

          super_deluxe_cut={55999}
          super_deluxe_current={39999}
        />
      </div>
    </>
  );
}
