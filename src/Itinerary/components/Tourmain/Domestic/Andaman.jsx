import Left from "../../Left/Domestic/Andaman.jsx"
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut={44799}
          standard_current={31988}

          deluxe_cut={54499}
          deluxe_current={38899}

          super_deluxe_cut={72999}          
          super_deluxe_current={51999}
        />
      </div>
    </>
  );
}
