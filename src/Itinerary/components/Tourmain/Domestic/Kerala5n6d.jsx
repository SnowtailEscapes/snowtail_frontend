import Left from "../../Left/Domestic/Kerala5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut={31499}
          standard_current={25499}

          deluxe_cut={36499}
          deluxe_current={29499}

          super_deluxe_cut={55999}
          super_deluxe_current={39999}
        />
      </div>
    </>
  );
}
