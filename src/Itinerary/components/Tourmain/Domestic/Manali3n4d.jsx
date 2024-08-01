import Left from "../../Left/Domestic/Manali3n4d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut={22399}
          standard_current={15999}

          deluxe_cut={28699}
           deluxe_current={20399}

          super_deluxe_cut={41999}
          super_deluxe_current={29999}
        />
      </div>
    </>
  );
}
