import Left from "../../Left/Domestic/Sikkim5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut={50199}
          standard_current={35799}

          deluxe_cut={57999}
          deluxe_current={41299}

          super_deluxe_cut={64399}
          super_deluxe_current={45999}
        />
      </div>
    </>
  );
}
