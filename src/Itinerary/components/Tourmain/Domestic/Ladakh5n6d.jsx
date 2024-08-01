import Left from "../../Left/Domestic/Ladakh5n6d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left />
        <RightSide
          standard_cut={42000}
          standard_current={29999}

          deluxe_cut={50300}
          deluxe_current={35899}

          super_deluxe_cut={65500}
          super_deluxe_current={46799}
        />
      </div>
    </>
  );
}
