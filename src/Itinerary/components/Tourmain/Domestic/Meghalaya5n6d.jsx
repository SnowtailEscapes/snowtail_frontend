import Left from "../../Left/Domestic/Meghalaya5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut={45999}
          standard_current={32799}

          deluxe_cut={54399}
          deluxe_current={38999}

          super_deluxe_cut={65799}
          super_deluxe_current={46999}
        />
      </div>
    </>
  );
}
