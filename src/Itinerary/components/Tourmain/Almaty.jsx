import Left from "../Left/LeftAlmaty.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut={41699}
          standard_current={34699}
          deluxe_cut={45699}
          super_deluxe_cut={49699}
          deluxe_current={38699}
          super_deluxe_current={43699}
        />
      </div>
    </>
  );
}
