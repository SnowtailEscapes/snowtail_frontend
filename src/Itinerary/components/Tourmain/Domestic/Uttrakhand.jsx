import Left from "../../Left/Domestic/Uttrakhand.jsx";
import RightSide from "../../Common/RightSide.jsx";
import a from "../../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <Left/>
        <RightSide
          standard_cut={23799}
          standard_current={16999}

          deluxe_cut={31299}
          deluxe_current={22299}

          super_deluxe_cut={48999}
          super_deluxe_current={34999}
        />
      </div>
    </>
  );
}
