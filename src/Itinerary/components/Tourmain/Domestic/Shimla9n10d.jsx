import Left from "../../Left/Domestic/Shimla9n10d.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut={64399}
          standard_current={45999}

          deluxe_cut={83999}
           deluxe_current={58999}

          super_deluxe_cut={111999}
          super_deluxe_current={78999}
        />
      </div>
    </>
  );
}
